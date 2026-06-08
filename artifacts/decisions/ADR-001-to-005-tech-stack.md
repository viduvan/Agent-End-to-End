# ADR-001: LangGraph cho Agent Orchestration

## Status: Accepted

## Context
Dự án cần orchestration framework để điều phối multiple AI agents. Cần state machine control, human-in-the-loop, error recovery, và production-grade reliability.

## Decision
Chọn **LangGraph** làm agent orchestration framework.

## Alternatives Considered

| Option | Pros | Cons |
|--------|------|------|
| **LangGraph** ⭐ | State machine rõ ràng, human-in-the-loop built-in, production-ready, LangChain ecosystem | Learning curve, Python-only |
| CrewAI | Role-based agents, simple setup | Ít control flow, khó debug, chưa stable |
| AutoGen (Microsoft) | Multi-agent conversation, code execution | Complex setup, heavy, less deterministic |
| Custom (Pure Python) | Full control | Build from scratch, maintenance burden |

## Consequences
- ✅ Deterministic agent flows via state machine
- ✅ Built-in checkpointing + error recovery
- ✅ Human-in-the-loop cho approval steps
- ⚠️ Team cần học LangGraph API
- ⚠️ Tied to LangChain ecosystem

## References
- https://langchain-ai.github.io/langgraph/
- LangGraph vs CrewAI comparison (internal review)

---

# ADR-002: FastAPI cho Backend

## Status: Accepted

## Context
Cần REST + WebSocket API framework cho Python.

## Decision
Chọn **FastAPI**.

## Alternatives
| Option | Pros | Cons |
|--------|------|------|
| **FastAPI** ⭐ | Async native, auto OpenAPI, Pydantic validation, team đã quen (ocr-deep) | Python-only |
| Flask | Simple, mature | No async, no auto-docs |
| Django REST | Batteries included | Heavy, slower |
| Express.js | Large ecosystem | Different language stack |

---

# ADR-003: PostgreSQL + pgvector cho Database

## Status: Accepted

## Decision
PostgreSQL + pgvector extension — structured data + vector search cùng 1 database.

## Alternatives
| Option | Pros | Cons |
|--------|------|------|
| **PG + pgvector** ⭐ | 1 DB cho cả relational + vector, mature | Vector perf < specialized DB |
| PG + Qdrant | Best vector perf | 2 databases to manage |
| MongoDB | Flexible schema | No strong consistency |

---

# ADR-004: Redis cho Message Broker

## Status: Accepted

## Decision
Redis cho agent-to-agent messaging, caching, và session management.

---

# ADR-005: Docker Compose cho Deployment

## Status: Accepted

## Decision
Docker Compose cho local + staging. Kubernetes cho production scaling (phase 2).
