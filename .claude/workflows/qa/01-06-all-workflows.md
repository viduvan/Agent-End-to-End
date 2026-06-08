# QA Workflows (6 workflows)

## Workflow QA-1: Chiến lược kiểm thử ⭐ (Quan trọng nhất)
**Skills**: `/fis:tester`, `/fis:scenario`, `/fis:web-testing`

### Kịch bản
TestSpec từ FS + AC → mock data → test automation → bug triage → regression.

### Quy trình 10 bước

#### Phase 1: Test Planning
```
1. /fis:tester def-of-ready FS-0001.md
   → Kiểm tra FS testable TRƯỚC khi plan test

2. /fis:tester test-spec
   → Sinh TestSpec từ AC × test matrix
   → artifacts/test-specs/TESTSPEC-0001.md

3. /fis:three-amigos:review-testspec
   → BA + SA + QA sign-off TestSpec

4. /fis:tester mock-data
   → Sinh fixtures + factories
   → tests/fixtures/, tests/factories/
```

#### Phase 2: Test Implementation
```
5. /fis:tester test-cases
   → Sinh test scenarios (.py test files)

6. /fis:test --unit
   → Unit tests cho service layer

7. /fis:test --integration
   → Integration tests cho API endpoints

8. /fis:test --e2e
   → E2E tests cho full user flows
```

#### Phase 3: Test Execution & Reporting
```
9. /fis:test --coverage
   → Coverage report, target ≥ 70%

10. /fis:tester bug (khi phát hiện defect)
    → BG-NNNN.md formal report
    → Bug triage: P0-P3
```

### Test Strategy Pyramid

```
        /  E2E  \          ← Ít nhất, chậm nhất, đắt nhất
       /  (10%)  \
      /───────────\
     / Integration \       ← Vừa phải
    /    (30%)      \
   /─────────────────\
  /    Unit Tests     \    ← Nhiều nhất, nhanh nhất, rẻ nhất
 /      (60%)          \
/───────────────────────\
```

### Coverage Dashboard
```
Module                  | Lines | Branch | Target | Status
========================|=======|========|========|========
src/agents/             | 78%   | 65%    | 70%    | ✅
src/orchestrator/       | 82%   | 71%    | 70%    | ✅
src/api/                | 85%   | 73%    | 70%    | ✅
src/services/           | 62%   | 50%    | 70%    | ❌ +8%
src/models/             | 90%   | 80%    | 70%    | ✅
TOTAL                   | 75%   | 66%    | 70%    | ✅
```

---

## Workflow QA-2: Thêm tính năng mới (QA Perspective)
**Skills**: `/fis:tester test-spec`, `/fis:test`

QA trong Adding Feature pipeline:
```
BA PRD Approved
  → SA TRD Approved
    → QA /fis:tester def-of-ready (FS testable?)
      → QA /fis:tester test-spec (TestSpec từ AC)
        → Three Amigos review TestSpec
          → DEV implements
            → QA /fis:test (verify)
              → QA verify staging (smoke test manual)
                → QA sign-off → deploy production
```

---

## Workflow QA-3: Sửa lỗi (QA Perspective)
**Skills**: `/fis:test`, `/fis:tester bug`

QA tasks:
- Verify reproduce steps trên staging
- Capture HAR file / screenshot → đính kèm BG
- Re-test sau fix → regression check
- Sign-off trước merge production

```
Bug reported
  → QA verify reproduce (staging)
    → /fis:tester bug (BG-NNNN.md)
      → DEV fix
        → QA re-test scenario gốc
          → /fis:test --regression (full suite)
            → QA sign-off → merge
```

---

## Workflow QA-4: Auth Testing
**Skills**: `/fis:test`, `/fis:security`

QA auth test matrix:
```
3 roles × 5 actions × 3 ownership states = 45 test cases minimum

| Role    | Create | Read Own | Read All | Update Own | Delete |
|---------|--------|----------|----------|-----------|--------|
| ADMIN   | ✅     | ✅       | ✅       | ✅        | ✅     |
| EDITOR  | ✅     | ✅       | ✅       | ✅        | ❌     |
| VIEWER  | ❌     | ✅       | ✅       | ❌        | ❌     |
```

Security tests:
- Brute force protection: 6 fail → 429
- SQL injection in email → reject + log
- XSS payload in name → sanitized
- CSRF without token → 403
- Token tampering → 401
- Timing attack: uniform response time

---

## Workflow QA-5: API Testing
**Skills**: `/fis:web-testing`, `/fis:test`

QA tasks:
- API contract test (request/response schema)
- Load test (k6): p95 < 200ms, error rate < 1%
- Security test (OWASP API Top 10)

---

## Workflow QA-6: Payment Testing
**Skills**: `/fis:test`, `/fis:security`

QA tasks:
- Payment flow E2E (sandbox mode)
- Webhook handler test (replay, duplicate)
- Idempotency test (duplicate request)
- Edge: partial payment, timeout, refund

---

## QA Cadence

| Tần suất | Hoạt động |
|----------|-----------|
| **Mỗi PR** | Run test suite, coverage check |
| **Hàng ngày** | Review bug backlog, triage new bugs |
| **Hàng tuần** | Coverage trend, flaky test cleanup |
| **Hàng tháng** | Test strategy review, update TestSpecs |

## Bài học
1. **Shift-left**: TestSpec trước code — phát hiện gap sớm
2. **Risk-based**: Test nhiều nhất ở nơi risk cao nhất
3. **Pyramid**: 60% unit, 30% integration, 10% E2E
4. **Regression bắt buộc**: Mỗi bug fix PHẢI có regression test
5. **Mock realistic**: Test data reflect production patterns
6. **Bug report formal**: BG-NNNN với reproduce steps rõ ràng
