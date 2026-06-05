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
