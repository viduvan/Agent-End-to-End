# Workflow PM-1: Khởi tạo & Quản trị dự án ⭐ (Quan trọng nhất)

## Kịch bản
Dự án mới — cần dựng artifact PMP-aligned trước kickoff, vận hành governance hàng tuần.

## Skills: `/fis:pm`, `/fis:plan`, `/fis:project-management`

## Output cuối
Bộ artifact `artifacts/pm/` đầy đủ:
- Charter (signed)
- Stakeholder Register
- Comms Plan
- Risk Register
- RAID Log (live)
- Status Report (weekly)
- Lessons Learned (per phase)
- Retro (per sprint)

---

## Quy trình 14 bước

### Phase 1: Pre-Kickoff (Ngày 1-3)

#### Bước 1: Khởi tạo repo + docs
```bash
git clone <repo-url> && cd project
```
```
/fis:docs init
```
→ Sinh `docs/project-overview.md`, `docs/system-architecture.md`, `docs/code-standards.md`

#### Bước 2: Sinh Project Charter
```
/fis:pm charter
```
→ `artifacts/pm/PROJECT-CHARTER.md`
→ Export `.docx` → Sponsor ký → `artifacts/pm/signed/`

#### Bước 3: Stakeholder Register
```
/fis:pm stakeholder-register
```
→ `artifacts/pm/STAKEHOLDER-REGISTER.md`

#### Bước 4: Communications Plan
```
/fis:pm comms-plan
```
→ `artifacts/pm/COMMS-PLAN.md`

#### Bước 5: Risk Register
```
/fis:pm risk-register
```
→ `artifacts/pm/RISK-REGISTER.md`
→ Bổ sung AI-specific risks nếu có LLM component

#### Bước 6: RAID Log
```
/fis:pm raid-log
```
→ `artifacts/pm/RAID-LOG.md`

#### Bước 7: Team Personas
```
/fis:ba personas
```
→ `artifacts/personas/PERSONAS.md`

#### Bước 8: Plan Kickoff Meeting
```
/fis:plan
Kickoff meeting — agenda 90 phút, attendee theo stakeholder register.
```
→ Pre-kickoff: gửi charter + stakeholder register 48h trước

---

### Phase 2: Kickoff (Ngày 4-5)

#### Bước 9: Kickoff meeting
- Present: Charter, Scope, Timeline, Risk highlights
- BA: User personas, high-level requirements
- SA: Architecture overview, tech stack decision
- Action items: phân công task đầu tiên

#### Bước 10: Post-kickoff
- Minutes + action items trong `artifacts/pm/RAID-LOG.md` (section Actions)
- Setup standup schedule + kênh communication

---

### Phase 3: Governance (Ongoing)

#### Bước 11: Weekly Status Report (mỗi thứ Sáu)
```
/fis:pm status-report
```
→ `artifacts/pm/status-{date}.md` (RAG format)
→ Gửi sponsor qua email/Word export

#### Bước 12: Change Request (khi scope thay đổi)
```
/fis:ba cr
```
→ `artifacts/change-requests/CR-NNNN.md`
→ Impact analysis → CCB approve/reject → Update charter nếu approved

#### Bước 13: Lessons Learned (cuối mỗi phase)
```
/fis:pm lessons-learned
```
→ `artifacts/pm/LESSONS-{phase}.md`

#### Bước 14: Gate Review với Sponsor
Mang vào: Charter (signed) + Status cuối phase + Lessons + Next phase plan
→ Sponsor approve → tiếp; không approve → re-plan

---

## Cadence tổng hợp

| Tần suất | Hoạt động | Skill |
|----------|-----------|-------|
| **Hàng ngày** | Standup 15 phút, review RAID | Manual |
| **Hàng tuần** | Mon: re-plan, Wed: risk review, Fri: status | `/fis:pm status-report` |
| **Hàng tháng** | Stakeholder refresh, budget check, lessons | `/fis:pm lessons-learned` |
| **Cuối phase** | Gate review + retro | `/fis:pm retro` |

---

## FAQ

### "Sponsor đòi tăng scope mà không tăng budget"
→ `/fis:ba cr` sinh CR với impact analysis
→ Mang vào meeting: "Approve CR = trade-off feature X bị defer hoặc tăng budget Y%"
→ PM KHÔNG thỏa hiệp ngầm — luôn document trade-off

### "Team không update kanban/checkbox"
→ Standup hỏi: "Check checkbox nào hôm qua?" — peer pressure works
→ Setup git hook auto check plan status

### "Risk register 47 items, không ai đọc"
→ Chỉ surface Top 5 risk vào status report
→ Critical/High (P×I ≥ 12): mention bắt buộc
→ Medium: mention nếu có movement
→ Low: hide

---

## Bài học chính
1. **Charter ký trước code** — không charter = không cam kết
2. **RAID log = single source of truth** — không rải rác Slack/email
3. **Status 1 trang** — RAG + Top 3 highlight + Top 3 ask
4. **Stakeholder mapping định kỳ** — tổ chức thay đổi liên tục
5. **CR là bạn** — document mọi thay đổi, bảo vệ team khi audit
6. **Lessons learned share** — chia sẻ với PM khác để tránh lặp sai lầm
7. **Gate review thật** — sponsor có quyền dừng, đừng fear
