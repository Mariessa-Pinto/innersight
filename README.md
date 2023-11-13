# InnerSight 

## By:
- Anika Grewal 
- Bri Guemos
- Glenda Cheung
- Kyle Arthur
- Lauryn Kung
- Mariessa Pinto
- Patricia Jiang

## run app
npx expo start

## Safe Area

### Safe Areas
[Installing dependencies into an Expo managed project](https://reactnavigation.org/docs/5.x/getting-started/)
npm install @react-native-masked-view/masked-view @react-navigation/stack react-native-gesture-handler react-native-safe-area-context react-native-screens

[Installing dependencies into a bare React Native project](https://reactnavigation.org/docs/getting-started/)
npx expo install react-native-screens react-native-safe-area-context

[Stack Navigator](https://reactnavigation.org/docs/native-stack-navigator/)
npm install @react-navigation/native-stack

## Resources
- [External style sheet](https://stackoverflow.com/questions/33595642/react-native-external-stylesheet)
- [Colour Themes](https://docs.expo.dev/develop/user-interface/color-themes/)
- [Dark Mode for Expo/Variable Font Size](https://www.youtube.com/watch?v=PUzPqfhkeDI&t=681s)
- [Lexend Font Installation](https://github.com/expo/google-fonts/tree/master/font-packages/lexend#readme)
- [Expo Firebase](https://docs.expo.dev/guides/using-firebase/)

## Dependencies
- [react-native-event-listeners for for dark mode](https://www.npmjs.com/package/react-native-event-listeners) 
- [React Native Switch component](https://reactnative.dev/docs/switch)
- [React Native Slider](https://github.com/Sharcoux/slider)
- [React SVG](https://docs.expo.dev/versions/v49.0.0/sdk/svg/)
- [React Native Image](https://www.npmjs.com/package/react-image)
- [Font Support](https://www.npmjs.com/package/react-native-asset)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
1. [Search Bar](https://callstack.github.io/react-native-paper/docs/components/Searchbar/)
- [Hide With Keyboard](https://www.npmjs.com/package/react-native-hide-with-keyboard)
- [Victory Interactive Donut Chart](https://formidable.com/open-source/victory/docs/victory-pie/)
- [React Native Modal](https://github.com/react-native-modal/react-native-modal)
- [React Native Swipe Gestures](https://www.npmjs.com/package/react-native-swipe-gestures)
- [React Native Swiper](https://github.com/leecade/react-native-swiper#installation)
- [React Native Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)

## Instructions

### Style Sheets
- Import global style sheet as 
```
import globalStyles from '../../styles/global.js'
```
- Import local style as
```
import { StyleSheet } from 'react-native';
```

### Npm install
```
npm install --force 
npm install expo --force
npm i react-native-multi-toggle-switch --save
npm install expo-font
```

### Dark Mode
1. Import 
```
    import { useContext } from 'react';
    import themeContext from '../theme/themeContext';
```
2. Add variables
```
    //Dark/Light Mode
    const theme = useContext(themeContext)
```
3. Add styles to View container
```
style={[styles.container, { backgroundColor: theme.backgroundColor }]}
```
4. Add styles to Text containers
```
style={[styles.text, { color: theme.color }]}
```
### Variable Font Size
1. Import 
```
    import { useContext } from 'react';
    import fontContext from '../theme/fontContext';
```
2. Add variables
```
    //Font Size
    const fontTheme = useContext(fontContext)
```
3. Add styles to Text container
- No need to add style to View containers because it's only adjusting text size
```
style={[styles.text, { fontSize: fontTheme.fontSize }]}
```
## Font Size Body Copy
How to apply variable font styling/size to body copy. Use the following Text styles for all Body Copy text:
```
<Text style={[globalStyles.bodyCopy, { fontSize: fontTheme.fontSize}]}></Text>
```