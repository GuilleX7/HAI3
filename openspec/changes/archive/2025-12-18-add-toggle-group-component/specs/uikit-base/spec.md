## ADDED Requirements

### Requirement: Toggle Group Component

The UI kit SHALL provide ToggleGroup and ToggleGroupItem components in the `@hai3/uikit` package for creating groups of toggle buttons with single or multiple selection, built on the `@radix-ui/react-toggle-group` library and reusing `toggleVariants` from the Toggle component.

#### Scenario: Toggle Group components are available

- **WHEN** importing ToggleGroup from `@hai3/uikit`
- **THEN** ToggleGroup and ToggleGroupItem components are available
- **AND** the components support all standard @radix-ui/react-toggle-group props

#### Scenario: ToggleGroup container styling

- **WHEN** using ToggleGroup as a root container
- **THEN** the container displays with flex layout, w-fit, items-center
- **AND** the container has rounded-md styling
- **AND** the container has data-slot="toggle-group" attribute
- **AND** the container accepts variant, size, and spacing props
- **AND** variant and size are passed to children via React context

#### Scenario: ToggleGroup selection modes

- **WHEN** using ToggleGroup with type="single"
- **THEN** only one item can be selected at a time
- **AND** selecting a new item deselects the previous one
- **WHEN** using ToggleGroup with type="multiple"
- **THEN** multiple items can be selected simultaneously

#### Scenario: ToggleGroup spacing

- **WHEN** using ToggleGroup with spacing prop (default 0)
- **THEN** items are connected with no gap when spacing=0
- **AND** first item has rounded-l-md, last item has rounded-r-md
- **AND** middle items have rounded-none
- **WHEN** spacing > 0
- **THEN** items have gap between them based on spacing value
- **AND** each item maintains its own border radius

#### Scenario: ToggleGroupItem styling

- **WHEN** using ToggleGroupItem within a ToggleGroup
- **THEN** the item inherits variant and size from ToggleGroup context
- **AND** the item uses toggleVariants for consistent styling with Toggle
- **AND** the item has data-slot="toggle-group-item" attribute
- **AND** selected state shows data-[state=on] styling

#### Scenario: ToggleGroup outline variant

- **WHEN** using ToggleGroup with variant="outline"
- **THEN** items have border styling from toggleVariants outline variant
- **AND** adjacent items share borders (border-l-0 except first)
- **AND** the group has shadow-xs styling

### Requirement: Toggle Group Demo Examples

The UI kit demo SHALL provide examples for the Toggle Group component in the Actions & Buttons category demonstrating single selection, multiple selection, outline variant, spacing, and disabled states.

#### Scenario: Toggle Group section in ActionElements

- **WHEN** viewing the Actions & Buttons category
- **THEN** a Toggle Group section is displayed with heading and examples
- **AND** the section includes data-element-id="element-toggle-group" for navigation

#### Scenario: Toggle Group examples use translations

- **WHEN** Toggle Group examples are rendered
- **THEN** all text content uses the `tk()` translation helper
- **AND** all translated text is wrapped with TextLoader component

#### Scenario: Toggle Group example content

- **WHEN** viewing the Toggle Group section
- **THEN** a single selection example with type="single" is shown
- **AND** an outline variant example with type="multiple" variant="outline" is shown
- **AND** a spacing example with custom colors is shown
- **AND** a disabled state example is shown

### Requirement: Toggle Group in Category System

The UI kit element registry SHALL include 'Toggle Group' in the `IMPLEMENTED_ELEMENTS` array to mark it as an available component in the Actions & Buttons category.

#### Scenario: Category Menu Shows Toggle Group

- **WHEN** viewing the UIKit category menu
- **THEN** Toggle Group appears as an implemented element in Actions & Buttons category
- **AND** Toggle Group is positioned alphabetically among other action elements

### Requirement: Toggle Group Translations

The UI kit translations SHALL provide localized strings for all 36 supported languages with keys including:
- `toggle_group_heading` - Section heading
- `toggle_group_single_label` - Single selection label
- `toggle_group_outline_label` - Outline variant label
- `toggle_group_spacing_label` - Spacing example label
- `toggle_group_disabled_label` - Disabled state label

#### Scenario: Translated Toggle Group Labels

- **WHEN** viewing the Toggle Group demo in a non-English language
- **THEN** all Toggle Group labels display in the selected language
- **AND** translations are contextually appropriate for toggle group terminology
