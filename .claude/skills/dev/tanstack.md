# Skill: /fis:tanstack — TanStack Development

> Dựng app với TanStack Start, Form, AI (streaming/chat). TanStack Query, Router, Table.

## Khi nào dùng
- Data fetching với TanStack Query (React Query)
- Routing với TanStack Router (type-safe)
- Forms với TanStack Form
- Tables với TanStack Table (sorting, filtering, pagination)
- Full-stack apps với TanStack Start

## Agent
Fullstack Developer

## Prompt mẫu
```
/fis:tanstack "Set up TanStack Query with optimistic updates for todo list CRUD"
```
```
/fis:tanstack "Create data table with TanStack Table: sorting, filtering, pagination, row selection"
```
```
/fis:tanstack "Build multi-step form with TanStack Form and Zod validation"
```

## Nguyên tắc
- TanStack Query cho server state, Zustand/Jotai cho client state
- Type-safe routing với TanStack Router
- Decouple data fetching from UI components

## Verification
- [ ] Query keys consistent and typed
- [ ] Error/loading states handled
- [ ] Optimistic updates work correctly
- [ ] Table responsive on mobile
