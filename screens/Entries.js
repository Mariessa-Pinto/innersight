import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import JournalToggle from '../atom/WordToggle/JournalToggle';
import SearchBar from '../atom/Search/SearchBar';
import Tag from '../atom/Tag/Tag';
import EntriesCards from '../molecules/EntriesCard/EntriesCard';



export default function Entries({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <ScrollView style={globalStyles.contentContainer}>
                <View style={styles.toggleCon}>
                    <JournalToggle />
                </View>
                <View style={styles.header}>
                    <Text style={[globalStyles.h1TextBold, { color: theme.color }]}>My Entries</Text>
                </View>
                <SearchBar />
                <View style={styles.tags}>
                    <Tag
                        text="Friends"
                    />
                    <Tag
                        text="Tag"
                    />
                    <Tag
                        text="School"
                    />
                </View>
                <EntriesCards />
            </ScrollView>
            <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    toggleCon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginLeft: 20,
        marginTop: 10
    },
    tags: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 7
    }
})