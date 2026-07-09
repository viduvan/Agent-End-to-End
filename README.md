# Agent-End-to-End
**Enterprise Multi-Agent SDLC Framework**

![License](https://img.shields.io/badge/license-MIT-blue)
![Architecture](https://img.shields.io/badge/architecture-Master--Sub%20Agent-orange)
![Engine](https://img.shields.io/badge/engine-Claude%20Code-purple)

**Agent-End-to-End** là một hệ thống điều phối đa tác tử (Multi-Agent Orchestration Framework) được xây dựng trên nền tảng Claude Code. Nó mô phỏng một quy trình phát triển phần mềm chuẩn (SDLC) cho doanh nghiệp bằng cách thiết lập các luồng giao tiếp nghiêm ngặt giữa nhiều tác tử AI, mỗi tác tử đóng một vai trò (Persona) độc lập.

## Tính năng Cốt lõi
* **Master-Sub Agent Model**: 19 AI Personas chuyên biệt (Ví dụ: `Project Manager`, `Solution Architect`, `DEV`, `QA`, `DevOps`) giúp xử lý tác vụ chéo hiệu quả.
* **Tự động hóa hoàn toàn luồng SDLC**: Vận hành dựa trên 16 End-to-end Workflows. Các luồng công việc sẽ tự động luân chuyển từ Khảo sát (Scout) -> Lập kế hoạch (Plan) -> Code (Craft) -> Test -> Review -> Triển khai (Ship).
* **Node.js Pre-execution Hooks**: Can thiệp trực tiếp vào runtime của AI bằng các script chạy ngầm `.cjs`. Tính năng này ngăn chặn tình trạng tràn Context (Context Pollution), tự động nạp môi trường phát triển (Framework, Git branch) và giới hạn quyền đọc/ghi.
* **Anti-hallucination Rules**: Bộ luật 10 quy tắc định tuyến tự động nhắc nhở AI tuân thủ Coding Standards, ép buộc Test Code và viết tài liệu một cách chuẩn xác, không bịa đặt.

## Cấu trúc Repository

Hệ thống điều phối này hoạt động chủ yếu thông qua cấu hình `.claude` và các kịch bản mẫu (Kits).

```
.
├── .claude/
│   ├── agents/          # Chứa 20 Persona Prompt (BA, SA, DEV, DevOps...)
│   ├── skills/          # Chứa 105 Slash commands (/fis:craft, /fis:scout...)
│   ├── workflows/       # 16 Quy trình xử lý end-to-end
│   ├── hooks/           # Các Node.js hooks can thiệp vào Claude Runtime
│   └── rules/           # 10 bộ quy tắc điều phối Team AI
├── artifacts/           # Nơi lưu trữ PRD, TRD, Bug Reports do AI sinh ra
├── agent-skills/        # Mã nguồn phụ trợ mở rộng cho Agent
├── kits/                # Kịch bản (Playbooks) dùng cho DEV Role
├── docs/                # Kiến trúc và hướng dẫn cài đặt bổ sung
├── README_SDLC.md       # (Tài liệu chi tiết) Luồng chạy SDLC & Nâng cấp hệ thống
└── CLAUDE.md            # Default system instruction file
```

## Hướng dẫn Cài đặt & Sử dụng

### 1. Cài đặt Claude Code
Dự án này yêu cầu cài đặt **Claude Code CLI** từ Anthropic. Đảm bảo bạn đã cài đặt Node.js (>=18).
```bash
npm install -g @anthropic-ai/claude-code
```

### 2. Kích hoạt Workspace
Di chuyển vào thư mục dự án và khởi động Agent Orchestrator:
```bash
cd Agent-End-to-End
claude
```
Khi khởi động, script hook `session-init.cjs` sẽ tự động kích hoạt để scan cấu trúc thư mục, nhận diện framework, và tải các agents/skills trong `.claude/` vào bộ nhớ của session.

### 3. Vận hành theo quy trình (The Workflow)
Hãy bắt đầu làm quen với hệ thống bằng các lệnh Slash Command theo đúng luồng:

- **Khám phá**: `/fis:scout "Quét hệ thống và tìm hiểu cách thức hoạt động của module X"`
- **Lập kế hoạch**: `/fis:plan "Thiết kế kế hoạch nâng cấp tính năng Y"`
- **Thực thi**: `/fis:craft "Triển khai code dựa trên phase 1 của kế hoạch"`
- **Kiểm thử**: `/fis:test` (Bắt buộc chạy sau khi viết code)
- **Đóng gói**: `/fis:ship`

## Tài liệu Tham khảo (Documentation)

* Tham khảo file [README_SDLC.md](./README_SDLC.md) để đọc tài liệu về **Chi tiết Luồng 6 bước** và **6 Định hướng mở rộng mạnh mẽ** cho hệ thống này trong tương lai.
* Tham khảo file [.claude/ARCHITECTURE.md](./.claude/ARCHITECTURE.md) để xem chi tiết kiến trúc điều phối bên trong bộ não Agent.

---
*Dự án hướng tới mục tiêu xây dựng một phòng lab R&D hoàn toàn tự động bởi AI!*
