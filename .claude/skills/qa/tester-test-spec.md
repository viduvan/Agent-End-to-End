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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Happy path đủ rồi" | 80% bugs ở edge cases. Test error paths + boundary values. |
| "Feature nhỏ không cần TestSpec" | Feature nhỏ × nhiều lần = coverage gaps × nhiều. TestSpec luôn. |
| "AC rõ ràng, test matrix thừa" | AC rõ cho developer. QA cần matrix để đảm bảo dimensions covered. |

## Red Flags
- TestSpec không cover error paths
- Matrix thiếu Security/Performance columns
- Test priority không rõ (P0/P1/P2)
- TestSpec tạo sau khi code xong (nên tạo trước hoặc song song)

## Verification
- [ ] TestSpec covers AC × dimension matrix đầy đủ
- [ ] Priority assigned (P0 → P1 → P2 → P3)
- [ ] Edge cases identified
- [ ] Security test scenarios included (nếu applicable)
