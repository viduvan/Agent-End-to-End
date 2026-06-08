# RISK REGISTER — Agent-End-to-End

> **Cập nhật**: 2026-05-30
> **Owner**: PM
> **Scoring**: P(Probability) × I(Impact) = Risk Score (1-5 mỗi dimension)

---

## Technical Risks

| ID | Risk | P | I | Score | Strategy | Mitigation | Owner |
|----|------|---|---|-------|----------|------------|-------|
| T-001 | LangGraph learning curve | 3 | 3 | 9 | Mitigate | POC trước, fallback simple orchestrator | DEV |
| T-002 | PostgreSQL pgvector performance với large embeddings | 2 | 3 | 6 | Monitor | Benchmark early, index tuning | DEV |
| T-003 | Redis connection pool exhaustion | 2 | 4 | 8 | Mitigate | Connection pooling + health check | DEV |
| T-004 | FastAPI concurrent WebSocket limit | 2 | 3 | 6 | Mitigate | Load test early | DEV |

## Schedule Risks

| ID | Risk | P | I | Score | Strategy | Mitigation | Owner |
|----|------|---|---|-------|----------|------------|-------|
| S-001 | DEV deadline 3.5 ngày quá aggressive | 4 | 4 | **16** | Mitigate | Scope cut: MVP first, features later | PM |
| S-002 | Docker setup issues block deployment | 2 | 3 | 6 | Mitigate | Docker compose template từ ocr-deep | DEV |

## Resource Risks

| ID | Risk | P | I | Score | Strategy | Mitigation | Owner |
|----|------|---|---|-------|----------|------------|-------|
| RE-001 | 1-person team — bus factor = 1 | 3 | 5 | **15** | Accept | Document everything, clean code | PM |
| RE-002 | Burnout do kiêm nhiệm all roles | 3 | 4 | 12 | Mitigate | Time-box mỗi phase, nghỉ giữa | PM |

## External Risks

| ID | Risk | P | I | Score | Strategy | Mitigation | Owner |
|----|------|---|---|-------|----------|------------|-------|
| E-001 | LLM vendor pricing change | 2 | 4 | 8 | Mitigate | Local model (Qwen3) primary | DEV |
| E-002 | API rate limiting từ cloud LLM | 3 | 3 | 9 | Mitigate | Queue + retry + fallback | DEV |

## AI-Specific Risks ⚠️

| ID | Risk | P | I | Score | Strategy | Mitigation | Owner |
|----|------|---|---|-------|----------|------------|-------|
| AI-001 | Prompt injection từ user input | 3 | 5 | **15** | Mitigate | Input sanitization + guardrails | DEV |
| AI-002 | PII leak qua agent conversation | 2 | 5 | 10 | Avoid | KHÔNG đưa PII vào prompt | DEV |
| AI-003 | LLM hallucination trong output | 3 | 3 | 9 | Mitigate | Output validation + human-in-the-loop | DEV |
| AI-004 | Model drift khi Qwen3 update version | 2 | 3 | 6 | Monitor | Pin model version, regression test | DEV |
| AI-005 | Agent infinite loop (state machine) | 2 | 4 | 8 | Mitigate | Max iterations + timeout per agent | DEV |

---

## Risk Matrix

```
Impact →    1    2    3    4    5
P ↓
5          |    |    |    | 🔴 | 🔴 |
4          |    |    | 🟡 | 🔴S001| 🔴 |
3          |    |    |AI003| 🟡RE2| 🔴AI001|
2          |    |    |T002 | E001 | AI002|
1          |    |    |    |    |    |
```

**Legend**: 🔴 Critical (≥15) | 🟡 High (12-14) | 🟢 Medium (6-11) | ⚪ Low (1-5)

---
_Sinh bởi `/fis:pm risk-register` — FIS AI Delivery Framework_
