# FIS Skills — Documentation

> **Tổng**: 92+ skills trong 107 markdown files (standalone + reference index) | **Nguồn**: https://ai.fis.com.vn/library?tab=skills
> **Architecture**: One-file-per-skill (standalone) + Reference Index files cho backward compatibility

## Skills là gì?

Skills là **khả năng chuyên biệt** của AI agent, mỗi skill là 1 markdown file mô tả:
- **Slash command** (`/fis:<skill>`) để kích hoạt
- **Mục đích** + khi nào dùng / khi KHÔNG dùng
- **Prompt mẫu** (2-5 examples với context)
- **Rationalizations** — common excuses và thực tế
- **Red Flags** — dấu hiệu dùng sai
- **Verification** — checklist kiểm tra

## Cách gọi Skill

```bash
/fis:<skill-name>              # Gọi skill trực tiếp
/fis:<skill> <params>          # Gọi với tham số
/fis:help                      # Liệt kê tất cả skills
/fis:find-skills <keyword>     # Tìm skill theo keyword
```

---

## Tổng quan theo Folder (10 categories)

| Folder | Standalone | Index | Skills | Vai trò | Roles |
|--------|-----------|-------|--------|---------|-------|
| `ba/` | 10 | 0 | 10 | Business Analysis & Requirements | BA |
| `sa/` | 7 | 0 | 7 | Architecture & Design | SA |
| `dev/` | **51** | 11 | **51** | Development & Implementation | DEV |
| `qa/` | 9 | 0 | 9 | Testing & Quality | QA |
| `devops/` | 5 | 1 | 6 | Infrastructure & Deployment | DevOps |
| `pm/` | 6 | 0 | 12 | Project Management | PM |
| `cross-role/` | **8** | 1 | **8** | Docs, Analysis, Cross-cutting | All |
| `ai-tools/` | **10** | 2 | **10** | AI/ML Tools & MCP | All |
| `fis-domain/` | 1 | 0 | 8 | FIS Industry Verticals | Domain |
| `meta/` | **3** | 0 | **3** | Kit Self-Management | Meta |

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

### 💻 DEV — Development (51 skills)

#### Core Skills (đã có standalone từ trước)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | Plan | `/fis:plan` | `plan.md` | Lập kế hoạch implementation |
| 2 | Scout | `/fis:scout` | `scout.md` | Hiểu codebase, find patterns |
| 3 | Craft | `/fis:craft` | `craft.md` | Implement code theo plan |
| 4 | Fix | `/fis:fix` | `fix.md` | Sửa bug có hệ thống |
| 5 | Doubt | `/fis:doubt` | `doubt.md` | Phản biện plan/approach |
| 6 | Backend Dev | `/fis:backend-development` | `backend-development.md` | FastAPI/Express backend |
| 7 | Frontend Dev | `/fis:frontend-development` | `frontend-development.md` | React/Vue/Next.js |
| 8 | Databases | `/fis:databases` | `databases.md` | Schema, migrations, queries |
| 9 | ADR | `/fis:adr` | `adr.md` | Architecture Decision Records |
| 10 | Codebase Analysis | `/fis:codebase-analysis` | `codebase-analysis.md` | Phân tích code |
| 11 | Git Discipline | `/fis:git-discipline` | `git-discipline.md` | Git workflow |
| 12 | Observe | `/fis:observe` | `observe.md` | Monitoring patterns |
| 13 | Security Hardening | `/fis:security-hardening` | `security-hardening.md` | Security best practices |
| 14 | Simplify | `/fis:simplify` | `simplify.md` | Code simplification |
| 15 | Source Check | `/fis:source-check` | `source-check.md` | Verify sources |

