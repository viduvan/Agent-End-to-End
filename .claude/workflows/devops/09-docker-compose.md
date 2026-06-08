# Docker hoá dự án (Multi-stage Build)

## Metadata
- ⏱ Time: 1-2 hours
- 📋 Steps: 5
- 🎯 Difficulty: Easy
- 📌 Version: v3.0 (Updated: 01/06/2026)
- 🔧 Key Skills: `/fis:ship`, `/fis:craft`, `/fis:devops`
- 👥 Roles: DEV, DevOps

## Mô tả
Multi-stage Dockerfile + compose cho app + db. Docker hoá dự án cho consistent environments.

## Steps

### Step 1: Khám phá requirements (⏱ 10 mins)
```
$ /fis:scout "Analyze project services: app, database, cache, worker — for Docker setup"
```
- List services cần containerize
- Identify base images (python:3.12-slim, node:20-alpine)
- Map ports, volumes, env vars

### Step 2: Lên kế hoạch Docker architecture (⏱ 10 mins)
```
$ /fis:plan "Docker setup:
- Phase 1: Multi-stage Dockerfile (build → runtime)
- Phase 2: docker-compose.yml (app + db + redis)
- Phase 3: .dockerignore + health checks
- Phase 4: Environment configs (dev/staging/prod)"
```

### Step 3: Thực thi Docker config (⏱ 30-60 mins)
```
$ /fis:craft "Create Dockerfile:
- Stage 1: Build (install dependencies)
- Stage 2: Runtime (copy only needed files, non-root user)
Multi-stage cho image size nhỏ."

$ /fis:craft "Create docker-compose.yml:
- app: FastAPI service
- db: PostgreSQL 16
- redis: Redis 7
- volumes: persistent data
- health checks"
```

### Step 4: Test & Verify (⏱ 15 mins)
```
$ /fis:test "docker compose up --build && docker compose ps"
$ /fis:security "Verify: non-root user, no secrets in image, minimal base image"
```
- Verify all services healthy
- Test connectivity between services

### Step 5: Ship & Journal (⏱ 5 mins)
```
$ /fis:ship official
$ /fis:journal "Docker: multi-stage build + compose setup complete"
```

## Tips

### ✅ Best practices
- Multi-stage build → image size nhỏ (100MB vs 1GB)
- Non-root user trong container
- .dockerignore (exclude .git, node_modules, __pycache__)
- Health checks cho mọi service
- Pin image versions (python:3.12.4, không dùng :latest)

### ❌ Anti-patterns
- Single-stage build → image quá lớn
- Run as root → security risk
- Không có health checks → silent failures
- Copy secrets vào image → credential leak
