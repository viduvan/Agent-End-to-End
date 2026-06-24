# Skill: /fis:payment-integration — Tích Hợp Cổng Thanh Toán

> Tích hợp thanh toán với SePay (VietQR), Polar, Stripe, Paddle (gói subscription MoR), Creem.io (licensing). Checkout, webhook, subscription, QR code, đơn hàng đa provider.

## Khi nào dùng
- Tích hợp cổng thanh toán và luồng checkout
- Quản lý subscription với trials, nâng cấp và thanh toán
- Thanh toán mã QR (VietQR, NAPAS) và chuyển khoản ngân hàng
- Thanh toán theo sử dụng với metering và credits
- Tự động cấp quyền lợi (licenses, truy cập GitHub, vai trò Discord)
- Xử lý webhook cho thông báo thanh toán
- Cổng khách hàng để tự quản lý
- Tuân thủ thuế và thanh toán toàn cầu

## Khi KHÔNG dùng
- Phạm vi cross-cutting lớn → dùng `/fis:plan` trước
- Yêu cầu chưa rõ → dùng `/fis:scout` trước

## Agent
Fullstack Developer (Senior Engineer)

## Input
- Payment provider requirements (SePay, Polar, Stripe, Paddle, Creem.io)
- Product/pricing model (one-time, subscription, usage-based)
- Target market (VN/global)

## Output
- Payment integration code (checkout, webhooks, subscriptions)
- Webhook handlers with signature verification
- Database schema for orders/subscriptions
- Client-side checkout UI

## Chọn Nền Tảng

### Chọn SePay cho:
- Thị trường Việt Nam (tiền tệ VND)
- Tự động hóa chuyển khoản ngân hàng (44+ ngân hàng Việt Nam)
- Thanh toán VietQR/NAPAS
- Các phương thức thanh toán địa phương
- Theo dõi tài khoản ngân hàng trực tiếp

### Chọn Polar cho:
- Sản phẩm SaaS toàn cầu
- Quản lý vòng đời subscription
- Thanh toán theo sử dụng
- Tự động cấp quyền lợi (GitHub, Discord, licenses)
- Merchant of Record (xử lý tuân thủ thuế toàn cầu)
- Bán sản phẩm kỹ thuật số

## Prompt mẫu

### Checkout E-commerce Việt Nam
```
/fis:payment-integration
"Set up SePay checkout with VietQR generation for bank transfers. Monitor transactions via webhook and mark orders paid when bank account receives matching amount."
```

### Nền Tảng Subscription SaaS
```
/fis:payment-integration
"Use Polar to create subscription product with 3 tiers. Implement checkout flow and webhook handler that auto-generates license keys on successful subscription."
```

### Thanh Toán Theo Sử Dụng
```
/fis:payment-integration
"Set up Polar usage-based pricing that tracks API calls per month. Configure webhooks to monitor usage and automatically upgrade/downgrade subscriptions."
```

### Tự Động Cấp Quyền Truy Cập GitHub
```
/fis:payment-integration
"Use Polar's GitHub benefit to automatically grant repository access when customer subscribes. Remove access on subscription cancellation."
```

## Quy trình triển khai

### Bắt đầu nhanh với SePay
1. Tải `references/sepay/overview.md` để thiết lập xác thực
2. Tải `references/sepay/sdk.md` để lấy code tích hợp
3. Tải `references/sepay/webhooks.md` để nhận thông báo thanh toán
4. Dùng `scripts/sepay-webhook-verify.js` để xác minh webhook
5. Tải `references/sepay/best-practices.md` cho môi trường production

### Bắt đầu nhanh với Polar
1. Tải `references/polar/overview.md` để xác thực và khái niệm
2. Tải `references/polar/products.md` để thiết lập sản phẩm
3. Tải `references/polar/checkouts.md` để xây dựng luồng thanh toán
4. Tải `references/polar/webhooks.md` để xử lý sự kiện
5. Tải `references/polar/benefits.md` để tự động cấp quyền lợi
6. Dùng `scripts/polar-webhook-verify.js` để xác minh webhook
7. Tải `references/polar/best-practices.md` cho môi trường production

## Nguyên tắc
- Bắt đầu với chế độ sandbox/test trước khi triển khai production
- Luôn xác minh chữ ký webhook để ngăn chặn yêu cầu gian lận
- Tải references theo từng bước — chỉ những gì cần cho bước hiện tại
- Với SePay: Theo dõi giới hạn tốc độ (2 calls/giây)
- Với Polar: Tận dụng MoR để tránh phức tạp về tuân thủ thuế

## Skills liên quan
- `/fis:backend-development` — Triển khai API
- `/fis:web-frameworks` — Tích hợp UI checkout
- `/fis:security` — Audit bảo mật cho payment flow
- `/fis:test` — Test webhook handlers

## Điểm mấu chốt
Dùng SePay cho thị trường Việt Nam (VietQR, chuyển khoản ngân hàng, 44+ ngân hàng) và Polar cho SaaS toàn cầu (subscriptions, thanh toán theo sử dụng, tự động cấp quyền lợi với tuân thủ thuế).

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Thanh toán đơn giản, không cần webhook" | Webhook là source of truth cho payment status. Polling không đáng tin cậy. |
| "Test trên production luôn cho nhanh" | Sandbox/test mode tồn tại vì lý do. Sai 1 transaction = mất tiền thật. |
| "Chỉ cần 1 provider là đủ" | VN market cần SePay. Global cần Stripe/Polar. Plan cho multi-provider từ đầu. |
| "Skip webhook verification" | Unverified webhook = ai cũng có thể giả mạo payment success. PHẢI verify. |

## Red Flags
- Webhook handler không verify signature
- Không có idempotency key cho payment requests
- Hardcoded API keys trong source code
- Không handle edge cases: partial payment, duplicate webhook, timeout
- Skip sandbox/test mode

## Verification
- [ ] Webhook signature verification hoạt động
- [ ] Idempotency key cho mọi payment request
- [ ] API keys trong env variables (không hardcode)
- [ ] Sandbox/test mode tested trước production
- [ ] Error handling cho: timeout, duplicate, partial payment
- [ ] Rate limiting respected (SePay: 2 calls/s)
- [ ] Customer self-service portal hoạt động
