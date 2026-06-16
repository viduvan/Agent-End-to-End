# Skill: /fis:secure — Security Audit & Hardening

> Standalone security skill — threat modeling, OWASP Top 10, LLM security.
> Thay thế security sub-check embedded trong code-reviewer.

## Khi nào dùng
- Auth/payment features (AUTO-INJECT bởi orchestrator)
- Trước khi ship feature mới ra production
- Khi review code xử lý user input
- Khi integrate third-party services
- Sau security incident (postmortem → hardening)

## Khi KHÔNG dùng
- Internal tooling không exposed ra internet
- Config changes không liên quan security
- Pure UI styling changes

## Agent
Security Auditor (dedicated) hoặc Code Reviewer (fallback)

## Process — BOUNDARY → MODEL → AUDIT → HARDEN → VERIFY

### 1. BOUNDARY — Xác định trust boundaries
Ở đâu untrusted data enters system?
- HTTP requests (body, headers, query params, path params)
- File uploads
- Database reads (cross-tenant data)
- Third-party API responses
- LLM outputs (prompt injection vector)

### 2. MODEL — Threat Model (STRIDE)
Cho mỗi trust boundary, đánh giá:

| Threat | Question |
|--------|----------|
| **S**poofing | Ai có thể giả mạo identity? |
| **T**ampering | Data nào có thể bị sửa đổi? |
| **R**epudiation | Action nào không có audit trail? |
| **I**nfo Disclosure | Data nào có thể bị leak? |
| **D**enial of Service | Resource nào có thể bị exhaust? |
| **E**levation of Privilege | Ai có thể escalate quyền? |

### 3. AUDIT — Checklist
#### Input Handling
- [ ] All user input validated at system boundaries
- [ ] SQL queries parameterized (no string concat)
- [ ] HTML output encoded (XSS prevention)
- [ ] File uploads restricted (type, size, content)

#### Auth & Authorization
- [ ] Passwords hashed (bcrypt/scrypt/argon2, NOT MD5/SHA)
- [ ] Sessions: httpOnly, secure, sameSite cookies
- [ ] Authorization checked on EVERY protected endpoint
- [ ] Rate limiting on auth endpoints
- [ ] IDOR check: users can't access other users' resources

#### Data Protection
- [ ] Secrets in env vars (NOT in code/git)
- [ ] Sensitive fields excluded from API responses and logs
- [ ] PII handled per regulations

#### Infrastructure
- [ ] Security headers (CSP, HSTS, X-Frame-Options)
- [ ] CORS restricted to specific origins
- [ ] Dependencies audited (`npm audit` / `pip audit`)
- [ ] Error messages generic (no stack traces to users)

#### AI/LLM Security (OWASP LLM Top 10)
- [ ] Model output treated as UNTRUSTED (no eval, no SQL, no shell)
- [ ] System prompt NOT relied on as security boundary
- [ ] Tool/agent permissions scoped, destructive actions confirmed
- [ ] Token/rate/recursion limits set

### 4. HARDEN — Fix findings
Severity classification:

| Severity | Criteria | Action |
|----------|----------|--------|
| **Critical** | Exploitable remotely, data breach | Fix immediately, block release |
| **High** | Exploitable with conditions | Fix before release |
| **Medium** | Limited impact, needs auth | Fix in current sprint |
| **Low** | Theoretical risk | Schedule next sprint |

### 5. VERIFY — Confirm fixes
- Re-run audit checklist on fixed code
- Verify no new issues introduced by fix

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Internal tool, không cần security" | Internal tools get compromised first. VPN ≠ security. |
| "Input validation ở frontend đủ rồi" | Frontend validation = UX. Backend validation = security. Cần cả hai. |
| "npm audit toàn false positives" | Triage, không ignore. 1 real vuln trong 10 false positives vẫn là 1 vuln. |
| "LLM output safe vì có system prompt" | System prompt = suggestion, not enforcement. Code-level checks bắt buộc. |

## Red Flags
- Auth feature mà không security audit
- User input flows directly into SQL/shell/eval
- Secrets trong code hoặc git history
- No rate limiting trên auth endpoints
- LLM output vào innerHTML/eval/exec
- npm audit critical/high bị ignore

## Verification
Sau khi secure xong:
- [ ] Trust boundaries identified
- [ ] STRIDE threat model completed
- [ ] Audit checklist passed (hoặc findings tracked)
- [ ] Critical/High findings fixed
- [ ] Dependencies audited, no critical/high CVEs
- [ ] LLM security checked (nếu có AI features)
