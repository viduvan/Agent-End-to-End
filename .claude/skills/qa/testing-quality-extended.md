# Skill: /fis:web-testing — Web/Browser Testing

## Khi nào dùng
E2E browser testing: Playwright, Cypress, Selenium.

## Capabilities
- Page object model scaffolding
- E2E test scenarios (login, form, navigation)
- Visual regression testing
- Cross-browser testing matrix
- Performance testing (Lighthouse)

---

# Skill: /fis:security — Security Analysis

## Khi nào dùng
Security review: OWASP Top 10, auth, input validation.

## Capabilities
- OWASP Top 10 checklist
- Auth/AuthZ review
- Input sanitization audit
- Rate limiting configuration
- CORS policy review
- JWT security best practices

---

# Skill: /fis:security-scan — Automated Security Scan

## Khi nào dùng
Tự động scan vulnerabilities trong code + dependencies.

## Capabilities
- Dependency vulnerability scan (safety, npm audit)
- SAST: static analysis (bandit, semgrep)
- Container scan (trivy)
- Secret detection (detect-secrets)
- License compliance check

---

# Skill: /fis:cti-expert — Cyber Threat Intelligence

## Khi nào dùng
Phân tích threat intelligence, security incident response.

## Capabilities
- Threat modeling (STRIDE, DREAD)
- Attack surface analysis
- Incident response playbook
- IOC (Indicator of Compromise) analysis
- Security architecture review

---

# Skill: /fis:scenario — Edge Case Discovery

## Khi nào dùng
Phát hiện edge cases — 12 dimensions.

## Capabilities
- 12-dimension edge case matrix
- Boundary value analysis
- Error path enumeration
- Concurrent/race condition scenarios
- Data validation edge cases
- Output: scenario list ranked by risk

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Manual testing đủ cho UI" | Manual = not repeatable. Visual regression tools = automated UI testing. |
| "E2E tests flaky, bỏ" | Flaky = fix, not abandon. E2E catches integration bugs unit tests miss. |

## Red Flags
- No visual regression testing
- E2E suite abandoned due to flakiness
- Browser testing only on Chrome
- No accessibility testing

## Verification
- [ ] Visual regression baseline established
- [ ] E2E suite maintained (flakiness addressed)
- [ ] Multi-browser testing
- [ ] Accessibility audit included
