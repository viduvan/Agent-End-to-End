# Skill: /fis:agent-browser — AI Browser Automation

## Khi nào dùng
- Tự động hoá trình duyệt cho AI workflows dài hạn
- Kiểm thử UI, form submission, screenshot comparison
- Ghi video phiên automation để debug
- Test trên cloud browsers (Browserbase) cho CI/CD
- Self-verifying build loops (code → build → verify UI)

## Agent
Technical Analyst (Tester / Debugger)

## Input
- URL target hoặc mô tả tác vụ browser
- Tuỳ chọn: selector patterns, auth state, record flag

## Output
- Screenshot / snapshot kết quả
- Video recording (nếu bật)
- Test result (pass/fail với evidence)

## Khả năng cốt lõi
- Điều hướng trang và tương tác qua handles `@ref` (tiết kiệm 93% context vs Playwright MCP)
- Capture snapshots chỉ ~280 chars vs 8K+ HTML tree
- Ghi video phiên automation
- Xử lý workflows đa tab, chuyển frames
- Lưu/tải trạng thái browser (authenticated sessions)
- Mock network requests/responses
- Mô phỏng thiết bị, geolocation, chế độ offline

## Khi nào dùng cái này vs `/fis:chrome-devtools`
| agent-browser | chrome-devtools |
|---|---|
| Phiên AI tự động dài hạn | Screenshots nhanh |
| Workflows bị giới hạn context | Custom Puppeteer scripts |
| Ghi video, cloud browsers | Debug WebSocket |
| Self-verifying build loops | Auth injection |

## Prompt mẫu

### Kiểm thử login flow
```
/fis:agent-browser
Kiểm thử login flow tại example.com và xác minh dashboard đã load
```

### Screenshot comparison
```
/fis:agent-browser
Điều hướng đến pricing page và chụp screenshot comparison table
```

### Ghi video checkout
```
/fis:agent-browser
Ghi video quy trình checkout từ giỏ hàng đến confirmation
```

## Quick Workflow (4 bước chuẩn)
```bash
# 1. Navigate
agent-browser open https://example.com

# 2. Snapshot (lấy @refs cho buttons, inputs)
agent-browser snapshot -i

# 3. Interact
agent-browser fill @e2 "text"
agent-browser click @e1

# 4. Re-snapshot (sau khi trang thay đổi)
agent-browser snapshot -i
```

## Nguyên tắc
- Snapshot trước và sau mỗi interaction — verify state change
- Dùng `@ref` handles, KHÔNG CSS selectors phức tạp
- Record video cho flows phức tạp — dễ debug hơn screenshot
- Kết hợp `/fis:scout` trước để hiểu codebase UI

## Red Flags
- Dùng full HTML tree thay vì snapshot (phí context)
- Không verify state sau interaction
- Skip recording cho multi-step flows
- Dùng cho tasks cross-cutting lớn (nên dùng `/fis:plan`)
