# Skill: /fis:wireframe — Visualize UI Flow

## Khi nào dùng
Trước khi design chi tiết — sketch UI flow nhanh.

## Agent
BA Sarah / UI-UX Designer

## Prompt mẫu
```
/fis:wireframe
Agent Dashboard layout:
┌─────────────────────────────────────────────┐
│ Header: Logo | Search | User Menu           │
├──────────┬──────────────────────────────────┤
│ Sidebar  │ Main Content                      │
│ - Agents │ ┌─────────────────────────────┐  │
│ - Tasks  │ │ Agent Cards Grid            │  │
│ - Chat   │ │ [Agent 1] [Agent 2] [Agent 3│  │
│ - History│ └─────────────────────────────┘  │
└──────────┴──────────────────────────────────┘
```

## Output
- ASCII wireframe trong markdown
- Hoặc HTML prototype: `artifacts/wireframes/WF-NNNN/`
- Input cho frontend-development skill
