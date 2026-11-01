import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const updates = {
  // Minecraft
  'minecraft/paper.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/java:21',
    dockerImages: {
      'Midnight Java 21 (Recommended)': 'ghcr.io/midnight-panel/java:21',
      'Midnight Java 17': 'ghcr.io/midnight-panel/java:17',
      'Midnight Java 11': 'ghcr.io/midnight-panel/java:11',
      'Midnight Java 8': 'ghcr.io/midnight-panel/java:8'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'minecraft/purpur.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/java:21',
    dockerImages: {
      'Midnight Java 21 (Recommended)': 'ghcr.io/midnight-panel/java:21',
      'Midnight Java 17': 'ghcr.io/midnight-panel/java:17',
      'Midnight Java 11': 'ghcr.io/midnight-panel/java:11',
      'Midnight Java 8': 'ghcr.io/midnight-panel/java:8'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'minecraft/vanilla.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/java:21',
    dockerImages: {
      'Midnight Java 21 (Recommended)': 'ghcr.io/midnight-panel/java:21',
      'Midnight Java 17': 'ghcr.io/midnight-panel/java:17',
      'Midnight Java 11': 'ghcr.io/midnight-panel/java:11',
      'Midnight Java 8': 'ghcr.io/midnight-panel/java:8'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'minecraft/fabric.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/java:21',
    dockerImages: {
      'Midnight Java 21 (Recommended)': 'ghcr.io/midnight-panel/java:21',
      'Midnight Java 17': 'ghcr.io/midnight-panel/java:17',
      'Midnight Java 8': 'ghcr.io/midnight-panel/java:8'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'minecraft/neoforge.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/java:21',
    dockerImages: {
      'Midnight Java 21 (Recommended)': 'ghcr.io/midnight-panel/java:21',
      'Midnight Java 17': 'ghcr.io/midnight-panel/java:17'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'minecraft/velocity.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/java:21',
    dockerImages: {
      'Midnight Java 21 (Recommended)': 'ghcr.io/midnight-panel/java:21',
      'Midnight Java 17': 'ghcr.io/midnight-panel/java:17'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'minecraft/bungeecord.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/java:21',
    dockerImages: {
      'Midnight Java 21 (Recommended)': 'ghcr.io/midnight-panel/java:21',
      'Midnight Java 17': 'ghcr.io/midnight-panel/java:17',
      'Midnight Java 8': 'ghcr.io/midnight-panel/java:8'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'minecraft/bedrock.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/games:bedrock',
    dockerImages: {
      'Midnight Bedrock Dedicated': 'ghcr.io/midnight-panel/games:bedrock',
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:debian'
  },

  // Game Servers
  'games/rust.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/games:rust',
    dockerImages: {
      'Midnight Rust Dedicated': 'ghcr.io/midnight-panel/games:rust',
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:debian'
  },
  'games/cs2.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/games:source',
    dockerImages: {
      'Midnight Source 2 Dedicated': 'ghcr.io/midnight-panel/games:source',
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:debian'
  },
  'games/palworld.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/games:source',
    dockerImages: {
      'Midnight Palworld Dedicated': 'ghcr.io/midnight-panel/games:source',
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:debian'
  },
  'games/valheim.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/games:source',
    dockerImages: {
      'Midnight Valheim Dedicated': 'ghcr.io/midnight-panel/games:source',
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:debian'
  },
  'games/terraria-tshock.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/dotnet:8',
    dockerImages: {
      'Midnight .NET 8 (Recommended)': 'ghcr.io/midnight-panel/dotnet:8',
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'games/tf2.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/games:source',
    dockerImages: {
      'Midnight Source Dedicated': 'ghcr.io/midnight-panel/games:source',
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:debian'
  },
  'games/ark-se.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/games:source',
    dockerImages: {
      'Midnight ARK Dedicated': 'ghcr.io/midnight-panel/games:source',
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:debian'
  },
  'games/7daystodie.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/games:source',
    dockerImages: {
      'Midnight 7D2D Dedicated': 'ghcr.io/midnight-panel/games:source',
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:debian'
  },
  'games/project-zomboid.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/games:source',
    dockerImages: {
      'Midnight Zomboid Dedicated': 'ghcr.io/midnight-panel/games:source',
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:debian'
  },

  // Software & Bots
  'software/nodejs.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/nodejs:20',
    dockerImages: {
      'Midnight Node.js 22': 'ghcr.io/midnight-panel/nodejs:22',
      'Midnight Node.js 20 (LTS)': 'ghcr.io/midnight-panel/nodejs:20',
      'Midnight Node.js 18': 'ghcr.io/midnight-panel/nodejs:18'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'software/python.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/python:3.12',
    dockerImages: {
      'Midnight Python 3.12 (Latest)': 'ghcr.io/midnight-panel/python:3.12',
      'Midnight Python 3.11': 'ghcr.io/midnight-panel/python:3.11',
      'Midnight Python 3.10': 'ghcr.io/midnight-panel/python:3.10'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'software/generic-java.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/java:21',
    dockerImages: {
      'Midnight Java 21 (Recommended)': 'ghcr.io/midnight-panel/java:21',
      'Midnight Java 17': 'ghcr.io/midnight-panel/java:17',
      'Midnight Java 11': 'ghcr.io/midnight-panel/java:11',
      'Midnight Java 8': 'ghcr.io/midnight-panel/java:8'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'software/golang.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/golang:1.23',
    dockerImages: {
      'Midnight Go 1.23 (Latest)': 'ghcr.io/midnight-panel/golang:1.23',
      'Midnight Go 1.22': 'ghcr.io/midnight-panel/golang:1.22'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },

  // Voice & Media
  'voice-media/teamspeak3.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/base:debian',
    dockerImages: {
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:debian'
  },
  'voice-media/lavalink.json': {
    defaultDockerImage: 'ghcr.io/midnight-panel/java:21',
    dockerImages: {
      'Midnight Java 21 (Recommended)': 'ghcr.io/midnight-panel/java:21',
      'Midnight Java 17': 'ghcr.io/midnight-panel/java:17'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },

  // Databases
  'databases/redis.json': {
    defaultDockerImage: 'redis:7-alpine',
    dockerImages: {
      'Redis 7 (Official Alpine)': 'redis:7-alpine',
      'Midnight Alpine Base': 'ghcr.io/midnight-panel/base:alpine'
    },
    installImage: 'ghcr.io/midnight-panel/installers:alpine'
  },
  'databases/mariadb.json': {
    defaultDockerImage: 'mariadb:11.4',
    dockerImages: {
      'MariaDB 11.4 (Official LTS)': 'mariadb:11.4',
      'Midnight Debian Base': 'ghcr.io/midnight-panel/base:debian'
    },
    installImage: 'ghcr.io/midnight-panel/installers:debian'
  }
};

for (const [relPath, upd] of Object.entries(updates)) {
  const filePath = path.join(rootDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${relPath}`);
    continue;
  }

  const pkg = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  pkg.shard.defaultDockerImage = upd.defaultDockerImage;
  pkg.shard.dockerImages = upd.dockerImages;
  if (upd.installImage) {
    pkg.shard.installImage = upd.installImage;
  }

  fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  console.log(`Updated ${relPath} -> ${upd.defaultDockerImage}`);
}

console.log('Finished updating all shards with ghcr.io/midnight-panel images!');
