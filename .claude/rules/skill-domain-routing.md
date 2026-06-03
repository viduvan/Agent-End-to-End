# Skill Domain Routing — Định tuyến skill theo domain

> Khi tác vụ liên quan đến một domain cụ thể, sử dụng decision tree này để chọn đúng skill.

## Decision Tree

### Frontend / UI
```
User intent liên quan đến UI?
  ├── Design system / tokens / theme
  │   └── /fis:frontend-design
  ├── React / Vue / Next.js component
  │   └── /fis:frontend-development
  ├── CSS / Tailwind / styling
  │   └── /fis:ui-styling
  ├── Wireframe / mockup
  │   └── /fis:wireframe
  ├── 3D / WebGL / shader
  │   └── /fis:threejs hoặc /fis:shader
  ├── Animation / video
  │   └── /fis:remotion
  ├── React best practices
  │   └── /fis:react-best-practices
  └── TanStack (Query/Router/Table)
      └── /fis:tanstack
```

### Backend / API
```
User intent liên quan đến backend?
  ├── REST API / GraphQL / gRPC
  │   └── /fis:backend-development
  ├── Database / schema / migration
  │   └── /fis:databases
  ├── Authentication / OAuth / JWT
  │   └── /fis:better-auth hoặc /fis:security
  ├── Payment integration
  │   └── /fis:payment-integration
  ├── Shopify / e-commerce
  │   └── /fis:shopify
  └── Web frameworks optimization
      └── /fis:web-frameworks
```

### Codebase Understanding
```
User intent liên quan đến hiểu code?
  ├── Tổng quan codebase
  │   └── /fis:scout
  ├── Knowledge graph / dependency
  │   └── /fis:gkg
  ├── Pack context cho AI
  │   └── /fis:repomix
  ├── Port feature / repo
  │   └── /fis:port-feature hoặc /fis:port-repo
  └── Tìm pattern / file
      └── /fis:scout
```

### DevOps / Infrastructure
```
User intent liên quan đến infra?
  ├── Docker / K8s / IaC
  │   └── /fis:devops
  ├── CI/CD pipeline
  │   └── /fis:ship
  ├── Deploy staging/production
  │   └── /fis:deploy
  ├── Security scan
  │   └── /fis:security-scan
  └── Debug infrastructure
      └── /fis:debug
```

### AI / ML / Agent
```
User intent liên quan đến AI?
  ├── MCP server / tool
  │   └── /fis:mcp-builder
  ├── Browser automation
  │   └── /fis:agent-browser
  ├── Image generation
  │   └── /fis:ai-artist
  ├── Multimodal (image/video/audio)
  │   └── /fis:ai-multimodal
  ├── Google ADK
  │   └── /fis:google-adk-python
  └── Agentize codebase
      └── /fis:agentize
```

### FIS Domain-Specific
```
User intent liên quan đến nghiệp vụ FIS?
  ├── Telecom billing → /fis:bss-billing
  ├── Fintech VN → /fis:fintech-vn
  ├── SAP → /fis:sap
  ├── HR/Payroll → /fis:ehrp
  ├── MVNO → /fis:mvno
  ├── Utility billing → /fis:utility-billing
  ├── Call center → /fis:cti-expert
  └── Telco self-care → /fis:telco-self-care
```

## Fallback Rule
Nếu không match domain nào → dùng `/fis:ask` để phân tích intent trước.
