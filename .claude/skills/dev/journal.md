# Skill: /fis:journal — Technical Journal

> Viết nhật ký kỹ thuật phân tích thay đổi gần đây. Session logging và lessons learned.

## Khi nào dùng
- Ghi nhật ký kỹ thuật sau phiên làm việc
- Phân tích thay đổi gần đây (what changed, why, impact)
- Extract lessons learned từ debugging sessions
- Track technical decisions over time

## Agent
Journal Writer

## Input
- Git diff gần đây
- Context phiên làm việc
- Issues/challenges gặp phải

## Output
- Journal entry markdown
- Lessons learned summary
- Follow-up action items

## Prompt mẫu
```
/fis:journal
Phân tích thay đổi gần đây trong session này. Viết journal entry bao gồm: what changed, why, lessons learned.
```
```
/fis:journal
Ghi nhật ký debugging session cho memory leak issue. Document: symptoms, investigation, root cause, fix.
```

## Nguyên tắc
- Journal = future reference, write for your future self
- Include: context, decisions, trade-offs, lessons
- Link to relevant commits/PRs
- Be honest about mistakes

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Code tự document rồi" | Code nói what, không nói why. Journal document reasoning. |
| "Không có thời gian viết journal" | 5 phút journal tiết kiệm 2 giờ re-discovery 3 tháng sau. |

## Red Flags
- Journal quá ngắn (thiếu context)
- Chỉ list changes mà không explain why
- Skip lessons learned

## Verification
- [ ] Entry có đủ context (what, why, how)
- [ ] Lessons learned documented
- [ ] Action items identified
- [ ] Linked to relevant commits
