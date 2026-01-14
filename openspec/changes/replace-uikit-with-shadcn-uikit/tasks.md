# Tasks: Replace @hai3/uikit with @acronis/shadcn-uikit

## 1. Setup & Configuration

- [x] 1.1 Add `@acronis/shadcn-uikit` as a dependency in `packages/uikit/package.json`
- [x] 1.2 Verify Tailwind CSS configuration compatibility between libraries
- [x] 1.3 Ensure CSS imports are properly configured (shadcn-uikit.css)

## 2. Base Components - Re-exports

- [x] 2.1 Create re-export structure for overlapping components in `index.ts`
- [x] 2.2 Replace Alert components with re-exports from @acronis/shadcn-uikit
- [x] 2.3 Replace Avatar components with re-exports
- [x] 2.4 Replace Accordion components with re-exports
- [x] 2.5 Replace Badge component with re-export
- [x] 2.6 Replace Breadcrumb components with re-exports
- [x] 2.7 Replace Button components with re-exports
- [x] 2.8 Replace ButtonGroup components with re-exports
- [x] 2.9 Replace Calendar component with re-export
- [x] 2.10 Replace Card components with re-exports
- [x] 2.11 Replace Carousel components with re-exports
- [x] 2.12 Replace Chart components with re-exports
- [x] 2.13 Replace Checkbox component with re-export
- [x] 2.14 Replace Command components with re-exports
- [x] 2.15 Replace DataTable components with re-exports
- [x] 2.16 Replace DatePicker components with re-exports
- [x] 2.17 Replace Dialog components with re-exports
- [x] 2.18 Replace Drawer components with re-exports
- [x] 2.19 Replace Sheet components with re-exports
- [x] 2.20 Replace AlertDialog components with re-exports
- [x] 2.21 Replace DropdownMenu components with re-exports
- [x] 2.22 Replace Empty components with re-exports (add API shims for EmptyMedia/EmptyContent)
- [x] 2.23 Replace Field components with re-exports (kept local - not in shadcn-uikit)
- [x] 2.24 Replace Form components with re-exports
- [x] 2.25 Replace Input component with re-export
- [x] 2.26 Replace Label component with re-export
- [x] 2.27 Replace NavigationMenu components with re-exports
- [x] 2.28 Replace Pagination components with re-exports
- [x] 2.29 Replace Popover components with re-exports
- [x] 2.30 Replace Progress component with re-export
- [x] 2.31 Replace RadioGroup components with re-exports
- [x] 2.32 Replace ScrollArea components with re-exports
- [x] 2.33 Replace Select components with re-exports
- [x] 2.34 Replace Separator component with re-export
- [x] 2.35 Replace Sidebar components with re-exports (add new components from shadcn-uikit)
- [x] 2.36 Replace Toaster (sonner) with re-export
- [x] 2.37 Replace Spinner component with re-export
- [x] 2.38 Replace Switch component with re-export
- [x] 2.39 Replace Table components with re-exports
- [x] 2.40 Replace Tabs components with re-exports
- [x] 2.41 Replace Textarea component with re-export
- [x] 2.42 Replace Tooltip components with re-exports

## 3. HAI3-Only Components - Keep/Rebuild

- [x] 3.1 Keep AspectRatio component (simple Radix wrapper)
- [x] 3.2 Keep Collapsible component (simple Radix wrapper)
- [x] 3.3 Keep ContextMenu component (Radix-based)
- [x] 3.4 Keep Header component (HAI3 custom)
- [x] 3.5 Keep HoverCard component (Radix-based)
- [x] 3.6 Keep InputGroup (HAI3 custom - uses shadcn-uikit Input internally)
- [x] 3.7 Keep InputOTP component (uses input-otp library)
- [x] 3.8 Keep Item component (HAI3 custom layout)
- [x] 3.9 Keep Kbd component (HAI3 custom)
- [x] 3.10 Keep Menubar component (Radix-based)
- [x] 3.11 Keep NativeSelect component (native HTML wrapper)
- [x] 3.12 Keep Resizable component (react-resizable-panels wrapper)
- [x] 3.13 Keep Skeleton (local - not in shadcn-uikit)
- [x] 3.14 Keep Slider component (Radix-based)
- [x] 3.15 Keep Toggle/ToggleGroup components (Radix-based)
- [x] 3.16 Keep Typography components (HAI3 custom)

## 4. Composite Components - Kept as-is

- [x] 4.1 Keep IconButton (uses Button from shadcn-uikit via re-export)
- [x] 4.2 Keep DropdownButton (uses Button + DropdownMenu from shadcn-uikit via re-export)
- [x] 4.3 Keep custom Sidebar components for backward compatibility (SidebarMenuLabel, SidebarMenuIcon)
- [x] 4.4 Sidebar now uses shadcn-uikit full system (SidebarProvider, useSidebar, etc.)
- [x] 4.5 Keep UserInfo (uses Avatar from shadcn-uikit via re-export)
- [x] 4.6 Keep MessageBubble (HAI3 custom)
- [x] 4.7 Keep ChatInput (HAI3 custom)
- [x] 4.8 Keep ThreadList (HAI3 custom)

## 5. New Components - Add Re-exports

- [x] 5.1 Add Chip component re-export
- [x] 5.2 Combobox - not available in shadcn-uikit (skipped)
- [x] 5.3 Add Filter component re-export
- [x] 5.4 Add SecondaryMenu component re-export
- [x] 5.5 Add Tag component re-export
- [x] 5.6 Add Tree component re-export
- [x] 5.7 Add ThemeProvider component re-export
- [x] 5.8 Add ModeToggle component re-export

## 6. Hooks & Utilities

- [x] 6.1 Keep useToast hook (HAI3 implementation)
- [x] 6.2 Keep applyTheme utility (HAI3 theme system)
- [x] 6.3 Re-export cn utility from shadcn-uikit lib/utils

## 7. Types & Contracts

- [x] 7.1 Update type exports to match shadcn-uikit types where applicable
- [x] 7.2 Keep HAI3-specific contract types (UiKitComponent, UiKitIcon, etc.)
- [x] 7.3 Type exports maintained for backward compatibility

## 8. Icons

- [x] 8.1 Keep custom HAI3 icons (MenuIcon, CloseIcon, etc.)
- [x] 8.2 shadcn-uikit auto-generated icons available via direct import (optional)

## 9. Cleanup

- [ ] 9.1 Remove unused base component files from `src/base/` (deferred - keeping for reference)
- [x] 9.2 package.json exports unchanged (backward compatible)
- [ ] 9.3 Update README with migration notes

## 10. Testing & Validation

- [x] 10.1 Run TypeScript compilation to verify exports ✅
- [x] 10.2 Build package successfully ✅
- [x] 10.3 Full app build successful ✅
- [x] 10.4 Run architecture checks - passed with expected warnings (unused deps now re-exported)
- [x] 10.5 Bundle size: index.js 97KB (reasonable)
