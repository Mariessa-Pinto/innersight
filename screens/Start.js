import globalStyles from '../styles/global'
import { Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';


import { ScrollView } from 'react-native';



export default function Start({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
            <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
                <StatusBar style="auto" />
                <Button
                    title="Get Started"
                    onPress={() => navigation.push('Demo')}
                />
            </View>
    );
}