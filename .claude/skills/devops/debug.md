# Skill: /fis:debug — Log Analysis & Root Cause

## Khi nào dùng
Phân tích log, root cause analysis cho infrastructure issues.

## Agent
DevOps Tuấn / Debugger (Senior SRE)

## Prompt mẫu

### Container crash
```
/fis:debug
FastAPI container restart loop (CrashLoopBackOff).
docker logs app --tail 100
Phân tích: OOM kill? dependency fail? config error?
```

### Performance degradation
```
/fis:debug
API response time tăng từ 200ms → 2s trong 1h qua.
Check: DB pool? Redis memory? LLM latency? CPU?
```

### Log analysis
```
/fis:debug
Phân tích logs/production.log:
- Group errors theo type + frequency
- Top 5 error sources
- Đề xuất fix priority
```

## Output
- Root cause analysis report
- Fix recommendations ranked by impact
