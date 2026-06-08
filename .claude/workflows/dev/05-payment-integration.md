# Tích hợp thanh toán

## Metadata
- ⏱ Time: 3-5 hours
- 📋 Steps: 5
- 🎯 Difficulty: Hard
- 📌 Version: v3.0 (Updated: 01/06/2026)
- 🔧 Key Skills: `/fis:craft`, `/fis:security`, `/fis:test`, `/fis:payment-integration`
- 👥 Roles: DEV, SA

## Mô tả
Webhook signature, idempotency, refund — production-grade. Tích hợp thanh toán (SePay/VietQR, Stripe, Paddle).

## Steps

### Step 1: Khám phá payment providers (⏱ 15 mins)
```
$ /fis:research "So sánh payment providers: SePay (VietQR), Stripe, Paddle — pricing, features, VN support"
$ /fis:scout "Tìm payment patterns hiện có trong project"
```

### Step 2: Lên kế hoạch integration (⏱ 20 mins)
```
$ /fis:plan "Implement payment integration:
- Phase 1: Payment model + checkout endpoint
- Phase 2: Webhook handler (signature verification)
- Phase 3: Subscription management
- Phase 4: Refund + error handling"
```

### Step 3: Thực thi payment code (⏱ 2-3 hours)
```
$ /fis:craft "Phase 1 — Payment model, checkout flow, QR code generation"
$ /fis:craft "Phase 2 — Webhook handler: signature verify, idempotency key"
$ /fis:craft "Phase 3 — Subscription: create, cancel, upgrade"
$ /fis:craft "Phase 4 — Refund endpoint, error handling, retry logic"
```

### Step 4: Security & Test (⏱ 30 mins)
```
$ /fis:test "Payment tests: checkout, webhook, refund, edge cases"
$ /fis:security "Payment security: webhook signature, HTTPS, PCI compliance check"
```

### Step 5: Ship & Journal (⏱ 10 mins)
```
$ /fis:ship official
$ /fis:journal "Payment: <provider> integration completed"
```

## Tips

### ✅ Best practices
- Webhook signature verification — LUÔN verify
- Idempotency key cho mọi transaction
- Retry logic với exponential backoff
- Log mọi transaction cho audit trail

### ❌ Anti-patterns
- Skip webhook signature → man-in-the-middle
- Không có idempotency → duplicate charges
- Store card numbers → PCI violation
