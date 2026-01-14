# UI Kit Base Components - Delta Spec

## ADDED Requirements

### Requirement: Adapter Layer Architecture

The `@hai3/uikit` package SHALL function as an adapter layer that re-exports components from `@acronis/shadcn-uikit` while providing HAI3-specific components and customizations.

#### Scenario: Re-export overlapping components

- **WHEN** importing a base component (e.g., Button, Alert, Dialog) from `@hai3/uikit`
- **THEN** the component is sourced from `@acronis/shadcn-uikit`
- **AND** the API remains compatible with existing HAI3 usage

#### Scenario: HAI3-only components remain available

- **WHEN** importing HAI3-specific components (e.g., Header, Item, Typography, Kbd)
- **THEN** the components are available from `@hai3/uikit`
- **AND** they are implemented using `@acronis/shadcn-uikit` primitives where applicable

#### Scenario: Composite components use shadcn-uikit base

- **WHEN** using composite components (IconButton, DropdownButton, UserInfo, Chat components)
- **THEN** they are built on top of `@acronis/shadcn-uikit` base components
- **AND** they maintain their existing HAI3 API

### Requirement: Chip Component

The UI kit SHALL provide a Chip component re-exported from `@acronis/shadcn-uikit` for displaying compact elements representing inputs, attributes, or actions.

#### Scenario: Chip component is available

- **WHEN** importing Chip from `@hai3/uikit`
- **THEN** the Chip component from `@acronis/shadcn-uikit` is available
- **AND** it supports variants and interactive states

### Requirement: Combobox Component

The UI kit SHALL provide a Combobox component re-exported from `@acronis/shadcn-uikit` for searchable dropdown selection with autocomplete functionality.

#### Scenario: Combobox component is available

- **WHEN** importing Combobox from `@hai3/uikit`
- **THEN** the Combobox component from `@acronis/shadcn-uikit` is available
- **AND** it supports search filtering and selection

### Requirement: Filter Component

The UI kit SHALL provide a Filter component re-exported from `@acronis/shadcn-uikit` for building filter interfaces.

#### Scenario: Filter component is available

- **WHEN** importing Filter from `@hai3/uikit`
- **THEN** the Filter component from `@acronis/shadcn-uikit` is available

### Requirement: SecondaryMenu Component

The UI kit SHALL provide a SecondaryMenu component re-exported from `@acronis/shadcn-uikit` for secondary navigation patterns.

#### Scenario: SecondaryMenu component is available

- **WHEN** importing SecondaryMenu from `@hai3/uikit`
- **THEN** the SecondaryMenu component from `@acronis/shadcn-uikit` is available

### Requirement: Tag Component

The UI kit SHALL provide a Tag component re-exported from `@acronis/shadcn-uikit` for labeling and categorization.

#### Scenario: Tag component is available

- **WHEN** importing Tag from `@hai3/uikit`
- **THEN** the Tag component from `@acronis/shadcn-uikit` is available
- **AND** it supports different variants and removable state

### Requirement: Tree Component

The UI kit SHALL provide a Tree component re-exported from `@acronis/shadcn-uikit` for displaying hierarchical data structures.

#### Scenario: Tree component is available

- **WHEN** importing Tree from `@hai3/uikit`
- **THEN** the Tree component from `@acronis/shadcn-uikit` is available
- **AND** it supports expandable/collapsible nodes

### Requirement: Extended Sidebar Components

The UI kit SHALL provide the full set of Sidebar components from `@acronis/shadcn-uikit` including SidebarProvider, useSidebar hook, SidebarTrigger, SidebarRail, SidebarInset, SidebarInput, SidebarFooter, SidebarSeparator, SidebarGroup, SidebarGroupLabel, SidebarGroupAction, SidebarGroupContent, SidebarMenuAction, SidebarMenuBadge, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubItem, and SidebarMenuSubButton.

#### Scenario: Full Sidebar system is available

- **WHEN** importing Sidebar components from `@hai3/uikit`
- **THEN** all Sidebar components from `@acronis/shadcn-uikit` are available
- **AND** the useSidebar hook provides sidebar state management
- **AND** SidebarProvider enables sidebar context for child components

### Requirement: Empty Component API Compatibility

The UI kit SHALL provide API compatibility shims for the Empty component to map HAI3 naming to `@acronis/shadcn-uikit` naming.

#### Scenario: EmptyMedia alias

- **WHEN** importing EmptyMedia from `@hai3/uikit`
- **THEN** it maps to EmptyIcon from `@acronis/shadcn-uikit`

#### Scenario: EmptyContent alias

- **WHEN** importing EmptyContent from `@hai3/uikit`
- **THEN** it maps to EmptyActions from `@acronis/shadcn-uikit`

#### Scenario: New Empty exports available

- **WHEN** importing from `@hai3/uikit`
- **THEN** EmptyActions and EmptyLinks from `@acronis/shadcn-uikit` are also available

