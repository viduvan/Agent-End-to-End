# Skill: /fis:bootstrap — Bootstrap New Project

> Khởi tạo project mới: research, stack, design, plan, implement. Full project scaffolding.

## Khi nào dùng
- Khởi tạo project mới từ scratch
- Research + chọn tech stack
- Setup project structure, CI/CD, linting, testing
- Generate boilerplate code

## Agent
Fullstack Developer, Solutions Architect

## Prompt mẫu
```
/fis:bootstrap "Create new SaaS project: Next.js 15, PostgreSQL, Better Auth, Tailwind, shadcn/ui"
```
```
/fis:bootstrap "Bootstrap CLI tool in TypeScript: commander.js, vitest, tsup bundler"
```

## Pre-Launch Checklist
### Code Quality
- Linting (ESLint) + Formatting (Prettier) configured
- TypeScript strict mode enabled
- Tests setup (vitest/jest)

### Security
- Environment variables for secrets
- CORS configured
- Rate limiting on public endpoints

### Performance
- Image optimization
- Code splitting
- Caching strategy

## Nguyên tắc
- Research TRƯỚC khi chọn stack
- Minimal viable scaffold — grow as needed
- CI/CD from day 1

## Verification
- [ ] Project builds and runs
- [ ] Linting + formatting configured
- [ ] Tests framework setup
- [ ] CI/CD pipeline working
- [ ] Environment variables documented