#### Standalone từ Bundle (Phase 1-4 mới tách)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 16 | Better Auth | `/fis:better-auth` | `better-auth.md` | Auth production-ready TypeScript |
| 17 | Payment | `/fis:payment-integration` | `payment-integration.md` | SePay, Polar, Stripe, Paddle |
| 18 | Shopify | `/fis:shopify` | `shopify.md` | Shopify apps, extensions, themes |
| 19 | Frontend Design | `/fis:frontend-design` | `frontend-design.md` | Design system, pixel-perfect |
| 20 | UI Styling | `/fis:ui-styling` | `ui-styling.md` | shadcn/ui, Tailwind, accessible |
| 21 | UI/UX Pro Max | `/fis:ui-ux-pro-max` | `ui-ux-pro-max.md` | 50+ styles, 161 palettes |
| 22 | React Best Practices | `/fis:react-best-practices` | `react-best-practices.md` | 45 rules Vercel Engineering |
| 23 | Web Design Guidelines | `/fis:web-design-guidelines` | `web-design-guidelines.md` | WCAG, SEO, Core Web Vitals |
| 24 | Design Doc | `/ckm:design` | `design-doc.md` | Brand identity |
| 25 | Shader | `/fis:shader` | `shader.md` | GLSL fragment shader |
| 26 | Three.js | `/fis:threejs` | `threejs.md` | 3D web graphics |
| 27 | Remotion | `/fis:remotion` | `remotion.md` | Programmatic video React |
| 28 | Media Processing | `/fis:media-processing` | `media-processing.md` | FFmpeg, ImageMagick, RMBG |
| 29 | Chrome DevTools | `/fis:chrome-devtools` | `chrome-devtools.md` | Puppeteer automation |
| 30 | Docs Seeker | `/fis:docs-seeker` | `docs-seeker.md` | Tra docs qua llms.txt |
| 31 | LLMs | `/fis:llms` | `llms.md` | Sinh file llms.txt |
| 32 | Excalidraw | `/excalidraw` | `excalidraw.md` | Whiteboard diagrams |
| 33 | Mermaid.js | `/fis:mermaidjs-v11` | `mermaidjs-v11.md` | Diagram syntax |
| 34 | Copywriting | `/fis:copywriting` | `copywriting.md` | Content marketing |
| 35 | Graphify | `/fis:graphify` | `graphify.md` | Knowledge graph builder |
| 36 | GKG | `/fis:gkg` | `gkg.md` | GitLab knowledge graph |
| 37 | Repomix | `/fis:repomix` | `repomix.md` | Pack repo AI-friendly |
| 38 | Brainstorm | `/fis:brainstorm` | `brainstorm.md` | Solution brainstorming |
| 39 | Research | `/fis:research` | `research.md` | Technical research |
| 40 | Cook | `/fis:cook` | `cook.md` | Structured implementation |
| 41 | Loop | `/fis:loop` | `loop.md` | Auto-optimize loop |
| 42 | Predict | `/fis:predict` | `predict.md` | Multi-persona debate |
| 43 | Scenario | `/fis:scenario` | `scenario.md` | Edge case generation |
| 44 | Sequential Thinking | `/fis:sequential-thinking` | `sequential-thinking.md` | Step-by-step analysis |
| 45 | Stitch | `/fis:stitch` | `stitch.md` | AI design-to-code |
| 46 | Show-off | `/fis:show-off` | `show-off.md` | Showcase page |
| 47 | Xia | `/fis:xia` | `xia.md` | Cross-repo feature porting |
| 48 | Web Frameworks | `/fis:web-frameworks` | `web-frameworks.md` | Next.js, Turborepo |
| 49 | TanStack | `/fis:tanstack` | `tanstack.md` | TanStack Query/Router/Table |
| 50 | Mobile Dev | `/fis:mobile-development` | `mobile-development.md` | React Native, Flutter |
| 51 | Ship | `/fis:ship` | `ship.md` | Ship feature pipeline |
| 52 | Bootstrap | `/fis:bootstrap` | `bootstrap.md` | Bootstrap new project |
| 53 | Port Feature | `/fis:port-feature` | `port-feature.md` | Port feature |
| 54 | Port Repo | `/fis:port-repo` | `port-repo.md` | Port repo |

#### Skills mới (Phase 4)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 55 | Journal | `/fis:journal` | `journal.md` | Technical journal |
| 56 | Watzup | `/fis:watzup` | `watzup.md` | Session review & wrap-up |
| 57 | Project Organization | `/fis:project-organization` | `project-organization.md` | File/folder structure |
| 58 | Retro | `/fis:retro` | `retro.md` | Sprint retrospective |
| 59 | Mintlify | `/fis:mintlify` | `mintlify.md` | Docs site |
| 60 | Kanban | `/fis:kanban` | `kanban.md` | Plans dashboard |
| 61 | Plans Kanban | `/fis:plans-kanban` | `plans-kanban.md` | Plans CLI UI |
| 62 | CTI Expert | `/fis:cti-expert` | `cti-expert.md` | Cyber threat intel / OSINT |

