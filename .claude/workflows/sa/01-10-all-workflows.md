# SA Workflows (10 workflows)

## Workflow SA-1: Bắt đầu dự án mới ⭐
**Skills**: `/fis:sa design`, `/fis:plan`, `/fis:craft`

### SA trong New Project
```
1. Nhận PRD Approved từ BA
2. /fis:sa design → TRD-0001.md (architecture, tech stack, API contract)
3. ADR cho mỗi tech choice:
   - ADR-001: LangGraph for orchestration
   - ADR-002: FastAPI for backend
   - ADR-003: PostgreSQL + pgvector for database
   - ADR-004: Redis for message broker
   - ADR-005: Docker Compose for deployment
4. /fis:sa ddd-tech → Technical DDD layer
5. /fis:sa feature-spec → FS-0001.md (sẵn sàng cho DEV)
6. /fis:three-amigos:review-trd → Sign-off
7. Handoff DEV → /fis:plan
```

### C4 Architecture Diagram
```
/fis:sa design
C4 Container Diagram cho Agent-End-to-End:

[User] → [Streamlit Dashboard] → [FastAPI Backend]
                                       ↓
                              [LangGraph Orchestrator]
                              /        |        \
                    [Code Agent] [Research] [QA Agent]
                              \        |        /
                              [Redis Message Bus]
                                       ↓
                              [PostgreSQL + pgvector]
```

---

## Workflow SA-2: Làm việc với dự án hiện có
**Skills**: `/fis:scout`, `/fis:gkg`, `/fis:docs`

SA tasks:
- `/fis:scout` → hiểu architecture tổng thể
- `/fis:gkg analyze` → dependency graph
- `/fis:sa generate` → reverse-engineer TRD từ code
- Bổ sung ADRs cho decisions chưa document

---

## Workflow SA-3: Thêm tính năng mới
**Skills**: `/fis:plan`, `/fis:craft`, `/fis:test`

SA trong Adding Feature:
```
BA PRD Approved
  → SA review PRD (technical feasibility)
    → /fis:sa design hoặc update TRD
      → /fis:sa feature-spec (FS cho DEV)
        → /fis:three-amigos:review-trd
          → DEV /fis:plan → /fis:craft
            → SA /fis:code-review (review PR)
```

---

## Workflow SA-4: Tái cấu trúc code
**Skills**: `/fis:scout`, `/fis:plan`, `/fis:craft`

SA tasks:
- Review refactor plan (scope, impact)
- Approve architecture changes
- Verify public API backward compatible
- Sign-off PR sau refactor

---

## Workflow SA-5: Triển khai xác thực (Auth)
**Skills**: `/fis:plan`, `/fis:craft`, `/fis:security`

SA tasks:
- Chọn auth approach (JWT vs OAuth vs API Key)
- Write ADR: `artifacts/decisions/ADR-auth-stack.md`
- Review security implementation (OWASP)
- Approve RBAC permission matrix

---

## Workflow SA-6: Xây dựng REST API
**Skills**: `/fis:backend-development`, `/fis:databases`, `/fis:web-testing`

SA tasks:
- Design API contract TRƯỚC khi DEV code
- Review: resource-oriented URLs, versioning, error codes
- Verify schema match design
- Review load test results

---

## Workflow SA-7: Tích hợp thanh toán
SA tasks:
- Security review payment flow
- ADR: payment provider choice
- Review webhook handler security

---

## Workflow SA-8: Viết tài liệu
**Skills**: `/fis:docs`, `/fis:llms`, `/fis:preview`

SA sở hữu:
- TRD-NNNN.md
- System Architecture doc
- ADRs (`artifacts/decisions/`)
- C4 Diagrams

---

## Workflow SA-9: Bảo trì dự án cũ
**Skills**: `/fis:scout`, `/fis:fix`, `/fis:security-scan`

SA tasks:
- Assess tech debt severity
- Prioritize modernization path
- Review security scan findings
- Approve dependency updates

---

## Workflow SA-10: Hiểu codebase với GKG
**Skills**: `/fis:gkg`, `/fis:scout`, `/fis:graphify`

SA tasks:
- Analyze dependency graph cho architecture review
- Find circular dependencies
- Identify coupling hotspots
- Document component boundaries

---

## SA Trong Dự Án 1 Người (Self-Review)

Vì bạn kiêm nhiệm SA, dùng self-review checklist:

```
SA Self-Review Checklist:
Architecture:
- [ ] Mọi tech choice có ADR?
- [ ] C4 diagram up-to-date?
- [ ] NFR targets defined?

API:
- [ ] Resource-oriented URLs?
- [ ] Versioning /api/v1/?
- [ ] Error format thống nhất?
- [ ] OpenAPI spec auto-gen?

Security:
- [ ] Auth trên mọi endpoint?
- [ ] Input validation?
- [ ] Rate limiting?
- [ ] No hardcoded secrets?

Data:
- [ ] Migration strategy?
- [ ] Index đầy đủ?
- [ ] Backup plan?

Performance:
- [ ] N+1 queries checked?
- [ ] Connection pooling?
- [ ] Caching strategy?
```
