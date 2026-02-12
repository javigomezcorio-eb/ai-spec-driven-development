# React Native Spec-Driven-Development Demo

This is a simple React Native mobile app to prove the value of using Spec Driven Development with OpenSpec.

## Tech stack

- `expo` `~54.0.33`
- `react-native` `0.81.5`
- `react` `19.1.0`
- Jest (`jest`, `jest-expo`, `react-test-renderer`)
- Detox (`detox`, `jest-circus`)

## Project structure

- `App.js`: main app entry point
- `styles.js`: app styles
- `tests/__tests__/`: unit tests (Jest)
- `tests/e2e/`: E2E tests (Detox)

## Scripts

```sh
npm start            # Expo dev server
npm run ios          # Run app on configured iOS simulator
npm run android      # Run app on Android
npm run test         # Run unit tests
npm run e2e:build:ios
npm run e2e:test:ios
```

## Setup

```sh
npm install
```

## Run the app

### iOS simulator

Current script targets:
- device: `iPhone 17`
- iOS runtime: `26.2` (for Detox build destination)

Run:

```sh
npm run ios
```

If that specific simulator is not available on your machine, update these fields in `package.json`:
- `scripts.ios`
- `detox.apps.ios.debug.build` destination
- `detox.devices.ios.simulator.device`

You can list installed simulators with:

```sh
xcrun simctl list devices available
```

## Unit tests (Jest)

Run:

```sh
npm test
```

Current basic test:
- `tests/__tests__/App.test.js`
- Validates `Discover` text renders.

## E2E tests (Detox, iOS)

### Prerequisites

- Xcode + iOS simulator runtime installed
- `applesimutils` installed:

```sh
brew tap wix/brew
brew install applesimutils
```

### Build and run

```sh
npm run e2e:build:ios
npm run e2e:test:ios
```

### Current E2E test

- `tests/e2e/app.e2e.js`
- Launches app and checks `Discover` button is visible.

## Troubleshooting

- **`Missing script: e2e`**
  - Use `npm run e2e:build:ios` and `npm run e2e:test:ios`.

- **`applesimutils: command not found`**
  - Install with Homebrew (see prerequisites).

- **Detox framework cache error**
  - Run:
    ```sh
    npx detox clean-framework-cache
    npx detox build-framework-cache
    ```

- **`Unable to find a device matching destination`**
  - The simulator name/OS in `package.json` does not match your installed runtime.
  - Check available devices using `xcrun simctl list devices available` and update config.

- **App binary not found for Detox**
  - Build first: `npm run e2e:build:ios`
  - Then test: `npm run e2e:test:ios`
