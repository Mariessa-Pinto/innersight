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
import Header from '../molecules/Header/Header';
import DistressCard from '../molecules/CrisisSupportCard/DistressCard';
import SearchBar from '../atom/Search/SearchBar'

export default function LocalDistress({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <Header
                title="Local Distress Centres"
                navigation={navigation}
            />
            <ScrollView style={globalStyles.contentContainer}>
                <SearchBar placeholder="Search by City/Town" />
                <DistressCard />

            </ScrollView>
                <NavBar navigation={navigation} variation='profile'/>
        </View>

    );
}

const styles = StyleSheet.create({
    content: {
        marginTop: 40,
        gap: 40
    }

})