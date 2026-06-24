# Skill: /fis:gkg — GitLab Knowledge Graph

> Phân tích code ngữ nghĩa với GitLab Knowledge Graph. Semantic code search và analysis.

## Khi nào dùng
- Semantic code search (tìm theo ý nghĩa, không chỉ text)
- Phân tích code relationships trong GitLab repos
- Code intelligence queries

## Agent
Technical Analyst (Researcher)

## Prompt mẫu
```
/fis:gkg "Find all functions that handle user authentication across the codebase"
```
```
/fis:gkg "Show dependency chain from API controller to database queries"
```

## Nguyên tắc
- Semantic search > text search
- Kết hợp với `/fis:scout` cho comprehensive analysis

## Verification
- [ ] Search results semantically relevant
- [ ] Dependency chains complete
