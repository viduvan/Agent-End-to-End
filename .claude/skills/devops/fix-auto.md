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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Auto-fix is safe, just formatting" | Auto-fix can change behavior (import ordering, etc.). Review diffs. |
| "Pipeline fix, ship ngay" | Auto-fix = tool suggestion. Human review bắt buộc before commit. |

## Red Flags
- Auto-fix applied without reviewing diff
- Behavioral changes from auto-fix not tested
- Auto-fix rules not configured for project

## Verification
- [ ] Auto-fix diff reviewed before commit
- [ ] Tests pass after auto-fix
- [ ] Auto-fix rules configured cho project conventions
