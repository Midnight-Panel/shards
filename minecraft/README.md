# Minecraft Shard Collection

This collection contains verified, high-performance Shards for Minecraft servers, modded runtimes, and network proxies for **Midnight Panel**.

## Available Shards

| Shard | Type | Default Java | Status | Description |
|---|---|---|---|---|
| **[Paper](paper.json)** | Game Server | Java 21 | Verified | Modern Spigot fork optimized for performance and security |
| **[Purpur](purpur.json)** | Game Server | Java 21 | Verified | Feature-rich drop-in Paper replacement with high customizability |
| **[Vanilla](vanilla.json)** | Game Server | Java 21 | Verified | Official Mojang vanilla Minecraft dedicated server |
| **[Fabric](fabric.json)** | Modded | Java 21 | Verified | Lightweight, fast modular mod loader |
| **[NeoForge](neoforge.json)** | Modded | Java 21 | Verified | Next-gen community modding platform |
| **[Velocity](velocity.json)** | Network Proxy | Java 21 | Verified | Next-gen high throughput proxy by PaperMC |
| **[BungeeCord](bungeecord.json)** | Network Proxy | Java 21 | Verified | Classic multi-server proxy router |
| **[Bedrock BDS](bedrock.json)** | Bedrock | Native C++ | Verified | Official Minecraft Bedrock cross-play dedicated server |

## Features & Configs
- Automatic port and IP bindings via `server.properties` or `velocity.toml` / `config.yml`.
- Startup Done detection: `) Done (`.
- Stop command: `stop` or `end`.
- JVM dynamic memory sizing (`-XX:MaxRAMPercentage=95.0`).
