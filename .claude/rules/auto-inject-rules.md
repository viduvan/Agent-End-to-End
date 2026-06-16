# Auto-Inject Rules — Hybrid Skill Injection

> Orchestrator tự động inject skill khi detect conditions.
> Giảm khả năng "quên" skill quan trọng. User vẫn có thể skip.

## Rules

| Condition | Auto-inject Skill | Insert Position |
|-----------|-------------------|----------------|
| Prompt chứa framework keyword | `/fis:source-check` | Trước `/fis:craft` |
| Project có package.json / requirements.txt / go.mod VÀ intent = add_feature / refactor | `/fis:source-check` | Trước `/fis:craft` |
| Intent = auth / payment | `/fis:secure` | Trước `/fis:plan` |
| Changes > 200 LOC VÀ intent ≠ mechanical (rename/format) | `/fis:doubt` | Sau `/fis:craft`, trước `/fis:code-review` |

## Framework Keywords (trigger source-check)
React, Next.js, Vue, Angular, Svelte, Solid, Qwik,
FastAPI, Django, Flask, Rails, Express, NestJS, Hono,
LangGraph, LangChain, CrewAI, AutoGen,
Spring Boot, Laravel, ASP.NET,
Prisma, Drizzle, SQLAlchemy, TypeORM

## Detection Logic

```
Orchestrator receives user prompt
    │
    ├── Scan prompt for framework keywords
    │   └── Found "React" → inject source-check before craft
    │
    ├── Check project files
    │   ├── package.json exists → scan dependencies for frameworks
    │   ├── requirements.txt exists → scan for Python frameworks
    │   └── go.mod exists → scan for Go frameworks
    │
    ├── Check intent
    │   ├── auth/payment → inject secure before plan
    │   └── add_feature/refactor + framework detected → inject source-check
    │
    └── Post-craft check
        └── Changes > 200 LOC + non-mechanical → inject doubt before review
```

## User Override
User có thể skip auto-injected skills bằng:
- "Skip source-check" hoặc "just do it quickly"
- "Skip security audit" (chỉ cho non-auth features)
- "Skip doubt review"

Agent PHẢI log skip reason:
```
⚠️ Auto-inject skipped: /fis:source-check
Reason: User explicit skip — "just do it quickly"
```

## Đối tượng áp dụng
- **DEV Orchestrator** — Implement auto-inject logic
- **Tất cả dev workflows** — Respect auto-inject insertions
