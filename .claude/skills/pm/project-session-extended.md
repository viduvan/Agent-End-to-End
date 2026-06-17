# Skill: /fis:plans-kanban — Visual Plans & Kanban Board

## Khi nào dùng
Visualize project plans, sprint board, task tracking.

## Capabilities
- Kanban board: Todo → In Progress → Review → Done
- Gantt chart (Mermaid)
- Sprint burndown tracking
- WBS (Work Breakdown Structure)

---

# Skill: /fis:watzup — Session Status Summary

## Khi nào dùng
Quick status: what happened, what's next, blockers.

## Capabilities
- Summarize current session actions
- List pending tasks
- Highlight blockers/risks
- Quick format: Done / Doing / Blocked / Next

---

# Skill: /fis:journal — Session Journal

## Khi nào dùng
Ghi lại session history, changelog, decisions.

## Agent
Journal Writer

## Capabilities
- Capture files changed, commands run
- Sinh changelog entry
- Link decisions to RAID log
- Output: docs/journal/<date>.md

---

# Skill: /fis:retro — Sprint Retrospective

## Khi nào dùng
Cuối sprint — What went well / Didn't / Actions.

## Capabilities
- Structured retro format (Start/Stop/Continue)
- Action items with owners + deadlines
- Trend analysis across retros

---

# Skill: /fis:project-organization — Project Structure Setup

## Khi nào dùng
Tổ chức project files, folders, conventions.

## Capabilities
- Directory structure scaffolding
- Naming conventions enforcement
- Import/export patterns
- Module boundary definition
- Config file organization

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Session notes trong head đủ rồi" | Head = volatile storage. Notes = persistent. Write down. |
| "Config tracking không cần formal" | Config drift = environment differences = "works on my machine". Track. |

## Red Flags
- Session notes not captured (knowledge lost)
- Config changes not tracked
- Plan changes not reflected in board

## Verification
- [ ] Session notes captured structured
- [ ] Config changes tracked
- [ ] Plan updates reflected in board/timeline
