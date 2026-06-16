# Skill: /fis:ba generate — Sinh Spec từ Code (Brownfield) ⭐

## Khi nào dùng
Code trước, docs sau (brownfield mode — đúng case dự án này).

## Agent
BA Sarah

## Prompt mẫu
```
/fis:ba generate
Đọc codebase src/agents/ và src/api/.
Sinh:
- PRD mô tả capabilities hiện tại
- Feature Spec cho mỗi API endpoint
- Acceptance criteria từ existing tests
- Gap analysis: code có nhưng chưa test, hoặc test có nhưng behavior chưa rõ
```

## Output
- `artifacts/prd/PRD-NNNN.md` (reverse-engineered từ code)

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Code nói lên tất cả, docs thừa" | Code nói WHAT. PRD nói WHY + WHO + WHEN. Cả hai cần thiết. |
| "Reverse-engineer nhanh thôi" | Brownfield PRD cần verify với stakeholder. Code ≠ intended behavior. |
| "Code stable rồi, không cần spec" | Team member mới cần context. Spec = onboarding accelerator. |

## Red Flags
- Generated PRD không verified với stakeholder
- Missing business context (WHY behind the code)
- Chỉ list features mà không có user stories / jobs
- Không cross-reference với existing docs

## Verification
- [ ] Generated PRD verified với stakeholder
- [ ] Business context (WHY) captured, not just WHAT
- [ ] User stories / JTBD included
- [ ] Gaps between code and intended behavior identified
