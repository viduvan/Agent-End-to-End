# Skill: /fis:sa ddd-tech — DDD Technical Layer

## Khi nào dùng
Bổ sung vào DDD Business mà BA viết (§V-VIII).

## Agent
SA Marcus

## Prompt mẫu
```
/fis:sa ddd-tech
Bounded Context: Task Execution
- Aggregate: Task
  - Entity: Task, TaskStep
  - Value Object: TaskInput, TaskResult, ExecutionConfig
  - Repository: TaskRepository (PostgreSQL)
- API Mapping:
  - POST /api/v1/tasks → Task.create()
  - GET /api/v1/tasks/{id} → Task.find_by_id()
  - WebSocket /ws/tasks/{id}/stream → Task.stream_result()
- Sequence Diagram: submit → validate → route → execute → stream → complete
- Data Model: SQL schema + indexes + migrations
```

## Output
- `artifacts/ddd/DDD-NNNN.md` — §V-VIII (technical layer)

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "DDD overkill cho CRUD app" | Nếu domain đơn giản → DDD lightweight. Nhưng check: domain CÓ đơn giản không? |
| "Business DDD đủ rồi, tech layer thừa" | Business DDD = concepts. Tech DDD = implementation. Cả hai cần align. |
| "Data model first, domain model after" | Data model first = database-driven design. Domain model first = business-driven. |

## Red Flags
- Tech DDD không align với business DDD
- Data model drive domain model (thay vì ngược lại)
- Repository patterns quá complex cho simple queries
- Missing bounded context technical boundaries

## Verification
- [ ] Tech DDD aligned với business DDD (same language)
- [ ] Domain model drives data model (not reverse)
- [ ] API contracts defined per bounded context
- [ ] Repository/service boundaries clear
