# Skill: /fis:cook — Structured Code Implementation

## Category: Coding
## Role: DEV

## Mô tả
Implement features, plans, and fixes with structured workflow. Use for feature development, plan execution, code implementation pipelines.

## Syntax
```
/fis:cook "<input>"
```

---

# Skill: /fis:stitch — AI Design-to-Code Pipeline

## Category: Design
## Role: DEV

## Mô tả
AI design generation with Google Stitch. Generate UI designs from text prompts, export Tailwind/HTML/DESIGN.md, orchestrate design-to-code pipeline. Use for rapid prototyping, UI generation, design exploration.

## Syntax
```
/fis:stitch "<input>"
```

---

# Skill: /fis:show-off — Showcase Page Generation

## Category: Docs
## Role: DEV

## Mô tả
Create stunning self-contained HTML pages to showcase work. Use for demos, visual presentations, interactive showcases.

## Syntax
```
/fis:show-off "<input>"
```

---

# Skill: /fis:xia — Cross-Repo Feature Porting

## Category: Misc
## Role: DEV

## Mô tả
Extract, compare, port, or adapt a feature from a GitHub repository or local repo path into the current project. Use when the user wants to copy behavior from another repo, study how another codebase implements something, compare implementations, or rewrite a feature in the local stack. Triggers on: 'port from', 'copy from repo', 'like how X does it', 'clone feature from', 'adapt from'.

## Syntax
```
/fis:xia "<input>"
```

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Quick implementation, structure later" | Structure = quality. Later = tech debt. Build structured from start. |
| "Cook pipeline overkill cho simple task" | Pipeline ensures completeness. Simple task = simple pipeline, not no pipeline. |

## Red Flags
- Implementation without clear phases
- No tests between implementation steps
- Skip verification steps

## Verification
- [ ] Implementation phases defined
- [ ] Tests after each phase
- [ ] Verification checklist completed
