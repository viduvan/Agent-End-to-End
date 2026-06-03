# FIS Rules — Documentation

> **Tổng**: 7 rules chuẩn FIS | **Nguồn**: https://ai.fis.com.vn/library?tab=rules

## Rules là gì?

Rules là **nguyên tắc markdown** (`.md`) quy định cách agent phải hành xử khi thực hiện task. Khác với Hooks (code tự động chạy), Rules là **guidelines** được inject vào prompt context.

| | Rules | Hooks |
|---|---|---|
| **Format** | Markdown (`.md`) | JavaScript (`.cjs`) |
| **Cách hoạt động** | Inject vào prompt context | Tự động chạy trước/sau tool |
| **Enforced by** | LLM tuân thủ instructions | Code exit(0)/exit(2) |
| **Khi nào dùng** | Quy trình, ownership, routing | Bảo mật, validation, state |

---

## 7 Rules chuẩn FIS

| # | Rule | File | Áp dụng cho | Mục đích |
|---|------|------|-------------|----------|
| 1 | **Development Rules** | `development-rules.md` | DEV, SA, QA | Code quality, pre-commit, commit convention |
| 2 | **Documentation Management** | `documentation-management.md` | PM, docs-manager | Docs ownership, auto-sync, update triggers |
| 3 | **Orchestration Protocol** | `orchestration-protocol.md` | All agents | Delegation context, status protocol, context isolation |
| 4 | **Primary Workflow** | `primary-workflow.md` | All agents | End-to-end SDLC pipeline, workflow selection |
| 5 | **Skill Domain Routing** | `skill-domain-routing.md` | Orchestrator | Decision tree: Frontend/Backend/DevOps/AI skill choice |
| 6 | **Skill Workflow Routing** | `skill-workflow-routing.md` | Orchestrator | Execution order: plan→craft→test→ship + anti-patterns |
| 7 | **Team Coordination Rules** | `team-coordination-rules.md` | All agents in team | File ownership, git safety, handoff protocol |

---

## Chi tiết từng Rule

### 1. Development Rules
> Quy tắc phát triển code cho DEV, SA enforce khi review
- Code quality: PEP 8, type hints, 50 LOC/function, 300 LOC/file
- Pre-commit: ruff + mypy + eslint + prettier
- Pre-push: pytest + coverage ≥ 70% + bandit + detect-secrets
- Commit convention: `<type>(<scope>): <description>`

### 2. Documentation Management
> PM agent PHẢI cập nhật docs khi scope/architecture thay đổi
- 5 core docs + PM artifacts ownership matrix
- Auto-sync: `/fis:docs init/sync/export`
- Update triggers: thêm module, thay đổi scope, tech decision

### 3. Orchestration Protocol
> Subagent delegation context + status report format
- Delegation context mandatory fields (Task ID, Plan, Tools, Time)
- Status protocol: CREATED → IN_PROGRESS → COMPLETED/BLOCKED/FAILED
- Context isolation: subagent không đọc files ngoài scope
- Max depth = 1 (không spawn sub-subagent)

### 4. Primary Workflow
> End-to-end SDLC pipeline + workflow selection guide
- 6-phase pipeline: Elicit → Design → Plan → Build → Test → Ship
- Workflow selection table (9 workflows)
- Key rules: Plan before Build, Three Amigos before Code

### 5. Skill Domain Routing
> Decision tree cho chọn đúng skill theo domain
- Frontend: frontend-design, frontend-development, wireframe, threejs
- Backend: backend-development, databases, better-auth, payment
- Codebase: scout, gkg, repomix
- DevOps: devops, deploy, debug, security-scan
- AI: mcp-builder, agent-browser, ai-artist, agentize
- FIS Domain: bss-billing, fintech-vn, sap, ehrp

### 6. Skill Workflow Routing
> Execution order + 5 routing rules + anti-patterns
- New Feature: scout → plan → craft → test → fix → code-review → ship
- Bug Fix: debug → fix → test → code-review → ship
- Rules: Plan before Craft, Test after Craft, Review before Ship
- Parallel execution groups

### 7. Team Coordination Rules
> File ownership + git safety + communication protocol
- File ownership matrix (BA/SA/DEV/QA/DevOps/PM)
- Git: branch rules, commit rules, merge rules
- Handoff format between agents
- Conflict resolution: sequential, never parallel write

---

## Directory Structure

```
.claude/rules/
├── README.md                          ← Documentation (bạn đang đọc)
├── development-rules.md               ← Code quality, commit rules
├── documentation-management.md        ← Docs ownership, update triggers
├── orchestration-protocol.md          ← Subagent delegation protocol
├── primary-workflow.md                ← End-to-end SDLC pipeline
├── skill-domain-routing.md            ← Skill selection decision tree
├── skill-workflow-routing.md          ← Skill execution order
└── team-coordination-rules.md         ← File ownership, git safety
```
