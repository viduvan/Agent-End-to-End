# Skill: /fis:pm — Project Management Artifacts (9 sub-commands)

## Khi nào dùng
Sinh toàn bộ artifacts PMP-aligned cho quản trị dự án.

## Agent
PM Lan

## Sub-commands

### 1. `/fis:pm charter` — Project Charter
```
/fis:pm charter
Sinh PROJECT-CHARTER.md: scope, milestones, budget, success criteria.
→ Export .docx → Sponsor ký → artifacts/pm/signed/
```
Output: `artifacts/pm/PROJECT-CHARTER.md`

### 2. `/fis:pm stakeholder-register` — Stakeholder Register
```
/fis:pm stakeholder-register
Mapping stakeholder theo Power × Interest matrix.
```
Output: `artifacts/pm/STAKEHOLDER-REGISTER.md`

### 3. `/fis:pm comms-plan` — Communications Plan
```
/fis:pm comms-plan
Kênh, tần suất, nội dung communication cho từng stakeholder group.
```
Output: `artifacts/pm/COMMS-PLAN.md`

### 4. `/fis:pm risk-register` — Risk Register
```
/fis:pm risk-register
P × I scoring, mitigation strategy, risk matrix.
Categories: Technical, Schedule, Resource, External, AI-specific.
```
Output: `artifacts/pm/RISK-REGISTER.md`

### 5. `/fis:pm raid-log` — RAID Log
```
/fis:pm raid-log
Single source of truth: Risks, Actions, Issues, Decisions.
Review: hàng ngày skim, hàng tuần full review.
```
Output: `artifacts/pm/RAID-LOG.md`

### 6. `/fis:pm status-report` — Weekly Status Report (RAG)
```
/fis:pm status-report
Format 1 trang: Overall RAG + Top 3 Achievements + Top 3 Risks + Next Week.
Mỗi thứ 6 sinh report cho sponsor.
```
Output: `artifacts/pm/status-{date}.md`

### 7. `/fis:pm lessons-learned` — Lessons Learned
```
/fis:pm lessons-learned
Cuối mỗi phase — capture what worked, what didn't, improvements.
```
Output: `artifacts/pm/LESSONS-{phase}.md`

### 8. `/fis:pm retro` — Sprint Retrospective
```
/fis:pm retro
What went well / What didn't / Action items.
```
Output: `artifacts/pm/retro-{date}.md`

### 9. `/fis:pm kanban` — Kanban Board
```
/fis:pm kanban
Visualize: Todo → In Progress → Review → Done.
```
Output: `artifacts/pm/KANBAN.md`
