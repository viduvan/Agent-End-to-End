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
