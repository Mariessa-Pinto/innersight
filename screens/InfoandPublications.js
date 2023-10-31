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
import Header from '../molecules/Header/Header';
import NavBar from '../molecules/Navigation/NavBar';



export default function InfoandPublications({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)

    return (
<View style={[globalStyles.outerContainer, { backgroundColor: theme.background }]}>
        <ScrollView>
            <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                <Header
                    title="Information and Publications"
                />
                <View style={styles.content}>
                    <SearchBar
                        placeholder="Search by Publications"
                    />
                    <GreyButtons />
                </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='profile' />
        </View>

    );
}

const styles = StyleSheet.create({
    content: {
        marginTop: 40,
        gap: 10
    }

})