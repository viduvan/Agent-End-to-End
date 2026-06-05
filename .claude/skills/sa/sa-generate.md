# Skill: /fis:sa generate — Sinh TRD Brownfield ⭐

## Khi nào dùng
Code trước, TRD sau (đúng case dự án này).

## Agent
SA Marcus

## Prompt mẫu
```
/fis:sa generate
Đọc codebase src/ và sinh TRD:
- Reverse-engineer architecture từ code hiện tại
- Extract API contract từ FastAPI routes
- Extract database schema từ SQLAlchemy models
- Identify design patterns đang dùng
- Gap analysis: undocumented decisions, missing NFRs
- Output: artifacts/trd/TRD-0001.md + ADRs
```

## Output
- `artifacts/trd/TRD-NNNN.md` (reverse-engineered)
- `artifacts/decisions/ADR-NNNN.md` cho mỗi tech choice
