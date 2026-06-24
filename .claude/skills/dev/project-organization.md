# Skill: /fis:project-organization — Project Structure Organization

> Tổ chức file, thư mục và cấu trúc nội dung project theo convention.

## Khi nào dùng
- Tổ chức lại cấu trúc project (file, folders)
- Apply naming conventions
- Module organization theo feature/layer
- Cleanup: remove unused files, consolidate duplicates

## Agent
Solutions Architect, Planner

## Prompt mẫu
```
/fis:project-organization
Reorganize src/ theo feature-based structure: auth/, users/, products/, shared/.
```
```
/fis:project-organization
Apply naming conventions: kebab-case for files, PascalCase for components, camelCase for utils.
```
```
/fis:project-organization
Clean up: find unused files, duplicate code, orphaned tests.
```

## Nguyên tắc
- Feature-based over layer-based organization (for large projects)
- Consistent naming conventions
- Colocation: keep related files together (component + test + style)
- Clean as you go — don't accumulate tech debt

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Organization doesn't matter" | Bad structure = onboarding takes weeks. Good structure = onboarding takes hours. |
| "Reorganize later" | Cost of reorganization grows exponentially with codebase size. |

## Red Flags
- Inconsistent naming across project
- Files in wrong directories
- Orphaned files (unreferenced)
- Mix of feature-based and layer-based organization

## Verification
- [ ] Naming conventions consistent
- [ ] No orphaned files
- [ ] Related files colocated
- [ ] Directory structure documented in README
