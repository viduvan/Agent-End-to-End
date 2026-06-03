# Team Coordination Rules — Quy tắc phối hợp nhóm

> Các quy chuẩn này chỉ áp dụng khi phối hợp hoạt động như các thành viên trong một Agent Team.

## 1. File Ownership (CRITICAL)

### Quy tắc sở hữu file
Mỗi file/directory có **1 owner duy nhất**. Chỉ owner mới được **write**, agents khác chỉ được **read**.

| Owner | Files owned | Agents khác |
|-------|-----------|-------------|
| **BA** | `artifacts/prd/`, `artifacts/wireframes/` | Read-only |
| **SA** | `artifacts/trd/`, `artifacts/decisions/`, `docs/system-architecture.md` | Read-only |
| **DEV** | `src/`, `tests/`, `plans/` | Read-only |
| **QA** | `artifacts/test-specs/`, `tests/e2e/` | Read-only |
| **DevOps** | `Dockerfile`, `docker-compose.yml`, `.github/workflows/`, `docs/runbooks/` | Read-only |
| **PM** | `artifacts/pm/`, `docs/project-overview.md` | Read-only |

### Vi phạm ownership
```
❌ WRONG: DEV agent sửa PRD-0001.md (thuộc BA)
❌ WRONG: QA agent sửa src/services/ (thuộc DEV)
✅ RIGHT: QA agent ĐỌC src/services/ → viết test vào tests/
✅ RIGHT: SA agent ĐỌC PRD → viết TRD vào artifacts/trd/
```

### Shared files (ngoại lệ)
- `CLAUDE.md` — bất kỳ agent nào cũng đọc được
- `README.md` — copywriter/docs-manager write, all read
- `docs/codebase-summary.md` — auto-generated, all read

## 2. Git Safety

### Branch Rules
```
main            ← Protected, chỉ merge qua PR
├── dev         ← Integration branch
├── feat/*      ← Feature branches (1 per feature)
├── fix/*       ← Bug fix branches
├── refactor/*  ← Refactor branches
└── agent/*     ← Agent-specific branches (nếu multi-agent)
```

### Commit Rules
- Mỗi agent commit **riêng** (không mix changes từ 2 agents)
- Commit message format: `<type>(<scope>): <description>`
- **KHÔNG** force push trên shared branches
- **KHÔNG** commit secrets, `.env`, credentials

### Merge Rules
```
feat/xxx → dev    ← Merge khi: tests pass + review approved
dev → main        ← Merge khi: staging tested + PM approved
```

## 3. Communication Protocol

### Handoff Format
Khi agent hoàn thành task và cần pass cho agent tiếp theo:

```markdown
## Handoff: [Agent A] → [Agent B]

### Đã hoàn thành
- [x] Task 1: <description>
- [x] Task 2: <description>

### Files changed
- `path/to/file1.py` — Added service layer
- `path/to/file2.py` — Updated schema

### Cho Agent B
- [ ] Task tiếp theo: <description>
- [ ] Constraints: <any limits>
- [ ] References: <links to docs/specs>
```

### Conflict Resolution
Khi 2+ agents cần sửa cùng file:

1. **Phát hiện conflict** → Agent report cho orchestrator
2. **Orchestrator quyết định** → Ai sửa trước, ai chờ
3. **Sequential execution** → Agent 1 hoàn thành → Agent 2 bắt đầu
4. **Không bao giờ parallel write** cùng file

### Escalation Path
```
Agent gặp vấn đề
  → Report orchestrator (Status: BLOCKED)
    → Orchestrator phân tích
      ├── Có thể tự giải quyết → Re-assign + context mới
      └── Cần human input → Escalate to user
```

## 4. Session Rules

### Context Budget
- Mỗi agent session: **max 30 minutes**
- Nếu task > 30 min → chia thành sub-tasks
- **Save progress** trước khi session timeout

### Artifacts
- Mỗi task output → 1 artifact file rõ ràng
- Artifact naming: `<type>-<NNNN>-<brief-name>.md`
- Không output vào stdout — luôn write file

## Đối tượng áp dụng
- **Tất cả agents** khi hoạt động trong Agent Team mode
- **Orchestrator** khi phân công và giám sát
