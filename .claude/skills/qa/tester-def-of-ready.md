# Skill: /fis:tester def-of-ready — Definition of Ready Check

## Khi nào dùng
Kiểm tra Feature Spec có testable TRƯỚC khi DEV plan.

## Agent
Tester Priya

## Prompt mẫu
```
/fis:tester def-of-ready artifacts/fs/FS-0001.md

Checklist:
- [ ] Mỗi user story có acceptance criteria rõ ràng?
- [ ] AC có thể viết thành test assertion?
- [ ] Edge cases được liệt kê?
- [ ] Error handling behavior defined?
- [ ] Performance targets explicit?
- [ ] Test data requirements specified?
- [ ] Dependencies giữa features rõ ràng?
```

## Output
- READY / NOT READY + action items
