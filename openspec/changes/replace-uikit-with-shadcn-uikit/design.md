# Design: Replace @hai3/uikit with @acronis/shadcn-uikit

## Context

HAI3 currently maintains its own UI component library (`@hai3/uikit`) built on shadcn/ui patterns. The `@acronis/shadcn-uikit` library provides a similar set of components with the same technology stack (React, Radix UI, Tailwind CSS, class-variance-authority). This creates unnecessary duplication and maintenance overhead.

**Stakeholders:**
- HAI3 app developers (consumers of @hai3/uikit)
- @acronis/shadcn-uikit maintainers (upstream library)

## Goals / Non-Goals

**Goals:**
- Reduce maintenance burden by delegating base component maintenance to @acronis/shadcn-uikit
- Maintain backward compatibility for @hai3/uikit consumers where possible
- Gain access to additional components (Chip, Combobox, Filter, Tree, etc.)
- Keep @hai3/uikit as the public interface (adapter layer)

**Non-Goals:**
- Changing the public API of @hai3/uikit (except where unavoidable)
- Migrating app code to import directly from @acronis/shadcn-uikit
- Removing HAI3-specific composite components

## Decisions

### Decision 1: Adapter Layer Pattern

**What:** Keep `@hai3/uikit` as an adapter layer that re-exports from `@acronis/shadcn-uikit` and provides HAI3-specific components.

**Why:**
- Consumers don't need to change imports
- HAI3 can add/modify components without forking shadcn-uikit
- Allows gradual migration and API shimming

**Alternatives considered:**
- Direct import from @acronis/shadcn-uikit: Rejected - breaks all existing imports, loses HAI3 customizations
- Fork @acronis/shadcn-uikit: Rejected - increases maintenance burden

### Decision 2: Component Categories

Components are categorized into three groups:

1. **Re-export (overlapping):** Components that exist in both libraries with compatible APIs
   - Strategy: Delete HAI3 implementation, re-export from shadcn-uikit
   - Examples: Button, Alert, Dialog, Table, etc.

2. **Keep (HAI3-only):** Components not in shadcn-uikit or with significantly different APIs
   - Strategy: Keep HAI3 implementation, rebuild using shadcn-uikit primitives where beneficial
   - Examples: AspectRatio, Collapsible, ContextMenu, Menubar, Typography, etc.

3. **Add (new from shadcn-uikit):** Components in shadcn-uikit but not in HAI3
   - Strategy: Re-export from shadcn-uikit
   - Examples: Chip, Combobox, Filter, SecondaryMenu, Tag, Tree

### Decision 3: API Compatibility Shims

**What:** For components with minor API differences, provide shims in @hai3/uikit.

**Example - Empty component:**
- HAI3: `EmptyMedia`, `EmptyContent`
- shadcn-uikit: `EmptyIcon`, `EmptyActions`
- Shim: Export aliases `EmptyMedia = EmptyIcon`, `EmptyContent = EmptyActions`

### Decision 4: Composite Components

**What:** Rebuild composite components using shadcn-uikit base components.

**Why:** Ensures consistency and leverages shadcn-uikit's tested implementations.

**Components affected:**
- IconButton → Use shadcn-uikit Button with icon size variant
- DropdownButton → Use shadcn-uikit Button + DropdownMenu
- Sidebar (custom) → Migrate to shadcn-uikit Sidebar system
- Chat components → Rebuild using shadcn-uikit primitives

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| API breaking changes | Provide shims for common patterns; document migration guide |
| shadcn-uikit updates breaking HAI3 | Pin version; test before upgrading |
| Missing features in shadcn-uikit | Keep HAI3 implementations for unique features |
| Bundle size increase | Tree-shaking should handle; monitor bundle size |
| Style conflicts | Use consistent Tailwind config; test visual regression |

## Migration Plan

### Phase 1: Setup (non-breaking)
1. Add `@acronis/shadcn-uikit` as dependency
2. Ensure Tailwind configs are compatible
3. Set up re-export structure in index.ts

### Phase 2: Base Components (breaking)
1. Replace overlapping base components with re-exports
2. Add API shims where needed
3. Test all components in demo app

### Phase 3: Composite Components
1. Rebuild composite components using shadcn-uikit
2. Migrate custom Sidebar to shadcn-uikit Sidebar
3. Update chat components

### Phase 4: New Components
1. Re-export new components from shadcn-uikit
2. Add demos for new components
3. Update documentation

### Rollback
- Revert to previous @hai3/uikit version
- Keep git history of removed implementations for reference

## Open Questions

1. **Skeleton component:** Does shadcn-uikit have Skeleton? Need to verify.
2. **useToast hook:** Is the toast API compatible between libraries?
3. **Theme integration:** How do shadcn-uikit themes interact with HAI3 theme system?
4. **Icon system:** Should we adopt shadcn-uikit's auto-generated icons or keep Lucide direct imports?
