# Skill: /fis:cook — Structured Implementation Engine

> Triển khai feature, plan, fix theo workflow có cấu trúc. Structured code implementation với quality gates.

## Khi nào dùng
- Implement feature mới theo plan
- Fix bugs theo structured workflow
- Prototype nhanh với `--fast --no-test`
- Parallel multi-feature implementation

## Agent
Fullstack Developer (Senior Engineer)

## Input
- Plan file hoặc prompt trực tiếp
- Codebase context (từ `/fis:scout`)

## Output
- Implemented code với tests
- Status tracking: In Progress → Review → Done

## Workflow Modes
- **Feature**: Full workflow (plan → scout → implement → test → review → commit)
- **Fast prototype**: `--fast --no-test` skip tests cho rapid iteration
- **Parallel**: `--parallel` multiple features cùng lúc

## Prompt mẫu

### Feature mới
```
/fis:cook add user authentication to the app
```

### Từ plan file
```
/fis:cook plans/2026-06-15-notifications/phase-01.md --auto
```

### Fast prototype
```
/fis:cook prototype new UI design --fast --no-test
```

### Parallel multi-feature
```
/fis:cook add search, filters, and pagination --parallel
```

## Quy trình tổng quan
1. Scout trước (BẮT BUỘC) → tìm service/pattern có sẵn
2. Implement theo plan → 1 phase = 1 commit
3. Test ngay → PASS? commit → tiếp slice tiếp theo
4. Self-review → `/fis:code-review --pending`
5. Commit → conventional commits format

## Quality Gates (luôn enforce)
- Scout TRƯỚC implement (reuse > build mới)
- Test mỗi slice (Prove-It Loop: code → test → commit)
- Self-review trước khi gửi
- Không craft 2 phases cùng lúc (trừ git worktree)

## So sánh /fis:cook vs /fis:craft

| | `/fis:cook` | `/fis:craft` |
|---|---|---|
| Focus | End-to-end workflow | Code implementation only |
| Input | Plan files + prompts | Code context + prompts |
| Quality gates | Built-in (scout→test→review) | Manual |
| Modes | Feature, Fast, Parallel | Single |

## Nguyên tắc
- Scout trước Cook — reuse > build mới
- 1 phase = 1 PR = 1 commit có nghĩa
- Test ngay sau implement — không để technical debt
- Self-review trước khi gửi

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Test sau khi code xong" | Code xong = 500 LOC chưa test. Bug ở dòng 50 làm sai 450 dòng còn lại. |
| "Scout mất thời gian" | 10 phút scout tiết kiệm 2 giờ duplicate code. |
| "Framework tôi biết rõ rồi" | Training data outdated. Verify API trước khi dùng. |

## Red Flags
- Cook > 200 LOC mà chưa chạy test nào
- Cook không scout trước
- Mix refactoring với feature trong 1 commit
- Skip self-review

## Verification
- [ ] Scout đã chạy trước (có reuse report)
- [ ] Mỗi slice đã qua prove-it loop
- [ ] Self-review xong (`/fis:code-review --pending`)
- [ ] Commit message theo conventional commits
