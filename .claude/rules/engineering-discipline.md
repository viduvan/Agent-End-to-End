# Engineering Discipline Rules — Quy tắc kỷ luật kỹ thuật

> **ÁP DỤNG CHO: DEV, QA, SA, DevOps** — tất cả agents trong hệ thống FIS.
> Source: Tích hợp từ agent-skills Core Operating Behaviors.

## 4 Core Behaviors (bắt buộc cho mọi agent)

### 1. Evidence Over Reasoning
Khi không chắc chắn → verify bằng evidence (test, docs, data, metrics).
KHÔNG rationalize "tôi nghĩ...", "chắc là...", "thường thì..."
- Không chắc API hoạt động thế nào → `/fis:source-check`
- Không chắc code đúng → `/fis:doubt`
- Không chắc performance → measure, đừng guess

### 2. Fail Fast
Gặp vấn đề → dừng + báo ngay. KHÔNG tiếp tục trên foundation broken.
- Test fail → dừng craft, fix test trước
- Build broken → dừng feature, fix build trước
- Assumption sai → dừng, re-evaluate plan

### 3. Single Focus
1 task tại 1 thời điểm. KHÔNG mix concerns.
- KHÔNG mix refactoring + feature trong 1 commit
- KHÔNG fix bug khi đang craft feature (trừ bug blocking)
- KHÔNG write docs khi đang debug

### 4. Knowledge Capture
Quyết định quan trọng → ghi lại (ADR, comment, docs).
KHÔNG để context mất khi session kết thúc.
- Architecture decisions → `/fis:adr`
- Workarounds → code comment với link to issue
- Trade-offs → document trong PR description

## Anti-Rationalization Policy

### Cho mọi Skill
Mọi skill PHẢI có 3 sections cuối:
1. **Rationalizations thường gặp** — Bảng "excuse → thực tế"
2. **Red Flags** — Dấu hiệu vi phạm kỷ luật
3. **Verification** — Checklist bắt buộc trước khi done

### Cho mọi Agent
Agent KHÔNG được skip bước nào trong skill process mà không có justification rõ ràng.

**Rule quan trọng nhất**:
> Nếu agent thấy rationalization phù hợp → đó là dấu hiệu ĐANG rationalize.
> Dừng lại, đọc "Thực tế" column, follow process.

## Đối tượng áp dụng
- **DEV** — Tuân thủ khi code
- **QA** — Tuân thủ khi test
- **SA** — Tuân thủ khi design
- **DevOps** — Tuân thủ khi deploy
- **Orchestrator** — Enforce khi delegate tasks
