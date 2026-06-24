# Skill: /fis:chrome-devtools — Chrome DevTools Automation

> Tự động hoá Chrome bằng Puppeteer CLI và session persistent. Scraping, testing, screenshots, performance profiling.

## Khi nào dùng
- Automated browser testing (E2E)
- Web scraping và data extraction
- Screenshot/PDF generation
- Performance profiling (Lighthouse)
- Visual regression testing

## Agent
Fullstack Developer, Tester

## Khả năng cốt lõi
- Puppeteer automation (headless/headful Chrome)
- Session persistence across runs
- Screenshot/PDF capture
- Network monitoring và interception
- Performance auditing (Lighthouse CLI)
- Console log capture

## Prompt mẫu

### Screenshot pages
```
/fis:chrome-devtools
"Take screenshots of all pages listed in sitemap.xml at 3 viewport sizes (mobile, tablet, desktop)"
```

### Scrape data
```
/fis:chrome-devtools
"Navigate to competitor pricing page, extract all plan names, prices, and features into JSON"
```

### Performance audit
```
/fis:chrome-devtools
"Run Lighthouse audit on all public pages, generate performance report with recommendations"
```

### Session automation
```
/fis:chrome-devtools
"Login to admin panel, navigate to user management, export user list as CSV"
```

## Nguyên tắc
- Dùng headless mode cho CI/CD
- Persistent sessions để tránh login lại
- Wait cho elements trước khi interact (no arbitrary sleeps)
- Close browser khi xong (prevent zombie processes)

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "curl/wget đủ cho scraping" | Dynamic sites cần JavaScript execution. Puppeteer = full browser = full content. |
| "Manual testing đủ rồi" | Manual testing không reproducible, không scale. Automated = consistent + CI/CD. |

## Red Flags
- `sleep()` thay vì `waitForSelector()` (flaky tests)
- Không close browser (zombie processes)
- Hardcoded selectors (fragile)
- Missing error screenshots (debug khó)

## Verification
- [ ] Headless mode hoạt động
- [ ] Wait strategies dùng đúng (waitForSelector, not sleep)
- [ ] Browser closed sau khi xong
- [ ] Error screenshots captured cho debugging
- [ ] Selectors resilient (data-testid preferred)
