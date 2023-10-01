import { StatusBar } from 'expo-status-bar';
import { Text, View, Appearance } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles/global'


import Home from './screens/Home';
import About from './screens/About';

export default function App() {


  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
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
          <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
