import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const SYSTEM_VARIABLES = new Set(['SERVER_MEMORY', 'SERVER_PORT', 'SERVER_IP', 'STARTUP']);
const VALID_PARSERS = new Set(['properties', 'yaml', 'json', 'ini', 'xml', 'toml']);

function getJsonFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['.git', 'node_modules', 'tools'].includes(entry.name)) continue;
      results = results.concat(getJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      if (['index.json', 'package.json', 'package-lock.json'].includes(entry.name)) continue;
      results.push(fullPath);
    }
  }

  return results;
}

function validateShard(filePath) {
  const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  const errors = [];
  const warnings = [];

  let content;
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    return { relPath, errors: [`Failed to read file: ${err.message}`], warnings };
  }

  let pkg;
  try {
    pkg = JSON.parse(content);
  } catch (err) {
    return { relPath, errors: [`Invalid JSON: ${err.message}`], warnings };
  }

  if (pkg.formatVersion !== 'midnight_shard_v1') {
    errors.push(`Missing or invalid formatVersion. Expected 'midnight_shard_v1', got '${pkg.formatVersion}'`);
  }

  if (!pkg.collection || typeof pkg.collection !== 'object') {
    errors.push(`Missing 'collection' section`);
  } else {
    if (!pkg.collection.name || typeof pkg.collection.name !== 'string') {
      errors.push(`Missing collection.name`);
    } else if (pkg.collection.name.length > 64) {
      errors.push(`collection.name exceeds 64 characters`);
    }
    if (!pkg.collection.author || typeof pkg.collection.author !== 'string') {
      errors.push(`Missing collection.author`);
    }
  }

  if (!pkg.shard || typeof pkg.shard !== 'object') {
    errors.push(`Missing 'shard' section`);
    return { relPath, errors, warnings };
  }

  const shard = pkg.shard;

  if (!shard.name || typeof shard.name !== 'string') {
    errors.push(`Missing shard.name`);
  } else if (shard.name.length > 64) {
    errors.push(`shard.name exceeds 64 characters`);
  }

  if (!shard.author) errors.push(`Missing shard.author`);
  if (!shard.version) errors.push(`Missing shard.version`);

  if (!shard.defaultDockerImage) {
    errors.push(`Missing shard.defaultDockerImage`);
  }

  if (!shard.dockerImages || typeof shard.dockerImages !== 'object' || Object.keys(shard.dockerImages).length === 0) {
    errors.push(`shard.dockerImages must be an object with at least one image mapping`);
  }

  if (!shard.startupCommand || typeof shard.startupCommand !== 'string') {
    errors.push(`Missing shard.startupCommand`);
  }

  // Validate placeholders in startupCommand
  const definedVars = new Set();
  if (Array.isArray(shard.variables)) {
    for (const v of shard.variables) {
      if (!v.name) errors.push(`A variable is missing 'name'`);
      if (!v.envVariable) {
        errors.push(`A variable is missing 'envVariable'`);
      } else {
        definedVars.add(v.envVariable.toUpperCase());
      }
    }
  } else {
    errors.push(`shard.variables must be an array`);
  }

  if (shard.startupCommand) {
    const placeholderRegex = /\{\{([a-zA-Z0-9_-]+)\}\}/g;
    let match;
    while ((match = placeholderRegex.exec(shard.startupCommand)) !== null) {
      const varName = match[1].toUpperCase();
      if (!SYSTEM_VARIABLES.has(varName) && !definedVars.has(varName)) {
        errors.push(`Undefined placeholder '{{${match[1]}}}' in startupCommand. Must be in variables or system variables`);
      }
    }
  }

  if (Array.isArray(shard.configFiles)) {
    for (const cf of shard.configFiles) {
      if (!cf.path) errors.push(`Config file entry missing 'path'`);
      if (!cf.parser || !VALID_PARSERS.has(cf.parser.toLowerCase())) {
        errors.push(`Config file '${cf.path}' has unsupported parser '${cf.parser}'`);
      }
    }
  }

  return { relPath, pkg, errors, warnings };
}

function run() {
  console.log('🔍 Scanning for Midnight Shards in repository...');
  const files = getJsonFiles(rootDir);
  console.log(`Found ${files.length} shard files.`);

  let totalErrors = 0;
  let totalWarnings = 0;
  const manifest = [];

  for (const file of files) {
    const res = validateShard(file);
    if (res.errors.length > 0) {
      console.error(`\n❌ [FAIL] ${res.relPath}:`);
      for (const err of res.errors) console.error(`   - ${err}`);
      totalErrors += res.errors.length;
    } else {
      console.log(`✅ [PASS] ${res.relPath} (${res.pkg.collection.name} / ${res.pkg.shard.name})`);
      manifest.push({
        id: path.basename(file, '.json'),
        collection: res.pkg.collection.name,
        name: res.pkg.shard.name,
        description: res.pkg.shard.description || '',
        author: res.pkg.shard.author,
        version: res.pkg.shard.version,
        defaultImage: res.pkg.shard.defaultDockerImage,
        file: res.relPath,
        rawUrl: `https://raw.githubusercontent.com/Midnight-Panel/shards/main/${res.relPath}`
      });
    }

    if (res.warnings.length > 0) {
      for (const warn of res.warnings) console.warn(`   ⚠️  ${warn}`);
      totalWarnings += res.warnings.length;
    }
  }

  // Generate index.json
  const indexPath = path.join(rootDir, 'index.json');
  manifest.sort((a, b) => a.collection.localeCompare(b.collection) || a.name.localeCompare(b.name));
  const indexData = {
    schemaVersion: 'midnight_shard_catalog_v1',
    generatedAt: new Date().toISOString(),
    totalShards: manifest.length,
    shards: manifest
  };
  fs.writeFileSync(indexPath, JSON.stringify(indexData, null, 2) + '\n', 'utf8');
  console.log(`\n📦 Successfully generated catalog index: ${path.relative(rootDir, indexPath)} (${manifest.length} shards)`);

  if (totalErrors > 0) {
    console.error(`\n💥 Validation completed with ${totalErrors} error(s) and ${totalWarnings} warning(s).`);
    process.exit(1);
  } else {
    console.log(`\n🎉 All ${files.length} shard(s) validated successfully!`);
  }
}

run();
