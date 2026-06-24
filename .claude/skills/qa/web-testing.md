# Skill: /fis:web-testing — Web Testing (Playwright, Vitest, k6)

> Test web với Playwright (E2E), Vitest (unit/component), k6 (load). Comprehensive web testing.

## Khi nào dùng
- E2E testing với Playwright (browser automation)
- Unit/component testing với Vitest
- Load/performance testing với k6
- Visual regression testing
- API endpoint testing

## Agent
Tester

## Khả năng cốt lõi
- **Playwright**: E2E tests, cross-browser, visual regression, API testing
- **Vitest**: Unit tests, component tests, mocking, code coverage
- **k6**: Load testing, stress testing, performance benchmarks

## Prompt mẫu

### E2E testing
```
/fis:web-testing
"Write Playwright E2E tests for user registration flow: signup → email verification → login → dashboard"
```

### Component testing
```
/fis:web-testing
"Write Vitest component tests for LoginForm: validation, submission, error states, loading state"
```

### Load testing
```
/fis:web-testing
"Create k6 load test for API: 100 concurrent users, ramp up over 30s, test /api/users and /api/orders"
```

### Visual regression
```
/fis:web-testing
"Set up Playwright visual regression tests for all pages in the app"
```

## Nguyên tắc
- Test pyramid: Unit > Integration > E2E
- E2E cho critical paths only (slow, flaky)
- Load test early — don't discover performance issues in production
- Visual regression catch unintended UI changes

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "Manual testing đủ rồi" | Manual testing không reproducible, không scale. CI/CD cần automated tests. |
| "E2E tests quá chậm" | Test critical paths only. Playwright parallel mode = fast. |
| "Load testing cho production" | Production load test = production outage risk. Use staging + k6. |

## Red Flags
- No automated tests at all
- Only E2E tests (inverted pyramid)
- No load testing before launch
- Flaky tests ignored

## Verification
- [ ] Unit tests cover critical logic (>80% coverage)
- [ ] E2E tests cover critical user flows
- [ ] Load tests verify performance targets
- [ ] Tests run in CI/CD pipeline
- [ ] No flaky tests in test suite
