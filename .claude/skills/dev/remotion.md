# Skill: /fis:remotion — Programmatic Video with React

> Dựng video bằng Remotion trong React. Compose scenes, animate, render MP4/WebM.

## Khi nào dùng
- Tạo video programmatically từ React components
- Automated video generation (marketing, social media, reports)
- Animated explainer videos
- Data-driven video generation (personalized per user)

## Agent
Fullstack Developer

## Khả năng cốt lõi
- React-based video composition
- Animated sequences with `useCurrentFrame()`
- Audio synchronization
- Render to MP4/WebM
- Template-based video generation
- Data-driven personalization

## Prompt mẫu

### Product demo video
```
/fis:remotion "Create a 30-second product demo video with animated text, transitions, and background music"
```

### Social media content
```
/fis:remotion "Build automated Instagram Reel template: dynamic text, product images, call-to-action"
```

### Data visualization video
```
/fis:remotion "Generate animated chart video showing monthly revenue growth with smooth transitions"
```

## Nguyên tắc
- Mỗi frame là React render — optimize component performance
- Dùng `spring()` cho natural animations
- Audio sync: `useCurrentFrame()` + `fps` = precise timing
- Test rendering locally trước khi cloud render

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Video editing tools đủ rồi" | Manual editing không scale. Remotion = 1000 personalized videos từ 1 template. |
| "Video rendering quá chậm" | Remotion Lambda: parallel render = seconds thay vì minutes. |

## Red Flags
- Heavy components trong video (mỗi frame re-render)
- Missing audio sync (off by frames)
- Không handle variable frame rates

## Verification
- [ ] Video render thành công (MP4/WebM)
- [ ] Animations smooth (spring/interpolate)
- [ ] Audio sync chính xác
- [ ] Template reusable với different data
