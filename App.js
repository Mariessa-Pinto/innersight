import styles from './styles/global'

import { StatusBar } from 'expo-status-bar';
import { Text, View, Appearance } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import React, { useState, useEffect } from 'react'
import theme from './theme/theme';
import themeContext from './theme/themeContext'


import Home from './screens/Home';
import About from './screens/About';
import Settings from './screens/Settings';
import NewJournal from './screens/NewJournal';
import JournalsEntries from './screens/JournalsEntries';
import CreateEntry from './screens/CreateEntry';
import CustomizeEntry from './screens/CustomizeEntry';
import Stats from './screens/Stats';
import Profile from './screens/Profile';
import CrisisSupport from './screens/CrisisSupport';
import Recommendations from './screens/Recommendations';

export default function App() {

  //Global dark/light mode
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)
      console.log(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])


  const Stack = createNativeStackNavigator();

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
        <NavigationContainer theme={darkMode === true? DarkTheme : DefaultTheme}>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: 'Welcome!',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#888',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="NewJournal" component={NewJournal} />
            <Stack.Screen name="JournalsEntries" component={JournalsEntries} />
            <Stack.Screen name="CreateEntry" component={CreateEntry} />
            <Stack.Screen name="CustomizeEntry" component={CustomizeEntry} />
            <Stack.Screen name="Stats" component={Stats} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="CrisisSupport" component={CrisisSupport} />
            <Stack.Screen name="Recommendations" component={Recommendations} />
          </Stack.Navigator>
        </NavigationContainer>
      </themeContext.Provider>
    </SafeAreaView>

  );
}
