# Skill: /fis:better-auth — Authentication Production-Ready

> Cài đặt và cấu hình Better Auth cho TypeScript frameworks. Hỗ trợ email/password, social login (Google, GitHub), Two-Factor, Passkey, Magic Link, RBAC (Organization).

## Khi nào dùng
- Thêm authentication vào ứng dụng TypeScript/JavaScript
- Login email/password hoặc social OAuth (Google, GitHub)
- 2FA, passkeys (WebAuthn), magic links
- Ứng dụng multi-tenant với organizations
- Quản lý sessions và protected routes
- Rate limiting trên auth endpoints

## Khi KHÔNG dùng
- Phạm vi cross-cutting lớn → dùng `/fis:plan` trước
- Yêu cầu chưa rõ → dùng `/fis:scout` trước
- Custom auth protocol (không dùng thư viện) → tự implement

## Agent
Fullstack Developer (Senior Engineer)

## Input
- Codebase context (framework: Next.js, Nuxt, SvelteKit, Remix, Astro, Hono, Express)
- Database adapter (Drizzle, Prisma, Kysely)
- Auth requirements (providers, 2FA, RBAC...)

## Output
- Auth configuration files
- Database schema/migrations
- Protected route middleware
- Login/signup UI components (nếu yêu cầu)

## Prompt mẫu

### SaaS MVP Authentication
Đối tượng: Solo founder xây dựng product đầu tiên
```
/fis:better-auth
"Add authentication to my Next.js app with email/password signup, GitHub OAuth, and PostgreSQL with Drizzle. Include email verification."
```

### Multi-Tenant Platform
Đối tượng: Team xây dựng B2B SaaS
```
/fis:better-auth
"Set up Better Auth with organization support for multi-tenant app. Need team invitations, role-based permissions, and admin dashboard."
```

### Enterprise App Bảo Mật Cao
Đối tượng: Developer tại công ty có yêu cầu bảo mật nghiêm ngặt
```
/fis:better-auth
"Implement Better Auth with 2FA requirement, passkey support, rate limiting, and audit logging. PostgreSQL backend."
```

### Trải Nghiệm Passwordless
Đối tượng: Startup chú trọng UX
```
/fis:better-auth
"Add magic link authentication to my SvelteKit app. No passwords, just email-based login with session management."
```

### Prototype Nhanh
Đối tượng: Developer đang thử nghiệm ý tưởng
```
/fis:better-auth
"Set up basic Better Auth with SQLite for local development. Just email/password, minimal config."
```

## Quick Start
```bash
npm install better-auth
```

```env
BETTER_AUTH_SECRET=your-32-char-secret
BETTER_AUTH_URL=http://localhost:3000
```

```bash
npx @better-auth/cli generate   # Tạo schema
npx @better-auth/cli migrate    # Áp dụng migrations
```

## Khả năng cốt lõi
- **Plugins**: `twoFactor`, `passkey`, `magicLink`, `organization`
- **Frameworks**: Next.js, Nuxt, SvelteKit, Remix, Astro, Hono, Express
- **Databases**: PostgreSQL, MySQL, SQLite, MongoDB (qua Drizzle, Prisma, Kysely)

## Nguyên tắc
- Chạy migrations sau khi thêm plugins: `npx @better-auth/cli generate && migrate`
- Dùng environment variables cho secrets và OAuth credentials
- Bật rate limiting trong production để ngăn chặn lạm dụng
- Kết hợp nhiều phương thức auth để linh hoạt cho users (OAuth + email dự phòng)

## Skills liên quan
- `/fis:scout` — Khám phá codebase trước khi chạy
- `/fis:test` — Test kết quả vừa sinh
- `/fis:security` — Audit bảo mật STRIDE + OWASP
- `/fis:backend-development` — Implement API layer

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Auth library handles everything" | Auth library handles flow. Security is YOUR responsibility. Check edges. |
| "OAuth is standard, just plug in" | OAuth standard has many footguns. Verify token validation, PKCE, state param. |
| "Rate limiting not needed for MVP" | Bots don't care about your roadmap. Auth endpoints are #1 brute-force target. |
| "Just use localStorage for tokens" | localStorage = XSS vulnerable. Use httpOnly cookies. Always. |

## Red Flags
- Auth without rate limiting
- Secrets in code/config (phải dùng env/vault)
- Missing CSRF protection
- Token stored insecurely (localStorage thay vì httpOnly cookies)
- Skip email verification cho production
- Không chạy migrations sau khi thêm plugins

## Verification
- [ ] Rate limiting trên auth endpoints
- [ ] Secrets chỉ trong env/vault
- [ ] CSRF protection enabled
- [ ] Token storage secure (httpOnly cookies)
- [ ] Email verification hoạt động
- [ ] OAuth callback URLs configured đúng
- [ ] Migrations đã chạy (schema up-to-date)
