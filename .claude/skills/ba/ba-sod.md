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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Flow đơn giản, không cần diagram" | Flow "đơn giản" cho BA ≠ đơn giản cho DEV/QA. Diagram = shared understanding. |
| "BPMN quá formal" | BPMN = universal process notation. Swimlane nếu BPMN overkill. |
| "Decision table chỉ cần cho complex rules" | Mọi if/else business rule nên có decision table. Completeness check. |

## Red Flags
- Process flow không có exception/error paths
- Swimlane thiếu actors (ai responsible cho step nào?)
- Decision table không exhaustive (missing combinations)
- Diagram không match với PRD/FSD description

## Verification
- [ ] Process flow includes happy path + exception paths
- [ ] Swimlane: every step has clear actor/responsibility
- [ ] Decision tables exhaustive (all combinations covered)
- [ ] Diagram consistent với PRD/FSD
