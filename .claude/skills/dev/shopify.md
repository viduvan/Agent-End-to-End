# Skill: /fis:shopify — Shopify Development

> Xây dựng ứng dụng Shopify, checkout extensions, tích hợp admin và themes với GraphQL APIs và Shopify CLI.

## Khi nào dùng
- Xây dựng ứng dụng Shopify public hoặc custom
- Tạo checkout/admin/POS UI extensions
- Phát triển themes với Liquid templating
- Tích hợp dịch vụ bên ngoài với webhooks
- Quản lý sản phẩm, đơn hàng, kho hàng qua API

## Khi KHÔNG dùng
- Phạm vi cross-cutting lớn → dùng `/fis:plan` trước
- Yêu cầu chưa rõ → dùng `/fis:scout` trước

## Agent
Fullstack Developer (Senior Engineer)

## Input
- Shopify store/partner account
- App type (public/custom/embedded)
- Extension requirements

## Output
- Shopify app/extension/theme code
- GraphQL queries/mutations
- Webhook handlers
- OAuth setup

## Khả năng cốt lõi
- **Frameworks**: React (extensions), Remix, Node.js (apps)
- **APIs**: GraphQL Admin (khuyến nghị), REST Admin (legacy), Storefront API

## Prompt mẫu

### Custom Checkout Fields
Đối tượng: E-commerce store thêm tùy chọn quà tặng
```
/fis:shopify
"Create checkout extension with gift message field, delivery instructions, and save to order metafields. Show in admin order view."
```

### Ứng Dụng Quản Lý Kho Hàng
Đối tượng: Nhà bán lẻ đa địa điểm
```
/fis:shopify
"Build Shopify app that tracks inventory across locations, sends low stock alerts via email, and auto-creates purchase orders. PostgreSQL backend."
```

### Dashboard Analytics Admin
Đối tượng: Chủ store cần báo cáo tùy chỉnh
```
/fis:shopify
"Add admin extension showing top products this month, revenue by category, and customer lifetime value charts with Polaris."
```

### Tích Hợp Đồng Bộ Sản Phẩm
Đối tượng: Doanh nghiệp có hệ thống ERP bên ngoài
```
/fis:shopify
"Create Shopify app that syncs products from our REST API every hour, updates inventory via GraphQL, handles webhooks for order fulfillment."
```

### Logic Giảm Giá B2B
Đối tượng: Nhà bán buôn B2B
```
/fis:shopify
"Build Shopify Function applying tiered discounts based on customer tags, order volume, and product collections."
```

## Quick Start
```bash
# Cài đặt Shopify CLI
npm install -g @shopify/cli@latest
shopify version

# Tạo App
shopify app init
shopify app dev          # Phát triển local
shopify app deploy       # Deploy production

# Tạo Theme
shopify theme init
shopify theme dev        # Xem trước tại localhost:9292
shopify theme push       # Deploy lên store
```

## Các Pattern Cốt Lõi

### GraphQL Product Query
```graphql
query {
  products(first: 10) {
    edges {
      node {
        id
        title
        variants(first: 5) {
          edges {
            node { id price inventoryQuantity }
          }
        }
      }
    }
  }
}
```

### Checkout Extension
```tsx
import { reactExtension, BlockStack, TextField } from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => <Extension />);

function Extension() {
  return (
    <BlockStack>
      <TextField label="Gift Message" />
    </BlockStack>
  );
}
```

### Webhook Handler
```javascript
app.post('/webhooks/orders', async (req, res) => {
  const hmac = req.headers['x-shopify-hmac-sha256'];
  const verified = verifyWebhook(req.body, hmac);
  if (verified) {
    const order = req.body;
    // Xử lý đơn hàng
  }
  res.status(200).send();
});
```

## Nguyên tắc
- Dùng GraphQL thay REST cho phát triển mới (hiệu suất tốt hơn, giới hạn dựa trên chi phí)
- Yêu cầu scopes tối thiểu trong OAuth để vượt qua app review nhanh hơn
- Triển khai retry logic cho API calls với exponential backoff
- Cache API responses để giảm chi phí và cải thiện tốc độ
- Kiểm tra trên development stores (miễn phí qua Partner Dashboard)
- Theo dõi rate limits qua header `X-Shopify-Shop-Api-Call-Limit`
- Dùng bulk operations để xử lý 1000+ resources
- Xác minh webhook signatures bằng HMAC để ngăn chặn giả mạo

## Skills liên quan
- `/fis:backend-development` — Các pattern tích hợp API
- `/fis:databases` — PostgreSQL cho dữ liệu ứng dụng
- `/fis:frontend-development` — React extensions

## Rationalizations thường gặp

| Rationalization | Thực tế |
|---|---|
| "REST API đủ dùng" | REST là legacy. GraphQL có rate limiting tốt hơn, response nhỏ hơn, typed hơn. |
| "Skip webhook verification cho dev" | Dev habits = prod habits. HMAC verify từ ngày đầu. |
| "Request all scopes cho đỡ phiền" | Over-scoping = app review rejected. Request tối thiểu, mở rộng sau. |
| "Cache không cần thiết" | Shopify rate limit 2 calls/s. Không cache = block production app. |

## Red Flags
- Dùng REST API cho feature mới (nên dùng GraphQL)
- Over-scoping OAuth permissions
- Không verify webhook HMAC signatures
- Không handle rate limits (X-Shopify-Shop-Api-Call-Limit)
- Hardcode store URLs/tokens

## Verification
- [ ] GraphQL được dùng cho tất cả feature mới
- [ ] OAuth scopes tối thiểu theo nhu cầu
- [ ] Webhook HMAC verification hoạt động
- [ ] Rate limit handling với exponential backoff
- [ ] Test trên development store trước production
- [ ] Bulk operations cho large data sets (>100 items)
