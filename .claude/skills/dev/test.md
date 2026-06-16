# Skill: /fis:test — Testing

## Khi nào dùng
Trước khi commit — sau mỗi `/fis:craft`.

## Agent
Tester Priya

## Coverage Targets
| Loại | Target |
|------|--------|
| Overall | ≥ 70% line coverage |
| Feature mới | ≥ 85% |
| Module sắp refactor | ≥ 80% TRƯỚC KHI refactor |
| Critical path (auth, agent execution) | 100% |

## Prompt mẫu

### Unit tests
```
/fis:test
Viết unit tests cho AgentRegistry:
- register() — happy path + duplicate ID
- get() — existing + not found
- list_available() — empty + with agents
- health_check() — healthy + unhealthy + timeout
Mock external dependencies (Redis, DB).
```

### Integration tests
```
/fis:test
Viết integration tests cho Agent API:
- POST /api/agents/execute — happy path
- POST /api/agents/execute — invalid agent ID → 404
- POST /api/agents/execute — invalid input → 422
- POST /api/agents/execute — unauthorized → 401
- GET /api/agents/{id}/status — running + completed
- WebSocket /api/ws/stream — connect + receive messages
Dùng TestClient + test database.
```

### Behavior tests (trước refactor)
```
/fis:test
Viết tests cho OrchestratorService TRƯỚC khi refactor.
Tập trung BEHAVIOR (input → output), KHÔNG test implementation.
Cover:
- Happy path từng method public
- Edge case: timeout, LLM failure, invalid input
- Error path: agent not found, connection lost
Mục tiêu: 80% line coverage.
```

### E2E tests
```
/fis:test
Viết E2E test cho agent execution flow:
- User submit task → agent receives → processes → returns result
- Timeout handling: agent không respond trong 30s
- Error handling: LLM API failure
- Concurrent: 5 tasks cùng lúc
```

### Regression tests (sau fix bug)
```
/fis:test
Viết regression test cho bug #245:
- Scenario gốc: agent response bị trống khi input > 4000 tokens
- Test: submit task với input 5000 tokens → nhận response đầy đủ
- Test: submit task với input 100 tokens → vẫn hoạt động bình thường
```

## Nguyên tắc
- Test BEHAVIOR, không test IMPLEMENTATION
- Mỗi test case có Arrange / Act / Assert rõ ràng
- Mock ở boundary (DB, external API), không mock internal
- Test name mô tả scenario: `test_should_return_404_when_agent_not_found`
- Chạy full suite sau mỗi craft — không chỉ test mới

## Test Pyramid (từ agent-skills)

| Level | Tỷ lệ | Tốc độ | Scope |
|-------|--------|--------|-------|
| Unit tests | 70% | Fast (ms) | 1 function/class |
| Integration tests | 20% | Medium (s) | Module boundaries |
| E2E tests | 10% | Slow (min) | Full user flow |

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Tests chậm CI nên skip" | CI chậm = fix CI, không skip tests. Optimize test suite, không bỏ. |
| "Happy path đủ rồi" | Bug production 80% ở edge cases. Test error paths + boundary values. |
| "Mocking quá nhiều thì test vô nghĩa" | Mock ở boundary (DB, external API). Không mock internal logic. |
| "Code đơn giản không cần test" | "Đơn giản" trở thành "phức tạp" sau 3 lần sửa. Test giữ behavior đúng. |
| "Test sau khi feature ổn định" | Feature không bao giờ "ổn định". Test giữ feature ổn định. |

## Red Flags
- Test kiểm tra implementation detail thay vì behavior
- Test không có Arrange/Act/Assert rõ ràng
- Test name không mô tả scenario
- Chỉ test happy path, bỏ error paths
- Mock internal functions (chỉ mock boundaries)
- Coverage < 70% cho code mới
- Flaky tests bị ignore thay vì fix

## Verification
Sau khi test xong:
- [ ] Coverage ≥ target (70% overall, 85% feature mới, 100% critical path)
- [ ] Test pyramid balance (70% unit, 20% integration, 10% e2e)
- [ ] Edge cases covered (null, empty, boundary, error)
- [ ] Regression tests cho mọi bug fix
- [ ] Test chạy < 5 phút cho unit suite
- [ ] Không có flaky tests (fix hoặc quarantine)
