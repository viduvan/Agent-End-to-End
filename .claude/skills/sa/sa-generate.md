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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Code đang chạy, architecture tốt rồi" | Running ≠ well-architected. Technical debt invisible cho đến khi scale. |
| "ADR viết sau khi ổn định" | "Ổn định" = quên tại sao chọn PostgreSQL. ADR ngay khi decide. |
| "Reverse-engineer nhanh thôi" | Brownfield TRD cần verify: code behavior = intended behavior? |

## Red Flags
- Generated TRD không verified với actual behavior
- Missing rationale (WHY this architecture)
- ADR không có alternatives considered
- Technical debt không identified

## Verification
- [ ] TRD verified against actual system behavior
- [ ] Rationale documented cho mỗi architecture decision
- [ ] ADR created cho mỗi significant tech choice
- [ ] Technical debt identified và cataloged
