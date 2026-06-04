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
