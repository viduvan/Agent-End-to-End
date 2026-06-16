# Skill: /fis:ship — Ship Feature

## Khi nào dùng
Feature code xong, test pass → ship to staging/production.

## Agent
Fullstack Developer / DevOps Tuấn

## Capabilities
- Validate test coverage ≥ 70%
- Create PR with template (conventional commits)
- Run CI/CD pipeline
- Trigger deploy: staging → canary → production
- Post-deploy smoke test

---

# Skill: /fis:bootstrap — Bootstrap New Project

## Khi nào dùng
Khởi tạo project structure từ template.

## Agent
Fullstack Developer / Planner

## Capabilities
- Scaffold directory (src/, tests/, docs/, artifacts/)
- Init git + .gitignore + pre-commit hooks
- Setup CI/CD template (.github/workflows/)
- Create CLAUDE.md, README.md
- Init docker-compose.yml
- Setup linting (ruff, mypy)
- Create .env.example

## Pre-Launch Checklist (từ agent-skills)

### Code Quality
- [ ] All tests pass (unit, integration, e2e)
- [ ] Build succeeds, no warnings
- [ ] Lint + type check pass
- [ ] Code reviewed and approved
- [ ] No TODO/console.log in production code

### Security
- [ ] No secrets in code or git history
- [ ] `npm audit` / `pip audit` no critical/high
- [ ] Input validation trên mọi endpoint
- [ ] Auth/authz checks in place
- [ ] Rate limiting on auth endpoints

### Performance
- [ ] No N+1 queries in critical paths
- [ ] Images optimized (nếu có)
- [ ] Bundle size within budget (nếu frontend)
- [ ] DB queries có indexes

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Staging OK thì production OK" | Production có data khác, traffic khác, edge cases khác. Monitor sau deploy. |
| "Feature nhỏ không cần checklist" | Feature nhỏ + bug nhỏ × nhiều lần = production incident. Checklist luôn. |
| "Rollback phức tạp quá" | Rollback plan trước khi deploy. Không có rollback = không nên deploy. |
| "Friday afternoon, ship đi" | Never deploy on Friday. Bugs phát hiện Saturday khi không ai online. |

## Red Flags
- Deploy mà không có rollback plan
- Không monitoring/error reporting trong production
- Big-bang release (tất cả cùng lúc)
- Skip pre-launch checklist "cho nhanh"
- Deploy code chưa qua review

## Verification
Sau khi ship/bootstrap:
- [ ] Pre-launch checklist completed (nếu ship)
- [ ] Rollback plan documented (nếu ship)
- [ ] Monitoring configured (nếu ship)
- [ ] Project structure scaffolded đúng (nếu bootstrap)
- [ ] Git + CI/CD initialized (nếu bootstrap)
