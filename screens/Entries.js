import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import JournalToggle from '../atom/WordToggle/JournalToggle';
import SearchBar from '../atom/Search/SearchBar';
import Tag from '../atom/Tag/Tag';
import EntriesCards from '../molecules/EntriesCard/EntriesCard';
import Header from '../molecules/Header/Header'



export default function Entries({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
        <ScrollView>
            <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                <Header title="journalToggle" settings={true} navigation={navigation}/>
                <View style={styles.header}>
                    <Text style={[globalStyles.h1TextBold, { color: theme.color }]}>My Entries</Text>
                </View>
                <SearchBar placeholder="Search by Title or Tags" />
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
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='journal'/>
        </View>
    );
}

const styles = StyleSheet.create({
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