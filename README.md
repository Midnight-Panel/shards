# Midnight Panel Shards

[![Validate Shards](https://github.com/Midnight-Panel/shards/actions/workflows/validate.yml/badge.svg)](https://github.com/Midnight-Panel/shards/actions/workflows/validate.yml)
[![Build Containers](https://github.com/Midnight-Panel/shards/actions/workflows/build-containers.yml/badge.svg)](https://github.com/Midnight-Panel/shards/actions/workflows/build-containers.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Format: midnight_shard_v1](https://img.shields.io/badge/format-midnight__shard__v1-purple.svg)](https://github.com/Midnight-Panel/panel)
[![Registry: GHCR](https://img.shields.io/badge/registry-ghcr.io%2Fmidnight--panel-blue.svg)](containers/)

Official curated repository of **Shards** and official **Docker Container Images** for [Midnight Panel](https://github.com/Midnight-Panel/panel).

In Midnight Panel, **Shards** (the modern equivalent to "eggs" in legacy panels) are server blueprints and runtime templates that define how a specific game server, proxy, voice application, or software bot is installed, configured, started, and managed on Docker. A bundle of related Shards is organized into a **Shard Collection**.

---

## 🐳 Official Container Images (`ghcr.io/midnight-panel/...`)

All Shards use official, hardened, Multi-Arch (`linux/amd64` and `linux/arm64`) container images hosted on GitHub Container Registry under **`ghcr.io/midnight-panel/...`**.

See the full [Containers Specification and Guide](containers/README.md) for Dockerfiles and build scripts.

---

## 📦 Shard Collections & Catalog

The repository currently includes **25 verified Shards** across 5 collections:

### 🎮 Minecraft (`minecraft/`)
| Shard | File | Version | Default Docker Image | Description |
|---|---|---|---|---|
| **Paper** | [`paper.json`](minecraft/paper.json) | 1.21.4 | `ghcr.io/midnight-panel/java:21` | High-performance Spigot fork for fast gameplay |
| **Purpur** | [`purpur.json`](minecraft/purpur.json) | 1.21.4 | `ghcr.io/midnight-panel/java:21` | Feature-rich drop-in Paper replacement |
| **Vanilla** | [`vanilla.json`](minecraft/vanilla.json) | 1.21.4 | `ghcr.io/midnight-panel/java:21` | Official Mojang Vanilla Minecraft server |
| **Fabric** | [`fabric.json`](minecraft/fabric.json) | 1.21.4 | `ghcr.io/midnight-panel/java:21` | Lightweight, modular modding toolchain |
| **NeoForge** | [`neoforge.json`](minecraft/neoforge.json) | 1.21.1 | `ghcr.io/midnight-panel/java:21` | Next-gen community modding platform |
| **Velocity** | [`velocity.json`](minecraft/velocity.json) | 3.3.0 | `ghcr.io/midnight-panel/java:21` | Next-gen high throughput proxy by PaperMC |
| **BungeeCord** | [`bungeecord.json`](minecraft/bungeecord.json) | 1.21 | `ghcr.io/midnight-panel/java:21` | Classic proxy network router |
| **Bedrock BDS** | [`bedrock.json`](minecraft/bedrock.json) | 1.21.50 | `ghcr.io/midnight-panel/games:bedrock` | Official Minecraft Bedrock dedicated server |

### 🎯 Game Servers (`games/`)
| Shard | File | App ID | Default Docker Image | Description |
|---|---|---|---|---|
| **Rust** | [`rust.json`](games/rust.json) | 258550 | `ghcr.io/midnight-panel/games:rust` | Rust dedicated server with SteamCMD & Oxide |
| **Counter-Strike 2** | [`cs2.json`](games/cs2.json) | 730 | `ghcr.io/midnight-panel/games:source` | Valve's CS2 dedicated server on Source 2 |
| **Palworld** | [`palworld.json`](games/palworld.json) | 2394010 | `ghcr.io/midnight-panel/games:source` | Multiplayer dedicated server on Unreal Engine 5 |
| **Valheim** | [`valheim.json`](games/valheim.json) | 896660 | `ghcr.io/midnight-panel/games:source` | Viking survival server with procedural worlds |
| **Terraria (TShock)** | [`terraria-tshock.json`](games/terraria-tshock.json) | Custom | `ghcr.io/midnight-panel/base:debian` | TShock server with plugin & permissions system |
| **Team Fortress 2** | [`tf2.json`](games/tf2.json) | 232250 | `ghcr.io/midnight-panel/games:source` | Source engine multiplayer team shooter |
| **ARK: Survival Evolved**| [`ark-se.json`](games/ark-se.json) | 376030 | `ghcr.io/midnight-panel/games:source` | ARK dedicated server with mod & map support |
| **7 Days to Die** | [`7daystodie.json`](games/7daystodie.json) | 294420 | `ghcr.io/midnight-panel/games:source` | Voxel zombie sandbox survival server |
| **Project Zomboid** | [`project-zomboid.json`](games/project-zomboid.json) | 380870 | `ghcr.io/midnight-panel/games:source` | Hardcore isometric zombie survival server |

### 🤖 Software & Bots (`software/`)
| Shard | File | Default Docker Image | Description |
|---|---|---|---|
| **Node.js** | [`nodejs.json`](software/nodejs.json) | `ghcr.io/midnight-panel/nodejs:20` | Discord.js, Express, Fastify, APIs & microservices |
| **Python** | [`python.json`](software/python.json) | `ghcr.io/midnight-panel/python:3.12` | Discord.py, FastAPI, Flask, background scripts |
| **Generic Java** | [`generic-java.json`](software/generic-java.json) | `ghcr.io/midnight-panel/java:21` | Spring Boot, runnable JAR files, standalone Java apps |
| **Golang** | [`golang.json`](software/golang.json) | `ghcr.io/midnight-panel/golang:1.23` | Compiled Go binaries & Git build pipeline |

### 🎙️ Voice & Media (`voice-media/`)
| Shard | File | Default Port | Default Docker Image | Description |
|---|---|---|---|---|
| **TeamSpeak 3** | [`teamspeak3.json`](voice-media/teamspeak3.json) | 9987 (UDP) | `ghcr.io/midnight-panel/base:debian` | Low-latency voice communication server |
| **Lavalink** | [`lavalink.json`](voice-media/lavalink.json) | 2333 (HTTP/WS) | `ghcr.io/midnight-panel/java:21` | High-throughput audio sending node for Discord bots |

### 🗄️ Databases (`databases/`)
| Shard | File | Default Port | Default Docker Image | Description |
|---|---|---|---|---|
| **Redis** | [`redis.json`](databases/redis.json) | 6379 | `redis:7-alpine` | In-memory key-value cache and message broker |
| **MariaDB** | [`mariadb.json`](databases/mariadb.json) | 3306 | `mariadb:11.4` | High performance relational SQL database |

---

## 🚀 How to Import a Shard into Midnight Panel

### Via Web Interface
1. Open your Midnight Panel dashboard (`/admin/shards`).
2. Click **Import Shard** in the top navigation.
3. Choose the `.json` file from this repository (or copy & paste its raw JSON content).
4. If the target **Shard Collection** does not exist yet, Midnight Panel automatically creates it for you.
5. Review the imported variables, startup command, and container images, then save.

### Via REST API
```bash
curl -X POST https://your-midnight-panel.com/api/admin/shards/import \
  -H "Authorization: Bearer <ADMIN_JWT_OR_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "targetCollectionId": null,
    "content": "<RAW_JSON_STRING_OF_SHARD>"
  }'
```

---

## 🛠️ Shard Format Specification (`midnight_shard_v1`)

Midnight Shards use a modern, strictly typed JSON format:

```json
{
  "formatVersion": "midnight_shard_v1",
  "exportedAt": "2026-10-31T12:00:00Z",
  "collection": {
    "name": "Minecraft",
    "description": "Minecraft game servers and proxies",
    "author": "Midnight Team"
  },
  "shard": {
    "name": "Paper",
    "description": "High performance Minecraft server software.",
    "author": "PaperMC & Midnight Team",
    "version": "1.21.4",
    "dockerImages": {
      "Midnight Java 21 (Recommended)": "ghcr.io/midnight-panel/java:21",
      "Midnight Java 17": "ghcr.io/midnight-panel/java:17",
      "Yolks Java 21 (Fallback)": "ghcr.io/pterodactyl/yolks:java_21"
    },
    "defaultDockerImage": "ghcr.io/midnight-panel/java:21",
    "startupCommand": "java -Xms128M -XX:MaxRAMPercentage=95.0 -jar {{SERVER_JARFILE}}",
    "stopCommand": "stop",
    "stopSignal": "SIGTERM",
    "configFiles": [
      {
        "path": "server.properties",
        "parser": "properties",
        "mappings": {
          "server-port": "{{SERVER_PORT}}",
          "server-ip": "{{SERVER_IP}}"
        }
      }
    ],
    "startupDone": ") Done (",
    "installScript": "#!/bin/bash\n...",
    "installImage": "ghcr.io/midnight-panel/installers:alpine",
    "installInterpreter": "/bin/bash",
    "features": {
      "eula": true,
      "pidLimit": null,
      "fileDenylist": []
    },
    "variables": [
      {
        "name": "Server Jar File",
        "description": "Executable jar file to run the server.",
        "envVariable": "SERVER_JARFILE",
        "defaultValue": "server.jar",
        "userViewable": true,
        "userEditable": true,
        "rules": "required|string|max:40",
        "sortOrder": 1
      }
    ]
  }
}
```

---

## 🧪 Testing & Validation

To validate all Shards and update [`index.json`](index.json):

```bash
npm test
# or
node tools/validate.js
```

All Pull Requests are automatically tested with GitHub Actions.

---

## 🤝 Contributing

1. Fork this repository.
2. Create a new shard in the appropriate category folder (e.g. `games/mygame.json`).
3. Follow the `midnight_shard_v1` specification.
4. Run `npm test` to validate syntax and placeholders and update `index.json`.
5. Submit a Pull Request.

---

## 📜 License

[MIT](LICENSE) © 2026 Midnight Panel.
