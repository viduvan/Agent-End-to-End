# Skill: /fis:ship — Ship Feature Pipeline

> Pipeline ship: merge main, test, review, commit, push, tạo PR. Release automation.

## Khi nào dùng
- Ship feature to production (commit + tag + push + PR)
- Final test pass trước khi merge
- Release pipeline automation
- Version tagging

## Agent
Fullstack Developer, DevOps Engineer

## Prompt mẫu
```
/fis:ship "Run final tests, commit, push, and create PR for feature/auth branch"
```
```
/fis:ship "Tag release v2.1.0, create changelog, push to main"
```

## Nguyên tắc
- Test PHẢI pass trước khi ship
- Conventional commits format
- PR description đầy đủ (what, why, how)
- Tag releases with semantic versioning

## Verification
- [ ] All tests pass
- [ ] Commit messages follow conventional commits
- [ ] PR created with description
- [ ] No merge conflicts
