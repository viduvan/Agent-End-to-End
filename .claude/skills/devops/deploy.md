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
