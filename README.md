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

The repository currently includes **34 verified Shards** across 5 collections:

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
| Shard | File | App ID / Engine | Default Docker Image | Description |
|---|---|---|---|---|
| **FiveM (txAdmin)** | [`fivem-txadmin.json`](games/fivem-txadmin.json) | CitizenFX | `ghcr.io/midnight-panel/games:fivem` | GTA V FiveM server with integrated txAdmin web panel |
| **Rust** | [`rust.json`](games/rust.json) | 258550 | `ghcr.io/midnight-panel/games:rust` | Rust dedicated server with SteamCMD & Oxide |
| **Counter-Strike 2** | [`cs2.json`](games/cs2.json) | 730 | `ghcr.io/midnight-panel/games:source` | Valve's CS2 dedicated server on Source 2 |
| **Palworld** | [`palworld.json`](games/palworld.json) | 2394010 | `ghcr.io/midnight-panel/games:source` | Multiplayer dedicated server on Unreal Engine 5 |
| **Valheim** | [`valheim.json`](games/valheim.json) | 896660 | `ghcr.io/midnight-panel/games:source` | Viking survival server with procedural worlds |
| **Terraria (TShock)** | [`terraria-tshock.json`](games/terraria-tshock.json) | Custom | `ghcr.io/midnight-panel/base:debian` | TShock server with plugin & permissions system |
| **Team Fortress 2** | [`tf2.json`](games/tf2.json) | 232250 | `ghcr.io/midnight-panel/games:source` | Source engine multiplayer team shooter |
| **ARK: Survival Evolved**| [`ark-se.json`](games/ark-se.json) | 376030 | `ghcr.io/midnight-panel/games:source` | ARK dedicated server with mod & map support |
| **7 Days to Die** | [`7daystodie.json`](games/7daystodie.json) | 294420 | `ghcr.io/midnight-panel/games:source` | Voxel zombie sandbox survival server |
| **Project Zomboid** | [`project-zomboid.json`](games/project-zomboid.json) | 380870 | `ghcr.io/midnight-panel/games:source` | Hardcore isometric zombie survival server |

### 🤖 Software, Tools & Bots (`software/`)
| Shard | File | Default Docker Image | Description |
|---|---|---|---|
| **Roundcube Webmail** | [`roundcube.json`](software/roundcube.json) | `ghcr.io/midnight-panel/php:8.3` | Browser-based IMAP client with rich MIME & address book |
| **Uptime Kuma** | [`uptime-kuma.json`](software/uptime-kuma.json) | `ghcr.io/midnight-panel/nodejs:20` | Fancy self-hosted monitoring and status pages |
| **Cloudflare Tunnel** | [`cloudflared.json`](software/cloudflared.json) | `ghcr.io/midnight-panel/base:debian` | Expose games/apps to web without open router ports |
| **Nginx Web Server** | [`nginx.json`](software/nginx.json) | `nginx:alpine` | Static websites, HTML5 games, custom web hosting |
| **Midnight Reverse Proxy** | [`reverse-proxy.json`](software/reverse-proxy.json) | `ghcr.io/midnight-panel/base:debian` | Caddy-based proxy with WebSockets, TLS & load balancing |
| **Mail Server (Mailpit)** | [`mail-server.json`](software/mail-server.json) | `ghcr.io/midnight-panel/base:debian` | Standalone SMTP server with Webmail UI for testing & bots |
| **Node.js** | [`nodejs.json`](software/nodejs.json) | `ghcr.io/midnight-panel/nodejs:20` | Discord.js bots, Express/Koa APIs, Next.js servers |
| **Python** | [`python.json`](software/python.json) | `ghcr.io/midnight-panel/python:3.12` | Discord.py bots, FastAPI, Flask, background scripts |
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
| **PostgreSQL** | [`postgres.json`](databases/postgres.json) | 5432 | `postgres:16-alpine` | Robust object-relational SQL database engine |
| **MongoDB** | [`mongodb.json`](databases/mongodb.json) | 27017 | `mongo:7.0` | Leading document-based NoSQL database |
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

## 🧪 Testing & Validation

To validate all Shards and update [`index.json`](index.json):

```bash
npm test
# or
node tools/validate.js
```

All Pull Requests are automatically tested with GitHub Actions.

---

## 📜 License

[MIT](LICENSE) © 2026 Midnight Panel.
