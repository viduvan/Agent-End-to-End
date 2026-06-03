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
