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
            <Header
                title="Organizations"
            />
            <ScrollView style={globalStyles.contentContainer}>
                <View>
                    <SearchBar
                        placeholder="Search by City/Town"
                    />
                    <OrganizationCard />
                </View>
            </ScrollView>
                <NavBar navigation={navigation} variation='profile'/>
        </View>

    );
}

const styles = StyleSheet.create({


})