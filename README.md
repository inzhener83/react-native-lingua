# react-native-lingua

An Expo and React Native language-learning app. The current build includes a Lingua welcome screen and the first onboarding screen.

## Run locally

1. Install dependencies: `npm ci`
2. Start Metro: `npx expo start`
3. Open the project in Expo Go or a simulator that supports Expo SDK 58.

## Checks

Run these commands from the project root after installing dependencies.

- `npx expo lint`
- `npx tsc --noEmit`

Screens live in `src/app/`. The app uses Expo Router, NativeWind v5, and Poppins fonts. Shared image imports are in `constants/images.ts`.
