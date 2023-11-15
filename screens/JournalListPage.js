import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import SearchBar from '../atom/Search/SearchBar';
import Tag from '../atom/Tag/Tag';
import EntriesCards from '../molecules/EntriesCard/EntriesCard';
import Header from '../molecules/Header/Header'
import { getJournalEntries } from '../firebase/firebaseService';



export default function JournalListPage({ navigation }) {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const fetchJournalEntries = async () => {
            try {
                const journalEntries = await getJournalEntries("anika");
                console.log('Journal Entries:', journalEntries);
            setEntries(Object.values(journalEntries));
            } catch(error) {
                console.error('Error fetching journal entries:', error);
            }
        };
        fetchJournalEntries();
    }, []);

    const handleViewEntry = (entry) => {
        navigation.navigate('JournalViewPage', { entry });
    };

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
          
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <FlatList
                    data={entries}
                    keyExtractor={(item) => item.timestamp.toString()}
                    renderItem={({ item}) => (
                        <Button title={item.content} onPress={() => handleViewEntry(item)} />
                    )}
                    />
                </View>
         
            <NavBar navigation={navigation} variation='journal' />
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

    },
    tagsScroll:{

    }
})