# Skill: /fis:elicit — Phỏng vấn Stakeholder

## Khi nào dùng
Phỏng vấn stakeholder để extract requirement thô → structured output.

## Agent
BA Sarah

## Phương pháp
1. **JTBD Interview** (Jobs To Be Done) — Hiểu "việc" user cần hoàn thành
2. **Event Storming** — Khám phá domain events + commands + actors
3. **Impact Mapping** — Goal → Actors → Impacts → Deliverables

## Prompt mẫu

### JTBD Interview
```
/fis:elicit
Phỏng vấn JTBD cho multi-agent system:
- Ai là user chính? (enterprise manager, developer, end-user)
- Job: "Khi nào user cần agent tự động?"
- Situation: "Trong tình huống nào?"
- Motivation: "Tại sao cách hiện tại không đủ?"
- Expected outcome: "Thành công trông như thế nào?"
Output structured: personas + jobs + pain points + gain points.
```

### Event Storming
```
/fis:elicit
Event Storming cho agent execution flow:
Domain events:
- TaskSubmitted → AgentAssigned → AgentStarted → AgentCompleted / AgentFailed
- UserFeedback → AgentRetrained
Commands:
- SubmitTask, AssignAgent, CancelExecution
Actors:
- User, Orchestrator, Agent, Admin
Aggregates:
- Task, Agent, Conversation
Output: event flow diagram + aggregate boundaries.
```

### Impact Mapping
```
/fis:elicit
Impact Mapping cho dự án Agent-End-to-End:
Goal: Giảm 40% effort thủ công cho doanh nghiệp
Actors: Enterprise manager, Developer, End-user
Impacts: Tự động hóa task routing, Code review tự động, Report generation
Deliverables: Agent orchestrator, REST API, Dashboard
```

## Output
- `artifacts/prd/ELICIT-NOTES-{date}.md` — raw notes structured
- Input cho `/fis:ba create` hoặc `/fis:ba generate`

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Stakeholder nói vậy, không cần challenge" | Stakeholder biết problem, nhưng solution họ đề xuất có thể sai. Challenge assumptions. |
| "User chỉ cần happy path" | User nói happy path, BA phải hỏi edge cases + error flows. |
| "Đã hiểu domain, bỏ qua event storming" | Domain knowledge cũ có thể outdated. Event storming phát hiện gaps. |
| "Interview 1 người đủ rồi" | 1 stakeholder = 1 perspective. Cần ≥ 2-3 perspectives cho validation. |

## Red Flags
- Nhận requirement mà không hỏi WHY
- Chỉ interview 1 stakeholder cho domain phức tạp
- Skip edge cases / error scenarios trong elicitation
- Không challenge assumptions ("họ nói vậy thì đúng vậy")
- Notes không structured (free-form mà không categorize)

## Verification
- [ ] ≥ 2 stakeholder perspectives captured
- [ ] JTBD: Jobs + Situations + Motivations + Outcomes đầy đủ
- [ ] Edge cases / error flows được hỏi
- [ ] Assumptions listed và tagged [VERIFIED] / [ASSUMED]
- [ ] Output structured theo template
