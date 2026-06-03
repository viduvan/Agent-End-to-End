# Natural Language DEV Routing — Bảng định tuyến tự nhiên

> Rule này dành cho **dev-orchestrator** đọc, KHÔNG phải user.
> User chỉ cần nói tự nhiên, orchestrator tự map theo bảng dưới.

## Routing Table

### Onboarding & Explore

| Người dùng nói | Intent | Workflow | Agents | Skill Bundle |
|----------------|--------|----------|--------|-------------|
| "đọc project này" / "tóm tắt kiến trúc" / "onboard" | `onboarding` | `dev/02-existing-project` | researcher → planner | Onboarding Bundle |
| "bắt đầu project mới" / "init…" / "bootstrap…" | `new_project` | `dev/01-new-project` | planner → fullstack-developer | New Project Bundle |

### Feature Development

| Người dùng nói | Intent | Workflow | Agents | Skill Bundle |
|----------------|--------|----------|--------|-------------|
| "thêm tính năng…" / "implement…" / "xây chức năng…" | `add_feature` | `dev/03-adding-feature` | planner → fullstack-developer → code-reviewer | Feature Bundle |
| "màn hình" / "component" / "responsive" / "giao diện" | `frontend_ui` | `dev/03-adding-feature` | ui-ux-designer → fullstack-developer | Frontend Bundle |

### Bug & Fix

| Người dùng nói | Intent | Workflow | Agents | Skill Bundle |
|----------------|--------|----------|--------|-------------|
| "lỗi 500" / "test fail" / "không chạy" / "crash" | `bug_fix` | `dev/06-fixing-bugs` | debugger → fullstack-developer → code-reviewer | Bug Bundle |
| "làm gọn" / "tách service" / "giảm complexity" | `refactor` | `dev/07-refactoring-code` | planner → fullstack-developer → code-reviewer | Refactor Bundle |

### Specialized

| Người dùng nói | Intent | Workflow | Agents | Skill Bundle |
|----------------|--------|----------|--------|-------------|
| "login" / "JWT" / "OAuth" / "reset password" | `auth` | `dev/04-implementing-auth` | fullstack-developer → code-reviewer | Auth Bundle |
| "thanh toán" / "webhook" / "subscription" | `payment` | `dev/05-payment-integration` | fullstack-developer → code-reviewer | Payment Bundle |
| "schema" / "migration" / "query chậm" | `database` | database flow | database-admin → fullstack-developer | Database Bundle |

### DevOps & Ship

| Người dùng nói | Intent | Workflow | Agents | Skill Bundle |
|----------------|--------|----------|--------|-------------|
| "Docker" / "CI/CD" / "deploy" | `devops` | `devops/08-ci-cd-setup` | devops-sre | DevOps Bundle |

### Review & Quality

| Người dùng nói | Intent | Workflow | Agents | Skill Bundle |
|----------------|--------|----------|--------|-------------|
| "review" / "kiểm tra PR" / "trước commit" | `code_review` | review gate | code-reviewer | Review Bundle |
| "test" / "viết test" / "coverage" | `testing` | test phase | tester-qa | Test Bundle |
| "viết docs" / "README" / "API docs" | `documentation` | docs phase | docs-manager → copywriter | Docs Bundle |

### Research & Unknown

| Người dùng nói | Intent | Workflow | Agents | Skill Bundle |
|----------------|--------|----------|--------|-------------|
| "research" / "thử nghiệm" / "POC" / "evaluate" | `research_spike` | custom | researcher → planner | Explore Bundle |
| *(không match pattern nào)* | `unknown` | — | — | Fallback → hỏi user |

---

## Confidence Scoring

### HIGH — Route thẳng, không hỏi
- Keyword chính xác match trong prompt
- Intent rõ ràng, không mơ hồ
- Ví dụ: "Sửa lỗi API trả 500" → `bug_fix` (HIGH)

### MEDIUM — Route nhưng xác nhận ngắn
- Semantic match (ý nghĩa tương tự nhưng không chính xác keyword)
- 1 câu xác nhận: "Tôi hiểu đây là [intent]. Đúng không?"
- Ví dụ: "Cái form này hơi xấu" → `frontend_ui` (MEDIUM)

### LOW — Hỏi lại tối đa 3 câu
- Prompt mơ hồ, không rõ intent
- Hỏi: mục tiêu + phạm vi + kỳ vọng output
- Ví dụ: "Cải thiện cái này đi" → `unknown` (LOW)

---

## Fallback Strategy

Khi prompt mơ hồ (confidence LOW / `unknown`):

```
Bước 1: Hỏi mục tiêu
  "Bạn muốn thêm feature, sửa lỗi, hay cải thiện code hiện có?"

Bước 2: Hỏi phạm vi (nếu cần)
  "Phạm vi là 1 file, 1 module, hay toàn project?"

Bước 3: Hỏi kỳ vọng output (nếu cần)
  "Bạn muốn code chạy được, hay plan trước rồi review?"
```

Sau 3 câu vẫn chưa rõ → suggest user mô tả cụ thể hơn.

---

## Multi-intent Handling

Khi prompt có nhiều intent (ví dụ: "thêm feature auth rồi deploy luôn"):
1. Tách thành sub-tasks theo dependency
2. Xử lý theo thứ tự: feature → test → deploy
3. Báo cáo từng bước

---

## Vietnamese-English Mapping

| Tiếng Việt | English | Intent |
|------------|---------|--------|
| đọc project / tóm tắt | read / summarize | `onboarding` |
| thêm tính năng | add feature | `add_feature` |
| sửa lỗi | fix bug | `bug_fix` |
| tối ưu / làm gọn | optimize / refactor | `refactor` |
| đăng nhập | login / auth | `auth` |
| thanh toán | payment | `payment` |
| giao diện / màn hình | UI / screen | `frontend_ui` |
| triển khai | deploy | `devops` |
| kiểm thử | test | `testing` |
| đánh giá / kiểm tra | review | `code_review` |
| thử nghiệm | research / spike | `research_spike` |
