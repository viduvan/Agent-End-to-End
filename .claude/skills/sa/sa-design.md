# Skill: /fis:sa design — Sinh TRD Greenfield

## Khi nào dùng
Sau khi PRD Approved — sinh TRD theo feature.

## Agent
SA Marcus

## Prompt mẫu
```
/fis:sa design
Dựa trên PRD-0001 (Agent Execution API), viết TRD:
- Architecture: C4 container diagram
- Tech stack: FastAPI + LangGraph + PostgreSQL + Redis
- API contract: endpoints, request/response schema, error codes
- Database schema: tables, indexes, relationships
- Sequence diagrams: main flows
- NFR: latency < 500ms p95, throughput 100 concurrent
- Security: JWT auth, input sanitization, rate limiting
- Trade-off analysis: LangGraph vs CrewAI vs AutoGen
Output: artifacts/trd/TRD-0001.md
```

## Output
- `artifacts/trd/TRD-NNNN.md`

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Monolith first, microservice later" | OK nếu boundaries clear. Nhưng "later" cần plan, không chỉ hope. |
| "Over-engineering cho MVP" | MVP ≠ bad architecture. Clean boundaries + simple implementation. |
| "Team nhỏ, không cần TRD" | TRD cho future team. Architecture decisions cần context. |

## Red Flags
- TRD không có NFR section (performance, security, scalability)
- No alternatives considered (single option = no decision)
- Missing integration patterns (how services communicate)
- TRD không link về PRD/AC

## Verification
- [ ] NFRs defined (performance targets, security requirements)
- [ ] Alternatives considered và documented
- [ ] Integration patterns defined (sync/async, protocols)
- [ ] TRD linked to PRD AC (traceability)
