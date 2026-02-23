## ADDED Requirements

### Requirement: Light and Dark Color Palettes

The app MUST define two complete color palettes — light (current) and dark — covering background, text, nav bar, and indicator colors.

#### Scenario: Dark mode active

- **WHEN** dark mode is active
- **THEN** the app SHALL render with the dark palette (dark background, light text)
- **AND** the nav bar, active indicator, and icon colors SHALL all reflect the dark palette

#### Scenario: Light mode active

- **WHEN** light mode is active
- **THEN** the app SHALL render with the existing light palette (unchanged from current behavior)

### Requirement: Theme Toggle on Discover Screen

The Discover screen (screen 1) MUST display a pressable toggle with a sun/moon icon to switch themes.

#### Scenario: Toggle in light mode

- **WHEN** the user is on the Discover screen and the theme is light
- **THEN** a moon icon SHALL be displayed (indicating "switch to dark")
- **AND** pressing it SHALL switch the app to dark mode

#### Scenario: Toggle in dark mode

- **WHEN** the user is on the Discover screen and the theme is dark
- **THEN** a sun icon SHALL be displayed (indicating "switch to light")
- **AND** pressing it SHALL switch the app to light mode

#### Scenario: Toggle visibility across screens

- **WHEN** the user navigates away from the Discover screen
- **THEN** the toggle SHALL NOT be visible, but the selected theme MUST persist across all screens

### Requirement: Toggle Accessibility

The theme toggle MUST include proper accessibility attributes for screen reader compatibility.

#### Scenario: Accessible toggle

- **WHEN** the toggle is rendered
- **THEN** it SHALL have `accessibilityRole="button"`, a descriptive `accessibilityLabel`, and a `testID`
