# Skill: /fis:three-amigos:review-prd — Sign-off PRD

## Khi nào dùng
Trước khi handoff PRD sang SA/DEV. Three Amigos = BA + SA + QA.

## Agent
BA Sarah (facilitator)

## Self-review checklist (1 người kiêm nhiệm)
```
/fis:three-amigos:review-prd artifacts/prd/PRD-0001.md

BA perspective:
- [ ] User stories có đủ context?
- [ ] Acceptance criteria SMART?
- [ ] Edge cases đã list?
- [ ] Out of scope rõ ràng?

SA perspective:
- [ ] Technically feasible với stack hiện tại?
- [ ] Performance impact đánh giá?
- [ ] Security concerns?
- [ ] Breaking changes?

QA perspective:
- [ ] Mỗi AC có thể viết test?
- [ ] Happy path + sad path rõ?
- [ ] Test data requirements?
- [ ] Regression risk?
```

## Output
- PRD status: `Draft → Reviewed → Approved`
- Action items nếu chưa pass
