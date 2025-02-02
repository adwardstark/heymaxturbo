# HeyMax.ai - turborepo

This repo is a take-home assignment given by HeyMax.ai team to build a Turbo monorepo that includes an Expo project for iOS, Android and a Next.js project for the web.

## Monorepo Structure
Both projects use **Typescript** & **Tailwindcss**, for mobile Tailwindcss is integrated using **Nativewind V4** styling.
```ts
- apps
  | - mobile // Expo project for iOS and Android
  | - web // Next.js project for the Web.

- packages
  | - ui
      | - src // Shared components, styles & utility to be used by both projects.
      | - src/__test__ // Tests for button component
```

## Demo

- Web-app is live 🚀 at: [heymaxturbo-web.vercel.app](https://heymaxturbo-web.vercel.app/)

- Mobile-apps see below:
  - iOS
  
  https://github.com/user-attachments/assets/135413db-2189-4cdb-b0b7-e0ea6f184dcb

  - Android

  https://github.com/user-attachments/assets/cc0b1662-ccc6-47b0-80dd-d4bd2ffb0916

## Setup
Setting up this repo is really simple, just follow these steps:
1. Clone the repo.
2. Install dependencies.
    ```bash
    yarn install
    ```
3. Run the web app.
   ```bash
   turbo dev
   # if turbo-cli is not installed, use > yarn run dev
   ```
4. Run Android app.
   ```bash
   cd apps/mobile

   yarn run android
   ```
5. Run iOS app.
   ```bash
   cd apps/mobile

   yarn run ios
   ```
6. Run unit tests
   ```bash
   cd packages/ui

   yarn test
   ```
