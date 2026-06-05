# FIS Skills — Documentation

> **Tổng**: 82+ skills trong 60 markdown files, gồm skill docs và index files | **Nguồn**: https://ai.fis.com.vn/cheatsheet
> **Architecture**: One-file-per-skill hoặc grouped-by-domain

## Skills là gì?

Skills là **khả năng chuyên biệt** của AI agent, mỗi skill là 1 markdown file mô tả:
- **Slash command** (`/fis:<skill>`) để kích hoạt
- **Mục đích** + khi nào dùng
- **Prompt template** cho kết quả tốt nhất
- **Output** mong đợi

## Cách gọi Skill

```bash
/fis:<skill-name>              # Gọi skill trực tiếp
/fis:<skill> <params>          # Gọi với tham số
/fis:help                      # Liệt kê tất cả skills
/fis:find-skills <keyword>     # Tìm skill theo keyword
```

---

## Tổng quan theo Folder (10 categories)

| Folder | Files | Skills | Vai trò | Roles |
|--------|-------|--------|---------|-------|
| `ba/` | 10 | 10 | Business Analysis & Requirements | BA |
| `sa/` | 7 | 7 | Architecture & Design | SA |
| `dev/` | 18 | 29 | Development & Implementation | DEV |
| `qa/` | 8 | 8 | Testing & Quality | QA |
| `devops/` | 5 | 6 | Infrastructure & Deployment | DevOps |
| `pm/` | 6 | 12 | Project Management | PM |
| `cross-role/` | 2 | 15 | Docs, Analysis, Cross-cutting | All |
| `ai-tools/` | 2 | 10 | AI/ML Tools & MCP | All |
| `fis-domain/` | 1 | 8 | FIS Industry Verticals | Domain |
| `meta/` | 1 | 7 | Kit Self-Management | Meta |

---

## Chi tiết từng Category

### 📋 BA — Business Analysis (10 skills)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | Elicit | `/fis:elicit` | `elicit.md` | JTBD interview, Event Storming, Impact Mapping |
| 2 | BA Create | `/fis:ba create` | `ba-create.md` | Viết PRD/FS greenfield |
| 3 | BA Generate | `/fis:ba generate` | `ba-generate.md` | Sinh spec từ code brownfield |
| 4 | BA DDD Business | `/fis:ba ddd-business` | `ba-ddd-business.md` | Domain model, bounded contexts |
| 5 | BA SOD | `/fis:ba sod` | `ba-sod.md` | BPMN/swimlane + decision tables |
| 6 | BA FSD | `/fis:ba fsd` | `ba-fsd.md` | Functional Spec chi tiết |
| 7 | BA CR | `/fis:ba cr` | `ba-cr.md` | Change Request management |
| 8 | Wireframe | `/fis:wireframe` | `wireframe.md` | UI flow sketches |
| 9 | BA Plan | `/fis:plan` | `plan.md` | BA-specific planning |
| 10 | Three Amigos PRD | `/fis:three-amigos:review-prd` | `three-amigos-review-prd.md` | Sign-off PRD (BA+SA+QA) |

### 🏗️ SA — Solution Architecture (7 skills)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | SA Design | `/fis:sa design` | `sa-design.md` | Sinh TRD greenfield từ PRD |
| 2 | SA Generate | `/fis:sa generate` | `sa-generate.md` | Sinh TRD brownfield từ code |
| 3 | SA DDD Tech | `/fis:sa ddd-tech` | `sa-ddd-tech.md` | DDD technical: data model, API mapping |
| 4 | SA Feature Spec | `/fis:sa feature-spec` | `sa-feature-spec.md` | Merge TRD + DDD → Feature Spec |
| 5 | SA Review | `/fis:sa review` | `sa-review.md` | Trade-off + risk + NFR check |
| 6 | Code Review | `/fis:code-review` | `code-review.md` | PR review adversarial |
| 7 | Three Amigos TRD | `/fis:three-amigos:review-trd` | `three-amigos-review-trd.md` | Sign-off TRD |

