# Skill: /fis:code-review — Review PR

## Khi nào dùng
DEV submit PR — SA/code-reviewer agent review.

## Agent
SA Marcus / Code Reviewer (Staff Engineer)

## Prompt mẫu
```
/fis:code-review
Review PR adversarially:
Checklist:
- [ ] Code match với TRD/Feature Spec?
- [ ] Architecture patterns consistent?
- [ ] Performance: N+1 queries? unnecessary loops?
- [ ] Security: input validation? auth check?
- [ ] Error handling: graceful degradation?
- [ ] Test coverage: ≥ 70% cho code mới?
- [ ] Naming: consistent với codebase convention?
- [ ] No hardcoded secrets/config
- [ ] Documentation: docstring + type hints?
```

## Output
- Review comments (Critical/Major/Minor/Nit)
- Approve / Request Changes

## ADR Template
```markdown
# ADR-NNNN: [Decision Title]
## Status: Proposed / Accepted / Deprecated
## Context
## Decision
## Alternatives Considered
## Consequences
## References
```

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Code works, architecture OK" | Working code ≠ good architecture. Check boundaries, coupling, cohesion. |
| "Nit-pick kiến trúc mất thời gian" | Architecture debt compounds. Early feedback = cheap fix. |
| "DEV code-review đủ rồi" | DEV review = correctness. SA review = architecture alignment. Both needed. |

## Red Flags
- Review chỉ check syntax/logic, skip architecture
- Architecture violations dismissed as "too late to fix"
- No reference to TRD / established patterns
- Review without running code

## Verification
- [ ] Architecture patterns checked (vs TRD)
- [ ] Module boundaries maintained
- [ ] New patterns justified (không introduce ad-hoc)
- [ ] Performance/security implications reviewed
