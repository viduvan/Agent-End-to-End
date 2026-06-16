# Reference: /fis:doubt — Doubt-Driven Development Deep Dive

> Tài liệu tra cứu chi tiết. Agent KHÔNG load file này khi thực thi — chỉ dùng khi cần depth.
> File compact: `../doubt.md`

## Adversarial Prompt Templates

### Template 1: General Code Review
```
Bạn là Staff Engineer reviewing code từ 1 developer khác.
BẠN KHÔNG VIẾT CODE NÀY. Bạn KHÔNG có context trước.
Nhiệm vụ DUY NHẤT: tìm bugs, edge cases, sai assumptions.
KHÔNG praise. KHÔNG confirm đúng. CHỈ tìm vấn đề.

Code:
---
[paste code here]
---

Contract/Assumptions:
---
[paste assumptions here]
---

Focus areas:
1. Correctness: code có làm đúng spec không?
2. Edge cases: null, empty, boundary, concurrent access?
3. Error handling: mọi error path đều handled?
4. Assumptions: assumption nào có thể sai?
5. Security: input untrusted? injection? auth bypass?
```

### Template 2: Architecture Decision Review
```
Bạn là Solution Architect reviewing quyết định kiến trúc.
KHÔNG agree. KHÔNG confirm. Tìm vấn đề.

Decision:
---
[paste decision]
---

Questions to answer:
1. Assumption nào sẽ broken trong 6 tháng?
2. Scale concern: 10x traffic thì chuyện gì xảy ra?
3. Failure mode: service X down thì system behave sao?
4. Migration cost: thay đổi decision này sau 1 năm tốn bao nhiêu?
5. Simpler alternative: có cách đơn giản hơn không?
```

### Template 3: Security Claim Review
```
Bạn là Security Engineer pentesting code này.
Developer claim: "[paste claim, e.g., thread-safe, no injection]"
Nhiệm vụ: chứng minh claim SAI. Tìm attack vector.

Code:
---
[paste code]
---

Attack surface checklist:
1. Input validation bypass?
2. Race condition window?
3. Privilege escalation?
4. Information disclosure?
5. Denial of service?
```

## Cross-Model CLI Commands

### Gemini CLI
```bash
# Check availability
which gemini && gemini --version

# Run review (approval-mode plan = read-only)
gemini --approval-mode plan -p "$(cat /tmp/doubt-prompt.md)"

# With file context
gemini --approval-mode plan -p "Review this code for bugs:" < artifact.md
```

### Codex CLI (OpenAI)
```bash
# Check availability
which codex && codex --version

# Run review (sandbox read-only)
codex exec --sandbox read-only -p "$(cat /tmp/doubt-prompt.md)"
```

### Shell Escaping Rules
- Artifact content vào stdin (`< file`), KHÔNG vào argument (`-p "..."`)
- Nếu buộc dùng argument: escape quotes, newlines, special chars
- Max prompt length: check tool limits (gemini ~1M tokens, codex ~200k)
- Timeout: 60s mặc định, tăng cho large artifacts

## Finding Classification Precedence

```
1. CONTRACT MISREAD (highest priority)
   → Đang hiểu sai API behavior, library contract, system boundary
   → Action: STOP, fix understanding, re-evaluate all dependent code
   
2. ACTIONABLE BUG
   → Bug thật, có thể trigger, có impact
   → Action: Fix trước khi commit, viết test cover
   
3. TRADE-OFF
   → Valid concern nhưng có trade-off (performance vs readability, etc.)
   → Action: Document trong comment hoặc ADR, proceed
   
4. NOISE (lowest priority)
   → Style preference, theoretical risk, nitpick
   → Action: Acknowledge, dismiss, move on
```

## 3-Cycle Stop Condition

```
Cycle 1: Major findings (bugs, contract misreads)
   ↓ fix findings
Cycle 2: Verify fixes + find remaining issues  
   ↓ fix findings
Cycle 3: Final pass — should be clean
   ↓
STOP regardless of outcome
   (If still finding issues after 3 cycles → escalate to human)
```

**Tại sao 3?** Diminishing returns. Cycle 1 bắt 80% issues. Cycle 2 bắt 15%. Cycle 3 bắt 4%. Beyond 3 = noise > signal.

## Interaction with Other Skills

| Skill | Interaction |
|-------|------------|
| `/fis:craft` | Doubt AFTER craft, BEFORE review |
| `/fis:code-review` | Doubt = adversarial self-review. Code-review = peer review. Complementary. |
| `/fis:test` | Doubt findings → regression test ideas |
| `/fis:secure` | Security claims → doubt template 3 |
| `/fis:source-check` | "API works this way" → doubt verifies assumption |
| `/fis:adr` | Trade-off findings → ADR documentation |

## When Doubt Catches Real Issues — Examples

### Example 1: Race Condition
```
CLAIM: "Cache is thread-safe because we use dict"
DOUBT FINDING: Python dict is thread-safe for GIL operations,
               but NOT for check-then-act patterns.
               if key not in cache: cache[key] = compute() ← RACE
CLASSIFICATION: Actionable bug
ACTION: Use threading.Lock or functools.lru_cache
```

### Example 2: API Assumption
```
CLAIM: "Stripe webhook always sends JSON"
DOUBT FINDING: Stripe sends form-encoded for some legacy events.
               Content-Type check missing → 500 on malformed parse.
CLASSIFICATION: Contract misread
ACTION: Add Content-Type validation, handle both formats
```

### Example 3: Performance Trade-off
```
CLAIM: "SELECT * is fine for this table"
DOUBT FINDING: Table has 20 columns, query only needs 3.
               Network overhead + serialization cost.
CLASSIFICATION: Trade-off (acceptable for < 1000 rows)
ACTION: Document in comment, revisit if table grows
```
