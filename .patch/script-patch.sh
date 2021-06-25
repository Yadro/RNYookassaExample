patch -t ./node_modules/@wyndrick/react-native-yookassa/android/build.gradle < ./.patch/react-native-yookassa/build.patch
patch -t ./node_modules/@wyndrick/react-native-yookassa/android/src/main/java/com/arng/yookassa/YookassaModule.java < ./.patch/react-native-yookassa/YookassaModule.patch
