# Skill: /fis:watzup — Session Review & Wrap-up

> Review thay đổi gần đây và chốt phiên làm việc hiện tại. Session summary generation.

## Khi nào dùng
- Cuối phiên làm việc, tóm tắt những gì đã làm
- Review diff gần đây cho context
- Handoff giữa các sessions/developers
- Quick status check: "tôi đã làm gì?"

## Agent
Journal Writer, Dev Orchestrator

## Prompt mẫu
```
/fis:watzup
Review những thay đổi gần đây và tóm tắt phiên làm việc.
```
```
/fis:watzup
Chốt session: liệt kê files changed, tests status, next steps.
```

## Nguyên tắc
- Auto-analyze git diff/log
- Summarize: what was done, what's pending, blockers
- Generate handoff notes cho next session

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Nhớ trong đầu đủ rồi" | Context loss between sessions = real. 2 phút watzup = perfect handoff. |
| "Git log là đủ" | Git log = raw changes. Watzup = interpreted summary với next steps. |

## Red Flags
- End session without summary
- No next steps identified
- Missing blocker documentation

## Verification
- [ ] Changes summarized accurately
- [ ] Next steps identified
- [ ] Blockers documented
- [ ] Handoff notes complete
