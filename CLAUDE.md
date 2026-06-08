# Agent-End-to-End — Project Rules

## Dự án
Multi-Agent System cho doanh nghiệp — AI-powered automation platform.

## Stack
- Python 3.11+ / FastAPI
- LangGraph (Agent Orchestration)
- PostgreSQL + pgvector (Database + RAG)
- Redis (Message Broker + Cache)
- Docker Compose (Infrastructure)

## Build & Run
```bash
docker-compose up -d          # Start all services
pytest tests/ -v               # Run tests
pytest tests/ --cov=src        # Run tests with coverage
```

## Code Standards
- Python: PEP 8 + type hints bắt buộc
- Docstring: Google style
- Import: isort + absolute imports
- Naming: snake_case (functions/vars), PascalCase (classes)
- Max function length: 50 LOC
- Max file length: 300 LOC

## Commit Convention
```
<type>(<scope>): <description>

Types: feat, fix, refactor, test, docs, chore, ci
Scope: agents, orchestrator, api, database, llm, ui
```

## Quy trình FIS AI Delivery
- Artifacts: `artifacts/` (PRD, TRD, FS, TestSpec, Bug, PM)
- Agents: `.claude/agents/` (19 role/persona agents)
- Skills: `.claude/skills/dev/` (18 files, 29 DEV-oriented commands)
- Workflows: `.claude/workflows/dev/` (7 DEV workflows)
- Pattern: Scout → Plan → Craft → Test → Review → Ship
- Architecture map: `.claude/ARCHITECTURE.md`
- DEV role matrix: `.claude/agents/DEV-ROLE-MATRIX.md`
