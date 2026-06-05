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
