# Skill: /fis:kanban — Visual Plan Board

## Category: Planning
## Role: DEV

## Mô tả
Alias launcher for the fis-ai-kit plans dashboard. Use for visual plan boards, progress tracking, and quick navigation into plan files.

## Syntax
```
/fis:kanban "<input>"
```

---

# Skill: /fis:mintlify — Documentation with Mintlify

## Category: Docs
## Role: DEV

## Mô tả
Build and deploy documentation sites with Mintlify. Use when creating API docs, developer portals, or knowledge bases. Covers docs.json configuration, MDX components (Cards, Steps, Tabs, Accordions, CodeGroup, Callouts, Mermaid), page frontmatter, navigation structure (tabs, anchors, dropdowns, products, versions, languages), theming (7 themes), OpenAPI/AsyncAPI integration, AI features (llms.txt, MCP, skill.md), deployment (GitHub, GitLab, Vercel, Cloudflare, AWS), and CLI commands.

## Syntax
```
/fis:mintlify "<input>"
```

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Board update mất thời gian" | 2 phút update < 30 phút status meeting. Board = async communication. |
| "WIP limit không cần" | No WIP limit = context switching = reduced quality. Limit WIP. |

## Red Flags
- Board not updated (stale cards)
- No WIP limits (too many in-progress items)
- Done column never reviewed (no celebration/retro)

## Verification
- [ ] Board current (updated daily)
- [ ] WIP limits enforced
- [ ] Blocked items visible và escalated
