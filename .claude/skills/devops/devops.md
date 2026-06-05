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
