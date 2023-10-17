import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';



export default function Login({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
            <StatusBar style="auto" />
            <Button
                title="Log In"
                onPress={() => navigation.push('Home')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
})