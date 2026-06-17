# Skill: /fis:deploy — Deploy

## Khi nào dùng
Deploy staging hoặc production.

## Agent
DevOps Tuấn

## Commands
```
/fis:deploy staging                      # Deploy staging
/fis:deploy production --strategy=canary # Canary: 5% → 25% → 100%
/fis:deploy production --hotfix          # Direct deploy cho P0
/fis:deploy rollback --to=v0.1.0         # Rollback
```

### Canary Strategy
1. Deploy new version to 5% traffic
2. Monitor 30 phút: error rate, latency, memory
3. If OK → 25% traffic, monitor 30 phút
4. If OK → 100% traffic
5. If error > 2% → auto-rollback

## Output
- Deployment URL + status
- Monitoring dashboard link

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Staging OK = production OK" | Data khác, traffic khác, edge cases khác. Monitor sau deploy. |
| "Rollback plan viết sau" | Không có rollback = không nên deploy. Plan trước. |
| "CI chậm, skip step này" | CI chậm = optimize CI, không skip quality gates. |
| "Friday afternoon, nhỏ thôi" | Never deploy Friday PM. Bugs phát hiện khi không ai online. |

## Red Flags
- Deploy không có rollback plan
- Skip security scan trong CI pipeline
- Secrets trong code/config (phải dùng vault/env)
- Không monitoring post-deploy
- Big-bang release (phải canary/blue-green)

## Verification
- [ ] CI pipeline có đủ quality gates (lint, test, build, security scan)
- [ ] Rollback plan documented và tested
- [ ] Secrets in vault/env, NOT in code
- [ ] Monitoring configured (error rate, latency, memory)
- [ ] Canary strategy defined cho production
