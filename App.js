
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import React, { useState, useEffect } from 'react'


//Reusable Themes
import theme from './theme/theme';
import themeContext from './theme/themeContext'
import FontContext from './theme/fontContext';

import NavBar from './molecules/NavBar';
//Screens
import Start from './screens/Start';
import About from './screens/About';


import NewJournal from './screens/NewJournal';
import JournalsEntries from './screens/JournalsEntries';
import CreateEntry from './screens/CreateEntry';
import CustomizeEntry from './screens/CustomizeEntry';
import Stats from './screens/Stats';
import Profile from './screens/Profile';
import CrisisSupport from './screens/CrisisSupport';
import Recommendations from './screens/Recommendations';
import Accessibility from './screens/Accessibility';
import FontSize from './screens/FontSize';
import Demo from './screens/Demo';
import Login from './screens/Login';
import Home from './screens/Home';
import PersonalInformation from './screens/PersonalInformation';


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

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
        <FontContext.Provider value={fontSize === 0 ? theme.extraSmall : 
            (fontSize === 1 ? theme.small : 
            (fontSize === 2 ? theme.default : 
            (fontSize === 3 ? theme.large : 
            (fontSize === 4 ? theme.extraLarge : ""))))}>
        <NavigationContainer theme={darkMode === true? DarkTheme : DefaultTheme}>
          <Stack.Navigator initialRouteName='Start'>
            <Stack.Screen
              name="Start"
              component={NavBar}
              options={{
                title: '',
                headerStyle: {
                  height: 50,
                  backgroundColor: '#fff',
                },
                headerTintColor: '#888',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen name="About" component={NavBar} />
            <Stack.Screen name="NewJournal" component={NavBar} />
            <Stack.Screen name="JournalsEntries" component={NavBar} />
            <Stack.Screen name="CreateEntry" component={NavBar} />
            <Stack.Screen name="CustomizeEntry" component={NavBar} />
            <Stack.Screen name="Stats" component={NavBar} />
            <Stack.Screen name="Profile" component={NavBar} />
            <Stack.Screen name="CrisisSupport" component={NavBar} />
            <Stack.Screen name="Recommendations" component={NavBar} />
            <Stack.Screen name="Accessibility" component={NavBar} />
            <Stack.Screen name="Font Size" component={NavBar} />
            <Stack.Screen name="Demo" component={NavBar} />
            <Stack.Screen name="Login" component={NavBar} />
            <Stack.Screen name="Home" component={NavBar} />
          </Stack.Navigator>
        </NavigationContainer>
        </FontContext.Provider>
      </themeContext.Provider>
    </SafeAreaView>

  );
}
