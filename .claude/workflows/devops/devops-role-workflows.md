# DevOps Workflows (4 workflows)

## Workflow DevOps-1: CI/CD, Deploy & Monitoring ⭐ (Quan trọng nhất)
**Skills**: `/fis:devops`, `/fis:deploy`, `/fis:debug`, `/fis:security-scan`

### Kịch bản
GitHub Actions CI/CD → Docker build → Staging deploy → Canary production → Monitoring.

### Quy trình 12 bước

#### Phase 1: Infrastructure Setup (Ngày 1)

##### 1. Docker setup
```
/fis:devops
Sinh Dockerfile + docker-compose.yml cho multi-agent system.
```
Output:
- `Dockerfile` (multi-stage, non-root)
- `Dockerfile.ui` (Streamlit)
- `docker-compose.yml` (app + postgres + redis + streamlit)
- `.dockerignore`

##### 2. Environment config
```
/fis:devops
Sinh environment configuration:
- .env.example (template, committed)
- .env.local (gitignored)
- .env.staging
- .env.production
Variables: DATABASE_URL, REDIS_URL, LLM_API_KEY, SECRET_KEY, LOG_LEVEL
```

##### 3. Database migrations
```
/fis:devops
Setup Alembic cho database migrations:
- alembic.ini
- alembic/env.py (async support)
- Initial migration: create tables
- Script: migrate.sh (idempotent)
```

#### Phase 2: CI/CD Pipeline (Ngày 2)

##### 4. GitHub Actions
```
/fis:devops
.github/workflows/ci.yml:
- lint → test → security → build → deploy
```

##### 5. Pre-commit hooks
```
/fis:devops
.pre-commit-config.yaml:
- ruff (lint + format)
- mypy (type check)
- bandit (security)
- detect-secrets
```

##### 6. Build & Push
```
/fis:devops
Docker build + push to registry:
- Tag: git sha + version tag
- Cache: multi-stage layer caching
- Scan: trivy vulnerability scan
```

#### Phase 3: Deployment (Ngày 3)

##### 7. Deploy staging
```
/fis:deploy staging
Build → Push → Deploy → Migrate → Smoke test
```

##### 8. Smoke test staging
```
/fis:test --e2e --env staging
Health check + basic API test + WebSocket test
```

##### 9. Deploy production (canary)
```
/fis:deploy production --strategy=canary
5% → monitor 30min → 25% → monitor 30min → 100%
```

#### Phase 4: Monitoring (Ongoing)

##### 10. Health checks
```
/fis:devops
Health endpoints:
- GET /health — app alive
- GET /ready — app + dependencies ready
- GET /metrics — Prometheus format
```

##### 11. Alerting rules
```
/fis:devops
Setup alerts:
- Error rate > 2% trong 5 phút → PagerDuty/Slack
- Response time p95 > 1s → warning Slack
- Memory > 80% → warning
- Disk > 90% → critical
- Container restart > 3 trong 10 phút → critical
- Redis connection pool exhausted → critical
- PostgreSQL connection count > 80% max → warning
```

##### 12. Runbook
```
/fis:devops
Sinh docs/runbooks/:
- RUNBOOK-001-app-crash.md
- RUNBOOK-002-database-full.md
- RUNBOOK-003-redis-oom.md
- RUNBOOK-004-high-latency.md
- RUNBOOK-005-deployment-rollback.md
```

---

## Workflow DevOps-2: Sửa lỗi (DevOps Perspective)
**Skills**: `/fis:debug`, `/fis:fix --auto`

DevOps trong bug fixing:
```
Infrastructure issue detected
  → /fis:debug (log analysis, root cause)
    → Fix: config change / scale up / rollback
      → /fis:deploy (redeploy if needed)
        → Monitor 24h
          → Postmortem: docs/postmortems/<date>-<incident>.md
```

### Incident Response
```
1. Detect: alert fires (automated)
2. Acknowledge: on-call responds within 15 min
3. Diagnose: /fis:debug log analysis
4. Mitigate: quick fix to restore service
5. Fix: permanent fix + deploy
6. Postmortem: within 48h
```

---

## Workflow DevOps-3: Tối ưu hiệu năng (DevOps Perspective)
**Skills**: `/fis:debug`, monitoring tools

DevOps tasks:
- Profile container resource usage
- Database query performance (pg_stat_statements)
- Redis memory + hit rate analysis
- Network latency between services
- Load test with k6

```
/fis:debug
Performance baseline:
- API p50: 80ms, p95: 200ms, p99: 500ms
- DB query avg: 5ms, max: 50ms
- Redis hit rate: 95%
- Container CPU: 30%, Memory: 512MB

Target:
- API p95 < 200ms
- Error rate < 0.1%
- Uptime > 99.9%
```

---

## Workflow DevOps-4: Bảo trì dự án cũ (DevOps Perspective)
**Skills**: `/fis:scout`, `/fis:fix`, `/fis:security-scan`, `/fis:cti-expert`

DevOps tasks:
- Dependency vulnerability scan (safety, trivy)
- Docker base image update
- Security patch deployment
- SSL cert renewal automation
- Backup verification

```
/fis:devops
Monthly maintenance checklist:
- [ ] Docker base image updated?
- [ ] Python dependencies: pip-audit clean?
- [ ] SSL certs valid > 30 days?
- [ ] Backup restore tested?
- [ ] Monitoring alerts still relevant?
- [ ] Runbooks up-to-date?
- [ ] Log rotation configured?
- [ ] Disk usage < 70%?
```

---

## DevOps Cadence

| Tần suất | Hoạt động |
|----------|-----------|
| **Mỗi PR** | CI pipeline: lint → test → security scan |
| **Mỗi merge main** | Auto deploy staging |
| **Hàng ngày** | Check alerts, review container health |
| **Hàng tuần** | Review error rate trends, clean flaky tests |
| **Hàng tháng** | Dependency update, backup test, cert check |
| **Hàng quý** | Infrastructure review, cost optimization |

## Bài học
1. **IaC first** — Docker + Compose setup trước code features
2. **CI chạy nhanh** — < 5 phút cho lint + test + build
3. **Canary không optional** — phát hiện issue ở 5% rẻ hơn 100%
4. **Monitoring trước go-live** — alert rules ready trước deploy
5. **Runbook cho mọi incident** — ai cũng handle được, không phụ thuộc 1 người
6. **Postmortem blameless** — focus "how to prevent" không "who caused"
