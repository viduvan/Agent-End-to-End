# Reference: /fis:secure — Security & Hardening Deep Dive

> Tài liệu tra cứu chi tiết. File compact: `../security-hardening.md`

## OWASP Top 10 Prevention Patterns

### A01: Broken Access Control
```python
# ❌ BAD: No authorization check
@app.get("/api/users/{user_id}/profile")
async def get_profile(user_id: int):
    return db.get_user(user_id)

# ✅ GOOD: Authorization check
@app.get("/api/users/{user_id}/profile")
async def get_profile(user_id: int, current_user = Depends(get_current_user)):
    if current_user.id != user_id and not current_user.is_admin:
        raise HTTPException(403, "Not authorized")
    return db.get_user(user_id)
```

### A03: Injection
```python
# ❌ BAD: String interpolation in SQL
query = f"SELECT * FROM users WHERE id = {user_id}"

# ✅ GOOD: Parameterized query
query = "SELECT * FROM users WHERE id = :id"
result = db.execute(query, {"id": user_id})
```

### A07: Cross-Site Scripting (XSS)
```typescript
// ❌ BAD: innerHTML with user data
element.innerHTML = userInput;

// ✅ GOOD: textContent (auto-escaped)
element.textContent = userInput;

// ✅ GOOD: DOMPurify for rich content
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);
```

## Input Validation — Zod Patterns
```typescript
import { z } from 'zod';

const CreateUserSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(8).max(128),
  name: z.string().min(1).max(100).trim(),
  age: z.number().int().min(13).max(150).optional(),
});

// Validate at system boundary
const result = CreateUserSchema.safeParse(req.body);
if (!result.success) {
  return res.status(422).json({ errors: result.error.issues });
}
```

## OWASP LLM Top 10 Quick Reference

| # | Risk | Prevention |
|---|------|-----------|
| LLM01 | Prompt Injection | Code-enforced permissions, not system prompt |
| LLM02 | Insecure Output | Treat LLM output as untrusted data |
| LLM03 | Training Data Poisoning | Validate training sources |
| LLM04 | Model DoS | Token/rate/recursion limits |
| LLM05 | Supply Chain | Pin model versions, audit providers |
| LLM06 | Sensitive Info Disclosure | No secrets in context window |
| LLM07 | Insecure Plugin Design | Scope tool permissions, confirm destructive |
| LLM08 | Excessive Agency | Human-in-the-loop for critical actions |
| LLM09 | Overreliance | Validate LLM outputs, don't trust blindly |
| LLM10 | Model Theft | Access controls on model artifacts |

## SSRF Prevention
```python
# ❌ BAD: Fetch any URL user provides
response = requests.get(user_provided_url)

# ✅ GOOD: Allowlist
ALLOWED_DOMAINS = {"api.stripe.com", "hooks.slack.com"}
parsed = urlparse(user_provided_url)
if parsed.hostname not in ALLOWED_DOMAINS:
    raise ValueError("Domain not allowed")
# Also block: 127.0.0.1, localhost, 169.254.x.x (metadata), internal IPs
```

## Supply Chain Hygiene
```bash
# Audit dependencies
npm audit --audit-level=high    # Node.js
pip audit                        # Python (pip-audit)
safety check                     # Python (safety)

# Triage process:
# 1. Critical/High → fix immediately (update or replace)
# 2. Medium → fix in current sprint
# 3. Low → schedule, don't ignore
# 4. False positive → document why, not just suppress
```

## Security Review Output Template
```markdown
## Security Audit Report

### Summary
- Critical: [count]
- High: [count]
- Medium: [count]
- Low: [count]

### Findings

#### [CRITICAL] SQL Injection in user search
- **Location:** src/api/users.py:45
- **Description:** User input concatenated into SQL query
- **Impact:** Full database access
- **PoC:** `GET /api/users?q=' OR 1=1--`
- **Recommendation:** Use parameterized queries

### Positive Observations
- [Security practices done well]
```
