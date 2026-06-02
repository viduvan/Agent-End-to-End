# DEV Role Matrix

## Purpose

This file defines how development work is split across DEV-facing agents. Use it when routing implementation, debugging, review, database, frontend, or release-support tasks.

## Role Map

| Role | Agent | Primary responsibility | Typical output |
|---|---|---|---|
| Tech Lead | `planner` | Break work into small phases, identify dependencies and risks | `plans/<date>-<feature>/plan.md`, phase files |
| Implementer | `fullstack-developer` | Build backend, frontend, API, AI workflow, and tests | production code, test files, API docs |
| Reviewer | `code-reviewer` | Review security, quality, performance, and standards | Critical/Major/Minor/Nit findings, approve/request changes |
| Debugger | `debugger` | Reproduce, isolate, root-cause, and verify bugs | RCA report, ranked fix options, verification results |
| Database Specialist | `database-admin` | Schema, migration, indexing, pgvector, backup strategy | migration files, schema docs, query reports |
| UI Specialist | `ui-ux-designer` | UI flows, component states, usability, responsive behavior | design spec, wireframes, UI notes |
| Release Support | `devops-sre` | CI/CD, deploy, runtime reliability, monitoring | pipeline, runbook, deploy report |
| Git Support | `git-manager` | Branch, commit, PR, merge hygiene | clean branch, conventional commits, PR checklist |
| Docs Support | `docs-manager`, `journal-writer` | Keep docs and session history current | docs updates, journal/changelog |

## Decision Tree

```text
Need to understand codebase?
  -> researcher or planner with /fis:scout

Need to split implementation work?
  -> planner with /fis:plan

Need to write code?
  -> fullstack-developer with /fis:craft

Need UI/component work?
  -> fullstack-developer plus ui-ux-designer when design/state decisions matter

Need database schema, migration, indexes, pgvector?
  -> database-admin, then fullstack-developer implements app integration

Bug or failing test?
  -> debugger first if root cause is unknown
  -> fullstack-developer if root cause and fix are clear

Need review before ship?
  -> code-reviewer

Need deployment, Docker, CI/CD, monitoring?
  -> devops-sre

Need branch, commit, PR hygiene?
  -> git-manager
```

## Workflow Matrix

| Situation | Workflow | Primary agents | Skills |
|---|---|---|---|
| New project | `workflows/dev/01-new-project.md` | `planner`, `fullstack-developer`, `devops-sre` | `/fis:bootstrap`, `/fis:plan`, `/fis:craft`, `/fis:test`, `/fis:ship` |
| Existing project | `workflows/dev/02-existing-project.md` | `researcher`, `planner` | `/fis:scout`, `/fis:gkg`, `/fis:repomix`, `/fis:docs` |
| Add feature | `workflows/dev/03-adding-feature.md` | `planner`, `fullstack-developer`, `code-reviewer` | `/fis:scout`, `/fis:plan`, `/fis:craft`, `/fis:test`, `/fis:code-review` |
| Auth | `workflows/dev/04-implementing-auth.md` | `fullstack-developer`, `code-reviewer` | `/fis:security`, `/fis:better-auth`, `/fis:test` |
| Payment | `workflows/dev/05-payment-integration.md` | `fullstack-developer`, `code-reviewer` | `/fis:payment-integration`, `/fis:security`, `/fis:test` |
| Bug fix | `workflows/dev/06-fixing-bugs.md` | `debugger`, `fullstack-developer`, `code-reviewer` | `/fis:debug`, `/fis:fix`, `/fis:test` |
| Refactor | `workflows/dev/07-refactoring-code.md` | `planner`, `fullstack-developer`, `code-reviewer` | `/fis:scout`, `/fis:plan`, `/fis:test`, `/fis:craft` |

## Definition of Ready

DEV work is ready when:

- Requirement, Feature Spec, or bug report is available.
- Scope is bounded to a feature, module, or phase.
- Acceptance criteria or expected behavior are clear.
- Technical constraints are known.
- Relevant PRD, TRD, FS, ADR, or TestSpec links are available when applicable.
- Baseline tests are known for existing projects.
- Ownership boundaries are clear.

## Definition of Done

DEV work is done when:

- Code is implemented within assigned scope.
- Tests are added or updated for changed behavior.
- Relevant test suite passes.
- Coverage target is met or any gap is documented.
- Code review is complete for non-trivial changes.
- Docs, plan, or journal are updated when behavior or architecture changed.
- No secrets or blocked files were read or modified.
- Handoff includes changed files, tests, risks, and next action.

## Output Contract

Every DEV-facing agent should return:

```markdown
## Status Report
- Status: COMPLETED | BLOCKED | FAILED
- Scope:
- Files Changed:
- Tests:
- Risks:
- Blockers:
- Next Action:
```

## Escalation

Escalate when:

- Requirement conflicts with approved PRD, TRD, or Feature Spec.
- The task needs writes outside DEV ownership.
- Baseline tests fail before changes.
- The root cause cannot be reproduced.
- Security, auth, payment, privacy, or deploy assumptions are missing.
- The change requires an ADR or architecture approval.
