# Skill: /fis:docs-seeker — Documentation Lookup via llms.txt

> Tra tài liệu thư viện/framework qua llms.txt (context7.com). Tìm docs chính thức, API references, examples.

## Khi nào dùng
- Cần tra cứu docs chính thức của thư viện/framework
- Verify API usage trước khi implement
- Tìm examples, patterns từ official docs
- Check compatibility/breaking changes giữa versions

## Agent
Technical Analyst (Researcher)

## Khả năng cốt lõi
- Tìm và tải docs qua llms.txt protocol (context7.com)
- Parse API references, changelogs, migration guides
- Extract code examples phù hợp với use case
- Cross-reference multiple sources

## Prompt mẫu
```
/fis:docs-seeker "Next.js App Router - how to implement middleware for auth?"
```
```
/fis:docs-seeker "Drizzle ORM - migration workflow with PostgreSQL"
```
```
/fis:docs-seeker "shadcn/ui - how to customize theme colors?"
```

## Nguyên tắc
- Docs là source of truth — không dùng training data outdated
- Verify API signatures trước khi code
- Check version compatibility

## Verification
- [ ] API usage matches official docs
- [ ] Version compatibility verified
- [ ] Examples tested locally
