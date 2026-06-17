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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Tests chậm CI nên skip một số" | CI chậm = fix CI, không skip tests. Optimize suite, không bỏ. |
| "Happy path test đủ rồi" | 80% bugs ở edge cases. Test error paths + boundary values. |
| "Coverage 60% đủ cho MVP" | MVP code vẫn cần chạy đúng. 70% minimum, 85% cho feature mới. |
| "Flaky test, ignore được" | Flaky test che real bugs. Fix flakiness hoặc quarantine. |

## Red Flags
- Skip tests vì CI chậm
- Coverage giảm sau mỗi sprint
- Flaky tests bị mark skip mà không fix
- Chỉ chạy unit tests, bỏ integration/e2e
- Test suite > 10 phút mà không optimize

## Verification
Sau khi test xong:
- [ ] Coverage ≥ target cho loại tương ứng
- [ ] Không có flaky tests mới
- [ ] Regression tests pass
- [ ] Test report reviewed (failures analyzed, not just counted)
