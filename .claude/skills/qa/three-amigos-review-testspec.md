# Skill: /fis:three-amigos:review-testspec — Sign-off TestSpec

## Khi nào dùng
Trước khi viết test cases — BA + SA + QA sign-off.

## Agent
Tester Priya (facilitator)

## Prompt mẫu
```
/fis:three-amigos:review-testspec artifacts/test-specs/TESTSPEC-0001.md

BA check:
- [ ] TestSpec cover tất cả AC trong PRD/FS?
- [ ] Business logic test đầy đủ?

SA check:
- [ ] Integration points tested?
- [ ] NFR targets có test?
- [ ] Security test cases?

QA check (self):
- [ ] Test matrix complete (happy/error/edge)?
- [ ] Priority assigned cho mỗi test?
- [ ] Mock data đủ scenarios?
- [ ] Regression suite included?
```

## Output
- TestSpec status: `Draft → Reviewed → Approved`
