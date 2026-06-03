# Skill: /fis:ba ddd-business — Domain-Driven Design

## Khi nào dùng
Domain model, ubiquitous language, bounded context, events.

## Agent
BA Sarah

## Prompt mẫu
```
/fis:ba ddd-business
Domain: Multi-Agent System
Bounded Contexts:
1. Agent Management — CRUD agents, configuration
2. Task Execution — submit, route, execute, monitor
3. Conversation — chat history, context management
4. Knowledge Base — RAG, document indexing
Ubiquitous Language:
- Agent: một AI worker chuyên biệt
- Task: yêu cầu cần agent xử lý
- Orchestrator: điều phối agents
- Conversation: chuỗi tương tác user-agent
Output: context map + aggregate diagram + event catalog.
```

## Output
- `artifacts/ddd/DDD-NNNN.md` — §I-IV (business layer)
  - §I: Ubiquitous Language glossary
  - §II: Bounded Contexts + Mockup
  - §III: Aggregates + Entities
  - §IV: Domain Events + Policies
