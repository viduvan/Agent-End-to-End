# Skill: /fis:ui-styling — UI Styling với shadcn/ui

> UI đẹp, accessible với shadcn/ui components (Radix UI + Tailwind), utility-first styling và hệ thống thiết kế hình ảnh dựa trên canvas.

## Khi nào dùng
- Xây dựng accessible components (Dialog, Dropdown, Form, Table, Navigation)
- Styling chi tiết: responsive, animations, layout
- Cần dark mode với design tokens
- Canvas-based visual design: posters, branding, compositions
- Form validation với error messages
- Data tables với sorting, filtering, pagination

## Khi KHÔNG dùng
- Phạm vi cross-cutting lớn → dùng `/fis:plan` trước
- Yêu cầu chưa rõ → dùng `/fis:scout` trước

## Agent
UI/UX Designer, Fullstack Developer

## Khả năng cốt lõi
- Xây dựng accessible components: Dialog, Dropdown, Form, Table, Navigation với ARIA đầy đủ
- Responsive layouts mobile-first với Tailwind breakpoints (sm/md/lg/xl)
- Dark mode với prefix `dark:` và design tokens (màu sắc, spacing, typography)
- Canvas-based visual design: posters, tài liệu thương hiệu, compositions
- Form validation với error messages và accessible labels
- Data tables với sorting, filtering, pagination

## Prompt mẫu

### Login form
```
/fis:ui-styling
"Add a login form with email/password validation using shadcn form components"
```

### Responsive dashboard
```
/fis:ui-styling
"Create a responsive dashboard with cards, buttons, and dark mode support"
```

### Data table
```
/fis:ui-styling
"Build a data table with sorting, filtering, and pagination"
```

### Canvas poster
```
/fis:ui-styling
"Design a product announcement poster with brand colors and typography"
```

## Nguyên tắc
- Dùng shadcn/ui (Radix UI + Tailwind CSS) cho accessible components
- Mobile-first responsive: sm → md → lg → xl
- Dark mode từ đầu với `dark:` prefix và CSS variables
- ARIA attributes đầy đủ cho mọi interactive element

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Accessibility không cần cho MVP" | Accessibility = usability. ARIA labels + focus states mất 5 phút, lawsuit tránh được mất hàng nghìn $. |
| "Custom CSS đủ rồi" | shadcn/ui = Radix UI (accessible primitives) + Tailwind. Custom CSS = reinvent wheel mà không accessible. |
| "Dark mode làm sau" | Dark mode sau = đổi toàn bộ hardcoded colors. Design tokens (CSS vars) từ đầu. |

## Red Flags
- Hardcoded colors thay vì CSS variables/design tokens
- Missing ARIA labels trên interactive elements
- Không responsive (chỉ test desktop)
- Inline styles thay vì utility classes

## Verification
- [ ] Components có ARIA attributes đầy đủ
- [ ] Responsive breakpoints (sm/md/lg/xl) tested
- [ ] Dark mode hoạt động (`dark:` prefix)
- [ ] Design tokens qua CSS variables
- [ ] Form validation hiển thị error messages
- [ ] Keyboard navigation hoạt động
