# Primary Workflow — Quy trình chính end-to-end

> **IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.

## End-to-End Orchestration

### Full SDLC Pipeline
```
┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  ELICIT  │──▶│  DESIGN  │──▶│   PLAN   │──▶│  BUILD   │──▶│   TEST   │──▶│   SHIP   │
│   (BA)   │   │   (SA)   │   │  (DEV)   │   │  (DEV)   │   │   (QA)   │   │ (DevOps) │
└──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
```

### Phase 1: Elicit & Analyze (BA)
```bash
$ /fis:elicit "JTBD interview cho <project>"        # Phỏng vấn stakeholder
$ /fis:ba create "PRD từ elicit notes"               # Viết PRD
$ /fis:wireframe "UI flow cho main screens"          # Wireframe
$ /fis:three-amigos:review-prd                       # Sign-off PRD
```

### Phase 2: Design & Architecture (SA)
```bash
$ /fis:sa design "TRD từ PRD approved"               # Sinh TRD
$ /fis:sa ddd-tech "DDD technical layer"             # DDD tech
$ /fis:sa feature-spec "Feature Spec cho DEV"        # FS
$ /fis:three-amigos:review-trd                       # Sign-off TRD
```

### Phase 3: Plan & Build (DEV)
```bash
$ /fis:plan "Implement theo FS. Chia phases."        # Lên kế hoạch
$ /fis:craft "Phase 1 — <module>"                    # Code phase 1
$ /fis:test                                          # Test phase 1
$ /fis:craft "Phase 2 — <module>"                    # Code phase 2
$ /fis:test                                          # Test phase 2
```

### Phase 4: Test & Review (QA)
```bash
$ /fis:tester test-spec "TestSpec từ FS"             # Sinh TestSpec
$ /fis:tester test-cases "Test scenarios"            # Sinh test cases
$ /fis:test --coverage                               # Run + coverage
$ /fis:code-review --pending                         # Code review
```

### Phase 5: Ship & Deploy (DevOps)
```bash
$ /fis:ship official                                 # Ship
$ /fis:deploy staging                                # Deploy staging
$ /fis:deploy production --strategy=canary           # Deploy production
$ /fis:journal "Session: <summary>"                  # Journal
```

### Phase 6: Govern & Report (PM)
```bash
$ /fis:pm status-report                              # Weekly status
$ /fis:pm lessons-learned                            # Lessons learned
$ /fis:pm retro                                      # Sprint retro
```

## Chọn Workflow theo Task

| Task | Workflow | Skills chính |
|------|----------|-------------|
| Dự án mới | WF-01 | bootstrap, plan, craft, test, ship |
| Dự án hiện có | WF-02 | scout, gkg, docs |
| Thêm feature | WF-03 ⭐ | plan, craft, test, fix, ship |
| Auth/Login | WF-04 | security, craft, test |
| Payment | WF-05 | craft, security, test |
| Fix bugs | WF-06 | debug, fix, test |
| Refactor | WF-07 | scout, craft, test |
| CI/CD | WF-08 | ship, security |
| Docker | WF-09 | ship, craft |

## Quy tắc chính
1. **Luôn Plan trước Build** — skip plan = 3x debug time
2. **Three Amigos trước Code** — BA + SA + QA align
3. **Test after every Phase** — không tích lũy technical debt
4. **Ship small, ship often** — canary deploy, không big-bang
