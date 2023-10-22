import globalStyles from '../styles/global'

import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Button, ScrollView, TextInput, Image,
    TouchableOpacity
} from 'react-native';
import themeContext from '../theme/themeContext';
import fontContext from '../theme/fontContext';
import SearchBar from '../atom/Search/SearchBar';
import GreyButtons from '../molecules/GreyButtons/GreyButtons';



export default function InfoandPublications({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <ScrollView style={globalStyles.contentContainer}>
            <TopNav 
            headerText="Information and Publications"
            />
            <View style={styles.content}>
            <SearchBar
            placeholder="Search by Publications"
            />
           <GreyButtons />
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
    gap: 10
   }

})