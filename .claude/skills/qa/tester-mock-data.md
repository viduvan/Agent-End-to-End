# Skill: /fis:tester mock-data — Sinh Test Data

## Khi nào dùng
Test cần data realistic theo domain.

## Agent
Tester Priya

## Prompt mẫu
```
/fis:tester mock-data
Domain: Multi-Agent System

Fixtures:
- 5 agents: mix status (active, idle, maintenance)
- 10 tasks: mix types + statuses
- 5 users: mix roles + permissions
- 20 conversations: different lengths

Output: tests/fixtures/ + tests/factories/
```

## Output
- `tests/fixtures/` — JSON/YAML test data
- `tests/factories/` — factory functions

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Production data for testing" | Production data = PII risk. Mock data = safe + repeatable. |
| "Random data is good enough" | Random ≠ realistic. Edge case data (empty, max length, special chars) needed. |

## Red Flags
- Using production data in tests
- Mock data without edge cases
- Test data not version-controlled
- Missing internationalization test data

## Verification
- [ ] Mock data realistic but safe (no PII)
- [ ] Edge cases covered (empty, null, max, special chars)
- [ ] Test data version-controlled
- [ ] i18n data included (if applicable)
