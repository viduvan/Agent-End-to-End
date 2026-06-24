# Skill: /fis:llms — Generate llms.txt

> Sinh file llms.txt từ docs hoặc scan codebase (chuẩn llmstxt.org). Giúp AI agents hiểu project structure.

## Khi nào dùng
- Tạo llms.txt cho project để AI agents hiểu codebase
- Scan codebase và generate documentation tự động
- Publish documentation theo chuẩn llmstxt.org

## Agent
Technical Analyst

## Prompt mẫu
```
/fis:llms "Generate llms.txt for this project, focusing on API endpoints and data models"
```
```
/fis:llms "Scan src/ and create llms.txt with module descriptions and dependencies"
```

## Nguyên tắc
- Follow llmstxt.org standard
- Include: project structure, key APIs, data models, conventions

## Verification
- [ ] llms.txt follows standard format
- [ ] Key modules documented
- [ ] API endpoints listed
