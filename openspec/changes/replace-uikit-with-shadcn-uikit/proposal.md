# Change: Replace @hai3/uikit internals with @acronis/shadcn-uikit

## Why

The `@hai3/uikit` package duplicates many base components already available in `@acronis/shadcn-uikit`. By adopting `@acronis/shadcn-uikit` as the foundation, we reduce maintenance burden, gain access to additional components (Chip, Combobox, Filter, Tree, etc.), and ensure consistency with the Acronis design system.

## What Changes

- **BREAKING**: Remove internal implementations of overlapping base components (Alert, Avatar, Button, etc.) and re-export from `@acronis/shadcn-uikit`
- **BREAKING**: Some component APIs may have minor differences (e.g., Empty component structure differs slightly)
- Keep `@hai3/uikit` as the public interface - consumers continue importing from `@hai3/uikit`
- HAI3-only base components (AspectRatio, Collapsible, ContextMenu, Header, HoverCard, InputGroup, InputOTP, Item, Kbd, Menubar, NativeSelect, Resizable, Skeleton, Slider, Toggle, Typography) rebuilt using `@acronis/shadcn-uikit` primitives where possible
- Composite components (IconButton, DropdownButton, Sidebar, UserInfo, Chat components) rebuilt using `@acronis/shadcn-uikit` base components
- Custom icons retained in `@hai3/uikit`
- Re-export new components from `@acronis/shadcn-uikit` (Chip, Combobox, Filter, SecondaryMenu, Tag, Tree, ThemeProvider, ModeToggle)

## Impact

- **Affected specs**: `uikit-base`, `uikit-toast`
- **Affected code**:
  - `packages/uikit/src/index.ts` - Main export file
  - `packages/uikit/src/base/*` - All base component files
  - `packages/uikit/src/composite/*` - All composite component files
  - `packages/uikit/package.json` - Add `@acronis/shadcn-uikit` as dependency
  - App code using uikit - May need minor adjustments for API differences

## Component Mapping

### Overlapping (re-export from @acronis/shadcn-uikit)

| HAI3 Component | shadcn-uikit Equivalent | Notes |
|----------------|------------------------|-------|
| Alert, AlertTitle, AlertDescription | Alert, AlertTitle, AlertDescription | Direct re-export |
| Avatar, AvatarImage, AvatarFallback | Avatar, AvatarImage, AvatarFallback | Direct re-export |
| Accordion, AccordionItem, AccordionTrigger, AccordionContent | Same | Direct re-export |
| Badge | Badge | Direct re-export |
| Breadcrumb, BreadcrumbList, etc. | Same | Direct re-export |
| Button, buttonVariants | Button, buttonVariants | Direct re-export |
| ButtonGroup, ButtonGroupText, ButtonGroupSeparator | ButtonGroup, ButtonGroupText, ButtonGroupSeparator | Direct re-export |
| Calendar | Calendar | Direct re-export |
| Card, CardHeader, etc. | Same | Direct re-export |
| Carousel, CarouselContent, etc. | Same | Direct re-export |
| Chart components | Same | Direct re-export |
| Checkbox | Checkbox | Direct re-export |
| Command, CommandDialog, etc. | Same | Direct re-export |
| DataTable, DataTablePagination, etc. | Same | Direct re-export |
| DatePicker | DatePicker | Direct re-export |
| Dialog, DialogContent, etc. | Same | Direct re-export |
| Drawer, DrawerContent, etc. | Same | Direct re-export |
| Sheet, SheetContent, etc. | Same | Direct re-export |
| AlertDialog, AlertDialogContent, etc. | Same | Direct re-export |
| DropdownMenu, DropdownMenuContent, etc. | Same | Direct re-export |
| Empty, EmptyHeader, EmptyTitle, EmptyDescription | Same | API differs: EmptyMedia→EmptyIcon, EmptyContent→EmptyActions |
| Field, FieldSet, FieldGroup, etc. | Same | Direct re-export |
| Form, FormField, FormItem, etc. | Same | Direct re-export |
| Input | Input | Direct re-export |
| Label | Label | Direct re-export |
| NavigationMenu, NavigationMenuList, etc. | Same | Direct re-export |
| Pagination, PaginationContent, etc. | Same | Direct re-export |
| Popover, PopoverTrigger, PopoverContent | Same | Direct re-export |
| Progress | Progress | Direct re-export |
| RadioGroup, RadioGroupItem | Same | Direct re-export |
| ScrollArea, ScrollBar | Same | Direct re-export |
| Select, SelectContent, etc. | Same | Direct re-export |
| Separator | Separator | Direct re-export |
| Sidebar components | Same | shadcn-uikit has more (SidebarProvider, useSidebar, etc.) |
| Toaster (sonner) | Toaster | Direct re-export |
| Spinner | Spinner | Direct re-export |
| Switch | Switch | Direct re-export |
| Table, TableHeader, etc. | Same | Direct re-export |
| Tabs, TabsList, etc. | Same | Direct re-export |
| Textarea | Textarea | Direct re-export |
| Tooltip, TooltipTrigger, etc. | Same | Direct re-export |

### HAI3-Only (keep or rebuild)

| Component | Strategy |
|-----------|----------|
| AspectRatio | Keep (simple Radix wrapper) |
| Collapsible | Keep (simple Radix wrapper) |
| ContextMenu | Keep (Radix-based) |
| Header | Keep (HAI3 custom) |
| HoverCard | Keep (Radix-based) |
| InputGroup | Rebuild using shadcn-uikit Input |
| InputOTP | Keep (uses input-otp library) |
| Item | Keep (HAI3 custom layout component) |
| Kbd | Keep (HAI3 custom) |
| Menubar | Keep (Radix-based) |
| NativeSelect | Keep (native HTML select wrapper) |
| Resizable | Keep (react-resizable-panels wrapper) |
| Skeleton | Use shadcn-uikit Skeleton if available, else keep |
| Slider | Keep (Radix-based) |
| Toggle, ToggleGroup | Keep (Radix-based) |
| Typography | Keep (HAI3 custom) |

### Composite Components (rebuild using shadcn-uikit)

| Component | Strategy |
|-----------|----------|
| IconButton | Rebuild using shadcn-uikit Button |
| DropdownButton | Rebuild using shadcn-uikit Button + DropdownMenu |
| Sidebar (custom) | Migrate to shadcn-uikit Sidebar components |
| SidebarHeader | Migrate to shadcn-uikit SidebarHeader |
| UserInfo | Rebuild using shadcn-uikit Avatar + typography |
| MessageBubble | Rebuild using shadcn-uikit Card/primitives |
| ChatInput | Rebuild using shadcn-uikit Input/Textarea |
| ThreadList | Rebuild using shadcn-uikit primitives |

### New from @acronis/shadcn-uikit (add re-exports)

- Chip
- Combobox
- Filter
- SecondaryMenu
- Tag
- Tree
- ThemeProvider
- ModeToggle
- Auto-generated icons (optional)