### 💻 DEV — Development (22+ skills)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | Plan | `/fis:plan` | `plan.md` | Lập kế hoạch implementation |
| 2 | Scout | `/fis:scout` | `scout.md` | Hiểu codebase, find patterns |
| 3 | Craft | `/fis:craft` | `craft.md` | Implement code theo plan |
| 4 | Fix | `/fis:fix` | `fix.md` | Sửa bug có hệ thống |
| 5 | Test | `/fis:test` | `test.md` | Run tests + coverage |
| 6 | Ship | `/fis:ship` | `ship-bootstrap.md` | Ship feature + bootstrap |
| 7 | Bootstrap | `/fis:bootstrap` | `ship-bootstrap.md` | Scaffold project mới |
| 8 | Backend Dev | `/fis:backend-development` | `backend-development.md` | FastAPI/Express backend |
| 9 | Frontend Dev | `/fis:frontend-development` | `frontend-development.md` | React/Vue/Next.js |
| 10 | Frontend Design | `/fis:frontend-design` | `frontend-ui-extended.md` | Design system, CSS |
| 11 | Databases | `/fis:databases` | `databases.md` | Schema, migrations, queries |
| 12 | Web Frameworks | `/fis:web-frameworks` | `frameworks.md` | Framework optimization |
| 13 | Repomix | `/fis:repomix` | `codebase-analysis.md` | Pack codebase for AI |
| 14 | GKG | `/fis:gkg` | `codebase-analysis.md` | Knowledge graph analysis |
| 15 | Port Feature | `/fis:port-feature` | `port-adapt.md` | Port feature between repos |
| 16 | Port Repo | `/fis:port-repo` | `port-adapt.md` | Port entire repo |
| 17 | Cook | `/fis:cook` | `new-skills.md` | Structured code implementation |
| 18 | Stitch | `/fis:stitch` | `new-skills.md` | Merge file chunks |
| 19 | Show-off | `/fis:show-off` | `new-skills.md` | Demo showcase |
| 20 | Xia | `/fis:xia` | `new-skills.md` | UI component builder |
| 21 | Better Auth | `/fis:better-auth` | `backend-extended.md` | Auth with Better-Auth |
| 22 | Payment | `/fis:payment-integration` | `backend-extended.md` | Payment gateway |
| 23 | Shopify | `/fis:shopify` | `backend-extended.md` | Shopify integration |
| 24 | Shader | `/fis:shader` | `design-3d.md` | GLSL shader programming |
| 25 | Three.js | `/fis:threejs` | `design-3d.md` | 3D web graphics |
| 26 | Remotion | `/fis:remotion` | `design-3d.md` | Programmatic video |
| 27 | Media | `/fis:media-processing` | `media-devtools.md` | Media processing |
| 28 | Chrome DevTools | `/fis:chrome-devtools` | `media-devtools.md` | DevTools automation |
| 29 | Worktree | `/fis:worktree` | `git-worktree.md` | Git worktree management |

### 🧪 QA — Testing & Quality (8 skills)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | Test | `/fis:test` | `test.md` | Chạy tests |
| 2 | Test Spec | `/fis:tester test-spec` | `tester-test-spec.md` | Sinh TestSpec từ AC |
| 3 | Test Cases | `/fis:tester test-cases` | `tester-test-cases.md` | Sinh test scenarios |
| 4 | Mock Data | `/fis:tester mock-data` | `tester-mock-data.md` | Sinh test fixtures |
| 5 | Bug Report | `/fis:tester bug` | `tester-bug.md` | Bug report formal |
| 6 | Def of Ready | `/fis:tester def-of-ready` | `tester-def-of-ready.md` | Definition of Ready check |
| 7 | Web Testing | `/fis:web-testing` | `testing-quality-extended.md` | Browser/E2E testing |
| 8 | Three Amigos TestSpec | `/fis:three-amigos:review-testspec` | `three-amigos-review-testspec.md` | Sign-off TestSpec |

### 🚀 DevOps — Infrastructure (6 skills)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | DevOps | `/fis:devops` | `devops.md` | IaC, Docker, K8s |
| 2 | Deploy | `/fis:deploy` | `deploy.md` | Auto-detect + deploy |
| 3 | Debug | `/fis:debug` | `debug.md` | Log analysis, root cause |
| 4 | Fix Auto | `/fis:fix --auto` | `fix-auto.md` | Auto-fix pipeline |
| 5 | Security | `/fis:security` | `devops.md` | Security audit |
| 6 | Security Scan | `/fis:security-scan` | `devops.md` | Dependency scanning |

### 📊 PM — Project Management (12 skills)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | PM Charter | `/fis:pm charter` | `pm.md` | Project Charter |
| 2 | PM Stakeholder | `/fis:pm stakeholder-register` | `pm.md` | Stakeholder Register |
| 3 | PM Comms Plan | `/fis:pm comms-plan` | `pm.md` | Communications Plan |
| 4 | PM Risk | `/fis:pm risk-register` | `pm.md` | Risk Register |
| 5 | PM RAID | `/fis:pm raid-log` | `pm.md` | RAID Log |
| 6 | PM Status | `/fis:pm status-report` | `pm.md` | Weekly Status (RAG) |
| 7 | PM Lessons | `/fis:pm lessons-learned` | `pm.md` | Lessons Learned |
| 8 | PM Retro | `/fis:pm retro` | `pm.md` | Sprint Retro |
| 9 | BA Personas | `/fis:ba personas` | `personas.md` | Team Personas |
| 10 | Plans Kanban | `/fis:plans-kanban` | `project-session-extended.md` | Visual plan board |
| 11 | Kanban | `/fis:kanban` | `kanban-mintlify.md` | Kanban board |
| 12 | Mintlify | `/fis:mintlify` | `kanban-mintlify.md` | Docs site |

