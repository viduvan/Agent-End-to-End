# Skill: /fis:databases — Database Operations

## Khi nào dùng
Schema design, migrations, query optimization, DBA tasks.

## Agent
Database Admin (Senior DBA)

## Capabilities
- Schema design (normalized ↔ denormalized trade-offs)
- Migration generation (Alembic, Prisma, raw SQL)
- Index optimization (EXPLAIN ANALYZE)
- N+1 query detection + fix
- Connection pooling configuration
- Backup/restore strategy
- pgvector setup + embedding indexes
- Partition strategy cho large tables

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Schema design sau, ORM handle" | ORM hides SQL, not prevents bad schema. Schema first. |
| "Index optimization khi slow" | Add index khi design. Chờ slow = production incident. |
| "Migration rollback phức tạp" | Không rollback plan = không nên migrate. Write down migration BEFORE up migration. |

## Red Flags
- Schema without indexes on foreign keys
- Missing migration rollback scripts
- N+1 query patterns not detected
- Raw SQL without parameterization

## Verification
- [ ] Indexes on all FK and frequent query columns
- [ ] Migration scripts have UP and DOWN
- [ ] No N+1 query patterns
- [ ] All queries parameterized
