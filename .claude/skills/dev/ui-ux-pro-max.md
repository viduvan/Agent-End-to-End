# Skill: /fis:ui-ux-pro-max — Premium UI/UX Generation

> Trí tuệ thiết kế UI/UX cho web và mobile. 50+ styles, 161 bảng màu, 57 cặp font, 161 loại sản phẩm, 99 hướng dẫn UX và 25 loại chart trên 10 stacks.

## Khi nào dùng
- Tạo UI premium, production-ready với micro-interactions
- Build landing pages, dashboards, e-commerce, SaaS, portfolio, admin panels
- Cần style guide (colors, fonts, effects) theo loại sản phẩm
- Review UI code cho accessibility và mobile responsiveness
- Design mobile app onboarding screens

## Khi KHÔNG dùng
- Phạm vi cross-cutting lớn → dùng `/fis:plan` trước
- Yêu cầu chưa rõ → dùng `/fis:scout` trước

## Agent
UI/UX Designer

## Input
- Mô tả task UI/UX + loại sản phẩm (SaaS, fintech, healthcare, beauty, e-commerce)
- Tech stack target (react, nextjs, vue, svelte, swiftui, react-native, flutter, html-tailwind)

## Output
- Style guide (màu, hiệu ứng, fonts, framework recommendations)
- Font pairings với Google Fonts imports sẵn dùng
- Bảng màu (Primary, Secondary, CTA, Background, Text, Border)
- Page structure patterns
- Chart recommendations (cho dashboards)
- Stack-specific code

## Khả năng cốt lõi
- Truy xuất 50 UI styles phù hợp loại sản phẩm (glassmorphism, neumorphism, minimal, bold...)
- Chọn palette từ 21 bảng màu với Primary, Secondary, CTA, Background, Text, Border
- Ghép 50 font pairings với Google Fonts imports sẵn sàng dùng
- Đề xuất 20 loại chart phù hợp cho dashboards và data viz
- Tạo stack-specific code cho 8 frameworks
- Audit UI theo quality rules: icons, interactions, light/dark mode, layout

## Stacks được hỗ trợ
`html-tailwind` (mặc định) · `react` · `nextjs` · `vue` · `svelte` · `swiftui` · `react-native` · `flutter`

## Prompt mẫu

### Landing Page mới
Đối tượng: Startup founder ra mắt sản phẩm
```
/fis:ui-ux-pro-max
"Build a landing page for my AI writing tool targeting content creators. Use glassmorphism style, include hero, features, pricing, and testimonials sections."
```

### Dashboard redesign
Đối tượng: Developer cải thiện công cụ nội bộ
```
/fis:ui-ux-pro-max
"Redesign our analytics dashboard with dark mode. Show user metrics, revenue charts, and activity feed. React + Tailwind."
```

### E-commerce Product Page
Đối tượng: Agency xây dựng cho khách hàng
```
/fis:ui-ux-pro-max
"Create a luxury fashion product page with image gallery, size selector, reviews, and related products. Minimalist aesthetic."
```

### Mobile App Onboarding
Đối tượng: Mobile developer cải thiện UX
```
/fis:ui-ux-pro-max
"Design 4 onboarding screens for a fitness app. Vibrant colors, progress indicator, skip option. React Native."
```

### UI Code Review
Đối tượng: Tech lead đảm bảo chất lượng
```
/fis:ui-ux-pro-max
"Review this checkout form for accessibility issues and mobile responsiveness. Check contrast, focus states, and error handling."
```

## Quality Rules

### Icons & Phần tử hình ảnh
- Chỉ SVG icons (Heroicons, Lucide) — không dùng emojis
- Hover states ổn định với chuyển đổi màu/độ mờ
- Logo thương hiệu đã xác minh từ Simple Icons

### Tương tác
- `cursor-pointer` trên tất cả phần tử có thể click
- `transition-colors duration-200` để phản hồi mượt mà
- Visible focus states cho điều hướng bàn phím

### Light/Dark Mode
- Glass cards: `bg-white/80` hoặc cao hơn ở light mode
- Text contrast: `#0F172A` (slate-900) cho body
- Borders: `border-gray-200` hiển thị ở light mode

### Layout
- Floating navbar với khoảng cách `top-4 left-4 right-4`
- Responsive tại 320px, 768px, 1024px, 1440px
- Không có horizontal scroll trên mobile

## Checklist trước khi giao
- [ ] Không dùng emoji icons
- [ ] Icon set nhất quán
- [ ] `cursor-pointer` trên các phần tử clickable
- [ ] Transitions 150-300ms
- [ ] Text contrast 4.5:1+
- [ ] Cả light/dark modes đã được kiểm tra
- [ ] Responsive breakpoints
- [ ] Alt text trên hình ảnh
- [ ] Form labels có mặt

## Nguyên tắc
- Đề cập loại sản phẩm (SaaS, e-commerce, healthcare...) để có khuyến nghị tùy chỉnh
- Chỉ định stack để nhận patterns đặc thù framework
- Cam kết với 1 style — không trộn nhiều aesthetic

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Design system overkill cho 3 pages" | 3 pages today, 30 tomorrow. Design tokens = consistency from start. |
| "Copy CSS từ component library" | Understand CSS, not just copy. Customization breaks when you don't understand. |
| "Emoji icons đủ dùng cho prototype" | Emoji render khác nhau giữa OS. SVG icons nhất quán, scalable. |
| "Dark mode làm sau" | Dark mode sau = refactor toàn bộ colors. Plan từ đầu với CSS variables. |

## Red Flags
- Dùng emoji thay SVG icons
- Inconsistent spacing/colors across pages
- Không có cursor-pointer trên clickable elements
- Missing focus states cho keyboard navigation
- Không test cả light/dark mode

## Verification
- [ ] SVG icons nhất quán (Heroicons/Lucide)
- [ ] Design tokens (colors, spacing, typography) defined
- [ ] Components reusable across pages
- [ ] Dark/light mode đã test
- [ ] Responsive tại tất cả breakpoints
- [ ] Accessibility: contrast 4.5:1+, focus states, alt text
