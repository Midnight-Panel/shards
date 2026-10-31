# Game Servers Shard Collection

High-performance dedicated game server Shards for **Midnight Panel**, integrated with automated SteamCMD updates, RCON controls, and environment configuration.

## Available Shards

| Game | App ID | Engine | Default Docker Image | Status |
|---|---|---|---|---|
| **[Rust](rust.json)** | 258550 | Unity | `ghcr.io/pterodactyl/games:rust` | Verified |
| **[Counter-Strike 2](cs2.json)** | 730 | Source 2 | `ghcr.io/pterodactyl/games:source` | Verified |
| **[Palworld](palworld.json)** | 2394010 | Unreal 5 | `ghcr.io/pterodactyl/games:source` | Verified |
| **[Valheim](valheim.json)** | 896660 | Unity | `ghcr.io/pterodactyl/games:source` | Verified |
| **[Terraria (TShock)](terraria-tshock.json)** | Custom | .NET 8 / C# | `ghcr.io/pterodactyl/yolks:dotnet_8` | Verified |
| **[Team Fortress 2](tf2.json)** | 232250 | Source | `ghcr.io/pterodactyl/games:source` | Verified |
| **[ARK: Survival Evolved](ark-se.json)** | 376030 | Unreal 4 | `ghcr.io/pterodactyl/games:source` | Verified |
| **[7 Days to Die](7daystodie.json)** | 294420 | Unity | `ghcr.io/pterodactyl/games:source` | Verified |
| **[Project Zomboid](project-zomboid.json)** | 380870 | Java / Native | `ghcr.io/pterodactyl/games:source` | Verified |

## Features
- Fully automated SteamCMD installation and validation on first boot.
- Clean stop commands and signals preventing world save corruption.
- Configurable environment variables for world names, seeds, ports, and admin passwords.
