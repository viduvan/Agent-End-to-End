# Bắt đầu dự án mới

## Metadata
- ⏱ Time: 4-6 hours
- 📋 Steps: 5
- 🎯 Difficulty: Medium
- 📌 Version: v3.0 (Updated: 01/06/2026)
- 🔧 Key Skills: `/fis:bootstrap`, `/fis:plan`, `/fis:craft`, `/fis:test`, `/fis:ship`
- 👥 Roles: PM, SA/TL, DEV

## Mô tả
Từ ý tưởng đến production-ready CI/CD trong 1 buổi sáng. Dự án mới hoàn toàn (greenfield) — setup tech stack, cấu trúc, CI/CD.

## Steps

### Step 1: Khám phá & Bootstrap (⏱ 30 mins)
```
$ /fis:bootstrap "Khởi tạo project <tên> với tech stack: FastAPI + React + PostgreSQL + Redis"
```
- Scaffold directory (src/, tests/, docs/, artifacts/)
- Init git + .gitignore + pre-commit hooks
- Setup linting (ruff, mypy)
- Create CLAUDE.md, README.md
- Init docker-compose.yml

### Step 2: Lên kế hoạch chi tiết (⏱ 20 mins)
```
$ /fis:plan "Thiết kế multi-agent system:
- Agent orchestrator (LangGraph)
- Specialized agents
- FastAPI API
- PostgreSQL + Redis
Chia phases, mỗi phase ≤ 1 ngày."
```
Output: `plans/<date>/plan.md` + phase files

### Step 3: Thực thi với AI code-pair (⏱ 2-4 hours)
```
$ /fis:craft "Phase 01 — Database schema + migrations"
$ /fis:craft "Phase 02 — Auth (JWT + API key)"
$ /fis:craft "Phase 03 — Core features + orchestrator"
$ /fis:craft "Phase 04 — API endpoints"
```
Sinh docs cơ bản: project-overview, system-architecture, code-standards, codebase-summary, development-roadmap

### Step 4: Kiểm thử & Review (⏱ 30 mins)
```
$ /fis:test "Run unit + integration tests, target 70% coverage"
$ /fis:security "OWASP Top 10 checklist scan"
$ /fis:code-review --pending
```

### Step 5: Ship & Journal (⏱ 15 mins)
```
$ /fis:ship official
$ /fis:journal "Session: khởi tạo project <tên>"
```
Docker Compose → staging → production

## Tips

### ✅ Best practices
- Plan trước code sau — bootstrap đúng 1 lần, hưởng cả dự án
- Chia phases nhỏ (≤ 1 ngày), PR ≤ 300 dòng diff
- Sinh docs từ đầu, auto-sync về sau

### ❌ Anti-patterns
- Bỏ qua plan, nhảy thẳng vào code
- Monolith 1 file chứa mọi thứ
- Skip tests vì "dự án mới chưa cần"
- Không setup CI/CD từ đầu