### 🧪 QA — Testing & Quality (9 skills)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | Test | `/fis:test` | `test.md` | Chạy tests |
| 2 | Test Spec | `/fis:tester test-spec` | `tester-test-spec.md` | Sinh TestSpec từ AC |
| 3 | Test Cases | `/fis:tester test-cases` | `tester-test-cases.md` | Sinh test scenarios |
| 4 | Mock Data | `/fis:tester mock-data` | `tester-mock-data.md` | Sinh test fixtures |
| 5 | Bug Report | `/fis:tester bug` | `tester-bug.md` | Bug report formal |
| 6 | Def of Ready | `/fis:tester def-of-ready` | `tester-def-of-ready.md` | Definition of Ready check |
| 7 | **Web Testing** | `/fis:web-testing` | `web-testing.md` | **Playwright, Vitest, k6** |
| 8 | Three Amigos TestSpec | `/fis:three-amigos:review-testspec` | `three-amigos-review-testspec.md` | Sign-off TestSpec |
| 9 | Testing Quality | `/fis:testing-quality` | `testing-quality-extended.md` | Testing standards |

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

### 🔄 Cross-Role (8 skills — standalone)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | Ask | `/fis:ask` | `ask.md` | Structured question asking |
| 2 | Problem Solving | `/fis:problem-solving` | `problem-solving.md` | Structured problem solving |
| 3 | Autoresearch | `/fis:autoresearch` | `autoresearch.md` | Automated research (→ `/fis:loop`) |
| 4 | Docs | `/fis:docs` | `docs.md` | Documentation management |
| 5 | Preview | `/fis:preview` | `preview.md` | Preview generated content |
| 6 | Markdown Novel Viewer | `/fis:markdown-novel-viewer` | `markdown-novel-viewer.md` | Book-like reading |

### 🤖 AI Tools (10 skills — standalone)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | Agent Browser | `/fis:agent-browser` | `agent-browser.md` | AI browser automation |
| 2 | AI Artist | `/fis:ai-artist` | `ai-artist.md` | AI image generation |
| 3 | AI Multimodal | `/fis:ai-multimodal` | `ai-multimodal.md` | Gemini API multimodal |
| 4 | Google ADK Python | `/fis:google-adk-python` | `google-adk-python.md` | Google Agent Dev Kit |
| 5 | Find Skills | `/fis:find-skills` | `find-skills.md` | Skill discovery |
| 6 | MCP Builder | `/fis:mcp-builder` | `mcp-builder.md` | Build MCP servers |
| 7 | MCP Management | `/fis:mcp-management` | `mcp-management.md` | Manage MCP configs |
| 8 | Use MCP | `/fis:use-mcp` | `use-mcp.md` | Use MCP tools |
| 9 | Team | `/fis:team` | `team.md` | Multi-agent coordination |
| 10 | Context Engineering | `/fis:context-engineering` | `agent-browser.md` | Context optimization |

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

### 🔧 Meta (3 skills — standalone)

| # | Skill | Command | File | Mô tả |
|---|-------|---------|------|--------|
| 1 | Skill Creator | `/fis:skill-creator` | `skill-creator.md` | Create custom skills |
| 2 | Template Skill | `/fis:template-skill` | `template-skill.md` | Skill template reference |
| 3 | Coding Level | `/fis:coding-level` | `coding-level.md` | Set output complexity |

---

## SDLC Skill Flow

```
BA Phase:     /fis:elicit → /fis:ba create → /fis:wireframe → /fis:three-amigos:review-prd
                                                                         ↓
SA Phase:     /fis:sa design → /fis:sa ddd-tech → /fis:sa feature-spec → /fis:three-amigos:review-trd
                                                                         ↓
DEV Phase:    /fis:scout → /fis:plan → /fis:cook → /fis:craft × N → /fis:test → /fis:code-review
                                                                         ↓
QA Phase:     /fis:tester test-spec → /fis:tester test-cases → /fis:web-testing → /fis:tester bug
                                                                         ↓
DevOps Phase: /fis:devops → /fis:deploy staging → /fis:deploy production
                                                                         ↓
PM Phase:     /fis:pm status-report → /fis:retro → /fis:pm lessons-learned
```

## Tạo Skill mới

```bash
/fis:skill-creator                # Wizard tạo skill mới
/fis:template-skill               # Xem template chuẩn
```

Mỗi skill file phải có:
1. **Title** với slash command
2. **Khi nào dùng** + **Khi KHÔNG dùng**
3. **Prompt mẫu** (2-5 examples)
4. **Rationalizations** table
5. **Red Flags** list
6. **Verification** checklist
