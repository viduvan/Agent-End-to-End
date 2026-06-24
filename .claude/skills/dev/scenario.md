# Skill: /fis:scenario — Edge Case Generation

> Sinh edge case và kịch bản test theo 12 chiều. Comprehensive scenario planning.

## Khi nào dùng
- Generate edge cases cho testing
- Scenario planning cho feature design
- Stress test planning
- Security threat modeling

## Agent
Tester, Solutions Architect

## 12 Chiều phân tích
Boundary values, Null/empty, Concurrent access, Network failures, Large data, Invalid input, Timezone/locale, Permission/auth, Race conditions, Resource exhaustion, Backward compatibility, Recovery/rollback

## Prompt mẫu
```
/fis:scenario "Generate edge cases for user registration: email validation, password strength, duplicate accounts, rate limiting."
```
```
/fis:scenario "Stress scenarios for payment checkout: concurrent purchases, network timeout, partial payment, webhook retry."
```

## Nguyên tắc
- Cover all 12 dimensions
- Prioritize by likelihood × impact
- Include both happy path và failure scenarios

## Verification
- [ ] All 12 dimensions covered
- [ ] Scenarios prioritized
- [ ] Test cases generated from scenarios
