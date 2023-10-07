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

[External style sheet](https://stackoverflow.com/questions/33595642/react-native-external-stylesheet)
[Colour Themes](https://docs.expo.dev/develop/user-interface/color-themes/)
[Dark Mode for Expo](https://www.youtube.com/watch?v=PUzPqfhkeDI&t=681s)

## Dependencies
[react-native-event-listeners for for dark mode](https://www.npmjs.com/package/react-native-event-listeners) 
[React Native Switch component](https://reactnative.dev/docs/switch)
[React Native Slider](https://github.com/Sharcoux/slider)


## Instructions
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
