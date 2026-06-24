# Skill: /fis:cti-expert — Cyber Threat Intelligence

## Khi nào dùng
- Điều tra mạng và truy vết (CTI / OSINT)
- Phân tích IOCs (Indicators of Compromise)
- Threat hunting trong logs và network traffic
- Incident response support

## Agent
Security Auditor

## Khả năng cốt lõi
- OSINT data gathering (IP, domain, email, hash)
- IOC analysis và correlation
- Threat actor profiling
- Attack surface mapping
- Incident timeline reconstruction

## Prompt mẫu
```
/fis:cti-expert
Phân tích IP 203.0.113.42:
- Reputation check
- Associated domains
- Historical abuse reports
- Geolocation và ASN info
```

```
/fis:cti-expert
Suspicious login từ IP range lạ vào hệ thống.
Phân tích log entries, correlate với known threat patterns.
```

## Nguyên tắc
- Evidence-based — không suy đoán, chỉ dựa vào data
- Cross-reference multiple sources
- Document timeline rõ ràng
- Preserve chain of custody cho evidence

---

# Skill: /fis:security-scan — OWASP Security Scanner

## Khi nào dùng
- Quét codebase tìm lỗ hổng bảo mật
- Phát hiện secrets hardcoded (API keys, passwords)
- Scan theo OWASP Top 10 patterns
- Dependency vulnerability audit

## Agent
Security Auditor

## Khả năng cốt lõi
- Static analysis cho security patterns
- Secret detection (regex + entropy analysis)
- OWASP Top 10 checklist scan
- Dependency CVE scanning
- SQL injection, XSS, CSRF detection
- Output: severity-ranked findings report

## Prompt mẫu

### Full security scan
```
/fis:security-scan
Quét toàn bộ codebase theo OWASP Top 10.
Focus: injection, auth bypass, sensitive data exposure.
```

### Secret detection
```
/fis:security-scan --secrets
Tìm tất cả hardcoded secrets, API keys, passwords.
Scan: .env files, config/, source code.
```

### Dependency audit
```
/fis:security-scan --deps
Audit dependencies cho known CVEs.
Output: severity, affected version, fix version.
```

## Nguyên tắc
- Scan TRƯỚC mỗi release — không deploy code chưa scan
- Fix Critical/High ngay — không để qua sprint
- False positives: verify trước khi dismiss
- Secret found = rotate immediately, không chỉ remove từ code

## Verification
- [ ] OWASP Top 10 đã scan
- [ ] Secrets scan pass (0 hardcoded)
- [ ] Dependencies audit (0 Critical CVE)
- [ ] Findings report generated
