# Weather App

A modern weather application built with **Expo** and **React Native**, featuring a clean UI with light/dark themes and full **internationalization (i18n)** including **RTL** support for Arabic.

## Features

- **Weather** — Current conditions, location, hourly forecast strip, humidity & wind stats, and 7-day summary
- **Forecast** — Full 7-day forecast with conditions, high/low temps, and precipitation chance
- **Locations** — Manage saved locations
- **Settings** — Units (temperature, wind, pressure), appearance (light/dark), language (English / العربية), default location, notifications, and app info
- **i18n & RTL** — English and Arabic with right-to-left layout and text alignment when Arabic is selected
- **Theme** — Light and dark mode with preference persisted via AsyncStorage

The app uses mock data by default. You can connect a weather API later to fetch real data.

## Tech stack

- [Expo](https://expo.dev) (SDK 54)
- [Expo Router](https://docs.expo.dev/router/introduction/) for file-based routing and tabs
- React Native with TypeScript
- [react-i18next](https://react.i18next.com/) for translations (en / ar)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) & [Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)
- AsyncStorage for theme and language persistence

## Getting started

All commands below are run from the **`frontend`** directory.

1. **Install dependencies**

   ```bash
   cd frontend && npm install
   ```

2. **Start the development server**

   ```bash
   npx expo start
   ```

3. **Run on a device or simulator**
   - Press **`i`** in the terminal for iOS simulator
   - Press **`a`** for Android emulator
   - Press **`w`** for web
   - Or run: `npm run ios`, `npm run android`, or `npm run web`

## Project structure

```
weather-app/
├── README.md
└── frontend/
    ├── app/
    │   ├── (tabs)/
    │   │   ├── index.tsx       # Weather (home)
    │   │   ├── forecast.tsx   # 7-day forecast
    │   │   ├── locations.tsx   # Saved locations
    │   │   ├── settings.tsx   # Settings
    │   │   └── _layout.tsx    # Tab navigator
    │   ├── modal.tsx
    │   └── _layout.tsx        # Root layout (Theme, RTL)
    ├── components/
    │   ├── ui/                # Custom Components & more
    │   ├── haptic-tab.tsx
    │   └── index.ts
    ├── constants/
    │   ├── theme.ts           # Colors (light/dark)
    │   └── fakeData.ts        # Mock Data
    ├── context/
    │   ├── ThemeContext.tsx   # Light/dark preference
    │   └── RTLContext.tsx      # RTL layout
    ├── hooks/
    │   ├── use-color-scheme.ts
    │   ├── use-language.ts
    │   └── use-theme-color.ts
    ├── locales/
    │   ├── en.json
    │   └── ar.json
    ├── utils/
    │   └── strings.ts
    ├── i18n.ts                # i18next setup
    └── package.json
```

## Scripts

Run from the **`frontend`** directory:

| Command           | Description             |
| ----------------- | ----------------------- |
| `npm start`       | Start Expo dev server   |
| `npm run ios`     | Run on iOS simulator    |
| `npm run android` | Run on Android emulator |
| `npm run web`     | Run in the browser      |
| `npm run lint`    | Run ESLint              |

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/)
- [react-i18next](https://react.i18next.com/)
