# Skill: /fis:frontend-design — Frontend Design System

> Tạo giao diện frontend chất lượng từ design/screenshot/video. Tránh thẩm mỹ "AI slop" — mỗi thiết kế phải có chủ đích, đáng nhớ và phù hợp bối cảnh.

## Khi nào dùng
- Sao chép UI design từ ảnh chụp màn hình (pixel-perfect)
- Tạo thiết kế gốc với định hướng thẩm mỹ táo bạo
- Xây dựng design system (colors, typography, spacing) cho project
- Prototype nhanh web component, landing page, portfolio
- Tạo giao diện immersive, 3D experience

## Khi KHÔNG dùng
- Phạm vi cross-cutting lớn → dùng `/fis:plan` trước
- Yêu cầu chưa rõ → dùng `/fis:scout` trước

## Agent
UI/UX Designer

## Input
- Mô tả thiết kế hoặc đường dẫn ảnh tham chiếu
- Định hướng thẩm mỹ (brutalist, editorial, retro-futuristic...)
- Framework/stack target

## Output
- Design system tokens (CSS variables)
- Component code (HTML/CSS/React)
- Asset trực quan (nếu cần)

## Yêu cầu trước
- Hiểu biết cơ bản về HTML, CSS và JavaScript
- Quen thuộc với React (cho component-based workflows)
- Skill `ai-multimodal` (để trích xuất thiết kế và tạo asset)

## Khả năng cốt lõi
- Trích xuất design system (màu, typography, spacing) từ ảnh chụp màn hình với AI
- Tái tạo thiết kế từ ảnh tham chiếu với độ chính xác pixel-perfect
- Tạo thiết kế gốc với định hướng thẩm mỹ táo bạo (brutalist, editorial, retro-futuristic...)
- Hướng dẫn typography sáng tạo — chọn font có cá tính thay vì Inter/Roboto mặc định
- Xây dựng hệ thống màu sắc nhất quán với CSS variables
- Thiết kế animation và motion có chủ đích (CSS, Motion, anime.js)

## Prompt mẫu

### Sao chép từ screenshot
```
/fis:frontend-design replicate landing page from screenshot.png
```

### Portfolio site gốc
```
/fis:frontend-design create portfolio site with editorial magazine aesthetic
```

### Developer tool UI
```
/fis:frontend-design build brutalist dark UI for developer tool
```

### Extract design system
```
/fis:frontend-design extract design system from competitor.png and implement
```

### Hero section với animation
```
/fis:frontend-design create hero section with staggered fade-in animations
```

## Hai Quy Trình Chính

### Quy trình 1: Triển khai từ screenshot
1. **Trích xuất**: Dùng `ai-multimodal` phân tích ảnh → extract colors (hex), fonts, spacing, layout
2. **Ghi lại**: Document vào `docs/design-guidelines/extracted-design.md`
3. **Implement**: Code tái tạo thiết kế với CSS variables chính xác
4. **Verify**: So sánh side-by-side bằng `ai-multimodal`

### Quy trình 2: Xây dựng từ đầu
1. **Tư duy**: Mục đích? Ai dùng? Tông điệu? Ràng buộc?
2. **Chọn thẩm mỹ**: Cam kết 1 hướng (brutalist, editorial, retro, organic, industrial)
3. **Thực thi**: Typography + Colors + Motion + Layout + Visual details

## Chọn Thẩm Mỹ

### Typography: Phá Vỡ Mặc Định
- **KHÔNG**: Inter, Roboto, Arial, system fonts
- **NÊN**: Playfair Display + Source Sans Pro, Syne + IBM Plex Sans, Fraunces + Work Sans
- Cân nhắc variable fonts cho kiểm soát weight/width linh hoạt

### Màu Sắc: Cam Kết Hoàn Toàn
```css
:root {
  --color-primary: #1A202C;
  --color-accent: #F56565;
  --color-neutral: #E2E8F0;
  /* Màu chủ đạo với điểm nhấn sắc nét, không phải bảng màu phân phối đều */
}
```

### Chuyển Động: Khoảnh Khắc Tạo Ấn Tượng
```css
.hero-title { animation: fadeInUp 0.6s ease-out; }
.hero-subtitle { animation: fadeInUp 0.6s ease-out 0.2s; animation-fill-mode: backwards; }
.hero-cta { animation: fadeInUp 0.6s ease-out 0.4s; animation-fill-mode: backwards; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Bố Cục: Phá Vỡ Grid
- Sắp xếp không đối xứng
- Các phần tử chồng lên nhau
- Không gian âm rộng rãi HOẶC mật độ có kiểm soát

## Tài liệu tham chiếu
- `references/design-extraction-overview.md` — Quy trình phân tích screenshot
- `references/extraction-prompts.md` — Prompts cho phân tích thiết kế
- `references/visual-analysis-overview.md` — Xác minh chất lượng
- `references/asset-generation.md` — Tạo asset trực quan
- `references/technical-overview.md` — Tối ưu hóa hiệu suất
- `references/animejs.md` — Animations JavaScript nâng cao

## Nguyên tắc
- Mỗi dự án có định hướng thẩm mỹ độc đáo — KHÔNG dùng font/color mặc định
- Thiết kế trước khi code — hiểu design system trước khi implement
- Dùng CSS Variables cho design tokens
- Test responsive: dùng `clamp()` cho typography fluid, CSS Grid cho layout
- Match độ phức tạp với tầm nhìn (tối đa = animation phong phú; tối giản = chính xác)

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Inter cho an toàn" | An toàn = chung chung = quên ngay. Chọn font có cá tính phù hợp context. |
| "Gradient tím + xanh dùng là đẹp" | Đó là AI slop aesthetic. Tạo palette riêng phù hợp brand. |
| "Animation nhiều = đẹp" | 1 animation staged tốt > 10 micro-interactions rải rác. Ít nhưng có chủ đích. |
| "Mobile first xong responsive sau" | Design cho 320px, 768px, 1024px, 1440px ngay từ đầu. |

## Red Flags
- Dùng font mặc định (Inter, Roboto) cho mọi project
- Gradient tím/xanh generic (AI slop)
- Không có CSS variables cho design tokens
- Bỏ qua responsive design
- Animation không có chủ đích (loạn xạ micro-interactions)

## Verification
- [ ] Design tokens defined (colors, spacing, typography) dưới dạng CSS variables
- [ ] Font pairing có cá tính (không phải Inter/Roboto default)
- [ ] Color palette nhất quán, phù hợp brand
- [ ] Animation có chủ đích (staged, meaningful)
- [ ] Responsive tại 320px, 768px, 1024px, 1440px
- [ ] Không horizontal scroll trên mobile
