# Game Servers Shard Collection

High-performance dedicated game server Shards for **Midnight Panel**, integrated with automated SteamCMD updates, RCON controls, txAdmin web manager, and environment configuration.

## Available Shards

| Game | App ID / Engine | Default Docker Image | Status | Description |
|---|---|---|---|---|
| **[FiveM (txAdmin)](fivem-txadmin.json)** | GTA V / CitizenFX | `ghcr.io/midnight-panel/games:fivem` | Verified | FiveM server with integrated txAdmin web panel |
| **[Rust](rust.json)** | 258550 (Unity) | `ghcr.io/midnight-panel/games:rust` | Verified | Rust dedicated server with SteamCMD & Oxide |
| **[Counter-Strike 2](cs2.json)** | 730 (Source 2) | `ghcr.io/midnight-panel/games:source` | Verified | Valve's CS2 dedicated server on Source 2 |
| **[Palworld](palworld.json)** | 2394010 (Unreal 5) | `ghcr.io/midnight-panel/games:source` | Verified | Multiplayer dedicated server on Unreal Engine 5 |
| **[Valheim](valheim.json)** | 896660 (Unity) | `ghcr.io/midnight-panel/games:source` | Verified | Viking survival server with procedural worlds |
| **[Terraria (TShock)](terraria-tshock.json)** | Custom (.NET 8) | `ghcr.io/midnight-panel/base:debian` | Verified | TShock server with plugin & permissions system |
| **[Team Fortress 2](tf2.json)** | 232250 (Source) | `ghcr.io/midnight-panel/games:source` | Verified | Source engine multiplayer team shooter |
| **[ARK: Survival Evolved](ark-se.json)** | 376030 (Unreal 4) | `ghcr.io/midnight-panel/games:source` | Verified | ARK dedicated server with mod & map support |
| **[7 Days to Die](7daystodie.json)** | 294420 (Unity) | `ghcr.io/midnight-panel/games:source` | Verified | Voxel zombie sandbox survival server |
| **[Project Zomboid](project-zomboid.json)** | 380870 (Java/Native) | `ghcr.io/midnight-panel/games:source` | Verified | Hardcore isometric zombie survival server |

## Features
- Fully automated SteamCMD and FXServer artifact installation and validation on first boot.
- Clean stop commands and signals preventing world save corruption.
- Configurable environment variables for world names, seeds, ports, and admin passwords.
