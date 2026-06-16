# Skill: /fis:shader — GLSL Shader Programming

## Category: Design
## Role: DEV

## Mô tả
Write GLSL fragment shaders for procedural graphics. Topics: shapes (SDF), patterns, noise (Perlin/simplex/cellular), fBm, colors (HSB/RGB), matrices, gradients, animations. Use for generative art, textures, visual effects, WebGL, Three.js shaders.

## Syntax
```
/fis:shader "<input>"
```

---

# Skill: /fis:threejs — Three.js 3D Development

## Category: Design
## Role: DEV

## Mô tả
Build 3D web experiences with Three.js. Use for WebGL/WebGPU scenes, GLTF models, animations, physics, VR/XR. Supports 556 searchable examples.

## Syntax
```
/fis:threejs "<input>"
```

---

# Skill: /fis:remotion — Programmatic Video with React

## Category: Design
## Role: DEV

## Mô tả
Build video content with Remotion in React. Use for programmatic video creation, animated sequences, data-driven video rendering.

## Syntax
```
/fis:remotion "<input>"
```

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "GPU handles performance" | GPU fast ≠ infinite. Shader complexity matters. Profile. |
| "Visual looks good on my machine" | Test on multiple GPUs/browsers. WebGL compatibility varies. |

## Red Flags
- No performance profiling
- Untested on different GPUs/browsers
- Shader too complex without fallback

## Verification
- [ ] Performance profiled (FPS stable)
- [ ] Cross-browser/GPU tested
- [ ] Fallback for unsupported features
