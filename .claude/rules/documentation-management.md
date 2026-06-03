# Documentation Management — Quản lý tài liệu chuẩn FIS

> Agent `project-manager` BẮT BUỘC phải cập nhật các tài liệu này khi thực hiện công việc.

## Tài liệu bắt buộc

### Core Docs (PM owns)
| File | Vị trí | Cập nhật khi |
|------|--------|-------------|
| Project Overview | `docs/project-overview.md` | Scope thay đổi |
| System Architecture | `docs/system-architecture.md` | Architecture decision |
| Code Standards | `docs/code-standards.md` | Convention mới |
| Codebase Summary | `docs/codebase-summary.md` | Module mới/xóa |
| Development Roadmap | `docs/development-roadmap.md` | Phase mới |

### PM Artifacts (PM owns)
| File | Vị trí | Cập nhật khi |
|------|--------|-------------|
| Project Charter | `artifacts/pm/PROJECT-CHARTER.md` | Scope/budget thay đổi |
| Stakeholder Register | `artifacts/pm/STAKEHOLDER-REGISTER.md` | Team thay đổi |
| RAID Log | `artifacts/pm/RAID-LOG.md` | Risks/Actions/Issues mới |
| Status Report | `artifacts/pm/status-*.md` | Hàng tuần (Thứ Sáu) |

### BA/SA Artifacts
| File | Owner | Vị trí |
|------|-------|--------|
| PRD | BA | `artifacts/prd/PRD-NNNN.md` |
| Feature Spec | BA+SA | `artifacts/feature-specs/FS-NNNN.md` |
| TRD | SA | `artifacts/trd/TRD-NNNN.md` |
| ADR | SA | `artifacts/decisions/ADR-NNNN.md` |
| TestSpec | QA | `artifacts/test-specs/TESTSPEC-NNNN.md` |

## Quy tắc cập nhật

### PHẢI cập nhật khi:
1. **Thêm module mới** → `codebase-summary.md` + `system-architecture.md`
2. **Thay đổi scope** → `PROJECT-CHARTER.md` + Change Request
3. **Tech decision mới** → ADR + `system-architecture.md`
4. **Bug P0/P1** → `RAID-LOG.md` + postmortem
5. **Kết thúc sprint** → Status Report + Lessons Learned

### KHÔNG được:
- ❌ Code mà không update docs tương ứng
- ❌ Xóa docs cũ (chỉ archive)
- ❌ Để docs inconsistent với code > 1 sprint

## Auto-sync Commands
```bash
/fis:docs init       # Tạo docs khung (greenfield)
/fis:docs sync       # Cập nhật docs từ code (brownfield)
/fis:docs export     # Xuất .docx cho sponsor ký
```

## Đối tượng áp dụng
- **project-manager** agent — BẮT BUỘC tuân thủ
- **docs-manager** agent — Hỗ trợ PM
