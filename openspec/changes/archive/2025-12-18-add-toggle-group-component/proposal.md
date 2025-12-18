# Change: Add Toggle Group Base Component

## Why

The UI Kit needs a Toggle Group component for creating groups of toggle buttons where users can select single or multiple options. This is commonly used for toolbar button groups, formatting controls, and option selectors. Toggle Group is already planned in the "Actions & Buttons" category but not yet implemented.

## What Changes

- Add `@radix-ui/react-toggle-group` dependency to `@hai3/uikit`
- Add `ToggleGroup` and `ToggleGroupItem` components that reuse `toggleVariants` from Toggle
- Add demo examples showing single selection, multiple selection, outline variant, spacing, and disabled states
- Add translations for all 36 supported languages
- Add 'Toggle Group' to `IMPLEMENTED_ELEMENTS` array

## Impact

- Affected specs: `uikit-base`
- Affected code:
  - `packages/uikit/package.json` (add @radix-ui/react-toggle-group dependency)
  - `packages/uikit/src/base/toggle-group.tsx` (new file)
  - `packages/uikit/src/index.ts` (export)
  - `src/screensets/demo/components/ActionElements.tsx` (demo)
  - `src/screensets/demo/screens/uikit/uikitCategories.ts` (IMPLEMENTED_ELEMENTS)
  - `src/screensets/demo/screens/uikit/i18n/*.json` (36 files)
