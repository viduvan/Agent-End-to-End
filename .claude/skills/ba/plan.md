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

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Elicitation 1 session đủ" | 1 session = surface requirements. Cần follow-up cho depth. |
| "Timeline flexible, không cần breakdown" | Flexible = vô hạn. Breakdown = accountability + progress tracking. |
| "Plan trước, adjust sau" | Plan cần review checkpoints. "Adjust sau" = discover too late. |

## Red Flags
- Plan không có milestones / checkpoints
- Timeline không realistic (no buffer)
- Dependencies không mapped
- No review/sign-off gates trong plan

## Verification
- [ ] Milestones defined với clear deliverables
- [ ] Timeline includes buffer (20% contingency)
- [ ] Dependencies mapped (who blocks who?)
- [ ] Review gates scheduled (Three Amigos, sign-offs)
