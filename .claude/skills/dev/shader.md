# Skill: /fis:shader — GLSL Fragment Shader Programming

> Viết GLSL fragment shader cho đồ họa procedural, effects, và visual art.

## Khi nào dùng
- Tạo procedural graphics (noise, fractals, patterns)
- Visual effects cho web (backgrounds, transitions)
- Shader art và generative design
- WebGL/WebGPU rendering effects

## Agent
Fullstack Developer (Graphics Specialist)

## Khả năng cốt lõi
- GLSL fragment shader coding
- Procedural texture generation
- Mathematical visual patterns
- ShaderToy-compatible outputs

## Prompt mẫu

### Noise background
```
/fis:shader "Create animated perlin noise background in blue/purple gradient"
```

### Fractal pattern
```
/fis:shader "Generate Mandelbrot set visualization with zoom capability"
```

### Water effect
```
/fis:shader "Create realistic water surface with reflection and caustics"
```

## Nguyên tắc
- Optimize precision: dùng `lowp`/`mediump` khi đủ
- Test trên nhiều GPU (shader compile khác nhau giữa vendors)
- Profile performance: mỗi pixel chạy fragment shader

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "CSS effects đủ rồi" | CSS cho simple effects. Shader cho complex procedural graphics không thể CSS. |
| "GPU programming quá khó" | GLSL fragment shaders = math functions. ShaderToy có 1000s examples để học. |

## Red Flags
- Shader chạy chậm trên mobile (quá nhiều iterations)
- Không fallback khi WebGL không available
- Hardcoded resolution (phải responsive)

## Verification
- [ ] Shader compile thành công trên Chrome/Firefox/Safari
- [ ] Performance OK trên mobile (60fps target)
- [ ] Responsive (dùng `iResolution` uniform)
- [ ] Fallback cho non-WebGL browsers