## MODIFIED Requirements

### Requirement: Chart Component

The system SHALL provide Chart components in the `@hai3/uikit` package for data visualization, re-exported from `@acronis/shadcn-uikit` which is built on Recharts library.

#### Scenario: Chart component is available

- **WHEN** importing Chart from `@hai3/uikit`
- **THEN** the Chart component and its sub-components are available from `@acronis/shadcn-uikit`
- **AND** components include: ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent

#### Scenario: Line chart rendering

- **WHEN** using Chart with LineChart and Line components from Recharts
- **THEN** a line chart is rendered with customizable colors and data points
- **AND** the chart is responsive and adapts to container width

#### Scenario: Bar chart rendering

- **WHEN** using Chart with BarChart and Bar components from Recharts
- **THEN** a bar chart is rendered with customizable colors and data
- **AND** the chart supports multiple bars per data point

#### Scenario: Area chart rendering

- **WHEN** using Chart with AreaChart and Area components from Recharts
- **THEN** an area chart is rendered with gradient fills
- **AND** the chart displays smooth curves

#### Scenario: Pie chart rendering

- **WHEN** using Chart with PieChart and Pie components from Recharts
- **THEN** a pie chart is rendered with color-coded segments
- **AND** the chart displays labels and percentages

### Requirement: Drawer Component

The system SHALL provide a Drawer component in the `@hai3/uikit` package for mobile-friendly overlay panels, re-exported from `@acronis/shadcn-uikit` which is built on the vaul library.

#### Scenario: Drawer component is available

- **WHEN** importing Drawer from `@hai3/uikit`
- **THEN** the Drawer component and its sub-components are available from `@acronis/shadcn-uikit`
- **AND** components include: Drawer, DrawerTrigger, DrawerPortal, DrawerOverlay, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription

#### Scenario: Drawer supports multiple directions

- **WHEN** using DrawerContent with direction prop
- **THEN** the drawer can slide from bottom, top, left, or right
- **AND** each direction has appropriate styling and animations

#### Scenario: Drawer has touch gesture support

- **WHEN** using Drawer on touch devices
- **THEN** the drawer supports drag-to-dismiss gestures
- **AND** the drawer shows a visual drag handle for bottom direction

#### Scenario: Drawer styling follows theme

- **WHEN** rendering Drawer components
- **THEN** the overlay uses theme-aware background opacity
- **AND** the content uses bg-background, border-border, and text-foreground tokens
- **AND** all animations are smooth (animate-in/animate-out)

### Requirement: Scroll Area Component

The system SHALL provide a Scroll Area component in the `@hai3/uikit` package for creating custom scrollable containers with styled scrollbars, re-exported from `@acronis/shadcn-uikit` which is built on @radix-ui/react-scroll-area.

#### Scenario: Scroll Area component is available

- **WHEN** importing ScrollArea from `@hai3/uikit`
- **THEN** the ScrollArea and ScrollBar components are available from `@acronis/shadcn-uikit`
- **AND** ScrollArea provides a custom scrollable viewport
- **AND** ScrollBar provides styled scrollbar with configurable orientation

#### Scenario: Vertical scroll support

- **WHEN** using ScrollArea with content taller than the container
- **THEN** a vertical scrollbar appears automatically
- **AND** the scrollbar uses theme-aware styling with bg-border token

#### Scenario: Horizontal scroll support

- **WHEN** using ScrollArea with ScrollBar orientation="horizontal"
- **THEN** a horizontal scrollbar appears for wide content
- **AND** the scrollbar is styled consistently with vertical scrollbars

#### Scenario: Scroll Area styling follows theme

- **WHEN** rendering ScrollArea components
- **THEN** the scrollbar thumb uses bg-border token
- **AND** the viewport supports focus-visible ring styling
- **AND** all animations are smooth transitions

### Requirement: Separator Component

The system SHALL provide a Separator component in the `@hai3/uikit` package for visually dividing content sections, re-exported from `@acronis/shadcn-uikit` which is built on @radix-ui/react-separator.

#### Scenario: Separator component is available

- **WHEN** importing Separator from `@hai3/uikit`
- **THEN** the Separator component is available from `@acronis/shadcn-uikit`
- **AND** it supports horizontal and vertical orientations

#### Scenario: Horizontal separator

- **WHEN** using Separator with default or orientation="horizontal"
- **THEN** a horizontal line is rendered spanning the full width
- **AND** the line uses bg-border token for consistent theming

#### Scenario: Vertical separator

- **WHEN** using Separator with orientation="vertical"
- **THEN** a vertical line is rendered spanning the full height
- **AND** the component uses h-full and w-px styling

#### Scenario: Separator accessibility

- **WHEN** rendering Separator with decorative=true (default)
- **THEN** the separator is marked as decorative for screen readers
- **AND** when decorative=false, it has proper semantic role
