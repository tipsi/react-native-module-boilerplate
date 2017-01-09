# react-native-module-boilerplate
[![Build Status](https://travis-ci.org/tipsi/react-native-module-boilerplate.svg?branch=master)](https://travis-ci.org/tipsi/react-native-module-boilerplate)

1. Fork project

2. You need to rename (react-native-module-boilerplate) scripts:

   1. `.travis/before-cache.sh` 
   2. `scripts/copy-from-node-modules.sh`
   3. `scripts/local-ci.sh`
   4. `scripts/post-link-android.sh`
   5. `scripts/pre-link.sh`
   6. `package.json`

3. Android part

   1. `android/src/main/java/com/gettipsi/boilerplate` => `android/src/main/java/com/%YOUR_COMPANY%/%YOUR_MODULE_NAME%`
   2. `android/src/main/java/com/gettipsi/boilerplate/RNBoilerplateModule.java`
   3. `android/src/main/java/com/gettipsi/boilerplate/RNBoilerplateReactPackage.java`
   4. `android/src/main/AndroidManifest.xml`

4. `src` folder

   1. `src/*.js`

5. `example` folder

   1. `package.json`
   2. `index.ios.js`
   3. `index.android.js`
   4. `android/app/build.gradle`
   5. `android/settings.gradle`

6. iOS part

   1. `open ios/RNModule.xcodeproj`
   2. Rename project in Xcode, also accept Xcode suggest
   3. Rename Component or Module files, it depends from your react-native-component type
   4. Close Xcode
   5. `npm install`
   6. `cd example && npm install`
   7. on example folder `open ios/example.xcodeproj`
   8. Remove `RNModule.xcodeproj` from Libraries
   9. Add new library

   ![image](https://cloud.githubusercontent.com/assets/1788245/20928912/f70bb638-bbd8-11e6-85e6-70e553319d39.png)
