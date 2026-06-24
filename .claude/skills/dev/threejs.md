# Skill: /fis:threejs — Three.js 3D Web Experience

> Dựng trải nghiệm web 3D với Three.js (WebGL/WebGPU). Models, scenes, materials, lighting, animations.

## Khi nào dùng
- Xây dựng 3D web experiences (product viewers, games, visualizations)
- Interactive 3D scenes với camera controls
- 3D model loading và display (GLTF, FBX, OBJ)
- WebGL/WebGPU rendering cho web

## Agent
Fullstack Developer (Graphics Specialist)

## Khả năng cốt lõi
- Three.js scene setup (scene, camera, renderer, lights)
- 3D model loading (GLTFLoader, FBXLoader)
- Materials và textures (PBR, custom shaders)
- Animations (GSAP, Three.js AnimationMixer)
- Raycasting và user interaction
- Performance optimization (LOD, instancing, frustum culling)

## Prompt mẫu

### Product viewer
```
/fis:threejs "Create 3D product viewer with orbit controls, lighting, and GLTF model loading"
```

### Interactive scene
```
/fis:threejs "Build interactive 3D scene with clickable objects, tooltips, and camera animation"
```

### Data visualization 3D
```
/fis:threejs "Create 3D bar chart visualization with animated transitions between datasets"
```

### Particle system
```
/fis:threejs "Build particle system background with mouse interaction and color gradients"
```

## Nguyên tắc
- Dispose geometries/materials/textures khi không dùng (memory leak prevention)
- Dùng `requestAnimationFrame` cho render loop
- Optimize: instancing cho repeated objects, LOD cho distance
- Test trên mobile (WebGL support varies)

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "CSS 3D transforms đủ rồi" | CSS 3D cho simple rotations. Three.js cho real 3D scenes với lighting, models, interactions. |
| "3D không cần cho web app" | Product viewers, data viz, immersive landing pages — 3D tăng engagement đáng kể. |
| "Performance sẽ tệ trên mobile" | Optimize: LOD, instancing, texture compression. Three.js chạy tốt trên mobile nếu optimize đúng. |

## Red Flags
- Không dispose resources (memory leak)
- Không handle window resize (canvas stretch)
- Quá nhiều draw calls (>100 = slow)
- Missing fallback cho browsers không hỗ trợ WebGL

## Verification
- [ ] Resources disposed khi component unmount
- [ ] Window resize handler hoạt động
- [ ] Draw calls < 100 (dùng `renderer.info`)
- [ ] 60fps trên target devices
- [ ] Fallback cho non-WebGL browsers
