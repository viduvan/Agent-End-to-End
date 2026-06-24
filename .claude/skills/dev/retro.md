# Skill: /fis:retro — Sprint Retrospective

> Sinh retrospective sprint dựa trên metric git. Data-driven sprint analysis.

## Khi nào dùng
- End of sprint retrospective
- Phân tích git metrics (commit frequency, file churn, coupling)
- Identify velocity trends
- Generate improvement action items

## Agent
Project Manager, Journal Writer

## Input
- Git log cho sprint period
- Sprint goals/tickets

## Output
- Retrospective report: What went well, What didn't, Action items
- Git metrics analysis (velocity, churn, hotspots)

## Prompt mẫu
```
/fis:retro
Sinh retrospective cho sprint vừa rồi (2 weeks). Analyze: commit patterns, file churn, velocity.
```
```
/fis:retro
Phân tích git metrics: files changed most frequently, coupling between modules, contribution distribution.
```

## Nguyên tắc
- Data-driven (git metrics), not opinion-based
- Focus on systemic issues, not individual blame
- Action items phải specific, measurable, assignable

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Retro mất thời gian" | Retro tốt prevent lặp lại mistakes. ROI rất cao. |
| "Mọi thứ ổn, không cần retro" | Always có improvement opportunities. Data reveals hidden patterns. |

## Red Flags
- Retro chỉ dựa trên feeling (no data)
- Action items vague ("improve communication")
- Skip retro vì "deadline gấp"

## Verification
- [ ] Git metrics analyzed
- [ ] What went well / What didn't identified
- [ ] Action items specific and assignable
- [ ] Trends compared with previous sprints
