# Agent-End-to-End: Quy trình SDLC Multi-Agent Chi tiết

Tài liệu này mô tả chi tiết luồng hoạt động 6 bước (SDLC Workflow Pipeline) của hệ thống **Agent-End-to-End** và các định hướng phát triển (Future Enhancements). Để xem kiến trúc tổng quan, vui lòng xem [README.md](./README.md).

---

## 1. Chi tiết Luồng hoạt động 6 bước (SDLC Workflow Pipeline)

Mọi yêu cầu phức tạp đều được hệ thống ép đi qua luồng 6 bước (6-stage pipeline) nhằm đảm bảo chất lượng code và ngăn chặn rủi ro phá vỡ hệ thống:

### Bước 1: Khảo sát & Phân tích bối cảnh (Scout)
- **Hoạt động**: Thay vì code ngay lập tức, AI phải dùng lệnh `/fis:scout` để quét toàn bộ workspace, phân tích cấu trúc dự án, đọc tài liệu kiến trúc (Architecture Docs) và tìm hiểu các design patterns hiện có.
- **Guardrail (Hook bảo vệ)**: Hook `scout-block.cjs` (Node.js) tự động kích hoạt để chặn đứng các truy vấn đệ quy vào các thư mục "rác" (như `node_modules`, `dist`, `__pycache__`). Điều này giúp tiết kiệm Token và tránh tình trạng AI bị "loãng" ngữ cảnh (Context Pollution).

### Bước 2: Lập kế hoạch (Plan)
- **Hoạt động**: Dựa vào thông tin thu thập được từ bước Scout, `Planner Agent` hoặc `Solution Architect Agent` sẽ thiết kế một kế hoạch thực thi chi tiết (Implementation Plan).
- **Guardrail (Hook bảo vệ)**: Kế hoạch bắt buộc phải được định dạng theo cấu trúc Kanban (nhờ sự can thiệp của `plan-format-kanban.cjs`), trong đó vạch rõ: Các file sẽ thay đổi, Rủi ro tiềm ẩn, và Checklist công việc.

### Bước 3: Lập trình (Craft)
- **Hoạt động**: `DEV Agent` nhận Plan và bắt đầu viết code (`/fis:craft`). 
- **Guardrail (Hook bảo vệ)**: Khi session bắt đầu, `session-init.cjs` tự động phân tích và nhúng thông tin về Framework (VD: React, FastAPI, Next.js) và nhánh Git hiện tại (git branch) vào System Prompt, giúp AI sinh code chuẩn xác với môi trường thực tế. 

### Bước 4: Kiểm thử (Test)
- **Hoạt động**: Châm ngôn của hệ thống là **"Code không có Test là code chết"**. `QA Agent` sẽ tiến hành viết và chạy Test-spec, Unit Test, hoặc E2E Test.
- **Guardrail (Hook bảo vệ)**: Anti-pattern Rules ép hệ thống phải chạy lệnh `/fis:test` ngay sau khi `/fis:craft`. Nếu phát sinh lỗi, workflow tự động chuyển hướng sang `/fis:debug` thay vì cố gắng đoán mò.

### Bước 5: Đánh giá (Code Review)
- **Hoạt động**: `Code Reviewer Agent` kiểm tra toàn bộ thay đổi.
- **Tiêu chuẩn**: Rà soát bảo mật (Security Scan), kiểm tra chuẩn Clean Code (như PEP 8 của Python), và đánh giá tối ưu hiệu năng (Performance Optimization) trước khi cấp quyền Merge.

### Bước 6: Đóng gói & Lưu trữ Tri thức (Ship & Journal)
- **Hoạt động**: `Git Manager` tạo commit với nội dung chuẩn (Conventional Commits) và đẩy (push) code.
- **Lưu trữ**: `Docs Manager Agent` tự động viết Journal (Nhật ký) và cập nhật tài liệu dự án để các phiên làm việc sau của AI có thể học hỏi từ kinh nghiệm này, đóng gói thành quy trình "kế thừa tri thức".

---

## 2. Những định hướng nâng cấp trong tương lai (Future Enhancements)

Hệ thống Agent-End-to-End hiện tại là một bộ khung rất mạnh. Để đưa dự án lên tầm mức "Enterprise AI Framework" thực thụ, dưới đây là các ý tưởng có thể bổ sung thêm:

### 1. Tích hợp RAG (Retrieval-Augmented Generation) với Vector DB
- **Hiện tại**: AI phải cào folder hoặc dùng keyword search để tìm kiếm tri thức dự án.
- **Đề xuất**: Tích hợp PostgreSQL (`pgvector`) hoặc ChromaDB. Cho phép Agent index toàn bộ Codebase, Docs, và JIRA tickets. Khi AI cần bối cảnh, nó có thể tìm kiếm theo ngữ nghĩa (Semantic Search) để lấy ra đúng đoạn code cần thiết trong mili-giây, giảm thiểu tối đa Token đọc file.

### 2. Dashboard Quản trị & Theo dõi Token (UI/UX)
- **Hiện tại**: Toàn bộ hệ thống chạy trên Terminal (CLI).
- **Đề xuất**: Dựng một Web Dashboard (VD: React + FastAPI) để:
  - Trực quan hóa đồ thị (Graph) luồng giao tiếp giữa các Master-Sub Agents.
  - Thống kê chi tiết **Token Usage & API Cost** cho từng Agent/Task để phát hiện "nút thắt" tốn kém.

### 3. Tích hợp sâu CI/CD Pipeline Agent
- **Đề xuất**: Cấp quyền (qua API) cho `DevOps Agent` để nó có thể tự động trigger các luồng build trên GitHub Actions hoặc GitLab CI. Nếu CI/CD báo lỗi, Agent sẽ tự động kéo (pull) logs về, phân tích và đề xuất luôn bản vá lỗi (hotfix).

### 4. Cơ chế Đánh giá và Phản biện chéo (Multi-Agent Peer Review)
- **Đề xuất**: Tại bước Code Review, thiết lập cơ chế để 2 Agents phản biện lẫn nhau (Debate). Ví dụ: `DEV Agent` nộp code -> `Security Agent` tấn công và bắt lỗi -> Hai bên tranh luận logic trong tối đa 3 vòng (max rounds) để chốt ra phương án an toàn nhất rồi mới trình bày cho con người phê duyệt.

### 5. Multi-LLM Fallback & Tối ưu hóa Chi phí (Routing)
- **Đề xuất**: Phân loại độ khó của task để chọn Model phù hợp:
  - Các task nhẹ (Format lại Code, Đọc lỗi Syntax, Viết comment): Đẩy cho Local LLM (Llama 3, Qwen) thông qua Ollama để giảm 100% chi phí.
  - Các task nặng (Lập kế hoạch kiến trúc, Logic thuật toán): Đẩy cho Claude 3.5 Sonnet hoặc GPT-4o.
  - Xây dựng cơ chế **Fallback**: Nếu Claude API sập hoặc quá tải (Rate limit), tự động chuyển mạch sang OpenAI/Gemini.

### 6. Cung cấp API Sandbox (Bảo mật Runtime)
- **Đề xuất**: Mặc dù đã có Node.js hooks bảo vệ, các Sub-agent vẫn có rủi ro chạy nhầm lệnh phá hoại (`rm -rf`, `drop table`). Có thể đóng gói môi trường thực thi của Agent vào một **Docker Container Sandbox** cô lập. Agent chỉ được quyền execute code bên trong Docker, đảm bảo an toàn tuyệt đối cho máy Host.
