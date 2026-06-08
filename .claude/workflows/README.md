# FIS Workflows — Documentation

> **Tổng**: 16 workflow files (9 FIS Official + 7 Role-Specific) + DEV index
> **Nguồn**: https://ai.fis.com.vn/library?tab=workflows

## Workflows là gì?

Workflows là **quy trình từng bước** hướng dẫn AI agent thực hiện task từ đầu đến cuối.
Mỗi workflow kết hợp nhiều **skills** theo thứ tự chuẩn, đảm bảo output chất lượng production-grade.

## Cách dùng Workflow

```bash
# Đọc workflow trước khi bắt đầu
cat .claude/workflows/dev/01-new-project.md

# Thực thi từng step theo hướng dẫn
$ /fis:bootstrap "..."     # Step 1
$ /fis:plan "..."           # Step 2
$ /fis:craft "..."          # Step 3
$ /fis:test                 # Step 4
$ /fis:ship                 # Step 5
```

---

## 9 FIS Official Workflows

### Tổng quan

| # | Workflow | Slug | Time | Difficulty | Key Skills |
|---|----------|------|------|-----------|------------|
| 1 | **Bắt đầu dự án mới** | `new-project` | 4-6h | Medium | bootstrap, plan, craft, test, ship |
| 2 | **Làm việc dự án hiện có** | `existing-project` | 1-2h | Easy | scout, gkg, docs, repomix |
| 3 | **Thêm tính năng mới** | `adding-feature` | 2-4h | Medium | plan, craft, test, fix, ship |
| 4 | **Triển khai xác thực** | `implementing-auth` | 3-5h | Hard | security, craft, test, better-auth |
| 5 | **Tích hợp thanh toán** | `payment-integration` | 3-5h | Hard | craft, security, test, payment |
| 6 | **Sửa lỗi có hệ thống** | `fixing-bugs` | 1-3h | Medium | debug, fix, test |
| 7 | **Tái cấu trúc code** | `refactoring-code` | 2-4h | Medium | scout, craft, test |
| 8 | **Setup CI/CD Pipeline** | `ci-cd-setup` | 2-3h | Medium | ship, security, devops |
| 9 | **Docker hoá dự án** | `docker-compose` | 1-2h | Easy | ship, craft, devops |

### Files

| # | File | Lines | Sections |
|---|------|-------|----------|
| 1 | [01-new-project.md](dev/01-new-project.md) | 71 | ✅ Meta + 5 Steps + Tips |
| 2 | [02-existing-project.md](dev/02-existing-project.md) | 62 | ✅ Meta + 5 Steps + Tips |
| 3 | [03-adding-feature.md](dev/03-adding-feature.md) | 65 | ✅ Meta + 5 Steps + Tips |
| 4 | [04-implementing-auth.md](dev/04-implementing-auth.md) | 66 | ✅ Meta + 5 Steps + Tips |
| 5 | [05-payment-integration.md](dev/05-payment-integration.md) | 62 | ✅ Meta + 5 Steps + Tips |
| 6 | [06-fixing-bugs.md](dev/06-fixing-bugs.md) | 65 | ✅ Meta + 5 Steps + Tips |
| 7 | [07-refactoring-code.md](dev/07-refactoring-code.md) | 69 | ✅ Meta + 5 Steps + Tips |
| 8 | [08-ci-cd-setup.md](devops/08-ci-cd-setup.md) | 68 | ✅ Meta + 5 Steps + Tips |
| 9 | [09-docker-compose.md](devops/09-docker-compose.md) | 75 | ✅ Meta + 5 Steps + Tips |

---

## 7 Role-Specific Workflows

Bổ sung góc nhìn từng role trong SDLC — không xung đột với 9 FIS workflows.

### BA Workflows (2 files)

| File | Nội dung | Skills |
|------|----------|--------|
| [01-elicit-requirements.md](ba/01-elicit-requirements.md) | JTBD → Event Storming → Impact Mapping → PRD + DDD (12 bước, 4 phases) | elicit, ba, wireframe, three-amigos |
| [02-04-feature-docs-multimodal.md](ba/02-04-feature-docs-multimodal.md) | BA perspective trong Adding Feature + wireframe examples + multimodal input | plan, ba create, ba fsd, ba cr |

### PM Workflows (2 files)

| File | Nội dung | Skills |
|------|----------|--------|
| [01-kickoff-governance.md](pm/01-kickoff-governance.md) | PM governance 14 bước: Charter → Stakeholder → Risk → RAID → Status → Gate Review | pm (9 sub-commands), plan, docs |
| [02-03-new-project-docs.md](pm/02-03-new-project-docs.md) | PM perspective trong New Project + Checklist Phụ lục A FIS + docs ownership | pm, docs |

### QA Workflows (1 file)

