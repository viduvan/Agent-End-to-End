# Skill: /fis:frontend-development — Frontend & UI

## Khi nào dùng
Component development, UI/UX, responsive design, hooks.

## Agent
Senior Engineer (Fullstack Developer)

## Prompt mẫu

### Dashboard UI
```
/fis:frontend-development
Tạo Agent Dashboard với Streamlit/React:
- Agent list: cards với status indicator
- Execution panel: submit task + view result
- Conversation history: chat-like interface
- Real-time updates: WebSocket streaming
- Responsive: mobile-first
```

### Chat interface
```
/fis:frontend-development
Tạo Chat Interface cho multi-agent system:
- Message list: user + agent messages
- Input: text area + file upload
- Agent selector: dropdown chọn agent
- Streaming: hiển thị response real-time
- History: persist conversations
```

### Component decomposition
```
/fis:craft
Tách Dashboard 500 dòng thành:
- AgentList — hiển thị agent cards
- ExecutionPanel — submit + monitor tasks
- ConversationView — chat history
- StatusBar — system health
Dùng compound component pattern.
```

### Custom hooks
```
/fis:craft
Extract data fetching thành custom hooks:
- useAgents() → list + filter
- useConversation(id) → messages + send
- useAgentExecution(taskId) → status + result
- useWebSocket(url) → connection + messages
```

## Nguyên tắc
- Mobile-first responsive
- Component ≤ 200 dòng
- Logic trong hooks, không trong component
- Loading + error states bắt buộc

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Works on Chrome đủ rồi" | Cross-browser testing bắt buộc. Safari/Firefox behave differently. |
| "Mobile responsive sau" | Mobile-first design. Responsive sau = expensive rework. |
| "Accessibility optional" | Accessibility = legal requirement in many markets. Build in, not bolt on. |

## Red Flags
- No cross-browser testing
- Not responsive (desktop only)
- Missing loading/error states
- No keyboard navigation support
- Bundle size not monitored

## Verification
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] Responsive design (mobile-first)
- [ ] Loading/error/empty states handled
- [ ] Accessible (keyboard nav, ARIA labels)
- [ ] Bundle size within budget
