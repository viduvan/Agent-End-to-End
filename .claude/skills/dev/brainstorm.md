# Skill: /fis:brainstorm — Solution Brainstorming

> Brainstorm giải pháp với phân tích trade-off và phản biện thẳng thắn. Multi-perspective thinking.

## Khi nào dùng
- Cần nhiều giải pháp cho 1 vấn đề
- Trade-off analysis giữa các approaches
- Creative problem solving khi bế tắc
- Architecture decision making

## Agent
Solutions Architect, Technical Analyst

## Prompt mẫu
```
/fis:brainstorm
Brainstorm cách implement real-time notifications: WebSocket vs SSE vs polling.
Phân tích trade-offs: performance, complexity, scalability, cost.
```
```
/fis:brainstorm
5 cách tối ưu database queries cho dashboard analytics.
Constraint: PostgreSQL, 10M rows, sub-200ms response time.
```

## Nguyên tắc
- Minimum 3 alternatives per problem
- Trade-off matrix cho mỗi option
- Devil's advocate: phản biện mỗi option
- Decision criteria rõ ràng

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Option đầu tiên đã tốt rồi" | First idea bias. Brainstorm 3+ options mới so sánh được. |
| "Không có thời gian brainstorm" | 30 phút brainstorm tiết kiệm weeks refactoring wrong approach. |

## Red Flags
- Chỉ có 1 option (không phải brainstorm)
- Trade-offs bị skip
- Bias toward familiar technology

## Verification
- [ ] Minimum 3 alternatives generated
- [ ] Trade-off matrix complete
- [ ] Decision criteria defined
- [ ] Contrarian viewpoint considered
