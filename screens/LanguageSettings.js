import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';
import SearchBar from '../atom/Search/SearchBar'
import LanguageGreyButtons from '../molecules/GreyButtons/LanguageGreyButtons'


export default function LanguageSettings({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
            <Header title='Language' navigation={navigation} />
            <ScrollView style={globalStyles.contentContainer}>
                <SearchBar placeholder="Find a Language" />
                <LanguageGreyButtons />
            </ScrollView>

            <View style={globalStyles.navContainer}>
                <NavBar navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
})