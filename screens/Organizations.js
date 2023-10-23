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

import SearchBar from '../atom/Search/SearchBar';
import OrganizationCard from '../molecules/CrisisSupportCard/OrganizationCard'


export default function Organizations({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <ScrollView style={globalStyles.contentContainer}>
                <TopNav
                    headerText="Organizations"
                />
                <View style={styles.content}>
                    <SearchBar
                        placeholder="Search by City/Town"
                    />
                    <OrganizationCard />
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
        marginTop: 40
    }

})