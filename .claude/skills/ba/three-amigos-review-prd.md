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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "BA và SA agree, QA review sau" | QA perspective = testability + edge cases. Skip QA = untestable requirements. |
| "PRD minor update, skip re-review" | Minor change có thể cascade. Quick review (15 phút) tốt hơn surprise. |
| "Three Amigos quá formal cho team nhỏ" | Team nhỏ = ít formal. Nhưng 3 perspectives vẫn cần (BA/SA/QA mindset). |

## Red Flags
- Review chỉ có 1-2 perspectives (thiếu QA hoặc SA)
- Review rubber-stamp (approve mà không challenge)
- Action items từ review không tracked
- PRD approved mà vẫn có open questions

## Verification
- [ ] 3 perspectives present (BA + SA + QA)
- [ ] Findings documented (not just "approved")
- [ ] Action items assigned và tracked
- [ ] Open questions resolved trước khi approve
