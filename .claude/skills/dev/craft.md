# Skill: /fis:craft — Implement Code

## Khi nào dùng
Sau khi có plan (từ `/fis:plan`), implement code theo từng phase.

## Agent
Senior Engineer (Fullstack Developer)

## Input
- Plan file (`plans/<date>-<feature>/phase-XX-*.md`) hoặc prompt trực tiếp
- Codebase context (từ `/fis:scout`)

## Output
- Code commits theo phase
- Status: In Progress → Review

## Quy trình

### Bước 1: Scout trước (BẮT BUỘC)
```
/fis:scout <module liên quan>
```
Tìm service/pattern có sẵn để reuse. KHÔNG code mới nếu đã có.

### Bước 2: Craft theo plan
```
/fis:craft plans/<date>-<feature>/phase-01-*.md
```

### Bước 3: Test ngay
```
/fis:test
```

### Bước 4: Self-review
```
/fis:code-review --pending
```

### Bước 5: Commit
```
git add . && git commit -m "feat(<scope>): <description>"
```

## Prompt mẫu

### Từ plan file
```
/fis:craft plans/2026-05-30-notification/phase-01-service.md
```

### Prompt trực tiếp
```
/fis:craft
Implement NotificationService:
- Method: sendEmail(to, subject, body)
- Queue: Redis pub/sub
- Template: Handlebars/Jinja2
- Error handling: retry 3 lần, dead letter queue
- Logging: structured JSON
```

### Backend service
```
/fis:craft
Implement AgentRegistry:
- register(agent_id, agent_class, config)
- get(agent_id) → Agent instance
- list_available() → List[AgentInfo]
- health_check(agent_id) → HealthStatus
- Singleton pattern, thread-safe
- Lazy initialization per agent
```

### Database model
```
/fis:craft
Implement SQLAlchemy models:
- Agent (id, name, type, config_json, status, created_at)
- Conversation (id, user_id, title, created_at)
- Message (id, conversation_id, role, content, agent_id, tokens_used, created_at)
- Index: conversation.user_id, message.conversation_id
```

### API endpoint
```
/fis:craft
Implement FastAPI endpoints cho agent execution:
- POST /api/agents/execute — submit task to agent
- GET /api/agents/{id}/status — check execution status
- WebSocket /api/ws/stream — stream agent responses
- Auth middleware, rate limiting, error handling
```

## Nguyên tắc
- Scout trước Craft — reuse > build mới
- 1 phase = 1 PR = 1 commit có nghĩa
- Test ngay sau craft — không để technical debt
- Self-review trước khi gửi — `/fis:code-review --pending`
- Không craft 2 phases cùng lúc (trừ git worktree)
