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
