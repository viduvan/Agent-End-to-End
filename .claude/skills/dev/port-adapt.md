# Skill: /fis:port-feature — Port Feature Between Codebases

## Khi nào dùng
Copy/adapt feature từ codebase A sang codebase B.

## Capabilities
- Analyze source feature structure
- Map dependencies
- Adapt naming conventions
- Generate migration plan
- Verify: tests pass in target codebase

---

# Skill: /fis:port-repo — Port Entire Repository

## Khi nào dùng
Migrate/port entire repo (language change, framework change).

## Capabilities
- Full dependency mapping
- API compatibility layer
- Data migration scripts
- Test suite porting
- Phased migration plan

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Copy-paste, adjust after" | Copy-paste = copy bugs. Understand → adapt → verify. |
| "Same framework, same code" | Same framework ≠ same architecture/conventions. Adapt to target project. |

## Red Flags
- Porting without understanding source code
- Not adapting to target project conventions
- Missing tests for ported code

## Verification
- [ ] Source code understood before porting
- [ ] Adapted to target project conventions
- [ ] Tests written for ported functionality
- [ ] Dependencies reconciled
