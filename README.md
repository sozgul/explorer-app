# explorer-app [![CircleCI](https://circleci.com/gh/CMUCloudComputing/explorer-app.svg?style=svg)](https://circleci.com/gh/CMUCloudComputing/explorer-app)
ReactNative application for Explorer

## Development
### Pre-Requisites
These pre-requisites only need to be performed once.  Just skip any that you have
already completed.
- Install [NodeJS](https://nodejs.org/en/download/) *(version >= 8.x.x required)*.
- Install [XCode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (OS X required)
- Install [Android Studio](https://developer.android.com/studio/)
- Install the `Expo` app on your mobile device (from [AppStore](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) or [PlayStore](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)).
- Open the `Expo` app, and either sign-up or sign-in.
- Install [react-native-cli](https://www.npmjs.com/package/react-native-cli) for help with logging

### Installation & Setup
- `cd explorer-app`
- `npm install`

### Running the app
**Launching in simulator:**
- *iOS:*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`npm run ios`
- *Android:*&nbsp;&nbsp;`npm run android`

**Launching on mobile device:**
- Start dev server: `npm start`
- Launch the app:
  - *iOS:*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;press `s`, and follow the prompts.
  - *Android:*&nbsp;&nbsp;scan barcode, and follow the prompts.

*NOTE: to run on mobile device, your development machine & device must be on the same WiFi network.*

### Debugging
There are several different methods of debugging & obtaining logs while developing.  These methods are outlined here: https://facebook.github.io/react-native/docs/debugging.html.  We have some of these dependencies installed in the project for convenience.

- Launch standalone [React DevTools](https://github.com/facebook/react-devtools):
  - `npm run devtools`
- Accessing Console Logs:
  - `react-native log-ios`
  - `react-native log-android`

#### "Full-Stack" Debugging
Starts the app in the simulator with `REACT_NATIVE_EXPLORER_DEBUG=1`.  This configures the app to hit our explorer services on `localhost` instead of the remote hosts used in normal "development" mode.  
***NOTE:** You must be running the services (`explorer-api`, `explorer-gps`, `exploer-messenger`) on `localhost` to use this mode.*
  - `npm run ios-debug`
  - `npm run android-debug`

### Running Tests
- `npm run test`

### Linting
- `npm run lint`

----

### ReactNative Helpful Hints
You can find some helpful information about performing some common tasks in this
ReactNative environment in the `REACTNATIVE.md` file in this repository.
