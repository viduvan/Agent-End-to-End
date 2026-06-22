# Skill: /fis:team — Multi-Agent Team Coordination

> Điều phối Agent Team đa session làm việc song song. Multi-agent orchestration.

## Khi nào dùng
- Cần nhiều agents làm việc song song
- Complex tasks chia thành sub-tasks cho specialists
- Coordinate work across multiple sessions

## Agent
Dev Orchestrator

## Prompt mẫu
```
/fis:team "Split this feature into 3 parallel tasks: backend API, frontend UI, database schema. Assign to specialist agents."
```

## Nguyên tắc
- Clear task boundaries between agents
- Merge protocol khi agents xong
- Conflict resolution strategy

## Verification
- [ ] Tasks properly distributed
- [ ] Agent outputs mergeable
- [ ] No conflicting changes
