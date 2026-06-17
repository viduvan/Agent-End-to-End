# Skill: /fis:sa review — Architecture Review

## Khi nào dùng
Trước Three Amigos — check trade-offs, risks, NFRs.

## Agent
SA Marcus

## Prompt mẫu
```
/fis:sa review
Review TRD-0001 trước Three Amigos:
Checklist:
- [ ] Trade-off analysis cho mỗi tech choice documented?
- [ ] NFR explicit: latency, throughput, availability targets?
- [ ] Security: OWASP Top 10 addressed?
- [ ] Scalability: bottleneck identified? horizontal scaling plan?
- [ ] Data: migration strategy? backup/restore?
- [ ] Monitoring: health check, alerting, logging strategy?
- [ ] Dependencies: 3rd party risk assessment?
- [ ] Breaking changes: backward compatibility?
```

## Output
- Self-review report với findings + recommendations

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Self-review đủ, SA chỉ có mình" | Self-review có blind spots. Dùng checklist + adversarial mindset. |
| "Trade-off analysis sau khi build" | Trade-off analysis TRƯỚC build. Sau = costly rework. |
| "NFR check when scale" | NFR issues lúc scale = cực kỳ tốn kém. Check sớm, fix sớm. |

## Red Flags
- Review không check NFRs (performance, security, scalability)
- Trade-offs not documented
- No risks identified (everything "fine")
- Self-review without checklist

## Verification
- [ ] NFRs reviewed (performance targets, security, scalability)
- [ ] Trade-offs documented (pros/cons/risks)
- [ ] Risks identified với mitigation plans
- [ ] Checklist-based review (not free-form)
