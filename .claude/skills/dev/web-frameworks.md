# Skill: /fis:web-frameworks — Web Framework Optimization

> Dựng app với Next.js (App Router, RSC, SSR, ISR) và Turborepo. Modern web framework patterns.

## Khi nào dùng
- Next.js App Router setup và optimization
- React Server Components (RSC) implementation
- SSR/SSG/ISR strategy decisions
- Turborepo monorepo configuration
- Middleware, API routes, route handlers

## Agent
Fullstack Developer (Senior Engineer)

## Prompt mẫu
```
/fis:web-frameworks "Set up Next.js 15 with App Router, RSC, and Turbopack for development"
```
```
/fis:web-frameworks "Implement ISR with on-demand revalidation for blog posts"
```
```
/fis:web-frameworks "Configure Turborepo monorepo with shared UI library and 2 apps"
```

## Nguyên tắc
- App Router over Pages Router cho new projects
- RSC by default, 'use client' chỉ khi cần
- ISR cho content thay đổi không thường xuyên

## Verification
- [ ] App Router used correctly
- [ ] RSC/client boundary clear
- [ ] Build succeeds (no hydration mismatch)
- [ ] Performance: LCP < 2.5s