| File | Nội dung | Skills |
|------|----------|--------|
| [01-06-all-workflows.md](qa/01-06-all-workflows.md) | 6 QA workflows: Test Strategy → Test Spec → Auth Test → API Test → Payment Test + Coverage Dashboard + Test Pyramid | tester, test, web-testing, security, scenario |

### SA Workflows (1 file)

| File | Nội dung | Skills |
|------|----------|--------|
| [01-10-all-workflows.md](sa/01-10-all-workflows.md) | 10 SA workflows: Design → Review → Feature Spec → Auth → API → Maintenance + C4 Diagram + Self-Review Checklist | sa design, sa ddd-tech, sa feature-spec, code-review, gkg |

### DevOps Role Workflows (1 file)

| File | Nội dung | Skills |
|------|----------|--------|
| [devops-role-workflows.md](devops/devops-role-workflows.md) | DevOps-2,3,4: Bug Fixing + Performance + Maintenance (DevOps perspective) + Incident Response + Monthly Checklist | devops, deploy, debug, fix, security-scan |

---

## Workflow Template chuẩn FIS

Mỗi FIS workflow phải có đủ structure:

```markdown
# <Title>

## Metadata
- ⏱ Time: X hours
- 📋 Steps: 5
- 🎯 Difficulty: Easy/Medium/Hard
- 📌 Version: v3.0
- 🔧 Key Skills: /fis:xxx, /fis:yyy
- 👥 Roles: PM, SA, DEV

## Mô tả
<Description>

## Steps

### Step 1: Khám phá ngữ cảnh (⏱ X mins)
$ /fis:xxx "..."

### Step 2: Lên kế hoạch chi tiết (⏱ X mins)
$ /fis:plan "..."

### Step 3: Thực thi với AI code-pair (⏱ X mins)
$ /fis:craft "..."

### Step 4: Kiểm thử & Review (⏱ X mins)
$ /fis:test && /fis:fix

### Step 5: Ship & Journal (⏱ X mins)
$ /fis:ship && /fis:journal

## Tips

### ✅ Best practices
### ❌ Anti-patterns
```

---

## 5-Step Pattern (Context → Plan → Execute → Test → Ship)

Tất cả 9 FIS workflows đều tuân theo pattern 5 bước chuẩn:

```
┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│  Step 1:    │   │  Step 2:    │   │  Step 3:    │   │  Step 4:    │   │  Step 5:    │
│  CONTEXT    │──▶│   PLAN      │──▶│  EXECUTE    │──▶│   TEST      │──▶│   SHIP      │
│  ⏱ 10-20m  │   │  ⏱ 15-20m  │   │  ⏱ 30-180m │   │  ⏱ 15-30m  │   │  ⏱ 5-15m   │
│             │   │             │   │             │   │             │   │             │
│ scout       │   │ plan        │   │ craft × N   │   │ test        │   │ ship        │
│ bootstrap   │   │             │   │             │   │ fix         │   │ journal     │
│ research    │   │             │   │             │   │ code-review │   │             │
└─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘
```

---

## Workflow Selection Guide

```
"Tôi muốn..."
  ├── Bắt đầu dự án mới          → WF-01 new-project
  ├── Tiếp tục dự án có sẵn      → WF-02 existing-project
  ├── Thêm feature mới           → WF-03 adding-feature ⭐
  ├── Implement auth/login        → WF-04 implementing-auth
  ├── Tích hợp thanh toán        → WF-05 payment-integration
  ├── Sửa bug                    → WF-06 fixing-bugs
  ├── Refactor code              → WF-07 refactoring-code
  ├── Setup CI/CD                → WF-08 ci-cd-setup
  └── Docker hoá project         → WF-09 docker-compose
```

---

## Directory Structure

```
.claude/workflows/
├── README.md                          ← Documentation (bạn đang đọc)
├── dev/                               ← 7 DEV FIS Workflows
│   ├── 00-index.md                    ← DEV workflow decision tree
│   ├── 01-new-project.md
│   ├── 02-existing-project.md
│   ├── 03-adding-feature.md
│   ├── 04-implementing-auth.md
│   ├── 05-payment-integration.md
│   ├── 06-fixing-bugs.md
│   └── 07-refactoring-code.md
├── devops/
│   ├── 08-ci-cd-setup.md
│   ├── 09-docker-compose.md
│   └── devops-role-workflows.md       ← DevOps role-specific
├── ba/                                ← BA role-specific
│   ├── 01-elicit-requirements.md
│   └── 02-04-feature-docs-multimodal.md
├── pm/                                ← PM role-specific
│   ├── 01-kickoff-governance.md
│   └── 02-03-new-project-docs.md
├── qa/                                ← QA role-specific
│   └── 01-06-all-workflows.md
└── sa/                                ← SA role-specific
    └── 01-10-all-workflows.md
```
