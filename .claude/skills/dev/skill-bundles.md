# Skill Bundles — Gói skill tự động

> Thay vì user nhớ từng `/fis:xxx`, orchestrator kích hoạt BUNDLE phù hợp.
> Mỗi bundle = danh sách skills chạy theo THỨ TỰ.

## Bundles

### 📖 Onboarding Bundle
```
Khi nào: Đọc project, tóm tắt kiến trúc, onboard team mới
Thứ tự:  scout → gkg → repomix (optional) → docs summary
```

| Step | Skill | Mục đích | Est. | Optional |
|------|-------|----------|------|----------|
| 1 | `/fis:scout` | Scan toàn bộ project structure | 10m | |
| 2 | `/fis:gkg` | Build knowledge graph dependencies | 15m | |
| 3 | `/fis:repomix` | Pack codebase cho AI context | 10m | ✓ |
| 4 | `/fis:docs` | Generate architecture summary | 10m | |

---

### 🎨 Frontend Bundle
```
Khi nào: Màn hình, component, responsive, giao diện
Thứ tự:  scout → frontend-design → frontend-development → ui-styling → test → code-review
```

| Step | Skill | Mục đích | Est. | Optional |
|------|-------|----------|------|----------|
| 1 | `/fis:scout` | Scan UI patterns hiện có | 10m | |
| 2 | `/fis:frontend-design` | Design system, tokens, theme | 15m | |
| 3 | `/fis:frontend-development` | Implement React/Vue components | 30-60m | |
| 4 | `/fis:ui-styling` | CSS, responsive, accessibility | 15m | |
| 5 | `/fis:test` | Component tests + visual regression | 10m | |
| 6 | `/fis:code-review` | Review UI code | 10m | |

---

### 🟢 Feature Bundle (phổ biến nhất)
```
Khi nào: Thêm tính năng mới
Thứ tự:  scout → plan → craft → test → code-review → ship (optional)
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:scout` | Hiểu codebase, tìm patterns liên quan | 10m |
| 2 | `/fis:plan` | Lập kế hoạch implementation chi tiết | 15m |
| 3 | `/fis:craft` | Implement code (loop per phase) | 30-120m |
| 4 | `/fis:test` | Chạy tests + coverage | 15m |
| 5 | `/fis:code-review` | Self-review trước ship | 10m |
| 6 | `/fis:ship` | Commit + optional deploy | 5m |

---

### 🔴 Bug Bundle
```
Khi nào: Sửa lỗi, fix bug, error
Thứ tự:  debug → fix → test → code-review
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:debug` | Phân tích log, tìm root cause | 15m |
| 2 | `/fis:fix` | Sửa bug có hệ thống | 20m |
| 3 | `/fis:test` | Regression test | 10m |
| 4 | `/fis:code-review` | Verify fix không gây side effect | 10m |

---

### 🔐 Auth Bundle
```
Khi nào: Đăng nhập, xác thực, OAuth, JWT, password
Thứ tự:  scout → security → plan → craft → test
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:scout` | Scan codebase cho auth patterns hiện có | 10m |
| 2 | `/fis:security` | Audit yêu cầu bảo mật | 10m |
| 3 | `/fis:plan` | Plan auth implementation | 15m |
| 4 | `/fis:better-auth` | Implement auth (Better Auth / JWT) | 30m |
| 5 | `/fis:craft` | Wire auth vào app | 30m |
| 6 | `/fis:test` | Test auth flows + edge cases | 15m |

---

### 💳 Payment Bundle
```
Khi nào: Thanh toán, Stripe, VNPay, payment gateway
Thứ tự:  scout → security → plan → craft → test
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:scout` | Scan payment patterns | 10m |
| 2 | `/fis:security` | Audit PCI compliance | 10m |
| 3 | `/fis:plan` | Plan payment integration | 15m |
| 4 | `/fis:payment-integration` | Implement gateway | 30m |
| 5 | `/fis:craft` | Wire payment vào app | 30m |
| 6 | `/fis:test` | Test payment flows + idempotency | 20m |

---

