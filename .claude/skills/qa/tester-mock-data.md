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
