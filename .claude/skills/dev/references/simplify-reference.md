# Reference: /fis:simplify — Code Simplification Deep Dive

> Tài liệu tra cứu chi tiết. File compact: `../simplify.md`

## Language-Specific Simplification Patterns

### TypeScript
```typescript
// ❌ Over-typed
const getUser = (id: string): Promise<User | null | undefined> => { ... }

// ✅ Simplified
const getUser = (id: string): Promise<User | null> => { ... }
// undefined = bug. null = not found. Pick one.
```

```typescript
// ❌ Unnecessary wrapper
class UserService {
  getUser(id: string) { return this.repo.findById(id); }
  saveUser(user: User) { return this.repo.save(user); }
}

// ✅ Just use the repo directly (if no added logic)
// Remove UserService if it's a pure pass-through
```

### Python
```python
# ❌ Overly clever
result = next((x for x in items if x.valid), None) or default_item

# ✅ Clear
result = default_item
for item in items:
    if item.valid:
        result = item
        break
```

```python
# ❌ Nested conditions
def process(data):
    if data:
        if data.valid:
            if data.ready:
                return handle(data)
    return None

# ✅ Guard clauses (early return)
def process(data):
    if not data:
        return None
    if not data.valid:
        return None
    if not data.ready:
        return None
    return handle(data)
```

### React
```tsx
// ❌ Over-abstracted
const Button = ({ variant, size, color, ...props }) => (
  <StyledButton $variant={variant} $size={size} $color={color} {...props} />
);
const PrimaryButton = (props) => <Button variant="primary" {...props} />;
const SmallPrimaryButton = (props) => <PrimaryButton size="small" {...props} />;

// ✅ Just use CSS classes
const Button = ({ className, ...props }) => (
  <button className={`btn ${className}`} {...props} />
);
// Usage: <Button className="btn-primary btn-sm">Click</Button>
```

## Complexity Metrics — When to Simplify

| Metric | Threshold | Action |
|--------|-----------|--------|
| Function LOC | > 50 | Extract smaller functions |
| File LOC | > 300 | Split into modules |
| Cyclomatic complexity | > 10 | Reduce branches/conditions |
| Nesting depth | > 3 | Guard clauses, extract |
| Parameters | > 4 | Use options object |
| Dependencies | > 10 imports | Check for god module |

## Chesterton's Fence Decision Tree

```
Code looks unnecessary/complex
    │
    ├── Check git blame → who wrote it? when?
    │   └── Recent (< 3 months) → Ask the author
    │   └── Old (> 6 months) → Check PR/commit for context
    │
    ├── Check for comments/ADRs explaining WHY
    │   └── Found explanation → Understand before changing
    │   └── No explanation → Proceed with caution
    │
    ├── Check test coverage
    │   └── Tests exist → Run them, understand what they test
    │   └── No tests → Write tests BEFORE simplifying
    │
    └── Still unclear?
        └── ASK → Don't delete what you don't understand
```
