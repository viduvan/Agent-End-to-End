# Skill: /fis:doubt — Adversarial Self-Review

> Fresh-context adversarial review cho quyết định non-trivial. Chống "confident but wrong".

## Khi nào dùng
- Trước khi commit code non-trivial (> 50 LOC thay đổi logic)
- Khi claim "thread-safe", "idempotent", "secure", "backward-compatible"
- Khi kiến trúc decision under uncertainty
- Khi làm trong code không hiểu rõ 100%
- Khi sửa bug mà root cause không chắc chắn

## Khi KHÔNG dùng
- Rename, format, file moves (mechanical changes)
- One-line changes với correctness rõ ràng
- Pure tooling operations (update config, bump version)
- Changes < 10 LOC mà intent rõ ràng

## Agent
Code Reviewer (hoặc Main Orchestrator trong self-review mode)

## Process — CLAIM → EXTRACT → DOUBT → RECONCILE → STOP

### 1. CLAIM
Ghi rõ quyết định + tại sao quan trọng:
```
CLAIM: "Cache layer này thread-safe vì dùng ConcurrentHashMap"
WHY IMPORTANT: Race condition = data corruption = production incident
```

### 2. EXTRACT
Tách artifact nhỏ nhất cần review:
- Code file(s) liên quan
- Contract/interface being relied on
- Assumptions đang được made

### 3. DOUBT
Spawn fresh-context reviewer với adversarial prompt:
```
Bạn là reviewer PHẢN BIỆN. Nhiệm vụ: tìm lỗi trong code/quyết định sau.
KHÔNG confirm đúng. KHÔNG praise. CHỈ tìm vấn đề.
Focus: correctness, edge cases, assumptions, race conditions.
```

### 4. RECONCILE
Phân loại findings:
| Category | Action |
|----------|--------|
| **Contract misread** | Fix ngay — đang hiểu sai API/behavior |
| **Actionable bug** | Fix trước khi commit |
| **Trade-off** | Document trong comment/ADR, proceed |
| **Noise** | Acknowledge, dismiss |

### 5. STOP
Dừng doubt khi:
- Findings chỉ còn trade-offs hoặc noise
- Đã qua 3 doubt cycles
- User override: "đủ rồi, proceed"

## Cross-Model Escalation
Sau single-model review, HỎI user:
```
Single-model review xong. Muốn cross-model second opinion?
1. Gemini CLI  → gemini -p "<prompt>" < artifact.md
2. Codex CLI   → codex exec --sandbox read-only < artifact.md
3. Manual      → User tự paste vào tool khác
4. Skip        → Tiếp tục với single-model findings
```

Quy tắc cross-model:
- Check tool có trong PATH (`which gemini`)
- Chạy trong **read-only sandbox** (không viết vào workspace)
- Xác nhận command với user trước khi chạy
- Non-interactive context: skip + announce

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Code rõ ràng, không cần doubt" | "Rõ ràng" với context hiện tại. Fresh-context reviewer thấy khác. |
| "Doubt mất thời gian" | 10 phút doubt < 4 giờ debug production bug do assumption sai. |
| "Tôi đã review rồi" | Self-review có blind spots. Fresh context = fresh eyes. |
| "Change quá nhỏ để doubt" | Nếu change ảnh hưởng behavior, doubt. Size ≠ impact. |

## Red Flags
- Commit non-trivial code mà không doubt
- Claim "secure"/"thread-safe" mà không verify
- Skip doubt vì "deadline gấp"
- Doubt findings bị dismiss tất cả (reviewer tìm ra vấn đề = có vấn đề)
- Cross-model escalation bị skip mà không announce reason

## Verification
Sau khi doubt xong:
- [ ] CLAIM documented rõ ràng
- [ ] Fresh-context reviewer đã chạy (adversarial prompt)
- [ ] Findings classified (contract misread / actionable / trade-off / noise)
- [ ] Actionable findings đã fix
- [ ] Trade-offs documented trong code comments hoặc ADR
- [ ] Cross-model escalation offered (nếu non-trivial)
