# Reference: /fis:git — Git Workflow Deep Dive

> Tài liệu tra cứu chi tiết. File compact: `../git-discipline.md`

## Worktree Setup for Parallel Agents

```bash
# Create worktree for parallel review
git worktree add ../project-review -b review/feature-x
cd ../project-review
# Agent B works here independently

# List worktrees
git worktree list

# Remove when done
git worktree remove ../project-review
```

## Change Summary Template

```markdown
## Summary
Brief description of what this PR does.

## Changes
- [file:line] Added X to handle Y
- [file:line] Modified Z to support W

## Didn't Touch
- Module A (no changes needed)
- Config files (unchanged)

## Concerns
- Performance of X not measured yet (need monitoring)
- Edge case Y not covered (TODO in next PR)

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing: [describe steps]
```

## Interactive Rebase Guide (Clean History)

```bash
# Rebase last N commits
git rebase -i HEAD~3

# In editor:
pick abc1234 feat(auth): add login endpoint
squash def5678 fix: typo in login           # Merge into previous
pick ghi9012 feat(auth): add logout endpoint

# Result: 2 clean commits instead of 3
```

## Commit Message Examples

```
# Feature
feat(auth): add password reset via email
feat(api): add pagination to GET /users
feat(ui): add dark mode toggle to settings

# Bug fix
fix(auth): handle expired JWT gracefully
fix(api): return 404 instead of 500 for missing user

# Refactor
refactor(db): extract query builder from UserService
refactor(api): replace callbacks with async/await

# Test
test(auth): add edge cases for token refresh
test(api): add integration tests for /payments

# Docs
docs(api): update OpenAPI spec for v2 endpoints
docs(adr): add ADR-0005 for cache strategy
```
