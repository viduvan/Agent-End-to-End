# Skill: /fis:source-check — Verify Framework APIs từ Official Docs

> Bắt buộc verify API/patterns từ official docs trước khi code. Chống hallucinated APIs.
> **Injection mode**: HYBRID — auto-inject khi orchestrator detect framework keyword.

## Khi nào dùng
- Mỗi khi code framework-specific (React, FastAPI, LangGraph, Django, Next.js...)
- Building boilerplate/starter code
- Review code dùng framework patterns
- **AUTO-INJECT**: orchestrator tự trigger khi detect framework keyword trong prompt

## Khi KHÔNG dùng
- Pure logic (loops, data structures) không phụ thuộc framework version
- User explicit: "skip source-check" hoặc "just do it quickly"
- Code chỉ dùng standard library (Python builtins, JS builtins)

## Agent
Fullstack Developer / Researcher

## Process — DETECT → FETCH → IMPLEMENT → CITE

### 1. DETECT
Đọc project files để xác định stack + versions:
```bash
# Node.js
cat package.json | jq '.dependencies, .devDependencies'

# Python
cat requirements.txt  # hoặc pyproject.toml
pip show <package> | grep Version
```

### 2. FETCH
Lấy official docs cho feature cần dùng:

**Source Hierarchy** (ưu tiên từ trên xuống):
1. ✅ Official documentation (react.dev, docs.djangoproject.com, fastapi.tiangolo.com)
2. ✅ Official blog / changelog / migration guides
3. ✅ Web standards (MDN, web.dev, WHATWG specs)
4. ❌ KHÔNG: Stack Overflow, blog posts, tutorials, AI training data

**Fetch rules**:
- Deep-link tới feature page, KHÔNG homepage
- Check version-specific docs (React 19 ≠ React 18)
- Nếu docs offline/unavailable → mark `[UNVERIFIED]` trong code

### 3. IMPLEMENT
Code theo patterns từ docs:
- Copy code patterns từ docs, adapt cho use case
- Không "cải tiến" API usage mà không verify
- Nếu docs pattern khác existing code → flag conflict, hỏi user

### 4. CITE
Citation trong code comments:
```python
# Auth: FastAPI OAuth2 with Password (Bearer)
# Ref: https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/
# Verified: FastAPI 0.115.x, 2026-06-16
```

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Framework này tôi biết rõ rồi" | Training data có thể outdated. API thay đổi giữa versions. Verify. |
| "Docs quá dài, tôi biết pattern" | 5 phút đọc docs < 2 giờ debug deprecated API. |
| "Stack Overflow answer trông đúng" | SO answers có thể outdated, sai, hoặc cho version cũ. Official docs only. |
| "Tôi đã dùng API này 100 lần" | API có thể deprecate giữa versions. Check changelog. |

## Red Flags
- Framework code mà không check docs trước
- Dùng API pattern từ memory/training data mà không verify
- Ignore deprecation warnings
- Copy code từ SO/blog mà không cross-check official docs
- Không cite source trong code

## Verification
Sau khi source-check xong:
- [ ] Stack + versions detected (package.json / requirements.txt)
- [ ] Official docs fetched cho feature cần dùng
- [ ] Code implements patterns từ official docs
- [ ] Citations trong code comments (URL + version + date)
- [ ] No `[UNVERIFIED]` marks remaining (hoặc justified)
