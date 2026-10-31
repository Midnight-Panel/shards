# Midnight Panel Container Images (GHCR)

Official container images and runtimes for [Midnight Panel](https://github.com/Midnight-Panel/panel) and Shards, hosted on GitHub Container Registry under **`ghcr.io/midnight-panel/...`**.

All images are built with **Multi-Arch support (`linux/amd64` and `linux/arm64`)**, include a dedicated `container` user (UID 1000), and use the Midnight entrypoint script.

---

## 📦 Available Images

### ☕ Java Runtimes (`ghcr.io/midnight-panel/java`)
- `ghcr.io/midnight-panel/java:21` (Latest / Default for modern Minecraft Paper, Purpur, Velocity)
- `ghcr.io/midnight-panel/java:17` (Minecraft 1.18 - 1.20, Lavalink v4)
- `ghcr.io/midnight-panel/java:11`
- `ghcr.io/midnight-panel/java:8` (Minecraft 1.8 - 1.12 legacy)

### 🟩 Node.js Runtimes (`ghcr.io/midnight-panel/nodejs`)
- `ghcr.io/midnight-panel/nodejs:22` (Current)
- `ghcr.io/midnight-panel/nodejs:20` (LTS / Default)
- `ghcr.io/midnight-panel/nodejs:18` (Maintenance)
*Includes `pnpm`, `yarn`, `npm`, `ffmpeg`, and `python3`/`build-essential` for compiling native npm addons.*

### 🐍 Python Runtimes (`ghcr.io/midnight-panel/python`)
- `ghcr.io/midnight-panel/python:3.12` (Latest / Default)
- `ghcr.io/midnight-panel/python:3.11`
- `ghcr.io/midnight-panel/python:3.10`
*Includes `pip`, `wheel`, `setuptools`, `build-essential`, and `ffmpeg`.*

### 🐹 Golang Runtimes (`ghcr.io/midnight-panel/golang`)
- `ghcr.io/midnight-panel/golang:1.23` (Latest / Default)
- `ghcr.io/midnight-panel/golang:1.22`

### 🎮 Game Server Runtimes (`ghcr.io/midnight-panel/games`)
- `ghcr.io/midnight-panel/games:source` (Source 1 & 2 engines, CS2, TF2, Valheim, Palworld, 32-bit & 64-bit SteamCMD compatibility)
- `ghcr.io/midnight-panel/games:rust` (Rust dedicated server runtime)
- `ghcr.io/midnight-panel/games:bedrock` (Minecraft Bedrock dedicated server runtime)

### ⚙️ Installers (`ghcr.io/midnight-panel/installers`)
- `ghcr.io/midnight-panel/installers:alpine` (Fast lightweight installer with `curl`, `jq`, `git`, `tar`, `unzip`, `openjdk21`)
- `ghcr.io/midnight-panel/installers:debian` (SteamCMD, multiarch 32-bit installer)

### 🐧 Base Runtimes (`ghcr.io/midnight-panel/base`)
- `ghcr.io/midnight-panel/base:debian`
- `ghcr.io/midnight-panel/base:alpine`

---

## 🚀 Building & Publishing

Images are automatically built and published to GHCR via GitHub Actions on every push to the `main` branch:

Workflow: [`.github/workflows/build-containers.yml`](../.github/workflows/build-containers.yml)

To trigger manually:
Go to GitHub ➔ **Actions** ➔ **Build and Publish Containers** ➔ **Run workflow**.
