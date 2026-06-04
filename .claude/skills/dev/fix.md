# Skill: /fis:fix — Sửa Bug Có Hệ Thống

## Khi nào dùng
Khi gặp bug + có error log hoặc reproduce steps.

## Agent
Senior Engineer

## 3 Modes

| Mode | Khi nào | Command |
|------|---------|---------|
| `--quick` | Bug đơn giản, reproduce rõ | `/fis:fix --quick <mô tả>` |
| (default) | Bug phức tạp, cần analyze | `/fis:fix <mô tả chi tiết + log>` |
| `debug` | Bug mơ hồ, không reproduce | `/fis:debug <mô tả + context>` |

## Quy trình

### 1. Confirm Reproduce
- Ghi rõ: hành vi thực tế vs mong đợi
- Steps reproduce chính xác
- Environment info (version, OS, browser)

### 2. Root Cause Analysis
- Diff với version trước
- Analyze log pattern
- Hypothesis ranking (HIGH/MEDIUM/LOW)

### 3. Plan Fix
- Save plan: `plans/<date>-fix-<bug>/plan.md`

### 4. Implement Fix
- Fix code + giữ nguyên test cũ pass

### 5. Regression Test
- Viết test cover scenario gốc
- Chạy full test suite

### 6. Postmortem
- `docs/postmortems/<date>-<bug>.md`
- Timeline, root cause, impact, prevention

### 7. Deploy + Monitor 24h

## Prompt mẫu

### Bug đơn giản
```
/fis:fix --quick
User nhận 401 khi login với credential đúng.
Reproduce: POST /api/auth/login với email + password hợp lệ.
Bug xuất hiện sau release v2.4.1.
```

### Bug phức tạp
```
/fis:fix
WebSocket connection memory leak khiến server crash sau 4h.
Symptom:
- Memory usage tăng 200MB → 2GB
- Connection count > 5000 nhưng active < 500
- Log: "EventEmitter memory leak detected"
File: src/websocket/, logs: logs/ws-leak.log
```

### Log analysis
```
/fis:fix
Phân tích log production tìm root cause.
File: logs/production-2025-05-09.log (1247 errors trong 2h)
Group theo error type, đề xuất top 3 fix priority.
```

### Bug mơ hồ (dùng /fis:debug)
```
/fis:debug
User báo "đôi khi agent response bị trống".
- Reproduce local: chưa bắt được
- Production log: không có error rõ rệt
Phân tích pattern, đề xuất hypothesis ranking theo likelihood.
```

### Bug UI
```
/fis:fix
Dashboard chart không render trên mobile (<375px).
Screenshot: docs/bugs/chart-mobile.png
File: src/components/dashboard/chart.tsx
```

### CI fail
```
/fis:fix
CI fail ở step "test" của PR #234.
Run URL: https://github.com/org/repo/actions/runs/12345
Pull log + phân tích root cause + fix.
```

### Flaky test
```
/fis:debug
Test "agent-flow.spec.ts > can execute task" fail 30% CI.
Local pass 100%. Phân tích pattern flakiness, đề xuất fix.
```

## Nguyên tắc
- Reproduce trước, fix sau
- Root cause, không patch surface
- Regression test bắt buộc
- Log là người bạn tốt nhất
- Postmortem không đổ lỗi — focus prevention
- Monitor sau fix 24h
