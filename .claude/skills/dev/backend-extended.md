# Skill: /fis:better-auth — Authentication with Better Auth

## Category: Security
## Role: DEV

## Mô tả
Add authentication with Better Auth (TypeScript). Use for email/password, OAuth providers (Google, GitHub), 2FA/MFA, passkeys/WebAuthn, sessions, RBAC, rate limiting.

## Syntax
```
/fis:better-auth "<input>"
```

---

# Skill: /fis:payment-integration — Payment Gateway Integration

## Category: Backend
## Role: DEV

## Mô tả
Integrate payments with SePay (VietQR), Polar, Stripe, Paddle (MoR subscriptions), Creem.io (licensing). Checkout, webhooks, subscriptions, QR codes, multi-provider orders.

## Syntax
```
/fis:payment-integration "<input>"
```

---

# Skill: /fis:shopify — Shopify Development

## Category: Backend
## Role: DEV

## Mô tả
Build Shopify apps, extensions, themes with Shopify CLI. Use for GraphQL/REST APIs, Polaris UI, Liquid templates, checkout customization, webhooks, billing integration.

## Syntax
```
/fis:shopify "<input>"
```

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Auth library handles everything" | Auth library handles flow. Security is YOUR responsibility. Check edges. |
| "OAuth is standard, just plug in" | OAuth standard has many footguns. Verify token validation, PKCE, state param. |

## Red Flags
- Auth without rate limiting
- Secrets in code/config
- Missing CSRF protection
- Token stored insecurely (localStorage)

## Verification
- [ ] Rate limiting on auth endpoints
- [ ] Secrets in env/vault only
- [ ] CSRF protection enabled
- [ ] Token storage secure (httpOnly cookies)