### 🗄️ Database Bundle
```
Khi nào: Schema, migration, query optimization, DB setup
Thứ tự:  databases → backend-development → test → code-review
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:databases` | Schema design / query optimization | 15m |
| 2 | `/fis:backend-development` | Implement data layer | 30m |
| 3 | `/fis:test` | Test queries + migrations | 10m |
| 4 | `/fis:code-review` | Review schema decisions | 10m |

---

### 🔄 Refactor Bundle
```
Khi nào: Tối ưu code, clean up, restructure
Thứ tự:  scout → plan → test (baseline) → craft → test (verify)
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:scout` | Map dependencies, find tech debt | 10m |
| 2 | `/fis:plan` | Plan safe refactoring steps | 15m |
| 3 | `/fis:test` | Run baseline tests (snapshot trước) | 5m |
| 4 | `/fis:craft` | Refactor code | 30-60m |
| 5 | `/fis:test` | Verify no regressions | 10m |

---

### 🚀 Ship Bundle
```
Khi nào: Deploy, release, go live
Thứ tự:  test → ship → deploy → journal
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:test` | Final test pass | 10m |
| 2 | `/fis:ship` | Commit + tag release | 5m |
| 3 | `/fis:deploy` | Deploy staging → production | 10m |
| 4 | `/fis:journal` | Log session | 5m |

---

### 🐳 Docker Bundle
```
Khi nào: Containerize, Docker setup
Thứ tự:  devops → craft → test → deploy
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:devops` | Generate Dockerfile + compose | 15m |
| 2 | `/fis:craft` | Customize config | 10m |
| 3 | `/fis:test` | Build + health check | 10m |
| 4 | `/fis:deploy` | Deploy containers | 5m |

---

### 🛠️ DevOps Bundle
```
Khi nào: "Docker", "CI/CD", "deploy", infrastructure chung
Thứ tự:  devops → ship → security-scan → deploy (optional)
```

| Step | Skill | Mục đích | Est. | Optional |
|------|-------|----------|------|----------|
| 1 | `/fis:devops` | IaC, Docker, K8s config | 15m | |
| 2 | `/fis:ship` | Package + tag release | 10m | |
| 3 | `/fis:security-scan` | Dependency + secrets scan | 5m | |
| 4 | `/fis:deploy` | Deploy staging → production | 10m | ✓ |

---

### 🔍 Explore Bundle
```
Khi nào: Hiểu codebase, onboard dự án mới
Thứ tự:  scout → gkg → docs
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:scout` | Scan project structure | 10m |
| 2 | `/fis:gkg` | Build knowledge graph | 15m |
| 3 | `/fis:docs` | Generate codebase summary | 10m |

---

### ✅ Review Bundle
```
Khi nào: Review code, check quality
Thứ tự:  code-review → test → security
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:code-review` | Adversarial code review | 15m |
| 2 | `/fis:test` | Run test suite | 10m |
| 3 | `/fis:security-scan` | Dependency + secrets scan | 5m |

---

### 📝 Docs Bundle
```
Khi nào: Viết docs, README, API docs
Thứ tự:  docs → copywriting → preview
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:docs` | Generate/update docs | 15m |
| 2 | `/fis:copywriting` | Polish README + descriptions | 10m |
| 3 | `/fis:preview` | Preview output | 5m |

---

### 🆕 New Project Bundle
```
Khi nào: Bắt đầu dự án mới từ đầu
Thứ tự:  bootstrap → plan → craft → test → ship
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:bootstrap` | Scaffold project structure | 10m |
| 2 | `/fis:plan` | Plan features + architecture | 20m |
| 3 | `/fis:craft` | Implement MVP | 60-120m |
| 4 | `/fis:test` | Test suite | 15m |
| 5 | `/fis:ship` | First release | 5m |

---

### 🧪 Test Bundle
```
Khi nào: Viết tests, tăng coverage
Thứ tự:  tester test-spec → tester test-cases → test
```

| Step | Skill | Mục đích | Est. |
|------|-------|----------|------|
| 1 | `/fis:tester test-spec` | Sinh TestSpec từ specs | 10m |
| 2 | `/fis:tester test-cases` | Sinh test scenarios | 15m |
| 3 | `/fis:test` | Run all tests + coverage | 10m |
