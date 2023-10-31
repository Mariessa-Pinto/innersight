import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import JournalToggle from '../atom/WordToggle/JournalToggle';
import SearchBar from '../atom/Search/SearchBar';
import JournalCards from '../molecules/JournalCard/JournalCard';



export default function JournalsEntries({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
<View style={[globalStyles.outerContainer, { backgroundColor: theme.background }]}>
        <ScrollView>
            <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                <View style={styles.toggleCon}>
                    <JournalToggle />
                </View>
                <View style={styles.header}>
                    <Text style={[globalStyles.h1TextBold, { color: theme.color }]}>My Journals</Text>
                </View>
                <SearchBar />
                <JournalCards />
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='journal' />
        </View>
    );
}

const styles = StyleSheet.create({
    toggleCon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    header: {
        marginLeft: 20,
        marginTop: 10
    }
})