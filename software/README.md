# Software & Bots Shard Collection

General runtime environments and Discord bot Shards for **Midnight Panel**.

## Available Shards

| Runtime / Software | Default Image | Target Use Case | Status |
|---|---|---|---|
| **[Node.js](nodejs.json)** | `ghcr.io/pterodactyl/yolks:nodejs_20` | Discord.js bots, Express/Koa APIs, Next.js servers | Verified |
| **[Python](python.json)** | `ghcr.io/pterodactyl/yolks:python_3.12` | Discord.py bots, FastAPI, Flask, ML scripts | Verified |
| **[Generic Java](generic-java.json)** | `ghcr.io/pterodactyl/yolks:java_21` | Spring Boot, runnable JAR files, standalone Java services | Verified |
| **[Golang](golang.json)** | `ghcr.io/pterodactyl/yolks:go_1.23` | High-performance compiled Go microservices and daemons | Verified |

## Features
- Optional automatic Git repository cloning on server creation.
- Optional automatic dependency installation (`npm install`, `pip install -r requirements.txt`).
- Clean graceful termination via `SIGINT` / `SIGTERM`.
