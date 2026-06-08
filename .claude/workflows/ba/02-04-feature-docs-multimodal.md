# Workflow BA-2: Thêm tính năng mới (BA Perspective)

## Skills: `/fis:plan`, `/fis:ba create`, `/fis:three-amigos:review-prd`

## BA Pipeline trong Adding Feature

```
Idea/Request từ stakeholder
  → /fis:elicit (JTBD interview)
    → /fis:ba create (PRD + FS + AC)
      → /fis:wireframe (UI sketch)
        → /fis:three-amigos:review-prd (sign-off)
          → Handoff SA (viết TRD)
            → Handoff DEV (implement)
              → /fis:ba cr (nếu scope change)
```

## Prompt mẫu cho multi-agent project

### Viết PRD
```
/fis:ba create
Feature: Agent Health Monitoring
User stories:
- Là admin, tôi muốn xem health status real-time của tất cả agents
- Là system, tôi cần tự restart agent khi crash
- Là developer, tôi muốn xem agent performance metrics
AC:
- Health check mỗi 30s per agent
- Dashboard hiển thị: CPU, memory, response time, error rate
- Auto-restart sau 3 lần health check fail
- Alert notification qua email/Slack
Edge cases:
- Agent restart loop (crash ngay sau restart)
- Network partition giữa orchestrator và agent
Out of scope: Custom health check scripts, agent scaling
```

### Wireframe
```
/fis:wireframe
Agent Health Dashboard:
┌──────────────────────────────────┐
│ System Health: 🟢 All Healthy    │
├──────────────────────────────────┤
│ Agent         Status  CPU   Mem  │
│ Code Agent    🟢 OK   23%   1.2G │
│ Research      🟢 OK   45%   2.1G │
│ QA Agent      🔴 DOWN  -    -    │
│               [Restart] [Logs]   │
├──────────────────────────────────┤
│ Uptime Chart (7 days)            │
│ ████████████████░░ 94.5%        │
└──────────────────────────────────┘
```

---

# Workflow BA-3: Viết tài liệu (BA Perspective)
## BA sở hữu: PRD-NNNN.md, FS-NNNN.md, Wireframes
## Commands: `/fis:ba create` (greenfield) / `/fis:ba generate` (brownfield)

---

# Workflow BA-4: Gemini cho image/video
## Dùng khi: Stakeholder gửi screenshot/mockup → extract requirements
## `/fis:elicit` + multimodal input → structured requirements
