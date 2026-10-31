# Software & Bots Shard Collection

General runtime environments, Discord bot hosts, web servers, proxies, webmail, and monitoring tools for **Midnight Panel**.

## Available Shards

| Runtime / Tool | Default Image | Target Use Case | Status |
|---|---|---|---|
| **[Roundcube Webmail](roundcube.json)** | `ghcr.io/midnight-panel/php:8.3` | Modern browser-based IMAP webmail client with desktop-like UI | Verified |
| **[Mail Server (Mailpit)](mail-server.json)** | `ghcr.io/midnight-panel/base:debian` | Standalone SMTP server with Webmail UI for testing & bots | Verified |
| **[Uptime Kuma](uptime-kuma.json)** | `ghcr.io/midnight-panel/nodejs:20` | Fancy self-hosted monitoring and public status pages | Verified |
| **[Cloudflare Tunnel](cloudflared.json)** | `ghcr.io/midnight-panel/base:debian` | Expose games/apps to web without open router ports | Verified |
| **[Nginx Web Server](nginx.json)** | `nginx:alpine` | Static websites, HTML5 games, custom web hosting | Verified |
| **[Midnight Reverse Proxy](reverse-proxy.json)** | `ghcr.io/midnight-panel/base:debian` | High-performance Caddy-based proxy with WebSockets and TLS | Verified |
| **[Node.js](nodejs.json)** | `ghcr.io/midnight-panel/nodejs:20` | Discord.js bots, Express/Koa APIs, Next.js servers | Verified |
| **[Python](python.json)** | `ghcr.io/midnight-panel/python:3.12` | Discord.py bots, FastAPI, Flask, ML scripts | Verified |
| **[Generic Java](generic-java.json)** | `ghcr.io/midnight-panel/java:21` | Spring Boot, runnable JAR files, standalone Java services | Verified |
| **[Golang](golang.json)** | `ghcr.io/midnight-panel/golang:1.23` | High-performance compiled Go microservices and daemons | Verified |

## Features
- Optional automatic Git repository cloning on server creation.
- Optional automatic dependency installation (`npm install`, `pip install -r requirements.txt`).
- Clean graceful termination via `SIGINT` / `SIGTERM`.
