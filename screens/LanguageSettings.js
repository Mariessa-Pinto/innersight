import globalStyles from '../styles/global'
import { StyleSheet } from 'react-native';
import { View, ScrollView } from 'react-native';
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
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header title='Language' navigation={navigation} />
                    <SearchBar placeholder="Find a Language"
                        style={styles.searchBar} />
                    <LanguageGreyButtons />
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='profile' />
        </View>
    );
}

const styles = StyleSheet.create({
})
