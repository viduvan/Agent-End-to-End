# Skill: /fis:ai-multimodal — Gemini API Multimodal

> Phân tích ảnh/audio/video bằng Gemini API và sinh nội dung đa phương tiện.

## Khi nào dùng
- Phân tích images (design extraction, content analysis)
- Process audio/video content
- Generate multimodal content (text + images)
- Design system extraction từ screenshots

## Agent
Technical Analyst, UI/UX Designer

## Khả năng cốt lõi
- Gemini Vision: analyze images, extract text, describe content
- Audio processing: transcription, analysis
- Video analysis: frame extraction, content summarization
- Image generation: Imagen API integration
- Batch processing: multiple files simultaneously

## Prompt mẫu
```
/fis:ai-multimodal "Analyze this screenshot and extract the design system: colors, fonts, spacing, layout"
```
```
/fis:ai-multimodal "Transcribe this meeting recording and generate action items"
```
```
/fis:ai-multimodal "Generate product image: modern laptop on desk, soft lighting, 1200x800px"
```

## Setup
```bash
export GEMINI_API_KEY=your-api-key
# Hoặc trong .env
```

## Nguyên tắc
- API key trong environment variables
- Handle rate limits gracefully
- Cache results cho repeated analysis

## Verification
- [ ] API key configured
- [ ] Rate limits handled
- [ ] Output format correct
