# Skill: /fis:react-best-practices — React & Next.js Performance Patterns

> Áp dụng pattern tối ưu performance React và Next.js từ Vercel Engineering. 45 quy tắc trên 8 danh mục, ưu tiên theo tác động thực tế lên Core Web Vitals.

## Khi nào dùng
- Viết React components hoặc Next.js pages mới
- Triển khai data fetching (client hoặc server-side)
- Review code để tìm vấn đề hiệu suất
- Refactor code React/Next.js hiện có
- Tối ưu hóa kích thước bundle hoặc thời gian tải
- Sửa re-renders không cần thiết

## Khi KHÔNG dùng
- Phạm vi cross-cutting lớn → dùng `/fis:plan` trước
- Yêu cầu chưa rõ → dùng `/fis:scout` trước

## Agent
Fullstack Developer (Senior Engineer)

## Input
- React/Next.js code cần review hoặc optimize
- Mô tả vấn đề performance

## Output
- Optimized code với best practices applied
- Performance analysis report
- Bundle size recommendations

## Khả năng cốt lõi
- Phát hiện và loại bỏ waterfall requests với `Promise.all()` và Suspense boundaries
- Tối ưu kích thước bundle: dynamic imports, barrel file elimination, tree-shaking
- Ngăn chặn re-renders không cần thiết với memo, derived state, transitions
- Tối ưu hiệu suất server: `React.cache()`, LRU caching, serialization
- Áp dụng 45 quy tắc được ưu tiên theo tác động lên Core Web Vitals
- Review code React/Next.js để phát hiện và sửa vấn đề hiệu suất

## Prompt mẫu

### Review performance
```
/fis:react-best-practices
review component này để tìm vấn đề hiệu suất
```

### Optimize data fetching
```
/fis:react-best-practices
tối ưu hóa logic data fetching này
```

### Slow page load
```
/fis:react-best-practices
tại sao trang này tải chậm?
```

### Reduce bundle size
```
/fis:react-best-practices
giảm kích thước bundle của tính năng này
```

### Fix re-renders
```
/fis:react-best-practices
sửa các re-renders không cần thiết trong form này
```

## Tối ưu hóa quan trọng (Ưu tiên cao nhất)

### Loại bỏ Waterfalls
- Di chuyển `await` vào các nhánh thực sự sử dụng chúng
- Dùng `Promise.all()` cho các thao tác độc lập
- Bắt đầu promises sớm, await muộn trong API routes
- Dùng Suspense để stream nội dung

### Kích thước Bundle
- Import trực tiếp, tránh barrel files
- Dùng `next/dynamic` cho các component nặng
- Tải analytics/logging sau hydration
- Chỉ tải modules khi tính năng được kích hoạt
- Preload khi hover/focus để tăng tốc độ cảm nhận

## Tham chiếu nhanh: 45 quy tắc

| Prefix | Lĩnh vực | Ưu tiên |
|--------|---------|---------|
| `async-*` | Loại bỏ waterfall | ⭐⭐⭐ High |
| `bundle-*` | Tối ưu hóa bundle | ⭐⭐⭐ High |
| `server-*` | Hiệu suất server | ⭐⭐ Medium |
| `client-*` | Data fetching client | ⭐⭐ Medium |
| `rerender-*` | Tối ưu re-render | ⭐⭐ Medium |
| `rendering-*` | Hiệu suất rendering | ⭐ Normal |
| `js-*` | Hiệu suất JavaScript | ⭐ Normal |
| `advanced-*` | Các pattern nâng cao | ⭐ Normal |

Chi tiết: `rules/async-parallel.md`, `rules/bundle-barrel-imports.md`, v.v.

## Nguyên tắc
- Đây là patterns từ Vercel Engineering — đã chứng minh ở production scale
- Ưu tiên theo tác động thực tế (Core Web Vitals), không phải lý thuyết
- Mỗi quy tắc có: giải thích, code sai, code đúng, tài liệu tham chiếu

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "React tự optimize re-render" | React KHÔNG magic. useMemo/useCallback/memo cần dùng đúng chỗ. |
| "Bundle size nhỏ rồi" | Bundle analyzer luôn surprise. Barrel files + unused imports = bloat ẩn. |
| "Waterfall ít requests thì OK" | 3 sequential requests × 200ms RTT = 600ms delay. Promise.all() = 200ms. |
| "SSR/SSG đủ rồi" | SSR + streaming + Suspense = incremental loading. Chỉ SSR = blocking. |

## Red Flags
- Sequential await mà không dùng Promise.all() (waterfall)
- Import từ barrel files (`import { X } from '.'`)
- Component render >100 items không virtualize
- useEffect cho derived state (thay vì tính trực tiếp)
- Không dùng next/dynamic cho component nặng

## Verification
- [ ] Không có waterfall requests (Promise.all cho independent operations)
- [ ] Barrel files eliminated (direct imports)
- [ ] Dynamic imports cho components nặng
- [ ] Memo/useMemo dùng đúng chỗ
- [ ] Bundle size < target (dùng `@next/bundle-analyzer`)
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
