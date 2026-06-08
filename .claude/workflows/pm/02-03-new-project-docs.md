# Workflow PM-2: Bắt đầu dự án mới (PM Perspective)

## Kịch bản
PM tham gia vào Workflow 01 (New Project) với vai trò governance.

## Skills: `/fis:pm`, `/fis:plan`, `/fis:ba personas`

## PM Responsibilities trong WF-01

### Trước khi DEV bắt đầu
1. Charter đã ký ✅
2. Stakeholder register ✅
3. Risk register ✅
4. RAID log ✅
5. Team personas ✅

### Trong khi DEV code
- Daily standup: block gì? cần gì?
- RAID log update: issue mới? action overdue?
- Stakeholder Q&A: trả lời trong 4h

### Sau mỗi milestone
- Status report → sponsor
- Lessons learned → team
- Gate review → go/no-go

## Checklist Phụ lục A (FIS)
- [ ] A.1.1 Khởi tạo dự án có sử dụng AI
- [ ] A.1.2 Bảo mật khi sử dụng AI
- [ ] A.1.3 Đánh giá định kỳ hiệu quả AI
- [ ] A.1.4 Quản lý rủi ro AI
- [ ] A.1.5 Tuân thủ quy trình review

---

# Workflow PM-3: Viết tài liệu (PM Perspective)

## Skills: `/fis:docs`, `/fis:pm`

## PM sở hữu:
- `docs/project-overview.md` — mục tiêu, scope, success criteria
- `artifacts/pm/PROJECT-CHARTER.md`
- `artifacts/pm/STAKEHOLDER-REGISTER.md`
- `artifacts/pm/COMMS-PLAN.md`
- `artifacts/pm/RISK-REGISTER.md`
- `artifacts/pm/RAID-LOG.md`
- `artifacts/pm/status-*.md`
- `artifacts/pm/LESSONS-*.md`
- `artifacts/pm/retro-*.md`

## BA/SA/DEV sở hữu:
- PRD, TRD, FS, TestSpec, API docs
- PM review nhưng KHÔNG viết

## Commands:
```
/fis:docs init       # Tạo docs khung (greenfield)
/fis:docs sync       # Cập nhật docs từ code (brownfield)
/fis:docs export     # Xuất .docx cho sponsor ký
```
