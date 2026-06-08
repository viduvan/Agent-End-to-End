# Setup CI/CD Pipeline (GitHub Actions · GitLab CI)

## Metadata
- ⏱ Time: 2-3 hours
- 📋 Steps: 5
- 🎯 Difficulty: Medium
- 📌 Version: v3.0 (Updated: 01/06/2026)
- 🔧 Key Skills: `/fis:ship`, `/fis:security`, `/fis:devops`
- 👥 Roles: DEV, DevOps

## Mô tả
Build → test → security → deploy. Chuẩn FIS DevOps. Setup automated CI/CD pipeline.

## Steps

### Step 1: Khám phá requirements (⏱ 10 mins)
```
$ /fis:scout "Analyze project: language, test framework, deploy target (Docker/K8s/Vercel)"
```
- Xác định CI platform (GitHub Actions / GitLab CI)
- Xác định deploy target (Docker, Kubernetes, Vercel, AWS)
- List required secrets/env vars

### Step 2: Lên kế hoạch pipeline (⏱ 15 mins)
```
$ /fis:plan "Setup CI/CD pipeline:
- Phase 1: Lint + type check
- Phase 2: Unit + integration tests
- Phase 3: Security scan (dependencies + secrets)
- Phase 4: Build + deploy staging
- Phase 5: Deploy production (manual approval)"
```

### Step 3: Thực thi CI/CD config (⏱ 1-2 hours)
```
$ /fis:craft "Create .github/workflows/ci.yml:
- Lint (ruff/eslint)
- Test (pytest/vitest)
- Security (safety/trivy)
- Build Docker image
- Deploy staging (auto) → production (manual)"
```

### Step 4: Test pipeline (⏱ 30 mins)
```
$ /fis:test "Verify CI pipeline: push test branch, check all stages pass"
$ /fis:security "Verify secrets not exposed in CI logs"
```

### Step 5: Ship & Journal (⏱ 10 mins)
```
$ /fis:ship official
$ /fis:journal "CI/CD: GitHub Actions pipeline setup complete"
```

## Tips

### ✅ Best practices
- Fail fast: lint → test → security → build (cheapest first)
- Cache dependencies (npm, pip) cho speed
- Separate staging vs production deploy
- Manual approval cho production

### ❌ Anti-patterns
- Deploy trực tiếp production không qua staging
- Hardcode secrets trong workflow files
- Skip security scan → vulnerable dependencies
- No cache → slow builds (10+ mins)
