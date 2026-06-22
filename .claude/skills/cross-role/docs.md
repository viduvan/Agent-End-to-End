# Skill: /fis:docs — Documentation Management

> Phân tích codebase và quản lý tài liệu project. Generate và maintain documentation.

## Khi nào dùng
- Generate documentation từ codebase
- Maintain project docs (README, API docs, architecture)
- Analyze codebase cho documentation gaps
- Update docs khi code thay đổi

## Agent
Technical Writer, Technical Analyst

## Prompt mẫu
```
/fis:docs "Generate API documentation for all endpoints in src/api/"
```
```
/fis:docs "Update README with new setup instructions and architecture diagram"
```
```
/fis:docs "Analyze codebase and identify undocumented public functions"
```

## Nguyên tắc
- Docs as code — version controlled
- Auto-generate where possible, hand-write where needed
- Keep docs close to code (inline + README)

## Verification
- [ ] All public APIs documented
- [ ] README up-to-date
- [ ] No orphaned docs (referencing deleted code)
