import styles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, Image, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';


import { ScrollView } from 'react-native';



export default function Start({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={startStyles.container}>
            <StatusBar style="auto" />
            <Image 
                source={require('../atom/icons/logo.png')}
            />
            <Image 
                source={require('../atom/icons/logo_text.png')}
                style={startStyles.wordmark}
            />
            <Pressable style={startStyles.button} onPress={() => navigation.push('Demo')}>
                <Text style={styles.text}>Get Started</Text>
            </Pressable>
        </View>
    );
}


const startStyles = StyleSheet.create({
    container: {
        backgroundColor: "#D5D7FF",
        display: 'flex',
        height: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#6164C3",
    }
});