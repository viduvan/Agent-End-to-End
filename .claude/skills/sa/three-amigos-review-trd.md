# Skill: /fis:three-amigos:review-trd — Sign-off TRD

## Khi nào dùng
BA + SA + QA sign-off TRD trước khi DEV bắt đầu.

## Agent
SA Marcus (facilitator)

## Prompt mẫu
```
/fis:three-amigos:review-trd artifacts/trd/TRD-0001.md

BA perspective:
- [ ] TRD cover tất cả user stories trong PRD?
- [ ] API contract match với business flow?

SA perspective (self):
- [ ] Architecture scalable cho 6 tháng tới?
- [ ] Security design adequate?
- [ ] NFR targets achievable?

QA perspective:
- [ ] Testability: mỗi component test isolated?
- [ ] API contract đủ info viết test?
- [ ] Performance targets có baseline comparison?
```

## Output
- TRD status: `Draft → Reviewed → Approved`

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "TRD quá technical cho BA/QA review" | BA checks business alignment. QA checks testability. Cả hai cần. |
| "SA designed it, SA approves it" | SA approve own work = no review. Three Amigos = external perspectives. |
| "TRD approved miệng rồi" | Verbal = no trail. Written sign-off + action items tracked. |

## Red Flags
- TRD approved without BA perspective (business misalignment risk)
- TRD approved without QA perspective (untestable architecture)
- Action items not tracked
- TRD conflicts with PRD not flagged

## Verification
- [ ] BA confirmed business alignment
- [ ] QA confirmed testability
- [ ] Action items tracked to completion
- [ ] TRD consistent with PRD
