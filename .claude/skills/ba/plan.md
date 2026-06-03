# Skill: /fis:plan — BA Phase Planning

## Khi nào dùng
Bắt đầu phase BA — breakdown timeline elicit + viết doc.

## Agent
BA Sarah / Planner (Tech Lead)

## Prompt mẫu
```
/fis:plan
Hỗ trợ viết PRD cho feature [tên feature].
Context: [mô tả dự án, models có sẵn]
User story:
- Là [role], khi [action], tôi muốn [goal]
- ...
Output PRD format chuẩn: problem, user story, acceptance criteria, edge case, out-of-scope.
```

### BA-specific planning
```
/fis:plan
Breakdown BA phase cho Sprint 1:
- Day 1-2: JTBD interviews (3 stakeholders × 60 phút)
- Day 3: Event Storming workshop (90 phút)
- Day 4: Impact Mapping + 5 Whys
- Day 5: Draft PRD + wireframes
- Day 6: Three Amigos review
- Day 7: Finalize PRD → Approved
```

## Output
- `plans/<date>-<feature>/plan.md`
- PRD outline / phase breakdown
