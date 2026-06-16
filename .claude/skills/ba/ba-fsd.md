# Skill: /fis:ba fsd — Functional Spec Detail

## Khi nào dùng
Chi tiết functional spec theo module.

## Agent
BA Sarah

## Prompt mẫu
```
/fis:ba fsd
Module: Agent Orchestrator
Functions:
1. route_task(task) → agent_id
   - Input: TaskRequest(type, content, priority)
   - Output: AgentAssignment(agent_id, estimated_time)
   - Rules: round-robin + skill matching + load balancing
   - Error: NoAgentAvailable → queue + notify admin

2. execute_task(agent_id, task) → result
   - Input: agent_id, TaskRequest
   - Output: TaskResult(content, tokens_used, duration)
   - Timeout: 60s default, configurable
   - Retry: 3 times with exponential backoff
```

## Output
- `artifacts/fsd/FSD-NNNN.md`

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "PRD đủ detail rồi, FSD thừa" | PRD = business view. FSD = functional detail cho DEV. Khác audience. |
| "DEV sẽ hỏi nếu thiếu" | DEV hỏi = interrupt. FSD đầy đủ = DEV tự serve. |
| "Edge case hiếm, bỏ qua" | Edge case hiếm × nhiều features = production bugs. Document all. |

## Red Flags
- FSD không cover error handling flows
- Missing field validation rules
- Không có state diagram cho complex workflows
- FSD không link về PRD / AC tương ứng

## Verification
- [ ] Mỗi module có input/output/validation rules
- [ ] Error flows documented
- [ ] State transitions defined (nếu có workflow)
- [ ] Linked to PRD AC (traceability)
