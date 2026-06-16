# Skill: /fis:observe — Observability & Instrumentation

> Instrument code để production behavior visible. Logging + Metrics + Tracing.

## Khi nào dùng
- Ship feature mới ra production
- Thêm service/endpoint/background job mới
- Sau incident "không biết chuyện gì xảy ra"
- Review PR có I/O, retries, queues, cross-service calls

## Khi KHÔNG dùng
- Đang debug issue xảy ra ngay → dùng `/fis:fix`
- Profiling performance → dùng performance optimization
- Launch-day checklist → dùng `/fis:ship`

## Agent
DevOps SRE

## Process — QUESTION → SIGNAL → IMPLEMENT → VERIFY

### 1. QUESTION — Định nghĩa "working"
Trước khi instrument, viết 2-4 câu hỏi on-call sẽ hỏi:
```
FEATURE: Payment retry logic
QUESTIONS:
1. Tỷ lệ payment succeed first attempt vs after retry?
2. Khi fail permanently, tại sao? (provider error? timeout?)
3. Payment provider có chậm hơn bình thường không?
→ Mỗi signal phải trả lời 1 trong các câu hỏi này
```

### 2. SIGNAL — Chọn signal phù hợp

| Signal | Trả lời | Cost | Example |
|--------|---------|------|---------|
| **Structured log** | "Chuyện gì xảy ra?" | Per-event | `payment_failed` + error code |
| **Metric** | "Bao nhiêu? Bao nhanh?" | Fixed per series | p99 latency histogram |
| **Trace** | "Thời gian mất ở đâu?" | Per-request (sampled) | Cross-service request path |

Rule of thumb: Metrics = **THAT** something wrong. Traces = **WHERE**. Logs = **WHY**.

### 3. IMPLEMENT

#### Structured Logging
```typescript
// ❌ BAD: string interpolation
logger.info(`Payment ${id} failed for user ${userId}`);

// ✅ GOOD: structured fields
logger.warn({
  event: 'payment_failed',
  paymentId: id,
  provider: 'stripe',
  errorCode: err.code,
  attempt: n,
}, 'payment failed');
```

**Log levels**:
| Level | Meaning | On-call action |
|-------|---------|----------------|
| `error` | Invariant broken | Investigate |
| `warn` | Degraded but handled | Watch trends |
| `info` | Business event | None |
| `debug` | Diagnostic detail | Off in production |

**Bắt buộc**: Correlation ID (request ID) trên mọi log line.

#### Metrics — RED/USE
- **R**ate, **E**rrors, **D**uration cho mọi endpoint + external dependency
- **U**tilization, **S**aturation, **E**rrors cho resources (queues, pools)
- **NEVER** dùng user IDs, raw URLs, error messages làm metric labels (cardinality bomb)

#### Alerting
Alert trên **symptoms users feel**, KHÔNG trên causes:
- ✅ Error rate > 1% for 5 min
- ✅ p99 latency > 2s
- ❌ CPU at 85% (cause, not symptom)

### 4. VERIFY
- Force error in staging → tìm được qua logs?
- Metric series xuất hiện đúng labels?
- Trace không bị broken spans?

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Thêm logging sau khi chạy được" | "Sau" = sau incident đầu tiên = đắt nhất. Instrument lúc build. |
| "console.log đủ rồi" | Unstructured = không filter, không correlate, không alert được. |
| "Alert mọi thứ, tune sau" | Noisy pager = ignored pager. Alert symptoms, không causes. |
| "Tracing overkill cho 2 services" | 2 services = cross-service latency questions logs can't answer. |

## Red Flags
- Feature PR có retries/queues/external calls mà zero telemetry
- Log lines dùng string interpolation thay vì structured fields
- Không có correlation/request ID
- Metrics labeled với user IDs (cardinality bomb)
- Latency tracked as average, không histogram
- Alerts fire daily mà không ai investigate
- Secrets/tokens/PII trong logs

## Verification
- [ ] On-call questions written down, mỗi signal maps to 1 question
- [ ] All logs structured (JSON), stable event names, correlation ID
- [ ] No secrets/PII trong logs
- [ ] RED metrics cho mọi endpoint + external dependency
- [ ] Latency = histogram (p50/p95/p99 queryable)
- [ ] Alerts symptom-based, có runbook link
