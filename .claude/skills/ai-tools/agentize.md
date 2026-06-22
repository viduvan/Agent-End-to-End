# Skill: /fis:agentize — Convert Codebase to AI Agent

## Khi nào dùng
- Biến codebase/service thành CLI hoặc MCP server thân thiện AI
- Tạo agent wrapper cho existing APIs
- Xây dựng agent loop: observe → think → act
- Multi-agent orchestration patterns

## Agent
Fullstack Developer / MCP Manager

## Input
- Codebase hoặc service cần agentize
- Target format: CLI tool, MCP server, hoặc agent module

## Output
- Agent-ready codebase với tool registration
- CLI entry point hoặc MCP server config
- Agent persona definition

## Khả năng cốt lõi
- Agent persona definition (role, constraints, capabilities)
- Tool registration cho agent (function → tool mapping)
- Agent loop implementation: observe → think → act
- Multi-agent orchestration patterns
- State management cho agent conversations
- MCP server scaffolding (TypeScript/Python)

## Prompt mẫu

### CLI tool từ codebase
```
/fis:agentize
Biến module src/data-pipeline/ thành CLI tool có thể gọi từ AI agent.
Entry point: process(input_file, config)
Output: JSON structured result
```

### MCP server
```
/fis:agentize
Tạo MCP server cho API payment gateway hiện có.
Tools: create_payment, check_status, refund
Schema: input/output theo OpenAPI spec
```

### Agent wrapper
```
/fis:agentize
Wrap NotificationService thành agent có thể tự quyết:
- Channel selection (email/sms/push) dựa trên priority
- Retry strategy dựa trên delivery status
- Escalation khi delivery fail > 3 lần
```

## Nguyên tắc
- Tool boundary rõ ràng: mỗi tool = 1 action duy nhất
- Error handling phải explicit — agent cần biết khi nào thất bại
- State minimal — agent conversation không nên phụ thuộc state lớn
- Schema-first: định nghĩa input/output schema TRƯỚC khi implement
