# FIS Agents — Documentation

> **Tổng**: 19 agents (14 FIS Official + 5 Role-Specific)
> **Nguồn**: https://ai.fis.com.vn/library?tab=agents

## Agents là gì?

Agents là **persona AI chuyên biệt** — mỗi agent có vai trò, khả năng, và bộ tools riêng. Khi AI cần thực hiện task phức tạp, nó **spawn** agent phù hợp nhất thay vì xử lý tất cả bằng 1 persona chung.

## Cách gọi Agent

```bash
/spawn <agent-name>             # Spawn trực tiếp
/fis:team                       # Liệt kê tất cả agents
```

---

## 14 FIS Official Agents

### Utility Agents (Code & Development)

| # | Agent | Persona | Cách gọi | Tools |
|---|-------|---------|----------|-------|
| 1 | **brainstormer** | Creative tech advisor | `/spawn brainstormer` | Glob, Grep, Read, Edit, Write, Bash |
| 2 | **code-reviewer** | Staff Engineer — adversarial review | `/spawn code-reviewer` | Glob, Grep, Read, Edit, Write, Bash |
| 3 | **code-simplifier** | Refactoring specialist | `/spawn code-simplifier` | Glob, Grep, Read, Edit, Write, Bash |
| 4 | **debugger** | Senior SRE — root cause analysis | `/spawn debugger` | Glob, Grep, Read, Edit, Write, Bash |
| 5 | **fullstack-developer** | Senior Engineer — code implementation | `/spawn fullstack-developer` | Glob, Grep, Read, Edit, Write, Bash |

### Utility Agents (Management & Docs)

| # | Agent | Persona | Cách gọi | Tools |
|---|-------|---------|----------|-------|
| 6 | **docs-manager** | Documentation specialist | `/spawn docs-manager` | Glob, Grep, Read, Edit, Write, Bash |
| 7 | **git-manager** | Git operations specialist | `/spawn git-manager` | Glob, Grep, Read, Edit, Write, Bash |
| 8 | **journal-writer** | Session historian — changelog | `/spawn journal-writer` | Glob, Grep, Read, Edit, Write, Bash |
| 9 | **planner** | Tech Lead — granular planning | `/spawn planner` | Glob, Grep, Read, Edit, Write, Bash |
| 10 | **project-manager** | PM Lan — sprint management | `/spawn project-manager` | Glob, Grep, **LS**, Read, Edit, Write |
| 11 | **ui-ux-designer** | UI/UX specialist — wireframes | `/spawn ui-ux-designer` | Glob, Grep, Read, Edit, Write, Bash |

### Research & Integration Agents

| # | Agent | Persona | Cách gọi | Tools |
|---|-------|---------|----------|-------|
| 12 | **researcher** | Technical Analyst — multi-source | `/spawn researcher` | Glob, Grep, Read, **WebFetch, WebSearch** |
| 13 | **mcp-manager** | MCP specialist — tool integration | `/spawn mcp-manager` | Glob, Grep, Read, **WebFetch, WebSearch** |
| 14 | **tester-qa** | QA Lead Priya — shift-left testing | `/spawn tester` | Glob, Grep, Read, Edit, Write, Bash |

---

## 5 Role-Specific Agents (SDLC bổ sung)

Từ FIS `/roles` page — **không có trên cheatsheet** nhưng quan trọng cho SDLC workflow.

| # | Agent | Persona | Role | Cách gọi |
|---|-------|---------|------|----------|
| 15 | **business-analyst** | BA Sarah — domain expert | BA | `/spawn business-analyst` |
| 16 | **solution-architect** | SA Marcus — architecture design | SA | `/spawn solution-architect` |
| 17 | **devops-sre** | DevOps Tuấn — reliability-first | DevOps | `/spawn devops-sre` |
| 18 | **copywriter** | Conversion Copywriter — SEO copy | Docs | `/spawn copywriter` |
| 19 | **database-admin** | Senior DBA — schema & queries | Data | `/spawn database-admin` |

---

## Agent Template chuẩn

Mỗi agent file phải có đủ 7 sections:

```markdown
# Agent: <Name>

## Persona              ← Mô tả ngắn vai trò
## Description          ← Khi nào dùng + ví dụ cụ thể
## Khi nào dùng         ← Trigger conditions
## Capabilities         ← Danh sách khả năng chi tiết
## Đầu ra               ← Artifacts tạo ra
## Skill nội tại        ← Internal tools (Glob/Grep/Read/Edit/Bash...)
## Cách gọi             ← /spawn <agent-name>
```

---

## Agent Orchestration Flow

```
User request
  → Orchestrator phân tích intent
    → Spawn agent phù hợp nhất
      → Agent dùng Internal Skills để thực hiện
        → Output artifact
          → Handoff agent tiếp theo (nếu cần)
```

### SDLC Multi-Agent Pipeline

```
BA (elicit + PRD)
  → Three Amigos (BA + SA + QA sign-off PRD)
    → SA (TRD + Feature Spec)
      → Three Amigos (sign-off TRD)
        → Planner (chia phases)
          → Fullstack Dev (craft per phase)
            → Code Reviewer (review PR)
              → Tester (test + verify)
                → DevOps (deploy staging → production)
                  → PM (status report, governance)
```

---

## Tool Categories

| Tool Type | Agents | Mục đích |
|-----------|--------|----------|
| **Code tools** (Edit/Write/Bash) | code-focused agents | Đọc/ghi code, chạy commands |
| **Research tools** (WebFetch/WebSearch) | researcher, mcp-manager | Tìm kiếm online, đọc docs |
| **Management tools** (LS) | project-manager | List files, không có Bash (an toàn) |
| **Task tools** (TaskCreate/TaskGet) | researcher, mcp-manager | Quản lý tasks tự động |
