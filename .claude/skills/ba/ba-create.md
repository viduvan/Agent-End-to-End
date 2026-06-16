# Skill: /fis:ba create — Viết PRD/FS (Greenfield)

## Khi nào dùng
Dự án mới, viết requirement từ đầu.

## Agent
BA Sarah

## Prompt mẫu
```
/fis:ba create
Feature: Agent Execution API
User stories:
- Là developer, tôi muốn submit task cho agent qua API
- Là admin, tôi muốn xem execution history
- Là system, tôi cần timeout agent sau 60s
Acceptance criteria:
- API trả response trong < 500ms
- WebSocket stream real-time status
- Error handling: timeout, agent failure, invalid input
Edge cases:
- Agent crash mid-execution
- Concurrent submissions cùng agent
- Input > 10MB
Out of scope:
- Agent training/fine-tuning
- Multi-tenant isolation (phase 2)
```

## Output
- `artifacts/prd/PRD-NNNN.md`
- `artifacts/fs/FS-NNNN.md`

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Happy path AC đủ rồi" | AC cần cover error flows + edge cases. Happy path chỉ là bắt đầu. |
| "Stakeholder approve rồi, ship thôi" | Approve ≠ complete. Check: AC SMART? Edge cases covered? NFRs defined? |
| "Requirement rõ ràng, không cần wireframe" | Text requirement = ambiguous. Wireframe/mockup giảm 70% misunderstanding. |

## Red Flags
- PRD không có error/edge case AC
- AC không SMART (Specific, Measurable, Achievable, Relevant, Time-bound)
- Không có NFR section (performance, security, scalability)
- PRD viết xong mà không có Three Amigos review
- Scope quá rộng cho 1 PRD (nên split)

## Verification
- [ ] AC covers happy path + error path + edge cases
- [ ] AC is SMART
- [ ] NFRs defined (performance, security, scalability)
- [ ] Wireframe/mockup attached cho UI features
- [ ] Three Amigos review scheduled
