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
