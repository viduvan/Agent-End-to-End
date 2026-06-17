# Skill: /fis:sa feature-spec — Feature Spec (Hợp nhất)

## Khi nào dùng
Deliverable cho DEV, hợp nhất TRD + DDD-tech + DBDD-tech.

## Agent
SA Marcus

## Prompt mẫu
```
/fis:sa feature-spec
Tổng hợp Feature Spec FS-0001 từ:
- PRD-0001 (BA) → user stories, AC
- TRD-0001 (SA) → architecture, API contract
- DDD-tech → data model, sequence diagrams
Output: artifacts/fs/FS-0001.md
- Ready cho DEV /fis:plan
- Includes: API spec, DB schema, sequence, test hints
```

## Output
- `artifacts/fs/FS-NNNN.md`

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "TRD + PRD đủ cho DEV" | DEV cần 1 unified doc, không search 3 files. Feature Spec = merge point. |
| "DEV sẽ tự figure out" | Self-figure = inconsistent interpretation. Spec = single source of truth. |
| "Feature spec quá chi tiết" | Too detailed > too vague. DEV có thể ignore chi tiết, nhưng cần option to read. |

## Red Flags
- Feature spec không merge TRD + DDD + PRD (incomplete picture)
- Missing sequence diagrams cho complex flows
- API contracts vague (no input/output schema)
- Feature spec not reviewed by DEV before implementation

## Verification
- [ ] TRD + DDD-tech + PRD merged into single spec
- [ ] Sequence diagrams cho complex flows
- [ ] API contracts với input/output schemas
- [ ] DEV reviewed feature spec before implementation
