# Skill: /fis:tester bug — Bug Report Formal

## Khi nào dùng
Phát hiện defect → tạo formal report BG-NNNN.

## Agent
Tester Priya

## Prompt mẫu
```
/fis:tester bug
ID: BG-0001
Title: Agent response empty khi input > 4000 tokens
Severity: P1 (Major)
Environment: Staging v0.1.0

Steps to reproduce:
1. POST /api/v1/tasks với input 5000 tokens
2. Đợi agent processing
3. GET /api/v1/tasks/{id}/result

Expected: Response với content đầy đủ
Actual: Response content = "" (empty string)

Root cause hypothesis: Token truncation ở LLM layer
```

## Severity Levels
| Level | Criteria | SLA |
|-------|----------|-----|
| P0 — Critical | System down, data loss | Fix within 4h |
| P1 — Major | Core feature broken | Fix within 24h |
| P2 — Minor | Non-core feature | Fix within sprint |
| P3 — Trivial | Cosmetic, typo | Backlog |

## Output
- `artifacts/bugs/BG-NNNN.md`
