# Spec-Driven Development Demo

A demonstration of **Spec-Driven Development** (SDD) using [OpenSpec](https://openspec.dev). The repository contains a simple React Native app that serves as a canvas for applying structured, spec-driven changes — showing how proposals, specs, designs, and tasks create a traceable decision record alongside the code.

## Why this repo exists

Most codebases grow organically without capturing *why* things were built a certain way. Spec-Driven Development fixes that by requiring every meaningful change to flow through:

1. **Proposal** — Why are we doing this?
2. **Specs** — What exactly should happen? (testable WHEN/THEN scenarios)
3. **Design** — How will we build it? (decisions, tradeoffs)
4. **Tasks** — What are the implementation steps?
5. **Implementation** — Code the tasks, check them off
6. **Archive** — Preserve the full decision record

This repo demonstrates that workflow end-to-end on a real (if simple) app.

## The app

A four-tab React Native mobile app built with Expo. It's intentionally minimal so the focus stays on the development workflow, not the product:

- Four screens: Discover, Saved, Tickets, Account
- Manual tab navigation via state
- Dark mode with a sun/moon toggle on the Discover screen
- Unit tests (Jest) and E2E tests (Detox)

## OpenSpec workflow

The `openspec/` directory holds the project's spec-driven artifacts:

```
openspec/
├── config.yaml                           # OpenSpec configuration
├── specs/                                # Living specs (current truth)
│   └── dark-mode/spec.md
└── changes/
    └── archive/                          # Completed changes (decision history)
        └── 2026-02-23-add-dark-mode/
            ├── proposal.md
            ├── design.md
            ├── specs/dark-mode/spec.md
            └── tasks.md
```

Browse `openspec/changes/archive/` to see the full reasoning behind each change — not just *what* changed, but *why* and *how* the decisions were made.

### OpenSpec commands (Cursor)

| Command | What it does |
|---------|--------------|
| `/opsx:explore` | Think through problems before/during work |
| `/opsx:new` | Start a new change, step through artifacts |
| `/opsx:ff` | Fast-forward: create all artifacts at once |
| `/opsx:continue` | Continue working on an existing change |
| `/opsx:apply` | Implement tasks from a change |
| `/opsx:verify` | Verify implementation matches artifacts |
| `/opsx:archive` | Archive a completed change |
| `/opsx:onboard` | Guided walkthrough of the full workflow |

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | React Native `0.81.5` via Expo `~54.0.33` |
| Language | JavaScript (ES modules via Babel/Expo) |
| Unit Testing | Jest `^29.7.0` + `jest-expo` + `react-test-renderer` |
| E2E Testing | Detox `^20.47.0` (iOS simulator) |
| Workflow | OpenSpec `^1.1.1` |

## Project structure

```
├── App.js                  # Main entry point
├── styles.js               # Centralized styles (theme-aware)
├── AGENTS.md               # AI agent configuration
├── openspec/               # Spec-driven artifacts
├── tests/
│   ├── __tests__/          # Unit tests (Jest)
│   └── e2e/                # E2E tests (Detox)
├── .cursor/commands/       # OpenSpec Cursor commands
└── .codex/skills/          # OpenSpec Codex skills
```

## Setup

```sh
npm install
```

## Running the app

```sh
npm start              # Expo dev server
npm run ios            # iOS simulator
npm run android        # Android emulator
```

### iOS simulator targets

- Device: `iPhone 17`
- iOS runtime: `26.2`

If your simulator differs, update these in `package.json`:
- `scripts.ios`
- `detox.apps.ios.debug.build` destination
- `detox.devices.ios.simulator.device`

List available simulators:

```sh
xcrun simctl list devices available
```

## Testing

### Unit tests

```sh
npm test
```

### E2E tests (iOS)

Prerequisites:

```sh
brew tap wix/brew
brew install applesimutils
```

Build and run:

```sh
npm run e2e:build:ios
npm run e2e:test:ios
```

Or combined:

```sh
npm run e2e:ios
```

## Troubleshooting

- **`applesimutils: command not found`** — Install with Homebrew (see prerequisites above).
- **Detox framework cache error** — Run `npx detox clean-framework-cache && npx detox build-framework-cache`.
- **`Unable to find a device matching destination`** — Your simulator config doesn't match installed runtimes. Check with `xcrun simctl list devices available`.
- **App binary not found for Detox** — Build first with `npm run e2e:build:ios`.
