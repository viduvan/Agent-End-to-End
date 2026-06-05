# Skill: /fis:test — Chạy Tests

## Khi nào dùng
Sau mỗi DEV craft, trước merge.

## Agent
Tester Priya / Fullstack Developer

## Commands
```
/fis:test              # Chạy tất cả
/fis:test --unit       # Unit tests only
/fis:test --integration # Integration tests
/fis:test --e2e        # End-to-end tests
/fis:test --regression # Regression suite
/fis:test --coverage   # Coverage report
/fis:test --related src/agents/orchestrator.py  # Related tests only
```

## Coverage Targets
| Loại | Target |
|------|--------|
| Overall project | ≥ 70% |
| Feature mới | ≥ 85% |
| Critical path | 100% |
