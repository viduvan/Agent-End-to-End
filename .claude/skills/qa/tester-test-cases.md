# Skill: /fis:tester test-cases — Sinh Test Scenarios

## Khi nào dùng
Từ TestSpec → code test thực tế (.feature / .spec.ts / .py).

## Agent
Tester Priya

## Prompt mẫu
```
/fis:tester test-cases
Sinh test cases từ TESTSPEC-0001.md:

# Happy path
test_should_submit_task_and_return_task_id()
test_should_stream_agent_response_via_websocket()
test_should_return_task_status_completed()

# Error path
test_should_return_422_when_invalid_input()
test_should_return_401_when_no_auth_token()
test_should_timeout_after_60s_and_return_error()

# Edge cases
test_should_handle_input_larger_than_10mb()
test_should_handle_concurrent_submissions()

# Security
test_should_reject_prompt_injection()
test_should_rate_limit_submissions()

# Performance
test_should_respond_within_500ms_p95()
```

## Output
- `tests/` directory — test files

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Test automation quá chậm, manual đủ" | Manual không scale, không reproducible. Automate core flows. |
| "Test happy path trước, edge case sau" | "Sau" = sau production bug. Edge cases cùng lúc happy path. |
| "Mock service ngoài quá phức tạp" | Mock ở boundary là best practice. Fixture data reusable. |

## Red Flags
- Test cases chỉ cover happy path
- Test names không mô tả scenario
- Không có test cho error/edge cases từ TestSpec
- Test bị skip hoặc commented out mà không justification

## Verification
- [ ] Test cases cover tất cả scenarios từ TestSpec
- [ ] Test names descriptive (test_should_X_when_Y)
- [ ] Arrange/Act/Assert structure rõ ràng
- [ ] Mock chỉ ở boundaries (DB, external API)
- [ ] Tests chạy trong CI pipeline
