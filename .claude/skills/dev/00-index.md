# DEV Skills Index

## Purpose

Use this index to choose the right DEV skill before implementation. The default flow for existing projects is:

```text
scout -> plan -> craft -> test -> code-review -> ship -> journal
```

## Skill Groups

| Group | Skills | Primary agent | Use when |
|---|---|---|---|
| Discovery | `/fis:scout`, `/fis:gkg`, `/fis:repomix`, `/fis:graphify`, `/fis:research` | `researcher`, `planner` | Understand codebase, dependencies, impact, or external options |
| Planning | `/fis:plan` | `planner` | Split implementation into phases and DoD |
| Implementation | `/fis:craft`, `/fis:cook` | `fullstack-developer` | Implement code from a plan or clear requirement |
| Backend | `/fis:backend-development`, `/fis:web-frameworks`, `/fis:better-auth`, `/fis:payment-integration`, `/fis:shopify` | `fullstack-developer` | API, service, auth, payment, framework work |
| Database | `/fis:databases` | `database-admin` | Schema, migrations, indexes, pgvector, query tuning |
| Frontend | `/fis:frontend-development`, `/fis:frontend-design`, `/fis:ui-styling`, `/fis:ui-ux-pro-max`, `/fis:react-best-practices`, `/fis:tanstack` | `fullstack-developer`, `ui-ux-designer` | Components, UI states, styling, React patterns |
| Testing and fixing | `/fis:test`, `/fis:fix`, `/fis:debug`, `/fis:chrome-devtools` | `tester-qa`, `debugger`, `fullstack-developer` | Tests, bugs, RCA, frontend diagnostics |
| Shipping | `/fis:ship`, `/fis:bootstrap`, `/fis:port-feature`, `/fis:port-repo`, `/fis:xia` | `fullstack-developer`, `devops-sre`, `git-manager` | Bootstrap, release, PR, deploy, feature porting |
| Media and 3D | `/fis:threejs`, `/fis:shader`, `/fis:remotion`, `/fis:media-processing` | `fullstack-developer`, `ui-ux-designer` | 3D, shaders, video, image/audio/video processing |

## Decision Tree

```text
Is this an existing project?
  -> Start with /fis:scout

Is the work larger than a trivial fix?
  -> Use /fis:plan before /fis:craft

Is the task a bug with unknown cause?
  -> Use /fis:debug before /fis:fix

Is the task database-heavy?
  -> Use /fis:databases before implementation

Is the task auth, payment, or security-sensitive?
  -> Use security review plus specialized backend skill

Is the task UI-heavy?
  -> Use frontend design/development skills and include responsive states

Is code ready to merge?
  -> Use /fis:test, then /fis:code-review, then /fis:ship
```

## Primary vs Specialized Skills

| Primary skill | Specialized when needed |
|---|---|
| `/fis:craft` | `/fis:cook` for structured implementation pipelines |
| `/fis:backend-development` | `/fis:better-auth`, `/fis:payment-integration`, `/fis:shopify`, `/fis:web-frameworks` |
| `/fis:frontend-development` | `/fis:frontend-design`, `/fis:ui-styling`, `/fis:react-best-practices`, `/fis:tanstack` |
| `/fis:fix` | `/fis:debug` when root cause is unclear |
| `/fis:test` | `/fis:chrome-devtools` for browser performance, network, or memory diagnostics |
| `/fis:ship` | `/fis:bootstrap` for new project setup, `/fis:port-feature` for migration/adaptation |

## Output Contracts

### `/fis:scout`

```markdown
## Scout Report
- Scope:
- Existing patterns:
- Dependencies:
- Reuse opportunities:
- Risks:
- Recommended next step:
```

### `/fis:plan`

```markdown
## Implementation Plan
- Scope:
- Phases:
- Files expected:
- Tests required:
- Risks:
- Definition of Done:
```

### `/fis:craft`

```markdown
## Craft Report
- Phase:
- Files changed:
- Behavior implemented:
- Tests added:
- Known risks:
- Next action:
```

### `/fis:test`

```markdown
## Test Report
- Command:
- Result:
- Coverage:
- Failures:
- Gaps:
- Next action:
```

### `/fis:fix`

```markdown
## Fix Report
- Bug:
- Root cause:
- Fix:
- Regression test:
- Verification:
- Prevention:
```

### `/fis:ship`

```markdown
## Ship Report
- Commit/PR:
- Tests:
- Review:
- Deploy target:
- Smoke test:
- Rollback:
```

## DEV Readiness Checklist

- Requirement or FS is available.
- Existing code patterns are scouted.
- Plan exists for non-trivial work.
- Ownership boundary is clear.
- Test target is known.
- Security-sensitive areas are identified.

## DEV Completion Checklist

- Code and tests are complete.
- Relevant tests pass.
- Review is complete for non-trivial work.
- Docs or plan are updated if behavior changed.
- Handoff includes changed files, risks, and next action.
