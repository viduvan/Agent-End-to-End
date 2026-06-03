# Skill: /fis:ba sod — System of Design (BPMN/Swimlane)

## Khi nào dùng
Vẽ quy trình nghiệp vụ BPMN/swimlane + decision table.

## Agent
BA Sarah

## Prompt mẫu
```
/fis:ba sod
Vẽ BPMN cho agent task execution flow:
Start → User submits task
→ Orchestrator validates input
→ [Decision] Route to which agent?
  → If code task → Code Agent
  → If research → Research Agent
  → If QA → QA Agent
→ Agent executes
→ [Decision] Success?
  → Yes → Return result
  → No → Retry (max 3) → Escalate to human
End

Decision table:
| Task Type | Keywords | Agent | Priority |
|-----------|----------|-------|----------|
| Code | "write", "implement" | Code Agent | High |
| Research | "find", "search" | Research Agent | Medium |
| Review | "check", "validate" | QA Agent | Medium |
```

## Output
- `artifacts/sod/SOD-NNNN.md` — BPMN + Mermaid sequence diagrams
