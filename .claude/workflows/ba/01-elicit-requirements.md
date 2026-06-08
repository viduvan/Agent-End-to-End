# Workflow BA-1: Elicit yêu cầu nghiệp vụ ⭐ (Quan trọng nhất)

## Kịch bản
JTBD interview → Event Storming → Impact Mapping → PRD draft + DDD §I-IV

## Skills: `/fis:elicit`, `/fis:ba`, `/fis:wireframe`

## Quy trình 12 bước

### Phase 1: Discovery (Ngày 1-2)

#### 1. JTBD Interview
```
/fis:elicit
Phỏng vấn JTBD cho multi-agent system.
Output: personas + jobs + pain points + gain points.
```

#### 2. Event Storming
```
/fis:elicit
Event Storming cho domain events + commands + actors + aggregates.
```

#### 3. Impact Mapping
```
/fis:elicit
Goal → Actors → Impacts → Deliverables mapping.
```

### Phase 2: Modeling (Ngày 3-4)

#### 4. Domain Model (DDD)
```
/fis:ba ddd-business
Bounded Contexts + Ubiquitous Language + Context Map.
```

#### 5. Business Process (BPMN)
```
/fis:ba sod
BPMN flow cho core business processes + decision tables.
```

### Phase 3: Documentation (Ngày 5-7)

#### 6. PRD Draft
```
/fis:ba create
PRD từ elicit notes: problem, user stories, AC, edge cases, out-of-scope.
```

#### 7. Feature Specs
```
/fis:ba fsd
Functional Spec chi tiết cho mỗi module.
```

#### 8. Wireframes
```
/fis:wireframe
UI flow sketches cho main screens.
```

### Phase 4: Review (Ngày 8)

#### 9. Three Amigos Review
```
/fis:three-amigos:review-prd
BA + SA + QA sign-off PRD.
```

#### 10. Stakeholder Review
PM mang PRD ra khách/sponsor, capture feedback.

#### 11. Finalize
Update PRD + FS based on feedback. Status → Approved.

#### 12. Handoff to SA
SA bắt đầu viết TRD từ PRD Approved.

---

## Brownfield Mode (Dự án của bạn) ⭐
Vì bạn code trước → docs sau, dùng `generate` thay `create`:

```
/fis:ba generate
Đọc codebase src/ → sinh PRD + FS reverse-engineered.
Gap analysis: code có nhưng chưa document.
```

Quy trình brownfield:
1. Code xong → `/fis:ba generate` → PRD draft
2. Review + fill gaps + add context business
3. Three Amigos self-review (checklist)
4. Status → Approved

---

## Bài học
- PRD + TRD không thừa — 1 ngày plan = 3 ngày debug
- Three Amigos trước code — BA + SA + QA cùng nhìn 1 hướng
- Brownfield generate > manual write — nhanh + accurate hơn
