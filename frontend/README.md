# Weather App

A modern weather application built with **Expo** and **React Native**, featuring a clean UI with light and dark theme support.

## Features

- **Weather** — Current conditions, location, hourly forecast strip, humidity & wind stats, and 7-day summary
- **Forecast** — Full 7-day forecast with conditions, high/low temps, and precipitation chance
- **Settings** — Units (temperature, wind, pressure), default location, notifications, and app info

The app uses mock data by default. You can connect a weather API later to fetch real data.

## Tech stack

- [Expo](https://expo.dev) (SDK 54)
- [Expo Router](https://docs.expo.dev/router/introduction/) for file-based routing and tabs
- React Native with TypeScript
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) & [Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)

## Getting started

1. **Install dependencies**

   ```bash
   npm install
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
frontend/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx      # Weather (home)
│   │   ├── forecast.tsx   # 7-day forecast
│   │   ├── settings.tsx   # Settings
│   │   └── _layout.tsx    # Tab navigator
│   └── _layout.tsx        # Root layout
├── components/            # Reusable UI components
├── constants/
│   └── theme.ts           # Colors & fonts (light/dark)
└── hooks/                 # useColorScheme, useThemeColor
```

## Scripts

| Command            | Description                    |
|--------------------|--------------------------------|
| `npm start`        | Start Expo dev server          |
| `npm run ios`      | Run on iOS simulator           |
| `npm run android`  | Run on Android emulator        |
| `npm run web`      | Run in the browser             |
| `npm run lint`     | Run ESLint                     |

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/)
