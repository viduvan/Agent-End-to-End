# Skill: /fis:research — Technical Research

> Nghiên cứu giải pháp kỹ thuật, phân tích kiến trúc, gom requirement. Deep technical investigation.

## Khi nào dùng
- Nghiên cứu technology/library mới trước khi adopt
- Phân tích kiến trúc cho feature phức tạp
- Gom requirements từ nhiều sources
- Compare solutions (build vs buy, framework X vs Y)

## Agent
Technical Analyst (Researcher)

## Prompt mẫu
```
/fis:research
Research best practices cho real-time collaboration (like Google Docs).
Compare: CRDT vs OT, Y.js vs Automerge vs ShareDB.
```
```
/fis:research
Phân tích authentication options cho multi-tenant SaaS:
- Better Auth vs NextAuth vs Clerk vs Auth0
- Criteria: cost, customization, self-hosted option, database support
```

## Nguyên tắc
- Structured output: Problem → Research → Options → Comparison → Recommendation
- Cite sources (docs, articles, benchmarks)
- Include cost/effort estimates
- Highlight risks và unknowns

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Đã biết tool tốt nhất rồi" | Ecosystem thay đổi nhanh. Research mới nhất trước khi decide. |
| "Research mất thời gian" | Wrong technology choice mất tháng. 2 giờ research = informed decision. |

## Red Flags
- Recommend mà không compare alternatives
- Bias toward familiar tools
- Ignore cost/effort/risk

## Verification
- [ ] Minimum 3 options compared
- [ ] Comparison criteria clear
- [ ] Sources cited
- [ ] Recommendation justified