### 🔄 Cross-Role (15 skills)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | Docs | `/fis:docs` | `documentation-content.md` | Documentation management |
| 2 | Preview | `/fis:preview` | `documentation-content.md` | Preview docs |
| 3 | LLMs.txt | `/fis:llms` | `documentation-content.md` | LLM context docs |
| 4 | Copywriting | `/fis:copywriting` | `documentation-content.md` | README/marketing copy |
| 5 | Sequential Thinking | `/fis:sequential-thinking` | `analysis-reasoning.md` | Step-by-step reasoning |
| 6 | Research | `/fis:research` | `analysis-reasoning.md` | Multi-source research |
| 7 | Brainstorm | `/fis:brainstorm` | `analysis-reasoning.md` | Creative ideation |
| 8 | Predict | `/fis:predict` | `analysis-reasoning.md` | Outcome prediction |
| 9 | Excalidraw | `/excalidraw` | `documentation-content.md` | Whiteboard diagrams |
| 10 | Mermaid | `/fis:mermaidjs-v` | `documentation-content.md` | Mermaid diagrams |
| 11 | Graphify | `/fis:graphify` | `documentation-content.md` | Graph visualization |

### 🤖 AI Tools (10 skills)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | Agent Browser | `/fis:agent-browser` | `ai-extended.md` | AI browser automation |
| 2 | AI Artist | `/fis:ai-artist` | `ai-extended.md` | AI image generation |
| 3 | Google ADK Python | `/fis:google-adk-python` | `ai-extended.md` | Google Agent Dev Kit |
| 4 | MCP Builder | `/fis:mcp-builder` | `mcp-ai.md` | Build MCP servers |
| 5 | MCP Management | `/fis:mcp-management` | `mcp-ai.md` | Manage MCP connections |
| 6 | Use MCP | `/fis:use-mcp` | `mcp-ai.md` | Use MCP tools |
| 7 | Agentize | `/fis:agentize` | `mcp-ai.md` | Convert to agent |
| 8 | AI Multimodal | `/fis:ai-multimodal` | `mcp-ai.md` | Multimodal processing |
| 9 | Context Engineering | `/fis:context-engineering` | `mcp-ai.md` | Context optimization |
| 10 | Autoresearch | `/fis:autoresearch` | `mcp-ai.md` | Automated research |

### 🏢 FIS Domain (8 skills)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | BSS Billing | `/fis:bss-billing` | `domain-knowhow.md` | Telecom billing |
| 2 | CTI Expert | `/fis:cti-expert` | `domain-knowhow.md` | Call center integration |
| 3 | EHRP | `/fis:ehrp` | `domain-knowhow.md` | Enterprise HR/Payroll |
| 4 | Fintech VN | `/fis:fintech-vn` | `domain-knowhow.md` | Vietnam fintech |
| 5 | MVNO | `/fis:mvno` | `domain-knowhow.md` | Mobile virtual network |
| 6 | SAP | `/fis:sap` | `domain-knowhow.md` | SAP integration |
| 7 | Telco Self-Care | `/fis:telco-self-care` | `domain-knowhow.md` | Telecom self-service |
| 8 | Utility Billing | `/fis:utility-billing` | `domain-knowhow.md` | Utility billing |

### 🔧 Meta (7 skills)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | Skill Creator | `/fis:skill-creator` | `meta-utilities.md` | Create custom skills |
| 2 | Find Skills | `/fis:find-skills` | `meta-utilities.md` | Search skills |
| 3 | Help | `/fis:help` | `meta-utilities.md` | Kit help |
| 4 | Team | `/fis:team` | `meta-utilities.md` | List agents |
| 5 | Template Skill | `/fis:template-skill` | `meta-utilities.md` | Skill template |
| 6 | Coding Level | `/fis:coding-level` | `meta-utilities.md` | Set output complexity |
| 7 | Document Skills | `/fis:document-skills` | `meta-utilities.md` | Auto-doc skills |

---

## SDLC Skill Flow

```
BA Phase:     /fis:elicit → /fis:ba create → /fis:wireframe → /fis:three-amigos:review-prd
                                                                         ↓
SA Phase:     /fis:sa design → /fis:sa ddd-tech → /fis:sa feature-spec → /fis:three-amigos:review-trd
                                                                         ↓
DEV Phase:    /fis:plan → /fis:craft × N → /fis:test → /fis:code-review
                                                                         ↓
QA Phase:     /fis:tester test-spec → /fis:tester test-cases → /fis:test → /fis:tester bug
                                                                         ↓
DevOps Phase: /fis:devops → /fis:deploy staging → /fis:deploy production
                                                                         ↓
PM Phase:     /fis:pm status-report → /fis:pm lessons-learned → /fis:pm retro
```

## Tạo Skill mới

```bash
/fis:skill-creator                # Wizard tạo skill mới
/fis:template-skill               # Xem template chuẩn
```

Mỗi skill file phải có:
1. **Title** với slash command
2. **Mục đích** + khi nào dùng
3. **Prompt template** với ví dụ
4. **Output** mong đợi
