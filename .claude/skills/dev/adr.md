# Skill: /fis:adr — Architecture Decision Records

> Document architectural decisions theo ADR lifecycle. Comment WHY not WHAT.

## Khi nào dùng
- Khi chọn technology/framework/pattern mới
- Khi thay đổi kiến trúc (từ monolith → microservice, etc.)
- Khi trade-off decision cần được document
- Khi `/fis:doubt` findings là trade-offs cần record

## Agent
Docs Manager

## ADR Template

```markdown
# ADR-NNNN: [Decision Title]

## Status
PROPOSED | ACCEPTED | DEPRECATED | SUPERSEDED by ADR-XXXX

## Context
Vấn đề gì cần giải quyết? Constraints? Requirements?

## Decision
Chọn gì? Tại sao?

## Alternatives Considered
| Alternative | Pros | Cons | Why Rejected |
|------------|------|------|-------------|
| Option A | ... | ... | ... |
| Option B | ... | ... | ... |

## Consequences
### Positive
- ...

### Negative
- ...

### Risks
- ...

## References
- [Link to docs/PR/discussion]
```

## ADR Lifecycle
```
PROPOSED → ACCEPTED → (lives forever or) → SUPERSEDED by ADR-XXXX
                    → DEPRECATED (no longer relevant)
```

## Inline Documentation Rules
```python
# ❌ WHAT (code đã nói)
# Increment counter by 1
counter += 1

# ✅ WHY (code không nói được)
# Rate limit: max 100 requests/minute per user
# to prevent abuse while allowing normal usage
counter += 1
```

**Comment khi**:
- WHY: lý do business/technical cho code không obvious
- WORKAROUND: tại sao code "xấu" (link to issue/ADR)
- REFERENCE: link to spec/docs/ADR
- WARNING: gotcha mà developer tiếp theo cần biết

**KHÔNG comment khi**:
- Code tự giải thích (clear naming + simple logic)
- Restate code bằng English/Vietnamese

## ADR Storage
```
docs/adrs/
├── 0001-use-postgresql-over-mongodb.md
├── 0002-adopt-langgraph-for-orchestration.md
├── 0003-redis-for-agent-communication.md
└── template.md
```

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Code tự document" | Code nói WHAT. ADR nói WHY + ALTERNATIVES + CONSEQUENCES. |
| "ADR mất thời gian" | 15 phút ADR < 4 giờ "tại sao chọn PostgreSQL?" 6 tháng sau. |
| "Decision rõ ràng, ai cũng biết" | Team hiện tại biết. Team member mới 3 tháng sau không biết. |
| "Docs viết sau khi ổn định" | Docs viết sau = docs không bao giờ viết. Write as you go. |

## Red Flags
- Major architecture decision mà không có ADR
- ADR không có Alternatives Considered (decision without options = no decision)
- PROPOSED ADR mà không ai review
- Code comments giải thích WHAT thay vì WHY
- Outdated docs (reference systems không còn exist)

## Verification
- [ ] ADR follows template (Context, Decision, Alternatives, Consequences)
- [ ] ADR has status (PROPOSED/ACCEPTED/DEPRECATED/SUPERSEDED)
- [ ] All major decisions have corresponding ADR
- [ ] Inline comments explain WHY, not WHAT
- [ ] No stale ADRs (review quarterly)
- [ ] ADR linked from relevant code (// See ADR-0003)
