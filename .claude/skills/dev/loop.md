# Skill: /fis:loop — Auto-Optimize Loop

> Vòng tối ưu tự chạy theo metric. Iterative refinement cho performance, quality, accuracy.

## Khi nào dùng
- Tối ưu performance code (speed, memory, bundle size)
- Iterative quality improvement (test coverage, lint score)
- Auto-refine output theo metric target
- Alias deprecated: `/fis:autoresearch`

## Agent
Fullstack Developer

## Prompt mẫu
```
/fis:loop "Optimize API response time to under 200ms. Current: 850ms. Iterate until target met."
```
```
/fis:loop "Improve test coverage from 45% to 80%. Add tests iteratively, run after each batch."
```

## Nguyên tắc
- Define metric + target trước khi loop
- Max iterations limit (prevent infinite loop)
- Log progress mỗi iteration

## Verification
- [ ] Metric improved toward target
- [ ] Iteration count reasonable
- [ ] No regressions introduced
