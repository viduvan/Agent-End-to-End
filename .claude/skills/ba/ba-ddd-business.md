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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Domain model quá complex cho dự án nhỏ" | Dự án "nhỏ" lớn dần. Domain model sớm = less refactoring sau. |
| "Team hiểu domain, không cần ubiquitous language" | Team hiện tại hiểu. Team member mới 3 tháng sau không. Document. |
| "Bounded context split later" | Later = never. Monolith → microservice migration cực kỳ tốn kém. |

## Red Flags
- Bounded contexts quá lớn (god context)
- Ubiquitous language không consistent giữa code và docs
- Domain events không cover all state transitions
- Missing aggregate invariants

## Verification
- [ ] Bounded contexts defined với clear boundaries
- [ ] Ubiquitous language documented và consistent
- [ ] Domain events cover tất cả state transitions
- [ ] Aggregate invariants defined
