# Skill: /ckm:design — Thiết Kế Brand Identity & Visual Assets

> Thiết kế brand identity, logo, banner và asset hình ảnh. Sinh design document markdown từ requirements.

## Khi nào dùng
- Thiết kế brand identity (logo, color palette, typography)
- Tạo banner, poster, marketing assets
- Sinh design spec document từ requirements
- Figma-like specification trong markdown

## Agent
UI/UX Designer

## Khả năng cốt lõi
- Design spec document (components, states, interactions)
- Figma-like specification in markdown
- Asset requirements list
- Brand identity guidelines

## Prompt mẫu

### Brand identity
```
/ckm:design
"Create brand identity for tech startup: logo concept, color palette, typography system, usage guidelines."
```

### Design spec
```
/ckm:design
"Generate design spec for dashboard feature: component list, states, interactions, responsive breakpoints."
```

### Marketing assets
```
/ckm:design
"Design banner for product launch: 1200x628 for social media, 728x90 for web ads."
```

## Nguyên tắc
- Design spec trước code — document components, states, interactions
- Brand consistency: dùng design tokens cho mọi asset
- Asset list đầy đủ trước khi implement

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Design system overkill cho 3 pages" | 3 pages today, 30 tomorrow. Design tokens = consistency from start. |
| "Copy CSS từ component library" | Understand CSS, not just copy. Customization breaks when you don't understand. |

## Red Flags
- Inconsistent spacing/colors across pages
- No design tokens (magic numbers everywhere)
- Components not reusable
- No dark mode consideration

## Verification
- [ ] Design tokens defined (colors, spacing, typography)
- [ ] Components reusable across pages
- [ ] Consistent visual language
- [ ] Dark/light mode supported (or planned)
