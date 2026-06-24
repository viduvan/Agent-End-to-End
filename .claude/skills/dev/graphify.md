# Skill: /fis:graphify — Knowledge Graph Builder

> Dựng knowledge graph truy vấn được từ code, doc, paper, ảnh. Visualize relationships và dependencies.

## Khi nào dùng
- Build knowledge graph toàn bộ project
- Visualize module dependencies và relationships
- Phân tích code coupling và cohesion
- Map technical concepts từ documentation

## Agent
Technical Analyst (Researcher)

## Prompt mẫu
```
/fis:graphify
Build knowledge graph toàn bộ project, focus on module dependencies.
```
```
/fis:graphify src/api/
Graph cho API layer: endpoints, middleware, handlers, models.
```

## Nguyên tắc
- Graph phải queryable (không chỉ visualization)
- Include: modules, dependencies, data flow
- Update graph khi codebase thay đổi

## Verification
- [ ] Graph nodes represent actual modules
- [ ] Relationships accurate (dependencies, calls, data flow)
- [ ] Graph queryable
