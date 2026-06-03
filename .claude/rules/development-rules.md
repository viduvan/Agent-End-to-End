# Development Rules — Quy tắc phát triển chuẩn FIS

> **IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.

## General

### Nguyên tắc cốt lõi
1. **Plan trước Code sau** — Luôn dùng `/fis:plan` trước khi `/fis:craft`
2. **Small PR** — Mỗi PR ≤ 300 dòng diff, 1 concern duy nhất
3. **Test-first mindset** — Viết test trước hoặc ngay sau code
4. **Document as you go** — Không để docs trở nên stale

### Quy tắc ưu tiên Skills
Khi nhận task, agent PHẢI:
1. Đọc skills catalog (`.claude/skills/`) để tìm skill phù hợp
2. Kích hoạt skill đúng theo domain (frontend/backend/devops)
3. Tuân thủ skill routing rules (xem `skill-domain-routing.md`)

## Code Quality Guidelines

### Python
- PEP 8 + type hints **bắt buộc** trên mọi function
- Docstring: Google style
- Import: `isort` + absolute imports
- Max function length: **50 LOC**
- Max file length: **300 LOC**
- Naming: `snake_case` (functions/vars), `PascalCase` (classes)

### JavaScript/TypeScript
- ESLint + Prettier enforced
- TypeScript strict mode
- Named exports preferred
- Max function length: **50 LOC**

### Chung
- **DRY** — Don't Repeat Yourself (extract khi lặp ≥ 2 lần)
- **SOLID** — Single Responsibility cho mọi module
- **No magic numbers** — Constants có tên descriptive
- **Error handling** — Không swallow errors, luôn log + handle

## Pre-commit / Pre-push Rules

### Pre-commit (chạy mỗi commit)
```bash
# Python
ruff check .                    # Lint
ruff format --check .           # Format
mypy src/ --strict              # Type check

# JavaScript
eslint . --ext .ts,.tsx         # Lint
prettier --check .              # Format
```

### Pre-push (chạy mỗi push)
```bash
pytest tests/ -v --tb=short     # Unit + integration tests
pytest tests/ --cov=src --cov-fail-under=70  # Coverage ≥ 70%
bandit -r src/                  # Security scan
detect-secrets scan             # Secret detection
```

### Commit Convention
```
<type>(<scope>): <description>

Types: feat, fix, refactor, test, docs, chore, ci
Scope: module/feature name
Description: imperative mood, lowercase, no period
```

## Đối tượng áp dụng
- **DEV** — Tuân thủ khi viết code
- **SA** — Enforce khi code review
- **QA** — Verify trong test strategy
