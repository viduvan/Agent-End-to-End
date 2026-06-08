# Làm việc với dự án hiện có

## Metadata
- ⏱ Time: 1-2 hours
- 📋 Steps: 5
- 🎯 Difficulty: Easy
- 📌 Version: v3.0 (Updated: 01/06/2026)
- 🔧 Key Skills: `/fis:scout`, `/fis:gkg`, `/fis:docs`, `/fis:repomix`
- 👥 Roles: DEV, SA

## Mô tả
Tích hợp AI Kit vào codebase đang chạy. Hiểu codebase trước khi contribute.

## Steps

### Step 1: Khám phá codebase (⏱ 20 mins)
```
$ /fis:scout "Phân tích codebase: architecture, patterns, conventions, dependencies"
```
- Hiểu file structure, naming conventions
- Phát hiện design patterns đang dùng
- Map dependency graph

### Step 2: Build knowledge graph (⏱ 15 mins)
```
$ /fis:gkg "Build knowledge graph cho module chính"
$ /fis:repomix "Pack codebase context cho AI"
```
- Semantic code analysis: go-to-definition, find-usages
- Impact analysis cho planned changes

### Step 3: Sync documentation (⏱ 15 mins)
```
$ /fis:docs init
$ /fis:docs sync
```
- Sinh 5 docs khung nếu chưa có
- Sync stale docs với code hiện tại

### Step 4: Verify & Test baseline (⏱ 15 mins)
```
$ /fis:test "Run existing test suite, check baseline coverage"
```
- Xác nhận tests hiện tại đều pass
- Ghi nhận coverage baseline

### Step 5: Journal onboarding (⏱ 5 mins)
```
$ /fis:journal "Session: onboarding dự án <tên>, đã hiểu architecture"
```

## Tips

### ✅ Best practices
- Scout trước khi code — hiểu patterns trước khi thêm code mới
- Không refactor ngay — hiểu trước, propose sau
- Chạy tests trước khi sửa bất kỳ thứ gì

### ❌ Anti-patterns
- Nhảy thẳng vào code mà không hiểu architecture
- Refactor theo ý mình mà không align với team conventions
- Ignore existing tests
