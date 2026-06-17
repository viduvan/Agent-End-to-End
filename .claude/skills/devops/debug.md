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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Restart service là xong" | Restart = patch, không fix root cause. RCA bắt buộc. |
| "Chắc do OOM, tăng memory" | Tăng memory che memory leak. Tìm root cause: leak? query heavy? cache miss? |
| "Logs quá nhiều, skip phân tích" | Filter + group logs theo error type. Top 5 errors = 80% vấn đề. |
| "Lỗi intermittent, không reproduce được" | Thu thập thêm data: correlation ID, timestamps, load patterns. Intermittent ≠ non-existent. |

## Red Flags
- Restart/scale up mà không RCA
- Tăng resources mà không hiểu tại sao cần
- Debug không có metrics/logs/traces
- Fix mà không add monitoring cho vấn đề đó
- Ignore intermittent errors

## Verification
Sau khi debug xong:
- [ ] Root cause identified (không chỉ symptom)
- [ ] RCA report documented
- [ ] Monitoring/alert added cho issue tương tự
- [ ] Fix verified trong staging trước production
- [ ] Runbook updated nếu pattern mới
