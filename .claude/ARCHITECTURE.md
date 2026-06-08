# FIS AI Delivery Architecture

## Purpose

This repository is an AI delivery operating system for software projects. It defines agents, skills, workflows, rules, hooks, and artifacts so an orchestrator can route work through the SDLC with clear ownership and handoff.

## System Model

```text
User Intent
  -> Workflow Routing
    -> Agent Selection
      -> Skill Activation
        -> Artifact Output
          -> Handoff / Review
            -> Ship / Govern
```

## Core Layers

| Layer | Path | Responsibility |
|---|---|---|
| Project rules | `CLAUDE.md` | Stack, code standards, delivery pattern |
| Agents | `.claude/agents/` | Persona roles that perform work |
| Skills | `.claude/skills/` | Slash-command capabilities used by agents |
| Workflows | `.claude/workflows/` | Ordered SDLC procedures |
| Rules | `.claude/rules/` | Routing, orchestration, quality, ownership |
| Hooks | `.claude/hooks/` | Automated guardrails and session behavior |
| Artifacts | `artifacts/` | PRD, TRD, FS, plans, tests, PM records |
| Docs | `docs/` | Generated or maintained project documentation |

## SDLC Pipeline

```text
BA:     elicit -> PRD -> wireframe -> PRD sign-off
SA:     TRD -> DDD technical model -> Feature Spec -> TRD sign-off
DEV:    scout -> plan -> craft -> test -> review
QA:     test spec -> test cases -> verification -> bug report
DevOps: build -> deploy -> monitor -> incident response
PM:     charter -> RAID/risk -> status -> lessons learned
```

## Routing Principles

| Intent | Primary workflow | Primary agent | Key skills |
|---|---|---|---|
| New project | `workflows/dev/01-new-project.md` | `planner`, `fullstack-developer` | `/fis:bootstrap`, `/fis:plan`, `/fis:craft`, `/fis:test` |
| Existing project onboarding | `workflows/dev/02-existing-project.md` | `researcher`, `planner` | `/fis:scout`, `/fis:gkg`, `/fis:repomix` |
| Add feature | `workflows/dev/03-adding-feature.md` | `fullstack-developer` | `/fis:scout`, `/fis:plan`, `/fis:craft`, `/fis:test` |
| Auth | `workflows/dev/04-implementing-auth.md` | `fullstack-developer`, `code-reviewer` | `/fis:security`, `/fis:better-auth`, `/fis:test` |
| Payment | `workflows/dev/05-payment-integration.md` | `fullstack-developer`, `code-reviewer` | `/fis:payment-integration`, `/fis:security`, `/fis:test` |
| Bug fix | `workflows/dev/06-fixing-bugs.md` | `debugger`, `fullstack-developer` | `/fis:debug`, `/fis:fix`, `/fis:test` |
| Refactor | `workflows/dev/07-refactoring-code.md` | `planner`, `fullstack-developer` | `/fis:scout`, `/fis:plan`, `/fis:test`, `/fis:craft` |
| CI/CD | `workflows/devops/08-ci-cd-setup.md` | `devops-sre` | `/fis:devops`, `/fis:ship`, `/fis:security` |
| Docker | `workflows/devops/09-docker-compose.md` | `devops-sre` | `/fis:devops`, `/fis:ship` |

## Ownership Boundaries

| Owner | Writable scope | Read-only context |
|---|---|---|
| BA | `artifacts/prd/`, `artifacts/wireframes/` | TRD, TestSpec, plans |
| SA | `artifacts/trd/`, `artifacts/decisions/`, `docs/system-architecture.md` | PRD, code, tests |
| DEV | `src/`, `tests/`, `plans/` | PRD, TRD, FS, ADR, TestSpec |
| QA | `artifacts/test-specs/`, `tests/e2e/` | PRD, TRD, FS, source code |
| DevOps | `Dockerfile`, `docker-compose.yml`, `.github/workflows/`, `docs/runbooks/` | app code, tests, release notes |
| PM | `artifacts/pm/`, `docs/project-overview.md` | all delivery artifacts |

## Artifact Contract

Each non-trivial task should leave a durable artifact:

| Phase | Artifact |
|---|---|
| Requirements | `artifacts/prd/PRD-<NNNN>-<name>.md` |
| Architecture | `artifacts/trd/TRD-<NNNN>-<name>.md` |
| Feature specification | `artifacts/fs/FS-<NNNN>-<name>.md` |
| Implementation plan | `plans/<date>-<feature>/plan.md` and phase files |
| Testing | `artifacts/test-specs/TS-<NNNN>-<name>.md` |
| Decision | `artifacts/decisions/ADR-<NNN>-<name>.md` |
| Bug | `artifacts/bugs/BUG-<NNNN>-<name>.md` |
| Governance | `artifacts/pm/` |

## Quality Gates

| Gate | Minimum check |
|---|---|
| Before build | Requirement or FS is understood, scope is bounded, plan exists unless trivial |
| During build | Scout existing patterns first, keep phase small, test each phase |
| Before review | Tests pass, changed files are within ownership, no secrets |
| Before ship | Review approved, coverage target met, deployment path known |

## Escalation Rules

Escalate to the orchestrator or user when:

- Requirements conflict with PRD, TRD, or Feature Spec.
- A role must write outside its ownership boundary.
- Baseline tests fail before any change is made.
- A bug cannot be reproduced after reasonable investigation.
- Auth, payment, privacy, or deployment details are missing.
- The required change implies a new architecture decision.
