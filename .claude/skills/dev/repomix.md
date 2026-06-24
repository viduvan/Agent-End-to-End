# Skill: /fis:repomix — Pack Repo AI-Friendly

> Pack repo thành file thân thiện AI bằng Repomix. Tạo single-file context cho LLM processing.

## Khi nào dùng
- Pack codebase thành 1 file cho AI analysis
- Share code context với LLM tools
- Create documentation snapshots
- Onboarding context cho team mới

## Agent
Technical Analyst

## Prompt mẫu
```
/fis:repomix
Pack toàn bộ project thành AI-friendly format.
```
```
/fis:repomix src/core/
Pack chỉ core module cho focused analysis.
```

## Nguyên tắc
- Exclude: node_modules, dist, .git, binary files
- Include file structure + content
- Respect .gitignore

## Verification
- [ ] Output file readable bởi LLM
- [ ] Binary files excluded
- [ ] File structure preserved
