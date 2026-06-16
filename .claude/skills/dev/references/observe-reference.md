# Reference: /fis:observe — Observability Deep Dive

> Tài liệu tra cứu chi tiết. File compact: `../observe.md`

## OpenTelemetry Setup

```typescript
// tracing.ts — MUST be imported before anything else
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

const sdk = new NodeSDK({
  serviceName: 'checkout-service',
  instrumentations: [getNodeAutoInstrumentations()],
});
sdk.start();
```

## Correlation ID Middleware

```typescript
// Express middleware
app.use((req, res, next) => {
  req.id = req.headers['x-request-id'] ?? crypto.randomUUID();
  req.log = logger.child({ requestId: req.id });
  res.setHeader('x-request-id', req.id);
  next();
});
```

```python
# FastAPI middleware
from uuid import uuid4
from starlette.middleware.base import BaseHTTPMiddleware

class CorrelationIdMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        request_id = request.headers.get('x-request-id', str(uuid4()))
        request.state.request_id = request_id
        response = await call_next(request)
        response.headers['x-request-id'] = request_id
        return response
```

## Prometheus Metrics Example

```typescript
import { Histogram, Counter } from 'prom-client';

const httpDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration',
  labelNames: ['method', 'route', 'status_class'],
  buckets: [0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
});

// Cardinality rules:
// ✅ OK labels:   route="/api/tasks/:id"  status_class="5xx"
// ❌ NEVER label: user_id, email, request_id, full URL, error message
```

## Alert Rules Template

```yaml
# Symptom-based (GOOD)
- alert: HighErrorRate
  expr: rate(http_requests_total{status_class="5xx"}[5m]) / rate(http_requests_total[5m]) > 0.01
  for: 5m
  labels:
    severity: page
  annotations:
    summary: "Error rate > 1% for 5 minutes"
    runbook: "https://wiki.internal/runbook/high-error-rate"

- alert: HighLatency
  expr: histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) > 2
  for: 5m
  labels:
    severity: page
```

## Log Level Decision Guide

```
Is the system broken?
├── Yes → error (invariant violated, data loss risk)
├── Degraded but handling it → warn (retry succeeded, fallback used)
├── Normal business event → info (order placed, user signed up)
└── Diagnostic detail → debug (query timing, cache hit/miss)
```
