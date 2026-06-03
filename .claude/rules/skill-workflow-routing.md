# Skill Workflow Routing — Định tuyến skill theo workflow

> Khi orchestrating tác vụ nhiều bước, cân nhắc thứ tự workflow dưới đây.
> Skills được sắp xếp theo trình tự thực thi thông thường.

## Core Development Flow

### 1. New Feature (most common)
```
scout → plan → craft → test → fix → code-review → ship → journal
```

### 2. Bug Fix
```
debug → fix → test → code-review → ship → journal
```

### 3. Investigation / Research
```
scout → gkg → research → brainstorm → plan
```

### 4. Refactoring
```
scout → plan → test (baseline) → craft → test (verify) → code-review → ship
```

### 5. New Project
```
bootstrap → plan → craft × N → test → ship → journal
```

## SDLC Cross-Role Flow

### Full Pipeline (multi-role)
```
BA:     elicit → ba create → wireframe → three-amigos:review-prd
SA:     sa design → sa ddd-tech → sa feature-spec → three-amigos:review-trd
DEV:    plan → craft × N → test
QA:     tester test-spec → tester test-cases → test → tester bug
DevOps: devops → deploy → debug (if issues)
PM:     pm status-report → pm lessons-learned → pm retro
```

## Routing Rules

### Rule 1: Plan Before Craft
```
❌ WRONG:  /fis:craft "implement feature X"
✅ RIGHT:  /fis:plan "feature X" → /fis:craft "phase 1 of plan"
```
**Exception**: trivial fixes (< 10 LOC) can skip plan.

### Rule 2: Test After Every Craft
```
❌ WRONG:  /fis:craft phase-1 → /fis:craft phase-2 → /fis:test
✅ RIGHT:  /fis:craft phase-1 → /fis:test → /fis:craft phase-2 → /fis:test
```

### Rule 3: Scout Before Craft (existing projects)
```
❌ WRONG:  /fis:craft "add feature" (without understanding codebase)
✅ RIGHT:  /fis:scout "find patterns for feature" → /fis:plan → /fis:craft
```

### Rule 4: Review Before Ship
```
❌ WRONG:  /fis:craft → /fis:ship
✅ RIGHT:  /fis:craft → /fis:test → /fis:code-review → /fis:ship
```

### Rule 5: Security for Auth/Payment
```
❌ WRONG:  /fis:craft "implement auth"
✅ RIGHT:  /fis:security "audit requirements" → /fis:plan → /fis:craft → /fis:security "verify"
```

## Parallel Execution

Một số skills có thể chạy song song:
```
Parallel Group 1 (independent):
  /fis:tester test-spec    ← QA
  /fis:sa design           ← SA
  (cả hai đọc PRD, không conflict)

Parallel Group 2 (independent):
  /fis:test --unit         ← Unit tests
  /fis:security-scan       ← Security scan
  (cả hai read-only, không conflict)
```

## Anti-patterns

| Anti-pattern | Hậu quả | Cách sửa |
|-------------|---------|----------|
| Ship without test | Regression | Rule 2: test after craft |
| Craft without plan | Scope creep | Rule 1: plan before craft |
| Fix without debug | Fix sai root cause | Use `/fis:debug` first |
| Deploy without review | Production bugs | Rule 4: review before ship |
