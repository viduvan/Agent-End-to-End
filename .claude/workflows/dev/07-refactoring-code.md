# Tái cấu trúc code

## Metadata
- ⏱ Time: 2-4 hours
- 📋 Steps: 5
- 🎯 Difficulty: Medium
- 📌 Version: v3.0 (Updated: 01/06/2026)
- 🔧 Key Skills: `/fis:scout`, `/fis:craft`, `/fis:test`
- 👥 Roles: DEV, SA

## Mô tả
Refactor an toàn — TDD theo từng module. Tái cấu trúc code mà không break functionality.

## Steps

### Step 1: Khám phá code cần refactor (⏱ 15 mins)
```
$ /fis:scout "Analyze <module>: complexity, duplication, anti-patterns, test coverage"
```
- Identify code smells (cyclomatic complexity, DRY violations)
- Map dependencies (what depends on this code?)
- Check existing test coverage

### Step 2: Lên kế hoạch refactor (⏱ 20 mins)
```
$ /fis:plan "Refactor <module>:
- Phase 1: Add missing tests (safety net)
- Phase 2: Extract functions/classes
- Phase 3: Rename + reorganize
- Phase 4: Cleanup imports + dead code"
```

### Step 3: Thực thi refactor (⏱ 1-3 hours)
```
$ /fis:test "Add tests cho <module> trước khi refactor (safety net)"
$ /fis:craft "Phase 1 — Extract functions, reduce complexity"
$ /fis:test
$ /fis:craft "Phase 2 — Rename, reorganize, DRY"
$ /fis:test
```
- TDD: test → refactor → test → repeat
- Commit sau mỗi step an toàn

### Step 4: Review & Verify (⏱ 15 mins)
```
$ /fis:code-review --pending
$ /fis:test "Full regression suite"
```
- Verify behavior preserved (same inputs → same outputs)
- Check coverage không giảm

### Step 5: Ship & Journal (⏱ 10 mins)
```
$ /fis:ship official
$ /fis:journal "Refactor: <module> — reduced complexity, improved readability"
```

## Tips

### ✅ Best practices
- Tests TRƯỚC refactor — safety net bắt buộc
- Commit sau mỗi step nhỏ — easy rollback
- Không thêm feature khi refactor
- Measure trước/sau: complexity, coverage, LOC

### ❌ Anti-patterns
- Refactor không có tests → broken production
- "Big bang" refactor 1 lần → impossible to review
- Refactor + feature cùng lúc → unclear PR
