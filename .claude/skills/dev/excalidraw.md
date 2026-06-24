# Skill: /fis:excalidraw — Excalidraw Diagrams

> Tạo diagrams dạng JSON Excalidraw. Architecture, flowcharts, wireframes, system design.

## Khi nào dùng
- Vẽ architecture diagrams (system design, microservices)
- Flowcharts và process diagrams
- Wireframes và UI sketches
- Whiteboard-style collaborative diagrams

## Agent
Solutions Architect, UI/UX Designer

## Prompt mẫu
```
/fis:excalidraw "Draw microservices architecture: API Gateway → Auth Service, User Service, Order Service → PostgreSQL, Redis"
```
```
/fis:excalidraw "Create user registration flowchart with email verification and error handling"
```

## Nguyên tắc
- Output JSON Excalidraw format (importable)
- Keep diagrams simple and readable
- Use consistent shapes and colors

## Verification
- [ ] JSON valid và importable vào Excalidraw
- [ ] Diagram readable (không quá phức tạp)
- [ ] Labels clear
