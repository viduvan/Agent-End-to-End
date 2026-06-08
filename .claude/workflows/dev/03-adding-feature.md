# Thêm tính năng mới

## Metadata
- ⏱ Time: 2-4 hours
- 📋 Steps: 5
- 🎯 Difficulty: Medium
- 📌 Version: v3.0 (Updated: 01/06/2026)
- 🔧 Key Skills: `/fis:plan`, `/fis:craft`, `/fis:test`, `/fis:fix`, `/fis:ship`
- 👥 Roles: DEV, SA

## Mô tả
Quy trình thêm 1 feature: spec → plan → code → test → ship. Full pipeline từ Feature Spec đến production.

## Steps

### Step 1: Khám phá ngữ cảnh (⏱ 10 mins)
```
$ /fis:scout "Tôi cần implement <feature>. Tìm service/pattern có sẵn để reuse."
```
- Nhận FS-NNNN (Feature Spec Approved)
- Tìm service/pattern có sẵn để reuse
- Map dependencies cho feature mới

### Step 2: Lên kế hoạch chi tiết (⏱ 20 mins)
```
$ /fis:plan "Implement <feature> theo FS-NNNN. Chia phases ≤ 1 ngày."
```
Output: `plans/<date>-<feature>/plan.md` + phase files

### Step 3: Thực thi với AI code-pair (⏱ 1-3 hours)
```
$ /fis:craft "plans/<date>/phase-01-*.md"
$ /fis:test
# Repeat cho mỗi phase
$ /fis:craft "plans/<date>/phase-02-*.md"
$ /fis:test
```
- 1 PR per phase
- Test sau mỗi phase

### Step 4: Review & Fix (⏱ 15 mins)
```
$ /fis:code-review --pending
$ /fis:fix "Fix issues từ code review"
$ /fis:security "Scan cho feature mới"
```

### Step 5: Ship & Journal (⏱ 10 mins)
```
$ /fis:ship official
$ /fis:journal "Feature: <feature> implemented"
```
Deploy staging → smoke test → production (canary 5%→25%→100%)

## Tips

### ✅ Best practices
- Scout trước Craft — phát hiện service có sẵn, tránh code thừa
- Phase nhỏ PR ngắn — dễ review, dễ rollback
- Test coverage ≥ 70% cho code mới

### ❌ Anti-patterns
- Skip scout → duplicate code đã có
- 1 PR khổng lồ 1000+ dòng → impossible to review
- Ship mà không test → regression
