# Skill: /fis:predict — Multi-Persona Debate

> 5 persona chuyên gia tranh luận thay đổi trước khi triển khai. Predict outcomes và risks.

## Khi nào dùng
- Trước architecture decisions quan trọng
- Predict impact của thay đổi lớn
- Risk assessment cho technical decisions
- Khi cần multiple expert perspectives

## Agent
Solutions Architect

## Personas
5 chuyên gia tranh luận: Security Expert, Performance Engineer, UX Designer, Business Analyst, Devil's Advocate

## Prompt mẫu
```
/fis:predict "Migrate from REST to GraphQL for all public APIs. Predict impact on: performance, developer experience, maintenance cost."
```
```
/fis:predict "Switch database from MongoDB to PostgreSQL for user data. What could go wrong?"
```

## Nguyên tắc
- Minimum 5 perspectives per prediction
- Include both positive and negative outcomes
- Quantify risks where possible

## Verification
- [ ] Multiple perspectives represented
- [ ] Risks identified and quantified
- [ ] Mitigation strategies proposed
