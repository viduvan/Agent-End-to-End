# Reference: /fis:source-check — Source-Driven Development Deep Dive

> Tài liệu tra cứu chi tiết. Agent KHÔNG load file này khi thực thi.
> File compact: `../source-check.md`

## Framework Detection Patterns

### Node.js / Frontend
```bash
# package.json → dependencies
cat package.json | jq '.dependencies | keys[]'
# Typical: react, next, vue, angular, svelte, express, nestjs

# Version check
cat package.json | jq '.dependencies["react"]'
# → "^19.1.0"
```

### Python / Backend
```bash
# requirements.txt
grep -E "^(fastapi|django|flask|langchain|langraph)" requirements.txt

# pyproject.toml
grep -A5 "\[project.dependencies\]" pyproject.toml

# Installed version
pip show fastapi | grep Version
```

### Go
```bash
grep -E "^require" go.mod
```

## Source Hierarchy — BAD vs GOOD Fetch Targets

| Framework | ❌ BAD Source | ✅ GOOD Source |
|-----------|-------------|--------------|
| React 19 | react.dev homepage | react.dev/reference/react/useActionState |
| FastAPI | Medium blog "FastAPI tutorial" | fastapi.tiangolo.com/tutorial/security/ |
| Next.js | Dev.to article | nextjs.org/docs/app/api-reference |
| Django | Stack Overflow answer from 2019 | docs.djangoproject.com/5.0/ |
| LangGraph | GitHub README | langchain-ai.github.io/langgraph/ |

## Conflict Resolution: Docs ≠ Existing Code

```
Situation: Official docs show Pattern A, but existing code uses Pattern B.
           
Decision tree:
├── Pattern B was correct for older version → migrate to Pattern A
├── Pattern B is project convention → follow convention, document
├── Pattern B is intentional deviation → check ADR/comments for reason
└── Pattern B is just wrong → fix with test coverage
           
Always: Flag the conflict to user. Don't silently pick one.
```

## Citation Rules

### Format
```python
# [Feature Name]: [Brief description]
# Ref: [FULL URL to specific docs page, not homepage]
# Verified: [Library] [Version], [Date YYYY-MM-DD]
```

### Examples
```python
# OAuth2 with Password (Bearer) token
# Ref: https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/
# Verified: FastAPI 0.115.6, 2026-06-16
```

```typescript
// Server Actions with useActionState
// Ref: https://react.dev/reference/react/useActionState
// Verified: React 19.1.0, 2026-06-16
```

### UNVERIFIED Marking
When docs are unavailable (offline, behind paywall, etc.):
```python
# [UNVERIFIED] Using pattern from training data
# TODO: Verify against official docs when available
# Assumed version: FastAPI 0.115.x
```
