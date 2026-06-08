# RAID LOG — Agent-End-to-End

> **Cập nhật**: 2026-05-30
> **Owner**: PM
> **Review**: Hàng tuần (Thứ Sáu)

---

## Risks (Dự đoán)

| ID | Risk | P | I | P×I | Strategy | Owner | Status |
|----|------|---|---|-----|----------|-------|--------|
| R-001 | LLM pricing change đột ngột | 3 | 4 | 12 | Mitigate (fallback local model) | DEV | Open |
| R-002 | 1-person bottleneck (nghỉ ốm) | 2 | 5 | 10 | Accept + document code | PM | Open |
| R-003 | Timeline quá aggressive (3.5 ngày DEV) | 4 | 4 | 16 | Mitigate (cut scope nếu cần) | PM | Open |
| R-004 | Prompt injection từ user input | 3 | 5 | 15 | Mitigate (input sanitization) | DEV | Open |
| R-005 | Model hallucination trong output | 3 | 3 | 9 | Mitigate (output validation) | DEV | Open |

## Actions (Cần làm)

| ID | Action | Owner | Due | Status |
|----|--------|-------|-----|--------|
| A-001 | Setup project structure | DEV | 2026-05-30 | ✅ Done |
| A-002 | Implement core agent framework | DEV | 2026-06-01 | ⬜ Todo |
| A-003 | Implement REST API | DEV | 2026-06-02 | ⬜ Todo |
| A-004 | Setup Docker Compose | DEV | 2026-06-03 | ⬜ Todo |
| A-005 | Write unit tests | DEV | 2026-06-03 | ⬜ Todo |

## Issues (Đã xảy ra)

| ID | Issue | Severity | Owner | Status | Resolution |
|----|-------|----------|-------|--------|------------|
| _Chưa có_ | | | | | |

## Decisions (Quyết định)

| ID | Decision | Lý do | Ngày | Link |
|----|----------|-------|------|------|
| D-001 | Dùng LangGraph cho orchestration | State machine control, production-ready | 2026-05-30 | ADR-001 |
| D-002 | FastAPI cho backend | Python native, async, OpenAPI auto-gen | 2026-05-30 | ADR-002 |
| D-003 | Streamlit cho MVP UI | Fast prototype, chuyển Next.js sau | 2026-05-30 | ADR-003 |
| D-004 | PostgreSQL + pgvector | Structured + vector cùng 1 DB | 2026-05-30 | ADR-004 |

---
_Sinh bởi `/fis:pm raid-log` — FIS AI Delivery Framework_
