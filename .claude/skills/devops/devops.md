# Skill: /fis:devops — Infrastructure as Code

## Khi nào dùng
IaC, Docker, Docker Compose, K8s, GitOps setup.

## Agent
DevOps Tuấn

## Prompt mẫu

### Docker Compose
```
/fis:devops
Sinh docker-compose.yml cho multi-agent system:
Services: app (FastAPI), postgres (pgvector), redis, streamlit
Volumes: pgdata, redis-data
Networks: agent-network
```

### Dockerfile
```
/fis:devops
Dockerfile multi-stage: python:3.11-slim, non-root, health check
```

### GitHub Actions CI/CD
```
/fis:devops
.github/workflows/ci.yml:
lint → test → security → build → deploy-staging → deploy-prod
```

### K8s manifests
```
/fis:devops
Deployment (3 replicas), Service, Ingress, ConfigMap, Secret, HPA
```

## Output
- `Dockerfile`, `docker-compose.yml`
- `.github/workflows/*.yml`
- `k8s/` manifests
- `.pre-commit-config.yaml`

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Docker chạy local OK, deploy sau" | Local ≠ production. IaC từ đầu = consistent environments. |
| "CI/CD quá phức tạp cho MVP" | MVP cũng cần automated deploy. Manual deploy = human error. |
| "Security scan chậm CI" | Optimize scan scope, không skip. 1 vuln trong production > 5 phút CI. |
| "Dùng root trong container OK cho dev" | Non-root từ đầu. Root habit → root production → security incident. |

## Red Flags
- Dockerfile dùng root user
- Docker image không có health check
- CI pipeline không có security scan step
- Secrets hardcoded trong docker-compose.yml
- No resource limits trên containers
- Single-stage Dockerfile (nên multi-stage)

## Verification
Sau khi setup IaC:
- [ ] Dockerfile: multi-stage, non-root, health check
- [ ] docker-compose: volumes, networks, resource limits
- [ ] CI/CD: lint → test → security → build → deploy
- [ ] Secrets không trong code (dùng env vars / vault)
- [ ] K8s manifests có HPA + resource requests/limits
