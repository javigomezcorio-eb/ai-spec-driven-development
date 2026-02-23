## 1. Write unit tests first (TDD)

- [x] 1.1 Update `App.test.js` to test that the app renders with default light theme styles
- [x] 1.2 Add unit test for the theme toggle: pressing the moon icon switches to dark mode
- [x] 1.3 Add unit test that the toggle shows a sun icon when in dark mode and switches back to light

## 2. Refactor styles.js

- [x] 2.1 Define `lightColors` and `darkColors` palette objects
- [x] 2.2 Convert the default export from a static `StyleSheet` to a `getStyles(isDark)` function that picks the right palette and returns a `StyleSheet`

## 3. Update App.js

- [x] 3.1 Add `isDark` state and call `getStyles(isDark)` to get theme-aware styles
- [x] 3.2 Add the sun/moon toggle `Pressable` on the Discover screen with accessibility props and `testID`

## 4. Write E2E tests (Detox)

- [x] 4.1 Add E2E test that the theme toggle is visible on the Discover screen
- [x] 4.2 Add E2E test that tapping the toggle works (theme switches and toggle remains visible)

## 5. Verify

- [x] 5.1 Run `npm test` — 4/4 unit tests pass
- [x] 5.2 Run E2E tests on iOS — 3/3 E2E tests pass
