# Skill: /fis:web-design-guidelines — Web Interface Guidelines

> Review code UI theo chuẩn Web Interface Guidelines. WCAG 2.1 accessibility audit, SEO, Core Web Vitals, typography scales, color theory.

## Khi nào dùng
- Review UI code cho accessibility (WCAG 2.1)
- SEO audit và optimization
- Core Web Vitals optimization (LCP, FID, CLS)
- Typography scales và spacing systems
- Color theory và palette generation

## Agent
UI/UX Designer, Code Reviewer

## Khả năng cốt lõi
- WCAG 2.1 accessibility audit
- SEO best practices enforcement
- Core Web Vitals optimization
- Typography scales + spacing systems
- Color theory + palette generation

## Prompt mẫu

### Accessibility audit
```
/fis:web-design-guidelines
"Audit this page for WCAG 2.1 AA compliance. Check contrast, focus states, alt text, semantic HTML."
```

### SEO review
```
/fis:web-design-guidelines
"Review SEO: meta tags, heading hierarchy, semantic HTML, structured data, sitemap."
```

### Core Web Vitals
```
/fis:web-design-guidelines
"Optimize Core Web Vitals: reduce LCP, fix CLS shifts, improve FID."
```

### Typography system
```
/fis:web-design-guidelines
"Create a typography scale system with proper line heights and spacing for this project."
```

## Nguyên tắc
- Accessibility là requirement, không phải feature
- SEO = kỹ thuật, không phải marketing
- Core Web Vitals = user experience metrics

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Accessibility là nice-to-have" | WCAG compliance là legal requirement ở nhiều nước. Và nó = better UX cho TẤT CẢ users. |
| "SEO chỉ cần cho marketing site" | Semantic HTML, proper headings, meta tags = better indexing + better accessibility. |
| "Performance optimize sau" | Core Web Vitals ảnh hưởng SEO ranking. Optimize từ đầu dễ hơn refactor sau. |

## Red Flags
- Contrast ratio < 4.5:1 cho text
- Missing alt text trên images
- Heading hierarchy sai (h1 → h3 skip h2)
- No semantic HTML (div soup)
- CLS > 0.1 (layout shifts)

## Verification
- [ ] WCAG 2.1 AA compliance
- [ ] All images have alt text
- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Semantic HTML elements used
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] Meta tags present (title, description, og:image)
