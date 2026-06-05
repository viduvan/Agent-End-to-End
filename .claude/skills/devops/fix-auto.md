# Skill: /fis:fix --auto — Auto-fix Pipeline

## Khi nào dùng
CI/CD pipeline fail — tự động phân tích + suggest fix.

## Agent
DevOps Tuấn

## Prompt mẫu
```
/fis:fix --auto
CI pipeline fail ở step "test":
- Pull failed test output
- Identify: flaky test? dependency? config mismatch?
- Auto-fix nếu pattern known (timeout, cache)
- Suggest fix nếu unknown pattern
```

## Output
- Auto-fix PR nếu pattern known
- Diagnosis report nếu unknown
