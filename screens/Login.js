import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'



export default function Login({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
            <StatusBar style="auto" />
            <ExtraLargeBtnLightTxt 
                    text="Log in" 
                    navigate="Home"
                />
        </View>
    );
}

const styles = StyleSheet.create({
})