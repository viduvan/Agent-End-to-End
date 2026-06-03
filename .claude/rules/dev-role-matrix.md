# DEV Role Matrix — Ma trận vai trò DEV Kit

> Bảng phân quyền: mỗi intent được xử lý bởi agents nào, dùng skills gì, output gì.

## Natural Language Entry

> Mọi request DEV đều đi qua `dev-orchestrator`.
> Orchestrator quyết định dùng agent nào — user không cần biết tên role phụ.

| Người dùng nói | Orchestrator chọn |
|----------------|-------------------|
| "build feature" / "thêm tính năng" | planner → fullstack-developer → code-reviewer |
| "bug không rõ nguyên nhân" | debugger → fullstack-developer → code-reviewer |
| "query chậm" / "schema" | database-admin → fullstack-developer |
| "UI chưa đẹp" / "responsive" | ui-ux-designer → fullstack-developer |
| "review trước commit" | code-reviewer |
| "đọc project" / "onboard" | researcher → planner |
| "deploy" / "Docker" | devops-sre |

## Role Matrix

### Agents theo Intent

| Intent | Primary Agent | Support Agents | Escalation |
|--------|--------------|----------------|------------|
| `onboarding` | researcher | planner | — |
| `add_feature` | fullstack-developer | planner, code-reviewer | SA (nếu cần architecture decision) |
| `bug_fix` | debugger | fullstack-developer, code-reviewer | SA (nếu bug ở architecture level) |
| `refactor` | code-simplifier | planner, code-reviewer | SA (nếu refactor lớn) |
| `auth` | fullstack-developer | planner, tester-qa | SA (security review) |
| `payment` | fullstack-developer | planner, tester-qa | SA (PCI compliance) |
| `database` | database-admin | fullstack-developer | SA (schema review) |
| `frontend_ui` | ui-ux-designer | fullstack-developer | — |
| `devops` | devops-sre | — | — |
| `code_review` | code-reviewer | — | SA (architecture review) |
| `testing` | tester-qa | — | — |
| `documentation` | docs-manager | — | — |
| `new_project` | planner | fullstack-developer | SA (tech stack decision) |
| `research_spike` | researcher | planner | — |

### Agent Chain (thứ tự spawn)

```
onboarding:     researcher → planner
add_feature:    planner → fullstack-developer → code-reviewer
bug_fix:        debugger → fullstack-developer → code-reviewer  
refactor:       planner → code-simplifier → code-reviewer
auth:           planner → fullstack-developer → tester-qa
payment:        planner → fullstack-developer → tester-qa
database:       database-admin → fullstack-developer
frontend_ui:    ui-ux-designer → fullstack-developer
devops:         devops-sre (single)
code_review:    code-reviewer (single)
testing:        tester-qa (single)
documentation:  docs-manager (single)
new_project:    planner → fullstack-developer
research_spike: researcher → planner
```

### Output Matrix

| Intent | Code Output | Doc Output | Test Output |
|--------|-------------|------------|-------------|
| `onboarding` | — | Architecture summary | — |
| `add_feature` | `src/` files | Plan.md | `tests/` files |
| `bug_fix` | Fix in `src/` | Postmortem (RCA) | Regression test |
| `refactor` | Refactored `src/` | — | Verify tests |
| `auth` | Auth module | Security notes | Auth tests |
| `payment` | Payment module | Integration docs | Payment tests |
| `database` | Migrations | Schema docs | DB tests |
| `frontend_ui` | Components | Design tokens | Component tests |
| `devops` | CI/CD config | Deploy docs | — |
| `code_review` | — | Review report | — |
| `testing` | — | Test report | Test files |
| `documentation` | — | Docs files | — |
| `new_project` | Scaffold | Plan.md | Initial tests |
| `research_spike` | POC code (optional) | Research report | — |

## Escalation Rules

Khi nào orchestrator PHẢI escalate lên SA/PM:
1. **Architecture change** — thay đổi cấu trúc module/service
2. **New dependency** — thêm library/framework mới
3. **Security concern** — auth, payment, PII data
4. **Breaking change** — API contract thay đổi
5. **Scope creep** — task lớn hơn dự kiến (> 4 hours)
