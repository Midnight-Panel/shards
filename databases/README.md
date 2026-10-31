# Databases Shard Collection

Database services and in-memory caches for **Midnight Panel**.

## Available Shards

| Service | Type | Default Port | Status | Description |
|---|---|---|---|---|
| **[Redis](redis.json)** | In-Memory Key-Value / Cache | 6379 | Verified | High-speed cache, pub/sub and key-value store |
| **[MariaDB](mariadb.json)** | Relational SQL | 3306 | Verified | MySQL-compatible relational database |

## Features
- Dedicated data persistence folders.
- Dynamic port allocation.
- Automated security credentials provisioning.
