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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Scope creep nhỏ, thêm vào sprint luôn" | Scope creep nhỏ × nhiều lần = missed deadline. Formal CR process. |
| "Business urgent, skip impact analysis" | Urgent ≠ skip process. Quick impact analysis (30 phút) tốt hơn blind change. |
| "CR approved miệng rồi" | Verbal approval = no paper trail. Written sign-off bắt buộc. |

## Red Flags
- CR không có impact analysis (scope, schedule, budget, risk)
- Verbal approval mà không written sign-off
- CR bypasses review process vì "urgent"
- Không rollback plan cho change

## Verification
- [ ] Impact analysis: scope, schedule, budget, risk
- [ ] Written sign-off (không chỉ verbal)
- [ ] Rollback plan nếu change fails
- [ ] Updated PRD/FSD after CR approved
