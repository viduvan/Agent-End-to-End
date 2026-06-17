# Skill: /fis:worktree — Git Worktree Management

## Khi nào dùng
Parallel development trên nhiều branches cùng lúc.

## Capabilities
- Create/remove worktrees
- Switch between parallel feature branches
- Shared .git directory, separate working dirs

---

# Skill: /fis:git — Git Operations

## Khi nào dùng
Git operations: branch, PR, conflict, release.

## Agent
Git Manager

## Capabilities
- Branch creation (feature/, fix/, hotfix/)
- PR creation with template
- Conflict resolution assist
- Conventional commits formatting
- Release tagging (semver)
- Changelog generation from commits
- Rebase vs merge strategy

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Branch switching đủ rồi" | Branch switching = stash/unstash = lost context. Worktree = parallel clean workspace. |
| "Worktree phức tạp" | 1 command setup. Benefit = isolated parallel work without context switching. |

## Red Flags
- Worktree not cleaned up after use
- Conflicting work in main and worktree
- Worktree out of date with main

## Verification
- [ ] Worktree purpose clear before creating
- [ ] Worktree synced with main regularly
- [ ] Cleaned up after merge/completion
