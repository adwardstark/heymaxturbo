# HeyMax.ai - turborepo

This repo is a take-home assignment given by HeyMax.ai team to build a Turbo monorepo that includes an Expo project for iOS, Android and a Next.js project for the web.

## Monorepo Structure
Both projects use **Typescript** & **Tailwindcss**, for mobile Tailwindcss is integrated using **Nativewind V4** styling.
```ts
- apps
  | - mobile // Expo project for iOS and Android
  | - web // Next.js project for the Web.

- packages
  | - ui // Shared components & styles to be used by both projects.
```

## Demo

- Web-app is live 🚀 at: [heymaxturbo-web.vercel.app](https://heymaxturbo-web.vercel.app/)

- Mobile-apps see below:
  - iOS
  [![Watch the iOS demo video](https://raw.githubusercontent.com/adwardstark/heymaxturbo/master/demos/HeyMaxiOSDemo.mp4)]
  - Android
  [![Watch the Android demo video](https://raw.githubusercontent.com/adwardstark/heymaxturbo/master/demos/HeyMaxAndroidDemo.mp4)]

## Setup
Setting up this repo is really simple, just follow these steps:
1. Clone the repo.
2. Install dependencies.
    ```bash
    yarn install
    ```
3. Build using turbo.
   ```bash
   turbo build
   # if turbo-cli is not installed, use > yarn run build
   ```
4. Run the web app.
   ```bash
   turbo dev
   # if turbo-cli is not installed, use > yarn run dev
   ```
5. Run Android app.
   ```bash
   cd apps/mobile

   yarn run android
   ```
6. Run iOS app.
   ```bash
   cd apps/mobile

   yarn run ios
   ```