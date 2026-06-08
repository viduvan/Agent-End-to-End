# Sửa lỗi có hệ thống

## Metadata
- ⏱ Time: 1-3 hours
- 📋 Steps: 5
- 🎯 Difficulty: Medium
- 📌 Version: v3.0 (Updated: 01/06/2026)
- 🔧 Key Skills: `/fis:debug`, `/fis:fix`, `/fis:test`
- 👥 Roles: DEV, SRE

## Mô tả
Reproduce → root cause → fix → regression → postmortem. Quy trình sửa lỗi có hệ thống, tránh fix bừa.

## Steps

### Step 1: Reproduce & Isolate (⏱ 15 mins)
```
$ /fis:debug "Bug: <mô tả bug>. Reproduce steps: <steps>. Expected: <expected>. Actual: <actual>"
```
- Reproduce bug consistently
- Isolate scope: module, function, line
- Collect error logs, stack traces

### Step 2: Root cause analysis (⏱ 20 mins)
```
$ /fis:debug "Analyze root cause: stack trace, log patterns, recent changes"
```
- 5 Whys analysis
- Check recent commits (git log)
- Identify regression source

### Step 3: Fix implementation (⏱ 30-90 mins)
```
$ /fis:fix "Fix <bug> — root cause: <root cause>. Approach: <fix approach>"
```
- Fix nhỏ nhất có thể (minimal change)
- Không refactor kèm fix

### Step 4: Regression test (⏱ 15 mins)
```
$ /fis:test "Regression test cho fix: <bug>. Verify fix + no side effects"
$ /fis:code-review --pending
```
- Viết test case cho bug (prevent regression)
- Run full test suite

### Step 5: Ship & Postmortem (⏱ 10 mins)
```
$ /fis:ship official
$ /fis:journal "Bugfix: <bug> — root cause: <root cause>"
```

## Tips

### ✅ Best practices
- Reproduce TRƯỚC khi fix — không đoán
- Viết test cho bug TRƯỚC khi fix (TDD)
- Fix nhỏ nhất — không refactor kèm
- Postmortem cho P0/P1 bugs

### ❌ Anti-patterns
- Fix bừa mà không hiểu root cause
- Fix 1 bug tạo 3 bugs mới
- Skip regression test
- Không document root cause → bug quay lại
