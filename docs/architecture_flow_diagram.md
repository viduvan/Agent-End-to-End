# 🏗️ FIS AI Delivery — Kiến Trúc Luồng Hoạt Động End-to-End

## Mục Lục

1. [Tổng Quan Hệ Thống](#1-tổng-quan-hệ-thống)
2. [Luồng SDLC Pipeline](#2-luồng-sdlc-pipeline)
3. [Role 1: BA — Business Analyst](#3-role-1-ba--business-analyst)
4. [Role 2: SA — Solutions Architect](#4-role-2-sa--solutions-architect)
5. [Role 3: DEV — Development](#5-role-3-dev--development)
6. [Role 4: QA — Quality Assurance](#6-role-4-qa--quality-assurance)
7. [Role 5: DevOps — SRE](#7-role-5-devops--sre)
8. [Role 6: PM — Project Manager](#8-role-6-pm--project-manager)
9. [Hooks Lifecycle](#9-hooks-lifecycle)
10. [Rules Engine](#10-rules-engine)
11. [Handoff & Escalation](#11-handoff--escalation)

---

## 1. Tổng Quan Hệ Thống

### System Model — Luồng xử lý tổng quát

```mermaid
flowchart TB
    subgraph INPUT["🎯 User Intent"]
        U["User nói tự nhiên<br/>(VN hoặc EN)"]
    end

    subgraph HOOKS_IN["🪝 Input Hooks"]
        H1["dev-rules-reminder.cjs<br/>Inject dev rules"]
        H2["simplify-gate.cjs<br/>Chặn ship code chưa refactor"]
    end

    subgraph ROUTING["🧭 Routing Engine"]
        R1["natural-language-dev-routing<br/>Phân loại intent"]
        R2["skill-domain-routing<br/>Chọn skill theo domain"]
        R3["skill-workflow-routing<br/>Chọn workflow sequence"]
        R4["auto-inject-rules<br/>Inject skill tự động"]
    end

    subgraph ORCHESTRATOR["🧠 DEV Orchestrator"]
        O1["Intent Classification<br/>HIGH / MEDIUM / LOW"]
        O2["Workflow Selection"]
        O3["Agent Spawning"]
        O4["Skill Bundle Activation"]
    end

    subgraph ROLES["👥 6 SDLC Roles"]
        BA["BA Sarah"]
        SA["SA Marcus"]
        DEV["DEV Team<br/>8 agents"]
        QA["Tester Priya"]
        DEVOPS["DevOps Tuấn"]
        PM["PM Lan"]
    end

    subgraph HOOKS_TOOL["🪝 Tool Hooks"]
        HT1["privacy-block.cjs"]
        HT2["scout-block.cjs"]
        HT3["descriptive-name.cjs"]
    end

    subgraph OUTPUT["📦 Artifacts"]
        ART["PRD, TRD, FS, Plans,<br/>Code, Tests, Configs,<br/>Status Reports"]
    end

    U --> H1 --> H2 --> R1
    R1 --> O1
    O1 --> R2 --> R3 --> R4
    R4 --> O2 --> O3 --> O4
    O4 --> ROLES
    BA --> HT1 --> HT2 --> HT3
    SA --> HT1
    DEV --> HT1
    QA --> HT1
    DEVOPS --> HT1
    PM --> HT1
    HT3 --> ART
```

### Core Layers

| Layer | Đường dẫn | Vai trò | Số lượng |
|-------|-----------|---------|----------|
| **Agents** | `.claude/agents/` | Persona roles thực thi công việc | 21 agents |
| **Skills** | `.claude/skills/` | Slash-command capabilities | 10 domains, 70+ skills |
| **Workflows** | `.claude/workflows/` | Quy trình SDLC theo thứ tự | 6 role dirs, 20+ workflows |
| **Rules** | `.claude/rules/` | Routing, orchestration, quality gates | 12 rules |
| **Hooks** | `.claude/hooks/` | Guardrails tự động (pre/post/session) | 16 hooks |
| **Artifacts** | `artifacts/` | Output bền vững (PRD, TRD, FS, Tests...) | 8 loại |

---

## 2. Luồng SDLC Pipeline

### Full Pipeline — 6 Phases

```mermaid
flowchart LR
    subgraph P1["Phase 1: ELICIT"]
        BA_W["BA Role<br/>🧑‍💼 BA Sarah"]
    end

    subgraph P2["Phase 2: DESIGN"]
        SA_W["SA Role<br/>🏛️ SA Marcus"]
    end

    subgraph P3["Phase 3: PLAN & BUILD"]
        DEV_W["DEV Role<br/>👨‍💻 8 Agents"]
    end

    subgraph P4["Phase 4: TEST & REVIEW"]
        QA_W["QA Role<br/>🧪 Tester Priya"]
    end

    subgraph P5["Phase 5: SHIP & DEPLOY"]
        DEVOPS_W["DevOps Role<br/>🚀 DevOps Tuấn"]
    end

    subgraph P6["Phase 6: GOVERN & REPORT"]
        PM_W["PM Role<br/>📊 PM Lan"]
    end

    BA_W -->|"PRD Approved"| SA_W
    SA_W -->|"TRD + FS Approved"| DEV_W
    DEV_W -->|"Code + Tests"| QA_W
    QA_W -->|"Tests Pass + Review OK"| DEVOPS_W
    DEVOPS_W -->|"Deployed"| PM_W
    PM_W -.->|"Feedback / CR"| BA_W
```

### Artifacts Flow giữa các Roles

```
BA:     elicit → PRD → wireframe → PRD sign-off
            ↓ (PRD Approved)
SA:     TRD → DDD technical model → Feature Spec → TRD sign-off
            ↓ (TRD + FS Approved)
DEV:    scout → plan → craft → test → review
            ↓ (Code + Tests Pass)
QA:     test spec → test cases → verification → bug report
            ↓ (QA Sign-off)
DevOps: build → deploy → monitor → incident response
            ↓ (Deployed)
PM:     charter → RAID/risk → status → lessons learned
```

---

## 3. Role 1: BA — Business Analyst

### 👤 Agent: BA Sarah (`business-analyst.md`)

> *"Senior Business Analyst, domain expert, user-centric, detail-oriented"*

### Sơ đồ hoạt động BA

```mermaid
flowchart TD
    subgraph BA_FLOW["🧑‍💼 BA Role Flow"]
        direction TB
        START["Nhận yêu cầu<br/>từ User/PM"]

        subgraph DISCOVERY["Phase 1: Discovery (Ngày 1-2)"]
            E1["1. JTBD Interview<br/>/fis:elicit"]
            E2["2. Event Storming<br/>/fis:elicit"]
            E3["3. Impact Mapping<br/>/fis:elicit"]
        end

        subgraph MODELING["Phase 2: Modeling (Ngày 3-4)"]
            M1["4. Domain Model DDD<br/>/fis:ba ddd-business"]
            M2["5. Business Process BPMN<br/>/fis:ba sod"]
        end

        subgraph DOCUMENTATION["Phase 3: Documentation (Ngày 5-7)"]
            D1["6. PRD Draft<br/>/fis:ba create"]
            D2["7. Feature Specs<br/>/fis:ba fsd"]
            D3["8. Wireframes<br/>/fis:wireframe"]
        end

        subgraph REVIEW["Phase 4: Review (Ngày 8)"]
            R1["9. Three Amigos Review<br/>/fis:three-amigos:review-prd"]
            R2["10. Stakeholder Review"]
            R3["11. Finalize PRD"]
            R4["12. ✅ Handoff to SA"]
        end

        START --> E1 --> E2 --> E3
        E3 --> M1 --> M2
        M2 --> D1 --> D2 --> D3
        D3 --> R1 --> R2 --> R3 --> R4
    end
```

### BA — Chi tiết Components

#### 🤖 Agents sử dụng

| Agent | File | Vai trò trong BA |
|-------|------|-----------------|
| **business-analyst** | [business-analyst.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/business-analyst.md) | Primary — Thực hiện tất cả BA tasks |
| **brainstormer** | [brainstormer.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/brainstormer.md) | Support — Brainstorm giải pháp nghiệp vụ |
| **copywriter** | [copywriter.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/copywriter.md) | Support — Viết content PRD/user stories |

#### 🎯 Skills kích hoạt

| Skill | File | Mô tả hoạt động |
|-------|------|-----------------|
| `/fis:elicit` | [elicit.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/ba/elicit.md) | Phỏng vấn JTBD, Event Storming, Impact Mapping → extract personas, pain/gain points |
| `/fis:ba create` | [ba-create.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/ba/ba-create.md) | Tạo PRD mới từ notes → `artifacts/prd/PRD-NNNN.md` |
| `/fis:ba generate` | [ba-generate.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/ba/ba-generate.md) | Reverse-engineer PRD từ codebase (brownfield) |
| `/fis:ba ddd-business` | [ba-ddd-business.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/ba/ba-ddd-business.md) | Domain modeling: Bounded Contexts, Ubiquitous Language, Context Map |
| `/fis:ba sod` | [ba-sod.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/ba/ba-sod.md) | BPMN process flow + decision tables |
| `/fis:ba fsd` | [ba-fsd.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/ba/ba-fsd.md) | Functional Spec chi tiết cho từng module |
| `/fis:ba cr` | [ba-cr.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/ba/ba-cr.md) | Change Request management → `artifacts/change-requests/CR-NNNN.md` |
| `/fis:wireframe` | [wireframe.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/ba/wireframe.md) | Sketch UI flow cho main screens |
| `/fis:three-amigos:review-prd` | [three-amigos-review-prd.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/ba/three-amigos-review-prd.md) | BA + SA + QA sign-off PRD |
| `/fis:scenario` | cross-role | Sinh edge cases cho requirements (12 chiều) |
| `/fis:predict` | cross-role | 5 persona tranh luận chiến lược |

#### 📋 Workflows

| Workflow | File | Nội dung |
|----------|------|----------|
| **BA-1: Elicit Requirements** ⭐ | [01-elicit-requirements.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/ba/01-elicit-requirements.md) | 12 bước: Discovery → Modeling → Documentation → Review |
| **BA-2/3/4: Feature/Docs/Multimodal** | [02-04-feature-docs-multimodal.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/ba/02-04-feature-docs-multimodal.md) | PRD cho feature mới, docs alignment, multimodal assets |

#### 📏 Rules áp dụng

| Rule | Cách tác động |
|------|--------------|
| [team-coordination-rules.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/team-coordination-rules.md) | BA chỉ write `artifacts/prd/`, `artifacts/wireframes/` — read-only mọi thứ khác |
| [primary-workflow.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/primary-workflow.md) | Three Amigos trước Code: BA + SA + QA align |

#### 🪝 Hooks can thiệp

| Hook | Khi nào chạy | Tác động |
|------|-------------|----------|
| `privacy-block.cjs` | Pre-tool | Chặn BA đọc `.env`, secrets |
| `descriptive-name.cjs` | Pre-tool | Enforce tên file PRD descriptive |
| `session-init.cjs` | Session start | Detect project type, load BA context |

#### 📦 Output Artifacts

```
artifacts/prd/PRD-NNNN-<name>.md          ← PRD document
artifacts/feature-specs/FS-NNNN-<name>.md ← Feature Spec
artifacts/wireframes/                      ← UI wireframes
artifacts/change-requests/CR-NNNN.md       ← Change Requests
```

---

## 4. Role 2: SA — Solutions Architect

### 👤 Agent: SA Marcus (`solutions-architect.md`)

> *"Solutions Architect, cloud-native expert, scalability-first, security-aware"*

### Sơ đồ hoạt động SA

```mermaid
flowchart TD
    subgraph SA_FLOW["🏛️ SA Role Flow"]
        direction TB
        INPUT["Nhận PRD Approved<br/>từ BA"]

        subgraph DESIGN["Phase 1: Architecture Design"]
            S1["1. TRD Creation<br/>/fis:sa design"]
            S2["2. ADR cho mỗi tech choice<br/>/fis:adr"]
            S3["3. C4 Diagrams<br/>/fis:excalidraw"]
        end

        subgraph TECH_MODEL["Phase 2: Technical Modeling"]
            T1["4. DDD Technical Layer<br/>/fis:sa ddd-tech"]
            T2["5. Feature Spec synthesis<br/>/fis:sa feature-spec"]
        end

        subgraph REVIEW_SA["Phase 3: Review"]
            R1["6. Three Amigos Review<br/>/fis:three-amigos:review-trd"]
            R2["7. ✅ Handoff to DEV"]
        end

        INPUT --> S1 --> S2 --> S3
        S3 --> T1 --> T2
        T2 --> R1 --> R2
    end
```

### SA — Chi tiết Components

#### 🤖 Agents sử dụng

| Agent | File | Vai trò trong SA |
|-------|------|-----------------|
| **solutions-architect** | [solutions-architect.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/solutions-architect.md) | Primary — Architecture design, TRD, ADR |
| **researcher** | [researcher.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/researcher.md) | Support — Nghiên cứu tech options, trade-off analysis |
| **security-auditor** | [security-auditor.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/security-auditor.md) | Support — Security review cho auth/payment decisions |

#### 🎯 Skills kích hoạt

| Skill | File | Mô tả hoạt động |
|-------|------|-----------------|
| `/fis:sa design` | [sa-design.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/sa/sa-design.md) | Tạo TRD: architecture, tech stack, API contract, NFR |
| `/fis:sa ddd-tech` | [sa-ddd-tech.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/sa/sa-ddd-tech.md) | DDD tech: data model, API mapping, sequence diagrams |
| `/fis:sa feature-spec` | [sa-feature-spec.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/sa/sa-feature-spec.md) | Synthesis FS từ TRD + DDD-tech → sẵn sàng cho DEV |
| `/fis:sa generate` | [sa-generate.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/sa/sa-generate.md) | Reverse-engineer TRD từ code (brownfield) |
| `/fis:sa review` | [sa-review.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/sa/sa-review.md) | Review code/PR với adversarial mindset |
| `/fis:adr` | [adr.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/adr.md) | Architecture Decision Records |
| `/fis:three-amigos:review-trd` | [three-amigos-review-trd.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/sa/three-amigos-review-trd.md) | BA + SA + QA sign-off TRD |
| `/fis:code-review` | [code-review.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/sa/code-review.md) | Review PR — anti-pattern detection |
| `/fis:scout` | [scout.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/scout.md) | Khám phá codebase, dependency mapping |
| `/fis:graphify` | cross-role | Knowledge graph cho architecture analysis |
| `/fis:gkg` | cross-role | GitLab Knowledge Graph — dependency analysis |

#### 📋 Workflows (10 SA Workflows)

| Workflow | Nội dung | Skills chính |
|----------|----------|-------------|
| **SA-1: Dự án mới** ⭐ | PRD → TRD → ADR → DDD-tech → FS → sign-off | `sa design`, `adr`, `sa ddd-tech`, `sa feature-spec` |
| **SA-2: Dự án hiện có** | Scout → GKG → reverse-engineer TRD | `scout`, `gkg`, `sa generate` |
| **SA-3: Thêm feature** | Review PRD → update TRD → FS → code review | `sa design`, `sa feature-spec`, `code-review` |
| **SA-4: Refactoring** | Review plan → approve arch changes → verify API compat | `scout`, `plan` |
| **SA-5: Auth** | Chọn auth approach → ADR → OWASP review → RBAC | `sa design`, `security` |
| **SA-6: REST API** | API contract design → review → load test | `backend-development`, `databases` |
| **SA-7: Payment** | Security review → ADR provider → webhook security | `security` |
| **SA-8: Documentation** | TRD, System Architecture, ADRs, C4 Diagrams | `docs`, `llms` |
| **SA-9: Bảo trì** | Tech debt assessment → modernization → security scan | `scout`, `fix`, `security-scan` |
| **SA-10: GKG Analysis** | Dependency graph → circular deps → coupling hotspots | `gkg`, `scout`, `graphify` |

All 10 workflows defined in: [01-10-all-workflows.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/sa/01-10-all-workflows.md)

#### 📏 Rules áp dụng

| Rule | Cách tác động |
|------|--------------|
| [team-coordination-rules.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/team-coordination-rules.md) | SA chỉ write `artifacts/trd/`, `artifacts/decisions/`, `docs/system-architecture.md` |
| [dev-role-matrix.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/dev-role-matrix.md) | DEV escalate lên SA khi: architecture change, new dependency, security concern |
| [auto-inject-rules.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/auto-inject-rules.md) | Auto-inject `/fis:secure` trước plan khi intent = auth/payment |

#### 📦 Output Artifacts

```
artifacts/trd/TRD-NNNN-<name>.md       ← Technical Reference Document
artifacts/decisions/ADR-NNN-<name>.md   ← Architecture Decision Records
artifacts/feature-specs/FS-NNNN.md      ← Feature Spec (for DEV)
docs/system-architecture.md             ← System Architecture doc
```

---

## 5. Role 3: DEV — Development

### 👤 Agent: DEV Orchestrator + 8 Sub-agents

> *"DEV Orchestrator là bộ não trung tâm — user chỉ cần nói tự nhiên"*

### Sơ đồ hoạt động DEV

```mermaid
flowchart TD
    subgraph DEV_FLOW["👨‍💻 DEV Role Flow"]
        direction TB
        INPUT["Nhận FS Approved<br/>từ SA"]

        subgraph CLASSIFY["Bước 1: Intent Classification"]
            C1["DEV Orchestrator<br/>Phân loại intent"]
            C2{"Confidence?"}
            C3["HIGH → Route thẳng"]
            C4["MEDIUM → Xác nhận 1 câu"]
            C5["LOW → Hỏi 1-3 câu"]
        end

        subgraph SELECT["Bước 2-4: Select & Activate"]
            S1["Chọn Workflow<br/>(WF-01 → WF-09)"]
            S2["Spawn Agent Chain<br/>(planner → dev → reviewer)"]
            S3["Kích hoạt Skill Bundle"]
            S4["Auto-inject Rules<br/>(source-check, secure, doubt)"]
        end

        subgraph EXECUTE["Bước 5: Execute"]
            direction LR
            E1["🔍 Scout<br/>Khám phá code"]
            E2["📋 Plan<br/>Chia phases"]
            E3["⚒️ Craft<br/>Code phase N"]
            E4["🧪 Test<br/>Verify phase N"]
            E5["🔄 Repeat<br/>Next phase"]
            E6["📝 Review<br/>Code review"]
        end

        INPUT --> C1 --> C2
        C2 -->|HIGH| C3 --> S1
        C2 -->|MEDIUM| C4 --> S1
        C2 -->|LOW| C5 --> S1
        S1 --> S2 --> S3 --> S4
        S4 --> E1 --> E2 --> E3 --> E4
        E4 --> E5 --> E3
        E4 --> E6
    end
```

### DEV — Chi tiết Components

#### 🤖 Agents sử dụng (8 agents + 1 orchestrator)

| Agent | File | Vai trò | Khi nào spawn |
|-------|------|---------|--------------|
| **dev-orchestrator** | [dev-orchestrator.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/dev-orchestrator.md) | 🧠 Bộ não trung tâm — phân loại intent, chọn workflow, spawn agents | **MẶC ĐỊNH** — entry point |
| **planner** | [planner.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/planner.md) | Lên kế hoạch implementation, chia phases | `add_feature`, `new_project`, `refactor` |
| **fullstack-developer** | [fullstack-developer.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/fullstack-developer.md) | Code frontend + backend | `add_feature`, `auth`, `payment`, `bug_fix` |
| **debugger** | [debugger.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/debugger.md) | Debug root cause, log analysis | `bug_fix` |
| **code-reviewer** | [code-reviewer.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/code-reviewer.md) | Review PR, detect anti-patterns | Sau `craft`, trước `ship` |
| **code-simplifier** | [code-simplifier.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/code-simplifier.md) | Refactor, giảm complexity | `refactor` |
| **database-admin** | [database-admin.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/database-admin.md) | Schema, migration, query optimization | `database` |
| **ui-ux-designer** | [ui-ux-designer.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/ui-ux-designer.md) | Design system, components, responsive | `frontend_ui` |
| **researcher** | [researcher.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/researcher.md) | Research spike, POC, evaluate | `onboarding`, `research_spike` |

#### Agent Chains (thứ tự spawn theo intent)

```
onboarding:     researcher → planner
add_feature:    planner → fullstack-developer → code-reviewer
bug_fix:        debugger → fullstack-developer → code-reviewer
refactor:       planner → code-simplifier → code-reviewer
auth:           planner → fullstack-developer → tester-qa
payment:        planner → fullstack-developer → tester-qa
database:       database-admin → fullstack-developer
frontend_ui:    ui-ux-designer → fullstack-developer
new_project:    planner → fullstack-developer
devops:         devops-sre (single)
code_review:    code-reviewer (single)
```

#### 🎯 Skills kích hoạt (29 DEV skills)

| Skill | File | Mô tả hoạt động |
|-------|------|-----------------|
| `/fis:scout` | [scout.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/scout.md) | Khám phá codebase — tổng quan, patterns, dependencies |
| `/fis:plan` | [plan.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/plan.md) | Tạo implementation plan — chia phases, tasks |
| `/fis:craft` | [craft.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/craft.md) | Code theo plan — phase by phase |
| `/fis:test` | [test.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/test.md) | Chạy test suite, coverage analysis |
| `/fis:fix` | [fix.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/fix.md) | Sửa lỗi tự động |
| `/fis:simplify` | [simplify.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/simplify.md) | Refactor — giảm complexity |
| `/fis:doubt` | [doubt.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/doubt.md) | Adversarial review — challenge assumptions |
| `/fis:source-check` | [source-check.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/source-check.md) | Verify official docs trước khi dùng framework |
| `/fis:observe` | [observe.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/observe.md) | Monitoring, logging, tracing, observability |
| `/fis:cook` | [implementation-bundle.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/implementation-bundle.md) | Full implementation engine: research → plan → implement → test → review |
| `/fis:ship-bootstrap` | [ship-bootstrap.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/ship-bootstrap.md) | Bootstrap project scaffold |
| `/fis:backend-development` | [backend-development.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/backend-development.md) | REST API, GraphQL, gRPC patterns |
| `/fis:frontend-development` | [frontend-development.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/frontend-development.md) | React/Vue/Next.js components |
| `/fis:databases` | [databases.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/databases.md) | Schema, migration, query optimization |
| `/fis:security-hardening` | [security-hardening.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/security-hardening.md) | OWASP, input validation, rate limiting |
| `/fis:git-discipline` | [git-discipline.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/git-discipline.md) | Commit convention, branch strategy |

Full skill index: [00-index.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/dev/00-index.md)

#### 📋 Workflows (7 DEV Workflows)

| # | Workflow | File | Pattern |
|---|----------|------|---------|
| WF-01 | New Project | [01-new-project.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/dev/01-new-project.md) | `bootstrap → plan → craft × N → test → ship` |
| WF-02 | Existing Project | [02-existing-project.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/dev/02-existing-project.md) | `scout → gkg → graphify → research → plan` |
| WF-03 | Adding Feature ⭐ | [03-adding-feature.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/dev/03-adding-feature.md) | `scout → plan → craft → test → fix → review → ship` |
| WF-04 | Auth | [04-implementing-auth.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/dev/04-implementing-auth.md) | `security → plan → craft → test → review` |
| WF-05 | Payment | [05-payment-integration.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/dev/05-payment-integration.md) | `security → plan → craft → test → review` |
| WF-06 | Bug Fix | [06-fixing-bugs.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/dev/06-fixing-bugs.md) | `debug → fix → test → review → ship` |
| WF-07 | Refactoring | [07-refactoring-code.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/dev/07-refactoring-code.md) | `scout → plan → test(baseline) → craft → test(verify) → review` |

Workflow index: [00-index.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/dev/00-index.md)

#### 📏 Rules áp dụng cho DEV

| Rule | File | Cách tác động |
|------|------|--------------|
| **Natural Language Routing** | [natural-language-dev-routing.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/natural-language-dev-routing.md) | Map tiếng Việt/English → intent → workflow → agents |
| **Dev Role Matrix** | [dev-role-matrix.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/dev-role-matrix.md) | Bảng phân quyền: intent → agents → skills → output |
| **Skill Workflow Routing** | [skill-workflow-routing.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/skill-workflow-routing.md) | Thứ tự skill execution + 5 routing rules |
| **Skill Domain Routing** | [skill-domain-routing.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/skill-domain-routing.md) | Decision tree chọn skill theo domain (Frontend/Backend/AI/DevOps...) |
| **Auto-inject Rules** | [auto-inject-rules.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/auto-inject-rules.md) | Tự động inject: `source-check`, `secure`, `doubt`, `security-scan` |
| **Development Rules** | [development-rules.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/development-rules.md) | PEP 8, type hints, max 50 LOC/function, max 300 LOC/file |
| **Engineering Discipline** | [engineering-discipline.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/engineering-discipline.md) | Quality gates, testing requirements |
| **Orchestration Protocol** | [orchestration-protocol.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/rules/orchestration-protocol.md) | Delegation context, status protocol, handoff format |

#### 🪝 Hooks can thiệp DEV

| Hook | Loại | Tác động lên DEV |
|------|------|-----------------|
| `privacy-block.cjs` | Pre-tool | ❌ Chặn đọc `.env`, secrets, API keys |
| `scout-block.cjs` | Pre-tool | ❌ Chặn đọc `node_modules/`, `dist/`, `.next/` |
| `descriptive-name.cjs` | Pre-tool | Enforce tên file descriptive khi tạo mới |
| `cook-after-plan-reminder.cjs` | Session | Nhắc craft sau khi plan xong |
| `simplify-gate.cjs` | User input | ⚠️ Warn khi diff > 200 LOC, chưa refactor |
| `dev-rules-reminder.cjs` | User input | Inject dev rules vào prompt context |
| `plan-format-kanban.cjs` | Post-tool | Validate plan.md format |
| `session-state.cjs` | Post-tool | Lưu/restore progress giữa sessions |

#### 📦 Output Artifacts

```
src/                          ← Source code
tests/                        ← Test files
plans/<date>-<feature>/       ← Implementation plans
  plan.md
  phase-1.md, phase-2.md...
```

---

## 6. Role 4: QA — Quality Assurance

### 👤 Agent: Tester Priya (`tester.md`)

> *"QA Lead, automation specialist, risk-based testing, shift-left mindset"*

### Sơ đồ hoạt động QA

```mermaid
flowchart TD
    subgraph QA_FLOW["🧪 QA Role Flow"]
        direction TB
        INPUT["Nhận FS + Code<br/>từ SA + DEV"]

        subgraph PLANNING["Phase 1: Test Planning"]
            Q1["1. Definition of Ready<br/>/fis:tester def-of-ready"]
            Q2["2. TestSpec Generation<br/>/fis:tester test-spec"]
            Q3["3. Three Amigos Review<br/>/fis:three-amigos:review-testspec"]
            Q4["4. Mock Data Generation<br/>/fis:tester mock-data"]
        end

        subgraph IMPLEMENTATION["Phase 2: Test Implementation"]
            Q5["5. Test Cases<br/>/fis:tester test-cases"]
            Q6["6. Unit Tests<br/>/fis:test --unit"]
            Q7["7. Integration Tests<br/>/fis:test --integration"]
            Q8["8. E2E Tests<br/>/fis:test --e2e"]
        end

        subgraph EXECUTION["Phase 3: Execution & Reporting"]
            Q9["9. Coverage Report<br/>/fis:test --coverage"]
            Q10["10. Bug Report<br/>/fis:tester bug"]
            Q11{"Coverage ≥ 70%?"}
            Q12["✅ QA Sign-off"]
            Q13["❌ Gap Analysis<br/>→ Back to Tests"]
        end

        INPUT --> Q1 --> Q2 --> Q3 --> Q4
        Q4 --> Q5 --> Q6 --> Q7 --> Q8
        Q8 --> Q9 --> Q11
        Q11 -->|Yes| Q12
        Q11 -->|No| Q13 --> Q5
        Q9 --> Q10
    end
```

### QA — Chi tiết Components

#### 🤖 Agents sử dụng

| Agent | File | Vai trò |
|-------|------|---------|
| **tester** | [tester.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/tester.md) | Primary — Test planning, execution, bug reporting |

#### 🎯 Skills kích hoạt

| Skill | File | Mô tả hoạt động |
|-------|------|-----------------|
| `/fis:tester test-spec` | [tester-test-spec.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/qa/tester-test-spec.md) | Sinh TestSpec từ AC × test matrix → `TESTSPEC-NNNN.md` |
| `/fis:tester test-cases` | [tester-test-cases.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/qa/tester-test-cases.md) | Sinh test scenarios (.py test files) |
| `/fis:tester bug` | [tester-bug.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/qa/tester-bug.md) | Formal bug report: `BG-NNNN.md` với reproduce steps |
| `/fis:tester mock-data` | [tester-mock-data.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/qa/tester-mock-data.md) | Sinh fixtures + factories cho testing |
| `/fis:tester def-of-ready` | [tester-def-of-ready.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/qa/tester-def-of-ready.md) | Kiểm tra FS testable TRƯỚC khi plan test |
| `/fis:test` | [test.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/qa/test.md) | Chạy test suite (unit/integration/e2e/coverage) |
| `/fis:three-amigos:review-testspec` | [three-amigos-review-testspec.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/qa/three-amigos-review-testspec.md) | BA + SA + QA sign-off TestSpec |
| `/fis:scenario` | cross-role | Sinh edge cases theo 12 chiều |
| `/fis:agent-browser` | [agent-browser.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/ai-tools/agent-browser.md) | Browser automation cho UI/E2E testing |

#### 📋 Workflows (6 QA Workflows)

| # | Workflow | Nội dung |
|---|----------|----------|
| QA-1 | Chiến lược kiểm thử ⭐ | TestSpec → mock data → test automation → bug triage → regression |
| QA-2 | Feature mới (QA view) | PRD → TRD → def-of-ready → TestSpec → Three Amigos → verify → sign-off |
| QA-3 | Sửa lỗi (QA view) | Verify reproduce → BG report → re-test → regression → sign-off |
| QA-4 | Auth Testing | 3 roles × 5 actions × 3 states = 45 test cases + security tests |
| QA-5 | API Testing | Contract test + load test (k6) + OWASP API Top 10 |
| QA-6 | Payment Testing | E2E sandbox + webhook replay + idempotency + edge cases |

All workflows: [01-06-all-workflows.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/qa/01-06-all-workflows.md)

#### Test Strategy Pyramid

```
        /  E2E  \          ← 10% — Ít nhất, chậm nhất
       /  (10%)  \
      /───────────\
     / Integration \       ← 30% — Vừa phải
    /    (30%)      \
   /─────────────────\
  /    Unit Tests     \    ← 60% — Nhiều nhất, nhanh nhất
 /      (60%)          \
/───────────────────────\
```

#### 📦 Output Artifacts

```
artifacts/test-specs/TESTSPEC-NNNN.md  ← Test Specification
tests/                                 ← Test files (unit, integration, e2e)
tests/fixtures/                        ← Mock data fixtures
tests/factories/                       ← Test factories
artifacts/bugs/BG-NNNN.md             ← Formal bug reports
```

---

## 7. Role 5: DevOps — SRE

### 👤 Agent: DevOps Tuấn (`devops-sre.md`)

> *"SRE, reliability-first, automate-everything mindset"*

### Sơ đồ hoạt động DevOps

```mermaid
flowchart TD
    subgraph DEVOPS_FLOW["🚀 DevOps Role Flow"]
        direction TB
        INPUT["Nhận code passed QA"]

        subgraph INFRA["Phase 1: Infrastructure (Ngày 1)"]
            D1["1. Docker setup<br/>/fis:devops"]
            D2["2. Environment config<br/>.env.example/.staging/.production"]
            D3["3. Database migrations<br/>Alembic setup"]
        end

        subgraph CICD["Phase 2: CI/CD Pipeline (Ngày 2)"]
            D4["4. GitHub Actions<br/>/fis:devops"]
            D5["5. Pre-commit hooks<br/>ruff, mypy, bandit"]
            D6["6. Build & Push<br/>Docker + trivy scan"]
        end

        subgraph DEPLOY["Phase 3: Deployment (Ngày 3)"]
            D7["7. Deploy staging<br/>/fis:deploy staging"]
            D8["8. Smoke test<br/>/fis:test --e2e"]
            D9["9. Deploy production<br/>/fis:deploy production --canary"]
        end

        subgraph MONITOR["Phase 4: Monitoring (Ongoing)"]
            D10["10. Health checks<br/>/health, /ready, /metrics"]
            D11["11. Alerting rules<br/>PagerDuty/Slack"]
            D12["12. Runbooks<br/>docs/runbooks/"]
        end

        INPUT --> D1 --> D2 --> D3
        D3 --> D4 --> D5 --> D6
        D6 --> D7 --> D8 --> D9
        D9 --> D10 --> D11 --> D12
    end
```

### DevOps — Chi tiết Components

#### 🤖 Agents sử dụng

| Agent | File | Vai trò |
|-------|------|---------|
| **devops-sre** | [devops-sre.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/devops-sre.md) | Primary — IaC, CI/CD, deployment, monitoring |

#### 🎯 Skills kích hoạt

| Skill | File | Mô tả hoạt động |
|-------|------|-----------------|
| `/fis:devops` | [devops.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/devops/devops.md) | Docker, Compose, K8s, CI/CD patterns |
| `/fis:deploy` | [deploy.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/devops/deploy.md) | Deploy staging → canary → production |
| `/fis:debug` | [debug.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/devops/debug.md) | Log analysis, root cause investigation |
| `/fis:security-scan` | [security-bundle.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/devops/security-bundle.md) | OWASP, dependency CVE audit, trivy |
| `/fis:fix-auto` | [fix-auto.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/devops/fix-auto.md) | Auto-fix deployment/infra issues |
| `/fis:git-worktree` | [git-worktree.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/devops/git-worktree.md) | Git worktree cho parallel development |

#### 📋 Workflows (4 DevOps Workflows)

| # | Workflow | Nội dung | Skills |
|---|----------|----------|--------|
| DevOps-1 | CI/CD, Deploy & Monitoring ⭐ | 12 bước: Docker → CI/CD → Deploy → Monitor | `devops`, `deploy`, `debug`, `security-scan` |
| DevOps-2 | Sửa lỗi infra | Detect → diagnose → mitigate → fix → postmortem | `debug`, `fix-auto` |
| DevOps-3 | Tối ưu hiệu năng | Profile → benchmark → optimize → load test | `debug`, monitoring tools |
| DevOps-4 | Bảo trì dự án cũ | Vulnerability scan → patch → cert renewal → backup | `scout`, `fix`, `security-scan` |

All workflows: [devops-role-workflows.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/devops/devops-role-workflows.md)

#### Canary Deployment Strategy

```
5% traffic → monitor 30min → 25% → monitor 30min → 100%

Rollback triggers:
- Error rate > 2% trong 5 phút
- Response time p95 > 1s
- Container restart > 3 trong 10 phút
```

#### 📦 Output Artifacts

```
Dockerfile, docker-compose.yml          ← Infrastructure as Code
.github/workflows/ci.yml                ← CI/CD pipeline
docs/runbooks/RUNBOOK-NNN-<name>.md     ← Incident runbooks
docs/postmortems/<date>-<incident>.md   ← Incident postmortems
```

---

## 8. Role 6: PM — Project Manager

### 👤 Agent: PM Lan (`project-manager.md`)

> *"Senior Project Manager, PMP-certified, 10+ năm kinh nghiệm"*

### Sơ đồ hoạt động PM

```mermaid
flowchart TD
    subgraph PM_FLOW["📊 PM Role Flow"]
        direction TB

        subgraph PRE_KICK["Phase 1: Pre-Kickoff (Ngày 1-3)"]
            P1["1. Init repo + docs<br/>/fis:docs init"]
            P2["2. Project Charter<br/>/fis:pm charter"]
            P3["3. Stakeholder Register<br/>/fis:pm stakeholder-register"]
            P4["4. Communications Plan<br/>/fis:pm comms-plan"]
            P5["5. Risk Register<br/>/fis:pm risk-register"]
            P6["6. RAID Log<br/>/fis:pm raid-log"]
            P7["7. Team Personas<br/>/fis:ba personas"]
            P8["8. Plan Kickoff<br/>/fis:plan"]
        end

        subgraph KICKOFF["Phase 2: Kickoff (Ngày 4-5)"]
            P9["9. Kickoff Meeting<br/>Charter + Scope + Timeline"]
            P10["10. Post-kickoff<br/>Minutes + Action Items"]
        end

        subgraph GOVERN["Phase 3: Governance (Ongoing)"]
            P11["11. Weekly Status<br/>/fis:pm status-report"]
            P12["12. Change Request<br/>/fis:ba cr"]
            P13["13. Lessons Learned<br/>/fis:pm lessons-learned"]
            P14["14. Gate Review<br/>Sponsor approve"]
        end

        P1 --> P2 --> P3 --> P4 --> P5 --> P6 --> P7 --> P8
        P8 --> P9 --> P10
        P10 --> P11 --> P12 --> P13 --> P14
        P14 -.->|"Feedback"| P11
    end
```

### PM — Chi tiết Components

#### 🤖 Agents sử dụng

| Agent | File | Vai trò |
|-------|------|---------|
| **project-manager** | [project-manager.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/project-manager.md) | Primary — Governance, status, risk management |
| **journal-writer** | [journal-writer.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/agents/journal-writer.md) | Support — Session journal, audit trail |

#### 🎯 Skills kích hoạt

| Skill | File | Mô tả hoạt động |
|-------|------|-----------------|
| `/fis:pm` | [pm.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/pm/pm.md) | PM workflows: charter, status-report, lessons-learned, retro |
| `/fis:plan` | [plan.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/pm/plan.md) | Tạo đầu việc, plan cho agents |
| `/fis:project-management` | [project-management.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/pm/project-management.md) | Sprint planning, backlog grooming |
| `/fis:kanban-mintlify` | [kanban-mintlify.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/pm/kanban-mintlify.md) | Kanban board management |
| `/fis:personas` | [personas.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/pm/personas.md) | Team persona profiles |
| `/fis:project-session-extended` | [project-session-extended.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/skills/pm/project-session-extended.md) | Extended session management |
| `/fis:scenario` | cross-role | Sinh risk scenarios |
| `/fis:mermaidjs-v11` | cross-role | Vẽ gantt chart, timeline |
| `/fis:copywriting` | cross-role | Viết status report, stakeholder comms |

#### 📋 Workflows

| # | Workflow | File | Nội dung |
|---|----------|------|----------|
| PM-1 | Kickoff & Governance ⭐ | [01-kickoff-governance.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/pm/01-kickoff-governance.md) | 14 bước: Pre-Kickoff → Kickoff → Governance |
| PM-2/3 | New Project Docs | [02-03-new-project-docs.md](file:///home/vietpv/Desktop/Agent-End-to-End/.claude/workflows/pm/02-03-new-project-docs.md) | Project docs alignment |

#### PM Cadence

| Tần suất | Hoạt động | Skill |
|----------|-----------|-------|
| **Hàng ngày** | Standup 15 phút, review RAID | Manual |
| **Hàng tuần** | Mon: re-plan, Wed: risk review, Fri: status | `/fis:pm status-report` |
| **Hàng tháng** | Stakeholder refresh, budget check, lessons | `/fis:pm lessons-learned` |
| **Cuối phase** | Gate review + retro | `/fis:pm retro` |

#### 📦 Output Artifacts

```
artifacts/pm/PROJECT-CHARTER.md          ← Project Charter (signed)
artifacts/pm/STAKEHOLDER-REGISTER.md     ← Stakeholder Register
artifacts/pm/COMMS-PLAN.md               ← Communications Plan
artifacts/pm/RISK-REGISTER.md            ← Risk Register
artifacts/pm/RAID-LOG.md                 ← RAID Log (live)
artifacts/pm/status-{date}.md            ← Weekly Status (RAG)
artifacts/pm/LESSONS-{phase}.md          ← Lessons Learned
artifacts/pm/retro-{date}.md             ← Sprint Retrospective
```

---

## 9. Hooks Lifecycle

### Tổng quan 16 Hooks

```mermaid
flowchart LR
    subgraph USER_INPUT["🗣️ User Input Hooks"]
        UI1["dev-rules-reminder.cjs<br/>Inject dev rules"]
        UI2["simplify-gate.cjs<br/>Warn diff > 200 LOC"]
    end

    subgraph SESSION["🔄 Session Hooks"]
        SE1["session-init.cjs<br/>Detect project, load config"]
        SE2["skill-dedup.cjs<br/>Deduplicate skills"]
        SE3["cook-after-plan-reminder.cjs<br/>Nhắc craft sau plan"]
    end

    subgraph PRE_TOOL["🛡️ Pre-tool Hooks"]
        PT1["privacy-block.cjs<br/>❌ Chặn .env, secrets"]
        PT2["scout-block.cjs<br/>❌ Chặn node_modules"]
        PT3["descriptive-name.cjs<br/>Enforce tên file"]
        PT4["teammate-idle-handler.cjs<br/>Detect agent stuck"]
        PT5["usage-context-awareness.cjs<br/>Inject usage quotas"]
    end

    subgraph POST_TOOL["✅ Post-tool Hooks"]
        PO1["plan-format-kanban.cjs<br/>Validate plan format"]
        PO2["session-state.cjs<br/>Save/restore state"]
        PO3["usage-quota-cache-refresh.cjs<br/>Refresh quota cache"]
    end

    subgraph SUBAGENT["🤖 Subagent Hooks"]
        SA1["subagent-init.cjs<br/>Inject project paths"]
        SA2["task-completed-handler.cjs<br/>Update progress"]
        SA3["team-context-inject.cjs<br/>Inject team context"]
    end

    USER_INPUT --> PRE_TOOL --> POST_TOOL
    SESSION -.-> PRE_TOOL
    SUBAGENT -.-> PRE_TOOL
```

### Hook Execution Order

```
1. User gõ prompt
   └── [User Input Hooks] → dev-rules-reminder → simplify-gate
       └── Agent phân tích prompt
           └── [Session Hooks] → session-init → skill-dedup → cook-after-plan-reminder
               └── Agent quyết định dùng tool
                   └── [Pre-tool Hooks] → privacy-block → scout-block → descriptive-name
                       └── Agent thực hiện tool (Read/Write/Bash)
                           └── [Post-tool Hooks] → plan-format-kanban → session-state → quota-refresh
                               └── Kết quả trả user
                                   └── [Subagent Hooks] (nếu spawn) → subagent-init → team-context-inject
```

### Chi tiết hoạt động từng Hook

| # | Hook | Exit Code | Hoạt động chi tiết |
|---|------|-----------|--------------------|
| 1 | `privacy-block.cjs` | 0/2 | Kiểm tra path chứa `.env`, `secret`, `key`, `credential` → exit 2 (BLOCK) nếu match → yêu cầu user explicit approve |
| 2 | `scout-block.cjs` | 0/2 | Kiểm tra path match patterns trong `.ckignore` (`node_modules/`, `dist/`, `.next/`) → exit 2 (BLOCK) |
| 3 | `descriptive-name.cjs` | 0 | Regex check filename mới → warn nếu generic (temp, test1, untitled) |
| 4 | `session-init.cjs` | 0 | Detect `package.json`/`requirements.txt` → set project type → load role config |
| 5 | `simplify-gate.cjs` | 0 | Đếm LOC diff → warn nếu > 200 LOC chưa qua `/fis:simplify` |
| 6 | `plan-format-kanban.cjs` | 0 | Parse plan.md → warn nếu dùng filename thay human-readable title |
| 7 | `session-state.cjs` | 0 | JSON serialize session progress → persist → restore on next session |
| 8 | `subagent-init.cjs` | 0 | Inject `project_root`, `plan_path`, `agent_instructions` vào subagent context |
| 9 | `cook-after-plan-reminder.cjs` | 0 | Detect plan.md created → remind: "Plan done! Run `/fis:craft` to start coding" |
| 10 | `skill-dedup.cjs` | 0 | Track loaded skills → skip nếu đã load trong session |

---

## 10. Rules Engine

### Routing Flow chi tiết

```mermaid
flowchart TD
    subgraph RULES["📏 Rules Engine"]
        direction TB

        USER["User: 'thêm tính năng login Google'"]

        subgraph NL_ROUTING["Rule 1: Natural Language Routing"]
            NL1["Scan keywords:<br/>'login' + 'Google'"]
            NL2["Match: auth (HIGH confidence)"]
            NL3["Intent: auth"]
        end

        subgraph WORKFLOW_ROUTING["Rule 2: Skill Workflow Routing"]
            WR1["Intent auth → WF-04"]
            WR2["Sequence:<br/>security → plan → craft → test → review"]
        end

        subgraph DOMAIN_ROUTING["Rule 3: Skill Domain Routing"]
            DR1["Domain: Backend/Auth"]
            DR2["Skills:<br/>/fis:better-auth, /fis:security"]
        end

        subgraph AUTO_INJECT["Rule 4: Auto-Inject Rules"]
            AI1["Detect: intent = auth"]
            AI2["Auto-inject: /fis:secure<br/>trước /fis:plan"]
            AI3["Post-craft check:<br/>if LOC > 200 → inject /fis:doubt"]
        end

        subgraph MATRIX["Rule 5: Dev Role Matrix"]
            MX1["Agent chain:<br/>planner → fullstack-dev → code-reviewer"]
            MX2["Escalation:<br/>SA (security review)"]
        end

        USER --> NL1 --> NL2 --> NL3
        NL3 --> WR1 --> WR2
        NL3 --> DR1 --> DR2
        NL3 --> AI1 --> AI2 --> AI3
        NL3 --> MX1 --> MX2
    end
```

### 5 Routing Rules (Skill Workflow Routing)

| # | Rule | Nội dung | Ví dụ |
|---|------|----------|-------|
| 1 | **Plan Before Craft** | PHẢI có plan trước khi code (trừ fix < 10 LOC) | ❌ `craft "implement X"` → ✅ `plan "X"` → `craft "phase 1"` |
| 2 | **Test After Every Craft** | PHẢI test sau mỗi phase, không gộp | ❌ `craft 1` → `craft 2` → `test` → ✅ `craft 1` → `test` → `craft 2` → `test` |
| 3 | **Scout Before Craft** | PHẢI scout codebase trước khi code (existing project) | ❌ `craft "add feature"` → ✅ `scout` → `plan` → `craft` |
| 4 | **Review Before Ship** | PHẢI review trước khi ship | ❌ `craft` → `ship` → ✅ `craft` → `test` → `review` → `ship` |
| 5 | **Security for Auth/Payment** | PHẢI audit security cho auth/payment features | ❌ `craft "implement auth"` → ✅ `security` → `plan` → `craft` → `security verify` |

### Auto-Inject Conditions

| Condition | Auto-inject Skill | Insert Position |
|-----------|-------------------|----------------|
| Prompt chứa framework keyword (React, FastAPI, LangGraph...) | `/fis:source-check` | Trước `/fis:craft` |
| Intent = auth / payment | `/fis:secure` | Trước `/fis:plan` |
| Changes > 200 LOC (non-mechanical) | `/fis:doubt` | Sau `/fis:craft`, trước `/fis:code-review` |
| Intent = deploy / ship | `/fis:security-scan` | Trước `/fis:deploy` |
| Intent = agentize / MCP | `/fis:context-engineering` | Trước `/fis:agentize` |
| Codebase > 500 files + research intent | `/fis:repomix` | Trước `/fis:scout` |

---

## 11. Handoff & Escalation

### Handoff Protocol giữa các Roles

```mermaid
sequenceDiagram
    participant User
    participant PM as PM Lan
    participant BA as BA Sarah
    participant SA as SA Marcus
    participant DEV as DEV Team
    participant QA as Tester Priya
    participant OPS as DevOps Tuấn

    User->>PM: Yêu cầu dự án
    PM->>BA: Kickoff → assign BA
    
    Note over BA: Phase 1: ELICIT
    BA->>BA: /fis:elicit → JTBD
    BA->>BA: /fis:ba create → PRD
    BA->>BA: /fis:wireframe → UI flow
    BA->>SA: Handoff: PRD Approved ✅
    
    Note over SA: Phase 2: DESIGN
    SA->>SA: /fis:sa design → TRD
    SA->>SA: /fis:adr → ADR decisions
    SA->>SA: /fis:sa feature-spec → FS
    SA->>DEV: Handoff: TRD + FS Approved ✅
    
    Note over DEV: Phase 3: BUILD
    DEV->>DEV: /fis:scout → understand code
    DEV->>DEV: /fis:plan → implementation plan
    DEV->>DEV: /fis:craft → code phases
    DEV->>DEV: /fis:test → verify each phase
    DEV->>QA: Handoff: Code + Tests ✅
    
    Note over QA: Phase 4: TEST
    QA->>QA: /fis:tester test-spec → TestSpec
    QA->>QA: /fis:test --coverage → ≥70%
    QA->>QA: /fis:tester bug → BG (if defects)
    QA->>OPS: Handoff: QA Sign-off ✅
    
    Note over OPS: Phase 5: SHIP
    OPS->>OPS: /fis:devops → Docker + CI/CD
    OPS->>OPS: /fis:deploy staging → smoke test
    OPS->>OPS: /fis:deploy production --canary
    OPS->>PM: Handoff: Deployed ✅
    
    Note over PM: Phase 6: GOVERN
    PM->>PM: /fis:pm status-report → RAG
    PM->>PM: /fis:pm lessons-learned
    PM->>User: Status + Lessons ✅
```

### Handoff Format (bắt buộc)

```markdown
## Handoff: [Agent A] → [Agent B]

### Đã hoàn thành
- [x] Task 1: <description>
- [x] Task 2: <description>

### Files changed
- `path/to/file1.py` — Added service layer
- `path/to/file2.py` — Updated schema

### Cho Agent B
- [ ] Task tiếp theo: <description>
- [ ] Constraints: <any limits>
- [ ] References: <links to docs/specs>
```

### Escalation Rules

```mermaid
flowchart TD
    subgraph ESCALATION["⚠️ Escalation Path"]
        E1["Agent gặp vấn đề"]
        E2["Report Orchestrator<br/>Status: BLOCKED"]
        E3{"Orchestrator<br/>phân tích"}
        E4["Tự giải quyết<br/>Re-assign + context mới"]
        E5["Escalate to SA/PM"]
        E6["Escalate to User"]

        E1 --> E2 --> E3
        E3 -->|"Có thể tự xử"| E4
        E3 -->|"Cần expert"| E5
        E3 -->|"Cần human input"| E6
    end
```

| Khi nào escalate | Escalate cho ai |
|------------------|-----------------|
| Architecture change (thay đổi module/service) | SA |
| New dependency (thêm library/framework) | SA |
| Security concern (auth, payment, PII) | SA + Security Auditor |
| Breaking change (API contract thay đổi) | SA + PM |
| Scope creep (task > 4 hours) | PM |
| Requirements conflict với PRD/TRD | PM + BA |
| Role cần write ngoài ownership boundary | Orchestrator |
| Baseline tests fail trước change | User |
| Bug không reproduce được | User |

---

## 📊 Tổng Hợp — Ma Trận Role × Components

| Role | Agents | Skills | Workflows | Rules Áp Dụng | Hooks Can Thiệp | Artifacts Output |
|------|--------|--------|-----------|---------------|-----------------|-----------------|
| **BA** | 3 (analyst, brainstormer, copywriter) | 11 skills | 2-4 workflows | team-coord, primary-workflow | privacy-block, descriptive-name, session-init | PRD, FS, Wireframes, CR |
| **SA** | 3 (architect, researcher, security-auditor) | 12 skills | 10 workflows | team-coord, dev-role-matrix, auto-inject | privacy-block, session-init | TRD, ADR, FS, System Arch |
| **DEV** | 9 (orchestrator + 8 sub-agents) | 29+ skills | 7 workflows | NL-routing, dev-matrix, skill-routing, domain-routing, auto-inject, dev-rules, engineering-discipline, orchestration-protocol | ALL 16 hooks | src/, tests/, plans/ |
| **QA** | 1 (tester) | 9 skills | 6 workflows | team-coord, primary-workflow | privacy-block, session-init | TestSpecs, Tests, BG reports |
| **DevOps** | 1 (devops-sre) | 6 skills | 4 workflows | team-coord, auto-inject | privacy-block, scout-block | Dockerfile, CI/CD, Runbooks |
| **PM** | 2 (manager, journal-writer) | 9 skills | 2-3 workflows | team-coord, primary-workflow | session-init, session-state | Charter, RAID, Status, Lessons |

> [!TIP]
> **DEV Role** là phức tạp nhất với 9 agents, 29+ skills, 7 workflows, 8 rules, và tất cả 16 hooks đều can thiệp. Đây là lý do DEV Orchestrator tồn tại — để quản lý complexity này.
