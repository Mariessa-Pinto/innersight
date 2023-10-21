
import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import globalStyles from '../../styles/global'
import { useState, useContext } from 'react';
import themeContext from '../../theme/themeContext';
import BackBtn from '../../atom/BackButton/BackBtn'


export default function TopNav({
    navigation,
    headerText 
}) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={styles.container}>

            <Text style={[globalStyles.h3Text, styles.header]}>{headerText}</Text>
            <BackBtn style={styles.backBtn}
            navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        flex: 1,

    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})