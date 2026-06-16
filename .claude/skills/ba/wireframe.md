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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Text description đủ cho UI" | Text = ambiguous. Wireframe = shared understanding. 1 wireframe > 100 words. |
| "Wireframe quá sớm, design sau" | Wireframe ≠ design. Wireframe = layout + flow. Sớm = less rework. |
| "User biết mình muốn gì" | User biết problem, không biết solution. Wireframe validate sớm. |

## Red Flags
- Wireframe không cover error states
- Missing loading/empty states
- No responsive consideration (mobile vs desktop)
- Wireframe không link tới user stories / AC

## Verification
- [ ] Happy path + error states wireframed
- [ ] Loading / empty / error states included
- [ ] Responsive breakpoints considered
- [ ] Linked to user stories / AC
