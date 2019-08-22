# MeAu

*Made in React-Native* 💻

## Installation

**Step 1:** Clone this repo & run a `cd` into project's folder.

**Step 2:** install node modules as below:

```
npm install
```

*Before run android build, setup [Android Studio](https://facebook.github.io/react-native/docs/android-setup.html)*

**Step 3:** 

### If Android

```
react-native run-android
```

*Before running iOS build, Install [Xcode](https://developer.apple.com/xcode/download/)*

### If iOS

```
pod install
```

```
Open a MeauAdoption.xcworkspace and build
```

That's all! 😎


### Obs on Installation

To all the plugins work properly, you must install ESlint plugin: `npm install --save-dev eslint` and add the following lines in your user settings on VScode:

```
/* ESLint */
// let editor format using prettier for all other files
"editor.formatOnSave": true,
// disable editor formatting, so eslint can handle it
"[javascript]": {
    "editor.formatOnSave": false,
},
// available through eslint plugin in vscode
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true
```