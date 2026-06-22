# Skill: /fis:context-engineering — Context Engineering for Agent Systems

## Khi nào dùng
- Thiết kế, debug và tối ưu context cho agent systems
- Khi giới hạn context window cản trở hiệu năng
- Prompt engineering nâng cao (system, user, assistant patterns)
- RAG pipeline design (chunk, embed, retrieve)
- Token budget management

## Agent
Researcher / Planner

## Input
- Agent system cần optimize
- Current context usage metrics (nếu có)
- Performance bottlenecks

## Output
- Context optimization report
- Recommended prompt structure
- Token budget allocation
- RAG pipeline design (nếu applicable)

## Khả năng cốt lõi
- Context window analysis: đo lường token usage per component
- Prompt template optimization: giảm token mà giữ quality
- RAG pipeline design: chunk → embed → retrieve → augment
- Few-shot example curation: chọn examples tối ưu
- Context compression strategies
- Multi-turn conversation management

## Prompt mẫu

### Optimize agent context
```
/fis:context-engineering
Agent orchestrator đang dùng 80% context window.
Phân tích token usage và đề xuất cách giảm xuống 50%.
```

### Design RAG pipeline
```
/fis:context-engineering
Thiết kế RAG pipeline cho knowledge base 10K documents:
- Chunk strategy cho technical docs
- Embedding model recommendation
- Retrieval và re-ranking approach
```

### Prompt optimization
```
/fis:context-engineering
System prompt hiện tại 2000 tokens.
Tối ưu xuống < 800 tokens mà giữ nguyên behavior.
```

## Nguyên tắc
- Measure before optimize — đo token usage trước khi cắt
- Context quality > context quantity — ít nhưng chính xác
- Test regression sau mỗi optimization — behavior không đổi
- Document context budget cho từng component

## Red Flags
- Optimize context mà không đo baseline
- Cắt context làm mất critical instructions
- RAG chunks quá nhỏ (mất ngữ cảnh) hoặc quá lớn (phí token)
- Không test behavior regression sau optimization
