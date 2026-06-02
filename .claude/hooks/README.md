# FIS Hooks — Documentation

> **Tổng**: 16 hooks bảo mật | **Nguồn**: https://ai.fis.com.vn/library?tab=hooks

## Hooks là gì?

Hooks là **scripts JavaScript (.cjs)** chạy tự động **trước/sau** khi AI agent thực hiện thao tác.
Chúng đóng vai trò "cửa kiểm soát an ninh" — tự động chặn hành vi nguy hiểm, inject context, và đảm bảo agent tuân thủ quy trình.

## 16 Hooks theo nhóm

### 1. Pre-tool Hooks (chạy TRƯỚC khi agent thao tác)

| # | Hook | File | Tác dụng |
|---|------|------|----------|
| 1 | `privacy-block` | `privacy-block.cjs` | Chặn đọc/ghi `.env`, secrets, keys — yêu cầu user approve |
| 2 | `scout-block` | `scout-block.cjs` | Chặn đọc `node_modules/`, `dist/`, `.next/` — tránh context pollution |
| 3 | `descriptive-name` | `descriptive-name.cjs` | Enforce tên file descriptive khi tạo mới |
| 4 | `teammate-idle-handler` | `teammate-idle-handler.cjs` | Detect agent idle/stuck, auto-intervene |
| 5 | `usage-context-awareness` | `usage-context-awareness.cjs` | Inject context về usage quotas |

### 2. Post-tool Hooks (chạy SAU khi agent xong thao tác)

| # | Hook | File | Tác dụng |
|---|------|------|----------|
| 6 | `plan-format-kanban` | `plan-format-kanban.cjs` | Validate plan.md format — warn nếu dùng filename thay human-readable title |
| 7 | `session-state` | `session-state.cjs` | Lưu/restore session state giữa các sessions |
| 8 | `usage-quota-cache-refresh` | `usage-quota-cache-refresh.cjs` | Refresh quota cache sau mỗi tool call |

### 3. Session Hooks (khi bắt đầu/kết thúc session)

| # | Hook | File | Tác dụng |
|---|------|------|----------|
| 9 | `session-init` | `session-init.cjs` | Detect project type, load config, init workspace |
| 10 | `skill-dedup` | `skill-dedup.cjs` | Deduplicate skills đã load trong session |
| 11 | `cook-after-plan-reminder` | `cook-after-plan-reminder.cjs` | Nhắc nhở craft sau khi plan xong |

### 4. Subagent Hooks (khi spawn agent con)

| # | Hook | File | Tác dụng |
|---|------|------|----------|
| 12 | `subagent-init` | `subagent-init.cjs` | Inject project paths, plan location, agent instructions |
| 13 | `task-completed-handler` | `task-completed-handler.cjs` | Handle task completion, update progress |
| 14 | `team-context-inject` | `team-context-inject.cjs` | Inject team context cho subagent runs |

### 5. User Input Hooks (khi user nhập prompt)

| # | Hook | File | Tác dụng |
|---|------|------|----------|
| 15 | `dev-rules-reminder` | `dev-rules-reminder.cjs` | Inject dev rules vào prompt context |
| 16 | `simplify-gate` | `simplify-gate.cjs` | Chặn ship code chưa refactor — warn khi diff lớn |

## Cách hoạt động

```
User gõ prompt → [User Input Hooks] → Agent xử lý
                                         ↓
                              [Pre-tool Hook] chặn/cho phép
                                         ↓
                              Agent thực hiện tool (Read/Write/Bash)
                                         ↓
                              [Post-tool Hook] validate output
                                         ↓
                              Kết quả trả user
```

## Exit Codes
- `0` = Cho phép (ALLOW)
- `2` = Chặn (BLOCK)

## Cấu hình
- `.claude/.ckignore` — Danh sách patterns bị scout-block chặn
- `.claude/.ck.json` — Config on/off cho từng hook
