# Skill: /fis:git — Git Workflow & Commit Discipline

> Trunk-based dev, atomic commits, save point pattern.

## Khi nào dùng
- Mỗi khi commit code (commit hygiene check)
- Khi cần parallel agent work (worktrees)
- Khi review git history cho debugging
- Khi setup branching strategy cho project

## Agent
Git Manager

## Trunk-Based Development
```
main ←── source of truth, always deployable
  ├── feature/short-lived-branch (max 1-2 days)
  ├── fix/bug-description
  └── KHÔNG: long-lived feature branches (> 3 days)
```

## Atomic Commits
**1 commit = 1 logical change**:
- ✅ `feat(auth): add password reset endpoint`
- ✅ `fix(api): handle null response from payment provider`
- ❌ `feat(auth): add reset + fix login + refactor utils` (3 changes)

## Save Point Pattern (từ agent-skills)
Sau mỗi prove-it loop slice:
```
1. Code 1 slice (1 function, 1 endpoint)
2. Test → PASS
3. git add . && git commit -m "feat(scope): description"
4. → Save point created — safe to revert to
5. Next slice
```

**Tại sao**: Nếu slice 5 fails → revert về save point 4, không mất 1-4.

## Change Summaries
Mỗi PR/commit lớn kèm summary:
```markdown
## Changes
- Added password reset endpoint (POST /api/auth/reset)
- Added email sending service integration

## Didn't Touch
- Login flow (unchanged)
- User registration (unchanged)

## Concerns
- Email service latency chưa measured (cần monitor sau deploy)
```

## Commit Convention
```
<type>(<scope>): <description>

Types: feat, fix, refactor, test, docs, chore, ci
Scope: module/feature name
Description: imperative mood, lowercase, no period

Body (optional): WHY, not WHAT
Footer (optional): BREAKING CHANGE, Closes #issue
```

## Worktrees cho Parallel Agent Work
Khi cần 2 agents làm song song:
```bash
# Main workspace: agent A works on feature
git worktree add ../project-review review-branch
# Worktree: agent B reviews in isolated workspace
```

## Pre-Commit Hygiene
Trước MỖI commit, check:
- [ ] `git diff --staged` — review changes
- [ ] No debug code (console.log, print, debugger)
- [ ] No secrets (grep -r "password\|secret\|api_key")
- [ ] Tests pass
- [ ] Commit message follows convention

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "WIP commit, clean up sau" | "Sau" = never. Atomic commits từ đầu. |
| "Squash sau cũng được" | Squash mất history. Atomic commits = no squash needed. |
| "Branch dài nhưng feature lớn" | Feature lớn = chia nhỏ thành short-lived branches. |
| "Commit message không quan trọng" | 6 tháng sau debug, commit message là context duy nhất. |

## Red Flags
- WIP commits trong main branch
- Commit message không mô tả change
- Long-lived feature branches (> 3 days)
- Force push to shared branches
- Secrets trong git history
- Multiple unrelated changes trong 1 commit

## Verification
- [ ] Mỗi commit là atomic (1 logical change)
- [ ] Commit messages follow convention
- [ ] No debug code in commits
- [ ] No secrets in git history
- [ ] Branch up-to-date with main
- [ ] Change summary included cho PR
