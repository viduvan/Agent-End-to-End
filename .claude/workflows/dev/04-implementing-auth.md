# Triển khai xác thực (OAuth · JWT · Passkeys)

## Metadata
- ⏱ Time: 3-5 hours
- 📋 Steps: 5
- 🎯 Difficulty: Hard
- 📌 Version: v3.0 (Updated: 01/06/2026)
- 🔧 Key Skills: `/fis:security`, `/fis:craft`, `/fis:test`, `/fis:better-auth`
- 👥 Roles: DEV, SA

## Mô tả
OAuth, JWT, passkeys, MFA — chuẩn FPT IS. Triển khai hệ thống xác thực an toàn production-grade.

## Steps

### Step 1: Khám phá yêu cầu bảo mật (⏱ 15 mins)
```
$ /fis:security "Audit yêu cầu auth: OAuth2, JWT, session management, rate limiting"
$ /fis:scout "Tìm auth patterns/libraries hiện có trong project"
```
- Xác định auth providers (Google, GitHub, etc.)
- Chọn strategy: JWT vs Session vs Passkeys

### Step 2: Lên kế hoạch auth architecture (⏱ 20 mins)
```
$ /fis:plan "Implement auth system:
- Phase 1: User model + registration/login
- Phase 2: JWT token management + refresh
- Phase 3: OAuth2 providers integration
- Phase 4: Rate limiting + security headers"
```

### Step 3: Thực thi auth code (⏱ 2-3 hours)
```
$ /fis:craft "Phase 1 — User model, registration, login endpoints"
$ /fis:craft "Phase 2 — JWT: access token, refresh token, blacklist"
$ /fis:craft "Phase 3 — OAuth2: Google, GitHub providers"
$ /fis:craft "Phase 4 — Rate limiting, CORS, security headers"
```

### Step 4: Security audit & Test (⏱ 30 mins)
```
$ /fis:test "Auth tests: login, register, token refresh, expired token, rate limit"
$ /fis:security "OWASP auth checklist: brute force, token leaks, session fixation"
$ /fis:security-scan "Scan dependencies cho known vulnerabilities"
```

### Step 5: Ship & Journal (⏱ 10 mins)
```
$ /fis:ship official --skip-tests=false
$ /fis:journal "Auth system: JWT + OAuth2 + rate limiting implemented"
```

## Tips

### ✅ Best practices
- Luôn hash passwords (bcrypt, argon2) — KHÔNG plaintext
- JWT: short-lived access (15m), long-lived refresh (7d)
- Rate limiting trên login endpoint (5 attempts/minute)
- Security headers: HSTS, CSP, X-Frame-Options

### ❌ Anti-patterns
- Store JWT in localStorage → XSS vulnerable
- Không validate JWT signature → token forgery
- Skip rate limiting → brute force
- Hardcode secrets trong code → credential leak
