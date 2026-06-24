# Skill: /fis:cti-expert — Cyber Threat Intelligence / OSINT

> Bộ công cụ CTI / OSINT cho điều tra mạng và truy vết. Cyber security investigation.

## Khi nào dùng
- Điều tra mạng (network forensics)
- OSINT: truy vết IP, domain, email
- Threat intelligence analysis
- Incident response investigation
- Security breach analysis

## Agent
Security Auditor

## Khả năng cốt lõi
- IP/domain reputation lookup
- Email header analysis
- Threat feed correlation
- Attack surface mapping
- Indicator of Compromise (IoC) analysis

## Prompt mẫu
```
/fis:cti-expert
"Investigate this IP address: check reputation, geolocation, associated domains, threat feeds"
```
```
/fis:cti-expert
"Analyze email headers to trace phishing attempt origin"
```
```
/fis:cti-expert
"Map attack surface for our public-facing infrastructure: domains, IPs, exposed services"
```

## Nguyên tắc
- Document findings with timestamps
- Verify IOCs against multiple sources
- Follow responsible disclosure practices
- Preserve evidence chain

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Security team handles this" | Every developer should understand basic threat intel for secure coding. |
| "OSINT is only for pentesters" | OSINT helps understand your own attack surface. Defense starts with awareness. |

## Red Flags
- Single-source intelligence (must cross-reference)
- Sharing sensitive findings publicly
- Breaking chain of custody for evidence

## Verification
- [ ] IOCs verified against multiple sources
- [ ] Findings documented with timestamps
- [ ] Evidence preserved properly
- [ ] Responsible disclosure followed
