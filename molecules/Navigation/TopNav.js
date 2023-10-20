
import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import globalStyles from '../../styles/global'
import { useState, useContext } from 'react';
import themeContext from '../../theme/themeContext';
import BackBtn from '../../atom/BackButton/BackBtn'


export default function TopNav({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

return(
    <View style={styles.container}>
        <BackBtn/>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: 50,
        width: 'auto',
    }
})