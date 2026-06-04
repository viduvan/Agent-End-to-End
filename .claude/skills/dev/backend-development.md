# Skill: /fis:backend-development — Backend & API

## Khi nào dùng
REST/GraphQL/gRPC API, auth, DB, microservice development.

## Agent
Senior Engineer (Fullstack Developer)

## Scope
- Project setup (FastAPI/Express + folder structure)
- CRUD endpoints + bulk operations
- Auth middleware (JWT, RBAC, ownership check)
- Rate limiting (Redis-based)
- Error handling (custom error classes, traceId)
- Database (SQLAlchemy/Prisma, repository pattern)
- Pagination (cursor-based + offset)

## Prompt mẫu

### Project setup
```
/fis:backend-development
Thiết lập FastAPI project:
- Folder structure:
  src/
    api/routes/        # route definition
    api/middleware/     # auth, validation, error
    services/          # business logic
    repositories/      # data access
    schemas/           # Pydantic models
    config.py          # env config
- Middleware: CORS, rate-limit, auth
- Error handling: global exception handler
- Health check: GET /health, GET /ready
- Logging: structlog + JSON
```

### CRUD endpoints
```
/fis:backend-development
Implement Agent CRUD:
- GET /api/v1/agents — list với filter (type, status), pagination
- POST /api/v1/agents — create + validate config
- GET /api/v1/agents/{id} — detail
- PUT /api/v1/agents/{id} — full update
- DELETE /api/v1/agents/{id} — soft delete
Response envelope: { success, data, meta }
Error format: { success: false, error: { code, message, traceId } }
```

### Auth middleware
```
/fis:backend-development
Tạo auth middleware FastAPI:
- verify_token: parse Bearer header, verify JWT
- require_auth: 401 nếu invalid
- require_role(role): 403 nếu không match
- inject user vào request state
- Log failed auth attempt với IP
```

### Rate limiting
```
/fis:backend-development
Implement rate limiting với Redis:
- Global: 100 req/min/IP
- Auth endpoint: 5 req/15min/IP
- Heavy endpoint (agent execution): 10 req/min/user
- Return 429 + Retry-After header
```

### Repository pattern
```
/fis:backend-development
Implement repository pattern:
- AgentRepository:
  - find_many(filter, pagination) — cursor pagination
  - find_by_id(id) — with relations
  - create(data) — in transaction
  - update(id, data) — optimistic concurrency
  - soft_delete(id) — set deleted_at
- Transactions cho complex operations
- Query optimization: avoid N+1
```

## Best Practices
- Resource-oriented URL: `/api/v1/agents/{id}` (KHÔNG `/api/v1/getAgent`)
- Versioning từ ngày 1: `/api/v1/...`
- Response envelope thống nhất
- Idempotency key cho mutation
- OpenAPI auto-gen từ Pydantic schema
