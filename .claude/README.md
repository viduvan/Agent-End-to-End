# .claude/ — FIS AI Delivery Framework

> **Multi-Agent System cho doanh nghiệp** — AI-powered SDLC automation platform.
>
> Tuân thủ 100% chuẩn [FIS AI Delivery Hub](https://ai.fis.com.vn/library).

---

## Kiến trúc tổng quan

```
.claude/
│
├── agents/          20 persona AI chuyên biệt
│   ├── 14 FIS Official (brainstormer, debugger, planner, researcher...)
│   ├──  5 SDLC Roles  (BA, SA, DevOps, Copywriter, DBA)
│   └──  1 DEV Orchestrator (natural language entrypoint)
│
├── skills/          60 files → 105 slash commands (/fis:xxx)
│   ├── ba/          10 skills — Elicit, PRD, DDD, Wireframe
│   ├── sa/           7 skills — TRD, Feature Spec, Code Review
│   ├── dev/         18 files  — Plan, Craft, Test, Ship, Scout, DEV index
│   ├── qa/           8 skills — TestSpec, Test Cases, Bug Report
│   ├── devops/       5 skills — Docker, Deploy, Debug, Security
│   ├── pm/           6 files  — Charter, RAID, Status, Retro
│   ├── cross-role/   2 files  — Docs, Research, Brainstorm
│   ├── ai-tools/     2 files  — MCP, AI Artist, Multimodal
│   ├── fis-domain/   1 file   — BSS, Fintech, SAP, EHRP
│   └── meta/         1 file   — Skill Creator, Help, Team
│
├── workflows/       16 quy trình end-to-end + indexes
│   ├── dev/          7 FIS workflows (WF-01 → WF-07) + DEV index
│   ├── devops/       2 FIS workflows (WF-08, WF-09) + 1 role
│   ├── ba/           2 role-specific workflows
│   ├── pm/           2 role-specific workflows
│   ├── qa/           1 role-specific workflow
│   └── sa/           1 role-specific workflow
│
├── hooks/           16 scripts bảo vệ tự động (.cjs)
│   ├── Pre-tool (5)  — privacy-block, scout-block, descriptive-name...
│   ├── Post-tool (3) — plan-format-kanban, session-state...
│   ├── Session (3)   — session-init, skill-dedup...
│   ├── Subagent (3)  — subagent-init, task-completed-handler...
│   └── User Input (2)— dev-rules-reminder, simplify-gate
│
├── rules/           10 quy tắc vận hành
│   ├── development-rules.md             — Code quality, commit convention
│   ├── documentation-management.md      — Docs ownership, update triggers
│   ├── orchestration-protocol.md        — Subagent delegation protocol
│   ├── primary-workflow.md              — End-to-end SDLC pipeline
│   ├── skill-domain-routing.md          — Skill selection decision tree
│   ├── skill-workflow-routing.md        — Skill execution order
│   ├── team-coordination-rules.md       — File ownership, git safety
│   ├── natural-language-dev-routing.md  — 🆕 NL intent → workflow routing
│   ├── dev-role-matrix.md               — 🆕 Agent chain per intent
│   └── skill-bundles → skills/dev/      — 🆕 Skill bundles (moved)
│
├── ARCHITECTURE.md  Kiến trúc thông tin tổng thể
├── .ckignore        Blocked directories (scout-block config)
└── .ck.json         Hook on/off configuration
```

---

## Cách hệ thống hoạt động

### 1. User gửi request

```
User: "Thêm tính năng authentication"
```

### 2. Orchestrator phân tích intent

```
Intent: Adding Feature + Auth
  → Workflow: WF-03 (adding-feature) + WF-04 (implementing-auth)
  → Skills:  /fis:plan, /fis:craft, /fis:security, /fis:test
  → Agent:   fullstack-developer (primary), code-reviewer (review)
  → Rules:   skill-workflow-routing (plan → craft → test → ship)
  → Hooks:   privacy-block (.env), simplify-gate (before ship)
```

### 3. Thực thi theo 5-Step Pattern

```
Context ──▶ Plan ──▶ Execute ──▶ Test ──▶ Ship
/fis:scout   /fis:plan  /fis:craft   /fis:test  /fis:ship
  10-20m      15-20m     30-180m      15-30m      5-15m
```

### 4. Hooks bảo vệ tự động

```
Agent ghi .env? → 🔴 privacy-block CHẶN → Hỏi user approve
Agent ship code? → 🟡 simplify-gate KIỂM TRA diff size
Agent tạo file? → 🟡 descriptive-name CẢNH BÁO nếu tên generic
```

---

## SDLC Pipeline (Multi-Agent)

```
  ┌────────────────────────────────────────────────────────────┐
  │                    ORCHESTRATOR                            │
  │  Rules: primary-workflow + skill-routing + team-coord      │
  └──────┬───────┬───────┬───────┬───────┬───────┬────────────┘
         │       │       │       │       │       │
    ┌────▼──┐┌───▼───┐┌──▼──┐┌──▼───┐┌──▼──┐┌───▼────┐
    │  BA   ││  SA   ││ DEV ││  QA  ││DevOp││  PM    │
    │Sarah  ││Marcus ││     ││Priya ││Tuấn ││ Lan    │
    └───┬───┘└───┬───┘└──┬──┘└──┬───┘└──┬──┘└───┬────┘
        │        │       │      │       │       │
   elicit    sa design  plan  test-spec devops  pm status
   ba create sa ddd    craft  test-cases deploy pm retro
   wireframe feature-  test   bug       debug  lessons
   3amigos   spec      ship   3amigos   fix    raid
```

---

## Quick Start

### Xem danh sách skills
```bash
/fis:help                    # Tổng quan
/fis:find-skills <keyword>   # Tìm skill
/fis:team                    # Liệt kê agents
```

### Chạy workflow phổ biến nhất
```bash
# Thêm feature mới (WF-03)
/fis:scout "find related code patterns"
/fis:plan "implement <feature> based on FS-0001"
/fis:craft "phase 1 — database schema"
/fis:test
/fis:ship
```

### Spawn agent chuyên biệt
```bash
/spawn fullstack-developer   # Code
/spawn code-reviewer         # Review
/spawn debugger              # Debug
/spawn researcher            # Research
/spawn tester-qa             # Test
```

---

## Đọc thêm

| Component | README | Nội dung |
|-----------|--------|----------|
| **Agents** | [agents/README.md](agents/README.md) | 20 agents, dev-orchestrator entrypoint |
| **Skills** | [skills/README.md](skills/README.md) | 105 commands, 10 categories |
| **Workflows** | [workflows/README.md](workflows/README.md) | 9 FIS + 7 role workflows |
| **Hooks** | [hooks/README.md](hooks/README.md) | 16 security hooks |
| **Rules** | [rules/README.md](rules/README.md) | 7 governance rules |
| **Architecture** | [ARCHITECTURE.md](ARCHITECTURE.md) | System model, routing, ownership |

---

## Compliance Matrix

| FIS Tab | Count | Local | Status |
|---------|-------|-------|--------|
| Workflow | 9 | 9 + 7 role = 16 | ✅ |
| Skill /fis: | 82 | 82 (60 files incl. indexes) | ✅ |
| Agent persona | 14 | 14 + 5 role + 1 orchestrator = 20 | ✅ |
| Hook bảo mật | 16 | 16 | ✅ |
| Rule chuẩn FIS | 7 | 7 | ✅ |

> **Source**: [ai.fis.com.vn/library](https://ai.fis.com.vn/library) — Synced 2026-06-01
