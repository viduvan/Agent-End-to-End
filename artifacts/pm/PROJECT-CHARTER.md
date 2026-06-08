# PROJECT CHARTER — Agent-End-to-End

> **Mã dự án**: AE2E-2026
> **Version**: 1.0
> **Ngày tạo**: 2026-05-30
> **Trạng thái**: Draft → Pending Approval

---

## 1. Thông tin chung

| Mục | Chi tiết |
|-----|---------|
| **Tên dự án** | Agent-End-to-End: Multi-Agent System |
| **Sponsor** | _[Điền tên sponsor]_ |
| **Project Manager** | _[Điền]_ — kiêm nhiệm all roles |
| **Ngày khởi tạo** | 2026-05-30 |
| **Ngày dự kiến hoàn thành** | 2026-06-12 |

## 2. Business Case
Xây dựng hệ thống Multi-Agent phục vụ doanh nghiệp, tự động hóa quy trình xử lý nghiệp vụ thông qua AI agents. Giảm 40% effort thủ công, tăng accuracy, giảm thời gian xử lý.

## 3. High-level Scope

### In Scope
- Agent Orchestrator (LangGraph state machine)
- Specialized agents (Research, QA, Code)
- FastAPI REST + WebSocket API
- PostgreSQL + pgvector (RAG)
- Redis (Message broker)
- Streamlit Dashboard (MVP)
- Docker Compose deployment
- Documentation (PRD, TRD, API docs)

### Out of Scope
- Mobile application
- On-premise deployment
- Training LLM models (sử dụng pre-trained)

## 4. Milestones

| # | Milestone | Ngày | Deliverable |
|---|-----------|------|-------------|
| M1 | Core Engine | 2026-06-03 | Agent framework + API + DB |
| M2 | Quality Gate | 2026-06-05 | Tests ≥ 70% coverage |
| M3 | Documentation | 2026-06-08 | PRD, TRD, FS |
| M4 | Production | 2026-06-12 | CI/CD + Monitoring + Security |

## 5. Budget
_[TBD — ước tính nội bộ]_

## 6. Key Risks
- LLM model drift / pricing change
- 1-person team bottleneck
- Timeline aggressive (3.5 ngày DEV)

## 7. Success Criteria
- [ ] Multi-agent system chạy end-to-end
- [ ] Test coverage ≥ 70%
- [ ] API response time < 500ms (p95)
- [ ] Docker deploy thành công
- [ ] Documentation đầy đủ PRD/TRD

## 8. Phê duyệt

| Role | Tên | Chữ ký | Ngày |
|------|-----|--------|------|
| Sponsor | _[...]_ | | |
| PM | _[...]_ | | |

---
_Sinh bởi `/fis:pm charter` — FIS AI Delivery Framework_
