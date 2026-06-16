# Skill: /fis:media-processing — Media Processing

## Khi nào dùng
Xử lý media: image, video, audio.

## Capabilities
- Image: resize, crop, watermark, format conversion
- Video: transcode, thumbnail extraction
- Audio: transcription, noise reduction
- Asset pipeline (CDN, lazy loading)

---

# Skill: /fis:chrome-devtools — Chrome DevTools Expert

## Khi nào dùng
Debug frontend: performance, network, memory.

## Capabilities
- Performance profiling (flame chart)
- Network waterfall analysis
- Memory leak detection
- Lighthouse audit

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Full resolution OK, users have fast internet" | Many users on mobile/slow connections. Optimize for worst case. |
| "Format conversion not needed" | Modern formats (WebP, AVIF) save 30-50% bandwidth. Worth it. |

## Red Flags
- Images not optimized (oversized files)
- No lazy loading for media
- Missing format fallbacks

## Verification
- [ ] Images optimized (WebP/AVIF with fallback)
- [ ] Lazy loading for below-fold media
- [ ] Video transcoded for different bandwidths
