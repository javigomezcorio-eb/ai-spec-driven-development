## Context

The app uses a single static `StyleSheet` in `styles.js` with hardcoded light-theme hex values. `App.js` imports it as a plain object. There is no theming infrastructure.

## Goals / Non-Goals

**Goals:**
- Allow the user to toggle between light and dark mode manually
- Keep the styling architecture simple (no Context API or third-party libraries)
- Maintain the existing `StyleSheet.create` pattern for performance

**Non-Goals:**
- Automatic detection of system color scheme (can be added later)
- Persisting theme preference across app restarts (can be added later with AsyncStorage)
- Animated transitions between themes

## Decisions

### Decision 1: Convert `styles.js` to a function

Instead of exporting a static `StyleSheet`, export a `getStyles(isDark)` function that returns a `StyleSheet` created with theme-appropriate colors. This keeps `StyleSheet.create` for performance while enabling dynamic palettes.

A `colors` object for each theme will be defined at the top of the file, keeping all color values centralized.

**Trade-off:** A new `StyleSheet` is created on each call. Since React Native caches `StyleSheet.create` results by reference, this means a new sheet per toggle. Acceptable for a toggle that happens infrequently. If performance becomes a concern, we can memoize later.

### Decision 2: Theme state in `App.js` via `useState`

Add `const [isDark, setIsDark] = useState(false)` in `App.js`. Pass `isDark` to `getStyles()` on each render. This is the simplest approach that fits the current architecture (no global state, no Context).

### Decision 3: Toggle placement and icon choice

The toggle is a `Pressable` with a `Feather` icon (`"moon"` in light mode, `"sun"` in dark mode) placed in the content area of the Discover screen. It sits above the big screen number, anchored to the top-right of the content area.

### Decision 4: Dark palette design

The dark palette inverts the luminance relationship:
- Background: `#1F2937` (dark gray-blue)
- Nav bar background: `#1F2937`
- Nav bar border: `#374151` (medium gray)
- Active text/icon: `#F9FAFB` (near-white)
- Inactive text/icon: `#9CA3AF` (muted gray)
- Active indicator: `#F9FAFB`
- Big number: `#F9FAFB`
