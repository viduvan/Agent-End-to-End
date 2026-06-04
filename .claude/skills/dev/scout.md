# Skill: /fis:scout — Hiểu Codebase

## Khi nào dùng
- TRƯỚC khi craft (tìm service có sẵn để reuse)
- TRƯỚC khi refactor (impact analysis)
- Khi onboard dự án mới (hiểu kiến trúc)
- Tìm dead code, unused exports

## Agent
Technical Analyst (Researcher)

## Output
- Codebase analysis report
- Dependency graph
- Anti-pattern list
- Reuse recommendations

## Prompt mẫu

### Phân tích module
```
/fis:scout
Phân tích module src/orchestrator/.
Tìm: code lặp, function > 50 LOC, mixed responsibilities,
magic numbers, dead code, circular dependencies.
Liệt kê kèm file:line và mức độ ưu tiên.
```

### Find usages
```
/fis:scout
Liệt kê tất cả nơi import AgentBase trong codebase.
Phân loại: production code, test code, internal modules.
```

### Kiến trúc tổng thể
```
/fis:scout
Phân tích kiến trúc tổng thể dự án Agent-End-to-End:
- Module nào phụ thuộc module nào?
- Entry points chính?
- External dependencies?
- Vẽ dependency graph.
```

### Tìm reuse
```
/fis:scout
Tôi cần implement notification service.
Tìm trong codebase xem có service/pattern tương tự đã có chưa?
Có thể reuse/extend gì?
```

### Dead code
```
/fis:scout
Tìm tất cả code không dùng:
- Unused exports (không có importer)
- Unused functions/variables
- Unreachable branches
- Commented-out code blocks
```

### Test coverage
```
/fis:scout
Tìm test file cho module src/agents/.
Test có cover đủ behavior chưa?
Liệt kê method public chưa có test.
```

## Nguyên tắc
- Scout TRƯỚC Craft — reuse > build mới
- Scout TRƯỚC Refactor — biết impact trước khi sửa
- Block: `.next`, `node_modules`, `dist`, `__pycache__` khi scout
