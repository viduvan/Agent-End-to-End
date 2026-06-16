# Skill: /fis:plan — Lập kế hoạch Implementation

## Khi nào dùng
Sau khi nhận Feature Spec Ready, trước khi bắt đầu code.

## Agent
Tech Lead (Planner)

## Input
- Feature Spec (FS-NNNN) hoặc requirement description
- Codebase context (từ `/fis:scout`)

## Output
- `plans/<date>-<feature>/plan.md` — overview + dependency graph
- `plans/<date>-<feature>/phase-01-*.md` ... `phase-N-*.md`

## Quy trình

### Bước 1: Phân tích requirement
Đọc Feature Spec, xác định:
- Scope (files cần tạo/sửa)
- Dependencies (thứ tự thực hiện)
- Risks (phần nào khó nhất)
- Unknowns (cần research gì)

### Bước 2: Chia phases
Mỗi phase thỏa mãn:
- ≤ 1 ngày effort
- ≤ 300 dòng diff
- Deployable independently
- Có test riêng

### Bước 3: Viết plan files
Mỗi phase file ghi rõ:
- Files cần tạo/sửa
- Dependencies với phase trước
- Test cần viết
- Definition of Done

## Prompt mẫu

### Greenfield (dự án mới)
```
/fis:plan
Thiết kế kế hoạch implementation cho multi-agent system:
- Agent orchestrator (LangGraph state machine)
- 3 specialized agents (QA, Research, Code)
- FastAPI REST + WebSocket API
- PostgreSQL + pgvector cho RAG
- Redis cho agent communication
- Docker Compose deployment
Chia thành phases, mỗi phase ≤ 1 ngày, deployable independently.
```

### Feature addition
```
/fis:plan
Thiết kế kế hoạch cho feature email notification:
- Đọc Feature Spec FS-0001
- Chia thành phases (mỗi phase ≤ 1 ngày)
- Mỗi phase ghi rõ: files cần tạo/sửa, dependencies, test cần viết
- Xác định thứ tự để mỗi phase deployable independently
```

### Refactoring
```
/fis:plan
Refactor UserService theo Single Responsibility Principle.
Hiện trạng: 1 class 800 dòng xử lý auth + profile + preferences.
Mục tiêu: tách thành 3 service, giữ facade backward compatible.
Chia phase nhỏ, mỗi phase 1 PR, không big-bang.
```

## Nguyên tắc
- 1 ngày plan = tiết kiệm 3 ngày debug
- Phase nhỏ: ≤ 1 ngày effort, ≤ 300 dòng diff
- Dependencies rõ ràng giữa phases
- Mỗi phase có test riêng
- Plan file là living document — update khi thực tế thay đổi

## Vertical Slicing (từ agent-skills)
Mỗi phase PHẢI là một "vertical slice" — chạy được end-to-end (dù nhỏ):
- ❌ Phase 1: Backend models → Phase 2: Backend APIs → Phase 3: Frontend
- ✅ Phase 1: User registration (model + API + UI) → Phase 2: Login (model + API + UI)

Vertical slice đảm bảo:
- Mỗi phase deployable independently
- Demo được cho stakeholder
- Test được end-to-end (không chỉ unit)

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Plan mất thời gian, code luôn" | 1 ngày plan = tiết kiệm 3 ngày debug. Không plan = không biết khi nào xong. |
| "Plan quá chi tiết sẽ cứng nhắc" | Plan là living document — update khi thực tế thay đổi. Plan chi tiết ≠ plan cố định. |
| "Feature nhỏ không cần plan" | Mọi feature > 50 LOC đều cần plan. "Nhỏ" thường là đánh giá sai. |
| "Tôi plan trong đầu rồi" | Plan trong đầu = không share được, không track được, không review được. |

## Red Flags
- Phase > 300 LOC diff
- Phase không có test riêng
- Plan không có Definition of Done
- Dependencies giữa phases không rõ ràng
- Plan không được update khi thực tế thay đổi
- Horizontal slicing (tách theo layer thay vì theo feature)

## Verification
Sau khi plan xong, xác nhận:
- [ ] Mỗi phase ≤ 1 ngày, ≤ 300 LOC
- [ ] Mỗi phase có test riêng
- [ ] Mỗi phase là vertical slice (chạy được end-to-end)
- [ ] Dependencies rõ ràng (phase nào phụ thuộc phase nào)
- [ ] Definition of Done cho từng phase
- [ ] Risks và unknowns đã được identify
