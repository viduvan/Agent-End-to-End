# Skill: /fis:mermaidjs-v11 — Mermaid.js v11 Diagrams

> Vẽ diagram với cú pháp Mermaid.js v11. Flowcharts, sequence, class, ER, Gantt, state, journey.

## Khi nào dùng
- Flowcharts và process diagrams trong markdown
- Sequence diagrams cho API interactions
- Class diagrams cho OOP design
- ER diagrams cho database schema
- Gantt charts cho project planning

## Agent
Solutions Architect, Technical Analyst

## Prompt mẫu
```
/fis:mermaidjs-v11 "Draw sequence diagram: User → Frontend → API → Database → API → Frontend → User"
```
```
/fis:mermaidjs-v11 "Create ER diagram for e-commerce: Users, Products, Orders, OrderItems, Reviews"
```
```
/fis:mermaidjs-v11 "Draw Gantt chart for 3-sprint development plan with milestones"
```

## Nguyên tắc
- Dùng Mermaid.js v11 syntax (latest)
- Keep diagrams readable (max ~20 nodes)
- Quote labels containing special characters

## Verification
- [ ] Mermaid syntax valid (renders correctly)
- [ ] Diagram type appropriate for content
- [ ] Labels readable, not truncated
