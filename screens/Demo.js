import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'


export default function Demo({ navigation } ) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
            <StatusBar style="auto" />
            <Image
                source={require('../atom/icons/bear.png')}
                style={styles.mascot}
            />
            <ExtraLargeBtnLightTxt text="Create an Account" 
                        onPress={() => navigation.push('Login')}
                    />
        </View>
    );
}

const styles = StyleSheet.create({
    mascot: {
        height: 150,
        width: 150
    },
})