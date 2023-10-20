
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import React, { useState, useEffect } from 'react';

//Fonts
import { useFonts } from 'expo-font';

//Reusable Themes
import theme from './theme/theme';
import themeContext from './theme/themeContext'
import FontContext from './theme/fontContext';

//Screens
import Start from './screens/Start';
import About from './screens/About';


import NewJournal from './screens/NewJournal';
import JournalsEntries from './screens/JournalsEntries';
import CreateEntry from './screens/CreateEntry';
import CustomizeEntry from './screens/CustomizeEntry';
import Stats from './screens/Stats';
import MonthStats from './screens/MonthStats';
import YearStats from './screens/YearStats';
import Profile from './screens/Profile';
import CrisisSupport from './screens/CrisisSupport';
import Recommendations from './screens/Recommendations';
import Accessibility from './screens/Accessibility';
import FontSize from './screens/FontSize';
import Demo from './screens/Demo';
import Login from './screens/Login';
import ChooseMascot from './screens/ChooseMascot';



export default function App() {

  //Global dark/light mode
  const [darkMode, setDarkMode] = useState(false)

  //Global font size
  const [fontSize, setFontSize] = useState(16)

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data);
      setFontSize(data);
      console.log(data);
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode, fontSize])


  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    'Lexend-Regular': require('./atom/assets/Fonts/Lexend-Regular.ttf'),
  });

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
        <FontContext.Provider value={fontSize === 0 ? theme.extraSmall : 
            (fontSize === 1 ? theme.small : 
            (fontSize === 2 ? theme.default : 
            (fontSize === 3 ? theme.large : 
            (fontSize === 4 ? theme.extraLarge : ""))))}>
        <NavigationContainer theme={darkMode === true? DarkTheme : DefaultTheme}>
          <Stack.Navigator initialRouteName='Start'
  screenOptions={{
    headerShown: false
  }}
  
          >
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ChooseMascot" component={ChooseMascot} />
            <Stack.Screen name="NewJournal" component={NewJournal} />
            <Stack.Screen name="JournalsEntries" component={JournalsEntries} />
            <Stack.Screen name="CreateEntry" component={CreateEntry} />
            <Stack.Screen name="CustomizeEntry" component={CustomizeEntry} />
            <Stack.Screen name="Stats" component={Stats} />
            <Stack.Screen name="MonthStats" component={MonthStats} />
            <Stack.Screen name="YearStats" component={YearStats} />  
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="CrisisSupport" component={CrisisSupport} />
            <Stack.Screen name="Recommendations" component={Recommendations} />
            <Stack.Screen name="Accessibility" component={Accessibility} />
            <Stack.Screen name="Font Size" component={FontSize} />
            <Stack.Screen name="Demo" component={Demo} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="WriteEntry" component={WriteEntry} />
            <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
          </Stack.Navigator>
        </NavigationContainer>
        </FontContext.Provider>
      </themeContext.Provider>
    </SafeAreaView>

  );
}