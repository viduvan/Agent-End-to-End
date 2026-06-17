# Skill: /fis:plan (PM context) — Lập kế hoạch Sprint/Milestone

## Khi nào dùng
Lập kế hoạch sprint, milestone, hoặc kickoff meeting.

## Agent
PM Lan

## Prompt mẫu

### Kickoff meeting
```
/fis:plan
Kickoff meeting cho dự án Agent-End-to-End:
- Agenda 90 phút
- Attendee theo stakeholder register
- Deliverable trước/trong/sau meeting
- Bao gồm checklist Phụ lục A FIS
```

Output: `plans/<date>-kickoff/plan.md` chia phase:
- phase-01-pre-kickoff: confirm attendee, gửi charter 48h trước
- phase-02-during-kickoff: agenda chi tiết, demo nếu có
- phase-03-post-kickoff: minutes, action items, lịch standup

### Sprint planning
```
/fis:plan
Sprint 3 planning — 2 tuần:
- Capacity: 1 person × 10 days × 6h = 60h
- Backlog items từ FS-0001 đến FS-0005
- Risk: FS-0003 phụ thuộc external API chưa sẵn sàng
- Goal: hoàn thành agent orchestrator + basic API
```

### Milestone planning
```
/fis:plan
Milestone M2 (Tuần 5-8):
- Deliverable: Dashboard + Integration tests
- Dependencies: M1 core engine phải complete
- Resources: 1 person full-time
- Risk: UI framework learning curve
```

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Agile không cần plan chi tiết" | Agile ≠ no plan. Agile = plan iteratively. Sprint plan vẫn cần. |
| "Timeline estimate chính xác không được" | Estimate ≠ exact. Ranges (optimistic/likely/pessimistic) + buffer. |
| "Team tự organize, PM track sau" | Self-organize ≠ no tracking. PM provides visibility + removes blockers. |

## Red Flags
- Sprint plan không có acceptance criteria per story
- No buffer/contingency (assumes everything goes perfectly)
- Dependencies not mapped (blocked stories discovered mid-sprint)
- No retrospective action from previous sprint applied

## Verification
- [ ] Sprint goal defined
- [ ] Stories estimated với acceptance criteria
- [ ] Dependencies mapped
- [ ] 20% buffer included
- [ ] Previous retro actions applied
