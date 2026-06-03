# Skill: /fis:ba cr — Change Request

## Khi nào dùng
Khi business đổi scope sau PRD đã Approved.

## Agent
BA Sarah / PM Lan

## Prompt mẫu
```
/fis:ba cr
CR-001: Thêm multi-tenant isolation
Delta: Agent execution isolated per tenant
Impact:
- Scope: +2 sprint (database schema + API middleware)
- Budget: +40h effort
- Risk: Migration existing data
Recommendation: Defer to Phase 2 (after M3)
Sign-off: [ ] PM [ ] SA [ ] Sponsor
```

## Output
- `artifacts/change-requests/CR-NNNN.md`
  - Mô tả delta (cũ → mới)
  - Impact: scope / schedule / budget / risk
  - Recommendation: approve / reject / defer
  - Sign-off section
