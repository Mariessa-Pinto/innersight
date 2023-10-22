import globalStyles from '../styles/global'

import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Button, ScrollView, TextInput, Image,
    TouchableOpacity
} from 'react-native';
import themeContext from '../theme/themeContext';
import fontContext from '../theme/fontContext';
import NavBar from '../molecules/Navigation/NavBar';
import TopNav from '../molecules/Navigation/TopNav';
import CrisisSupportBtns from '../molecules/CrisisSupportBtns/CrisisSupportBtns'

export default function CrisisSupport({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <ScrollView style={globalStyles.contentContainer}>
            <TopNav 
            headerText="Crisis Support Resources"
            />
            <View style={styles.content}>
            <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>Help is available for all to help foster mental wellness. If you or someone you know is in immediate danger, please dial 9-1-1. </Text>
            <CrisisSupportBtns />
            </View>
            </ScrollView>
            <View style={globalStyles.navContainer}>
                <NavBar navigation={navigation} />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
   content: {
    marginTop: 40,
    gap: 40
   }

})