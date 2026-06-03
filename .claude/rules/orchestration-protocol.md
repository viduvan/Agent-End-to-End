# Orchestration Protocol — Giao thức điều phối subagent

> Khi khởi tạo subagent qua công cụ Task, **LUÔN LUÔN** đính kèm protocol này vào prompt.

## 1. Delegation Context (MANDATORY)

Khi spawn subagent, orchestrator PHẢI đính kèm:

```markdown
## Delegation Context
- **Task ID**: <unique-id>
- **Parent Agent**: <orchestrator/agent-name>
- **Project Root**: <absolute-path>
- **Active Plan**: <path-to-plan.md>
- **Locale**: vi-VN
- **Trust Passphrase**: <session-specific>
- **Allowed Tools**: [Glob, Grep, Read, Edit, Write, Bash]
- **Blocked Paths**: [node_modules/, dist/, .env]
- **Time Budget**: <max-minutes>
- **Output Format**: <markdown/json/code>
```

### Ví dụ delegation:
```
/spawn fullstack-developer

## Delegation Context
- Task ID: TASK-2026-0601-001
- Parent Agent: orchestrator
- Project Root: /home/user/project
- Active Plan: plans/2026-06-01/plan.md
- Phase: Phase 2 - Database Schema
- Allowed Tools: [Glob, Grep, Read, Edit, Write, Bash]
- Time Budget: 30 minutes
- Output: Code + test files
```

## 2. Subagent Status Protocol

Mỗi subagent PHẢI report status theo format:

```markdown
## Status Report
- **Status**: IN_PROGRESS | COMPLETED | BLOCKED | FAILED
- **Progress**: X/Y tasks done
- **Files Changed**: [list]
- **Tests**: PASS/FAIL (X/Y)
- **Blockers**: [if any]
- **Next Action**: [what orchestrator should do]
```

### Status flow:
```
CREATED → IN_PROGRESS → COMPLETED
                      → BLOCKED (cần input từ user/orchestrator)
                      → FAILED (error, rollback needed)
```

## 3. Context Isolation Principle

### PHẢI tuân thủ:
- ✅ Subagent chỉ đọc/ghi files trong scope được giao
- ✅ Subagent không đọc files của subagent khác đang chạy
- ✅ Mỗi subagent có branch riêng (nếu dùng git worktree)
- ✅ Output phải self-contained (không phụ thuộc context parent)

### KHÔNG được:
- ❌ Subagent tự spawn sub-subagent (max depth = 1)
- ❌ Subagent modify files ngoài scope assignment
- ❌ Subagent đọc `.env` hoặc secrets (privacy-block hook)
- ❌ Subagent push/deploy trực tiếp (chỉ orchestrator được deploy)

## 4. Handoff Protocol

Khi subagent hoàn thành, handoff cho agent tiếp theo:

```
Agent A (completed)
  → Output: artifacts/output-A.md
    → Orchestrator validates
      → Agent B receives:
        - Delegation Context
        - Output từ Agent A
        - Scope assignment mới
```

## Đối tượng áp dụng
- **Tất cả subagents** được tạo qua Task tool
- **Orchestrator** agent khi spawn subagent
