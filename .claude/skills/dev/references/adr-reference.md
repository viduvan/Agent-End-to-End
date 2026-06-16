# Reference: /fis:adr — ADR Deep Dive

> Tài liệu tra cứu chi tiết. File compact: `../adr.md`

## ADR Examples

### ADR-0001: Use PostgreSQL over MongoDB
```markdown
# ADR-0001: Use PostgreSQL over MongoDB

## Status
ACCEPTED

## Context
Cần database cho agent system. Data có relationships phức tạp (users → conversations → messages → agents). Cần ACID transactions cho payment flows. Cần pgvector cho RAG.

## Decision
Chọn PostgreSQL 16 + pgvector extension.

## Alternatives Considered
| Alternative | Pros | Cons | Why Rejected |
|------------|------|------|-------------|
| MongoDB | Schema-less, easy start | No ACID, no JOIN, separate vector DB needed | Relationship data + transactions = relational DB |
| SQLite | Zero config, embedded | No concurrent writes, no pgvector | Multi-agent concurrent access needed |

## Consequences
### Positive
- ACID transactions cho payment
- pgvector built-in (no separate vector DB)
- Mature ecosystem (SQLAlchemy, Alembic)

### Negative
- Schema migrations needed (vs schemaless)
- More ops overhead vs SQLite

### Risks
- pgvector performance at scale (> 1M vectors) untested
```

### ADR-0002: LangGraph over Custom State Machine
```markdown
# ADR-0002: Use LangGraph for Agent Orchestration

## Status
ACCEPTED

## Context
Agent orchestration cần state machine with:
- Conditional routing
- Parallel execution
- Checkpointing / resume
- Tool calling

## Decision
LangGraph with Redis checkpointer.

## Alternatives Considered
| Alternative | Pros | Cons | Why Rejected |
|------------|------|------|-------------|
| Custom FSM | Full control, no dependency | Build from scratch, no community | Reinventing wheel |
| Temporal | Production-grade, durable | Heavy infra, learning curve | Overkill for current scale |
| CrewAI | Simple multi-agent | Less control over routing | Need fine-grained state control |
```

## README Structure Template

```markdown
# Project Name

> One-sentence description of what this does.

## Quick Start
\`\`\`bash
# 3 commands or less to run the project
git clone ...
npm install
npm run dev
\`\`\`

## Architecture
Brief description + diagram (mermaid or image).

## Development
### Prerequisites
- Node.js 22+
- PostgreSQL 16+

### Setup
Step-by-step local setup.

### Testing
\`\`\`bash
npm test              # Unit tests
npm run test:e2e      # E2E tests
\`\`\`

## API Reference
Link to OpenAPI spec or brief endpoint list.

## ADRs
Link to docs/adrs/ directory.

## Contributing
Brief contribution guidelines.
```

## Changelog Template (Keep a Changelog)

```markdown
# Changelog

## [Unreleased]
### Added
- New feature X

### Changed
- Modified behavior of Y

### Fixed
- Bug where Z happened

## [1.0.0] - 2026-06-16
### Added
- Initial release
```
