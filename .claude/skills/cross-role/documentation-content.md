# Skill: /fis:docs — Documentation Management

## Khi nào dùng
Init, sync, export project documentation.

## Agent
Docs Manager

## Capabilities
- `init`: Sinh 5 docs khung (project-overview, system-architecture, code-standards, codebase-summary, development-roadmap)
- `sync`: Cập nhật docs từ code changes
- `export`: Xuất markdown → .docx cho stakeholder
- Auto-detect stale docs

---

# Skill: /fis:docs-seeker — Documentation Search

## Khi nào dùng
Tìm kiếm trong documentation hiện có.

## Capabilities
- Full-text search across docs/
- Semantic search (keyword + context)
- Cross-reference finder
- Dead link detection

---

# Skill: /fis:llms — LLM-Friendly Documentation

## Khi nào dùng
Sinh documentation tối ưu cho LLM consumption (llms.txt).

## Capabilities
- Generate llms.txt (project summary cho AI)
- API documentation in AI-readable format
- Context-optimized README
- Token-efficient documentation

---

# Skill: /fis:copywriting — Content & Copy

## Khi nào dùng
README, marketing copy, release notes, SEO content.

## Agent
Copywriter

## Capabilities
- README generation (badges, install, usage, API)
- Release notes (user-facing, non-technical)
- Marketing landing page copy
- SEO-optimized descriptions
- Error messages (clear, actionable)

---

# Skill: /fis:preview — Preview Generated Content

## Khi nào dùng
Preview markdown, HTML, diagrams before commit.

## Capabilities
- Markdown rendering preview
- Mermaid diagram validation
- HTML preview in browser
- Table formatting check

---

# Skill: /fis:markdown-novel-viewer — Long-Form Markdown Reader

## Khi nào dùng
Read/navigate large markdown documents.

## Capabilities
- TOC generation
- Section navigation
- Search within document
- Word/character count

---

# Skill: /fis:mermaidjs-v11 — Mermaid Diagram Generation

## Khi nào dùng
Generate Mermaid v11 diagrams.

## Capabilities
- Flowchart, sequence, class, ER diagrams
- Gantt charts
- Mindmaps
- C4 architecture diagrams
- Syntax validation

---

# Skill: /fis:excalidraw — Excalidraw Diagram Generation

## Khi nào dùng
Generate Excalidraw-style hand-drawn diagrams.

## Capabilities
- Architecture diagrams (informal style)
- Whiteboard-style brainstorming
- Export to .excalidraw.json
- Embeddable in markdown

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Code tự document" | Code nói WHAT. Docs nói WHY + HOW TO USE + ARCHITECTURE. |
| "Docs viết sau khi stable" | "Stable" = never. Write docs as you go. |
| "README đủ rồi" | README = entry point. Architecture, API, ADR docs cũng cần. |

## Red Flags
- Docs outdated (not matching current code)
- No architecture documentation
- API docs incomplete or auto-generated without review
- Onboarding docs missing (new team member cannot self-serve)

## Verification
- [ ] Docs match current code/behavior
- [ ] Architecture documented (C4 or equivalent)
- [ ] API docs complete và reviewed
- [ ] Onboarding path clear (README → setup → contribute)
