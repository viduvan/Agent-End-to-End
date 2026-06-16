# Skill: /fis:simplify — Code Simplification & Refactoring

> Refactoring discipline — Chesterton's Fence + simplification patterns.
> Hiểu trước khi xóa. Đơn giản hóa có hệ thống.

## Khi nào dùng
- Trước khi refactor (hiểu tại sao code hiện tại như vậy)
- Khi code complexity tăng (file > 300 LOC, function > 50 LOC)
- Sau feature complete — clean up phase
- Khi onboard và thấy "sao code phức tạp thế?"

## Agent
Code Simplifier

## 5 Principles

### 1. Preserve Behavior
Simplify KHÔNG thay đổi behavior. Tests phải pass trước VÀ sau.
Nếu chưa có tests → viết tests TRƯỚC khi simplify.

### 2. Follow Conventions
Dùng patterns của project, không introduce patterns mới.
Check existing code trước khi refactor.

### 3. Clarity > Cleverness
```python
# ❌ Clever
result = [x for x in data if (pred := check(x)) and pred.valid]

# ✅ Clear
valid_items = []
for item in data:
    result = check(item)
    if result.valid:
        valid_items.append(item)
```

### 4. Balance
Không over-simplify. Abstraction phù hợp complexity của problem.
3 classes cho problem cần 1 function = over-engineering.

### 5. Scope
Simplify 1 thing at a time. Không refactor toàn bộ module cùng lúc.

## Chesterton's Fence (BẮT BUỘC)
> "Trước khi xóa hàng rào, hãy hiểu tại sao ai đó dựng nó."

**Process**:
1. Code trông "thừa" hoặc "phức tạp không cần thiết"?
2. **DỪNG** — tìm hiểu tại sao code được viết như vậy
3. Check: git blame, PR comments, commit messages, ADRs
4. Chỉ simplify SAU KHI hiểu reason
5. Nếu không tìm được reason → ASK trước khi xóa

## Simplification Patterns

| Pattern | Khi nào | Example |
|---------|---------|---------|
| Extract function | Logic lặp ≥ 2 lần | `validate_email()` thay vì regex inline |
| Inline function | Function 1 line, gọi 1 chỗ | Remove trivial wrapper |
| Rename | Tên không mô tả | `data` → `user_profiles` |
| Remove dead code | Code không reachable | Delete, không comment out |
| Flatten nesting | > 3 levels deep | Early return / guard clause |
| Replace magic number | Number không có tên | `MAX_RETRIES = 3` |

## Rule of 500
Nếu cần simplify > 500 LOC → automate bằng script/tool.
Manual refactoring > 500 LOC = error-prone.

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Code phức tạp vì requirement phức tạp" | Có thể đúng. Nhưng check: code CÓ THỂ đơn giản hơn không? |
| "Tôi hiểu rồi, xóa được" | Chesterton's Fence: có lý do ai đó viết như vậy. Check trước. |
| "Refactor luôn cho nhanh" | Refactor = separate commit, separate PR. Không mix với feature. |
| "Code chạy được rồi, đừng sửa" | Technical debt tích lũy. "Chạy được" hôm nay ≠ "maintain được" tháng sau. |

## Red Flags
- Xóa code mà không hiểu tại sao nó tồn tại (vi phạm Chesterton's Fence)
- Refactor + feature trong cùng 1 commit
- Simplify mà không có tests trước
- Over-simplify: merge 3 classes thành 1 God class
- Introduce new patterns thay vì follow existing conventions

## Verification
- [ ] Tests pass trước VÀ sau simplification
- [ ] Chesterton's Fence checked (hiểu reason trước khi xóa)
- [ ] Behavior preserved (diff không thay đổi output)
- [ ] Follow existing project conventions
- [ ] Separate commit/PR cho simplification
- [ ] No dead code left (commented-out code = dead code)
