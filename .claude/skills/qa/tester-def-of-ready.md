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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Story clear enough, start coding" | "Clear enough" = ambiguous. DoR checklist = unambiguous. |
| "DoR slows down sprint start" | 10 phút DoR check < hours of rework from unclear requirements. |

## Red Flags
- Story without AC enters sprint
- Dependencies not identified before sprint
- Missing technical spike results

## Verification
- [ ] AC defined and SMART
- [ ] Dependencies identified
- [ ] UX/wireframe ready (if UI story)
- [ ] Technical approach agreed
