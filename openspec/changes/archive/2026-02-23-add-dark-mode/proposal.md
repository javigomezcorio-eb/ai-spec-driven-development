## Why

The app currently uses a hardcoded light color palette with no way to switch themes. Users on devices with dark mode enabled get a jarring light-only experience, and there's no manual override. Adding dark mode improves usability in low-light environments and aligns with platform conventions on both iOS and Android.

## What Changes

- The app MUST convert `styles.js` from a static `StyleSheet` export into a function that returns theme-aware styles
- The app MUST define a dark color palette alongside the existing light palette
- The app MUST add a `isDark` state to `App.js` to track the current theme
- The app MUST render a sun/moon toggle on the Discover screen (screen 1) to switch themes
- The app MUST pass theme colors through to all components (nav bar, content area, icons)

## Capabilities

### New Capabilities
- `dark-mode`: Theme switching between light and dark palettes via a manual toggle on the Discover screen

### Modified Capabilities
<!-- No existing specs to modify -->

## Impact

- `styles.js`: Refactored from static export to a `getStyles(isDark)` function with two color palettes
- `App.js`: New `isDark` state, toggle UI on Discover screen, dynamic style consumption
- `tests/__tests__/App.test.js`: Updated to account for new styles API and toggle
- `tests/e2e/app.e2e.js`: New E2E tests for toggle visibility and interaction
