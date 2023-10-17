import styles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import DateToggle from '../atom/WordToggle/DateToggle';



export default function Stats() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (

        <View style={[styles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
            <View style={styles.maincontent}>
                <Text>Your Year In review</Text>

            </View>
           

        </View>
    );
}


const Styles = StyleSheet.create({

    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }



})

