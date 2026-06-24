# Skill: /fis:media-processing — Media Processing

> Xử lý media với FFmpeg, ImageMagick, RMBG (xoá nền AI). Video/audio transcoding, image manipulation, batch processing.

## Khi nào dùng
- Video: convert, compress, trim, merge, extract frames
- Audio: extract from video, convert formats, normalize volume
- Image: resize, crop, convert, watermark, batch processing
- AI: remove background (RMBG), upscale images

## Agent
Fullstack Developer

## Khả năng cốt lõi
- FFmpeg: video/audio transcoding, streaming, filters
- ImageMagick: image manipulation, batch processing
- RMBG: AI background removal
- Batch processing pipelines

## Prompt mẫu

### Video compress
```
/fis:media-processing
"Compress all MP4 files in /videos/ to web-friendly format (720p, H.264, 2Mbps) keeping audio"
```

### Extract thumbnails
```
/fis:media-processing
"Extract thumbnail at 10-second mark from each video in the uploads folder"
```

### Remove background
```
/fis:media-processing
"Remove background from all product images in /images/ using RMBG and save as PNG with transparency"
```

### Audio extraction
```
/fis:media-processing
"Extract audio from video.mp4, normalize volume, convert to 128kbps MP3"
```

## Nguyên tắc
- Validate input format trước khi process
- Preserve original files (output to separate directory)
- Log progress cho batch operations
- Handle errors gracefully (corrupt files, unsupported codecs)

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Cloud service xử lý media cho" | FFmpeg local = miễn phí, nhanh, không upload sensitive data. |
| "ImageMagick outdated" | ImageMagick = 20+ năm stable. vẫn best tool cho batch image processing. |

## Red Flags
- Overwrite original files
- No error handling cho corrupt media
- Missing progress logging cho batch jobs
- Hardcoded paths

## Verification
- [ ] Original files preserved
- [ ] Output format correct
- [ ] Batch processing handles errors gracefully
- [ ] Progress logged for long-running operations
