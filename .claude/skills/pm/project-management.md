# Skill: /fis:project-management — Sync & Governance

## Khi nào dùng
Đồng bộ plan status, track progress, governance checks.

## Agent
PM Lan

## Prompt mẫu

### Track progress
```
/fis:project-management
Quét tất cả plans/*/plan.md, đếm checkbox [x]/[ ].
So sánh actual vs planned timeline.
Highlight phase nào bị delay > 1 ngày.
```

### Governance check
```
/fis:project-management
Kiểm tra tuân thủ checklist Phụ lục A FIS:
- A.1.1 Khởi tạo dự án có sử dụng AI ✅/❌
- A.1.2 Bảo mật khi sử dụng AI ✅/❌
- A.1.3 Đánh giá định kỳ ✅/❌
Liệt kê items chưa hoàn thành + action cần làm.
```

### Reconcile artifacts
```
/fis:reconcile
Đồng bộ artifact giữa các công cụ.
Kiểm tra:
- PRD có tương ứng TRD không?
- TRD có Feature Spec không?
- Feature Spec có TestSpec không?
- Tất cả artifact status đúng (Draft/Ready/Approved)?
```
