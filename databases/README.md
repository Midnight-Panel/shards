# Databases Shard Collection

Database services and in-memory caches for **Midnight Panel**.

## Available Shards

| Service | Type | Default Port | Default Docker Image | Status | Description |
|---|---|---|---|---|---|
| **[PostgreSQL](postgres.json)** | Relational SQL | 5432 | `postgres:16-alpine` | Verified | Robust object-relational SQL database engine |
| **[MongoDB](mongodb.json)** | NoSQL Document | 27017 | `mongo:7.0` | Verified | Document-oriented database for modern web apps |
| **[MariaDB](mariadb.json)** | Relational SQL | 3306 | `mariadb:11.4` | Verified | MySQL-compatible relational database |
| **[Redis](redis.json)** | In-Memory Key-Value / Cache | 6379 | `redis:7-alpine` | Verified | High-speed cache, pub/sub and key-value store |

## Features
- Dedicated data persistence folders (`/home/container/data`).
- Dynamic port allocation mapped to `{{SERVER_PORT}}`.
- Automated security credentials provisioning.
