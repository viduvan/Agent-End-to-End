# DEV Workflows Index

## Purpose

Use this file to choose the right DEV workflow. DEV workflows are the execution layer between approved requirements/design and shippable implementation.

## Workflow Selection

| User intent | Workflow | When to use | Core skills |
|---|---|---|---|
| Start a new project | `01-new-project.md` | Greenfield setup from idea or approved concept | `/fis:bootstrap`, `/fis:plan`, `/fis:craft`, `/fis:test`, `/fis:ship` |
| Work in an existing project | `02-existing-project.md` | Onboarding, understanding architecture, preparing contribution | `/fis:scout`, `/fis:gkg`, `/fis:repomix`, `/fis:docs` |
| Add a new feature | `03-adding-feature.md` | Feature Spec or clear requirement exists | `/fis:scout`, `/fis:plan`, `/fis:craft`, `/fis:test`, `/fis:fix`, `/fis:ship` |
| Implement auth | `04-implementing-auth.md` | OAuth, JWT, sessions, MFA, passkeys, RBAC | `/fis:security`, `/fis:better-auth`, `/fis:craft`, `/fis:test` |
| Integrate payment | `05-payment-integration.md` | Checkout, webhook, subscriptions, refunds | `/fis:payment-integration`, `/fis:security`, `/fis:craft`, `/fis:test` |
| Fix bugs | `06-fixing-bugs.md` | Reproduce, RCA, regression, postmortem | `/fis:debug`, `/fis:fix`, `/fis:test` |
| Refactor code | `07-refactoring-code.md` | Improve structure while preserving behavior | `/fis:scout`, `/fis:plan`, `/fis:test`, `/fis:craft` |

## Decision Tree

```text
Is this a greenfield project?
  -> 01-new-project

Is this an existing codebase and the goal is understanding/onboarding?
  -> 02-existing-project

Is there a new feature to build?
  -> Is it auth-specific?
       -> 04-implementing-auth
     Is it payment-specific?
       -> 05-payment-integration
     Otherwise
       -> 03-adding-feature

Is there a bug or failing test?
  -> 06-fixing-bugs

Is behavior supposed to stay the same while structure improves?
  -> 07-refactoring-code

Is the task CI/CD or Docker?
  -> Use devops workflows: ../devops/08-ci-cd-setup.md or ../devops/09-docker-compose.md
```

## Standard DEV Flow

```text
Context:
  /fis:scout

Plan:
  /fis:plan

Execute:
  /fis:craft per phase

Verify:
  /fis:test after each phase
  /fis:code-review before ship

Release:
  /fis:ship
  /fis:journal
```

## Gate Checklist

### Before Plan

- Requirement, FS, bug report, or refactor goal is clear.
- Existing codebase context is known or scout is scheduled.
- Ownership boundary is clear.

### Before Craft

- Plan exists unless the change is trivial.
- Phase scope is small enough to review.
- Expected tests are listed.
- Security-sensitive areas are identified.

### Before Ship

- Tests pass.
- Code review is complete.
- Coverage target is met or gap is documented.
- Handoff includes files changed, tests, risks, and next action.

## Handoff Template

```markdown
## Handoff: DEV -> Next Role

### Completed
- [x] 

### Files changed
- 

### Tests
- 

### Risks
- 

### Next action
- 
```
