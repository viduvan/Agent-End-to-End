# Skill: /fis:tester test-spec — Sinh TestSpec

## Khi nào dùng
Sau khi Feature Spec Ready — AC × Test matrix.

## Agent
Tester Priya

## Prompt mẫu
```
/fis:tester test-spec
Feature: Agent Execution API (FS-0001)

Test matrix:
| AC | Happy Path | Error Path | Edge Case | Security | Performance |
|----|-----------|-----------|-----------|----------|-------------|
| AC1: Submit | ✅ | ✅ 422 | ✅ large input | ✅ unauth | ✅ p95<500ms |
| AC2: Stream | ✅ | ✅ timeout | ✅ reconnect | ✅ token | |
| AC3: Status | ✅ | ✅ not found | ✅ concurrent | | |

Priority: P0 (happy) → P1 (error) → P2 (edge) → P3 (perf)
```

## Output
- `artifacts/test-specs/TESTSPEC-NNNN.md`
