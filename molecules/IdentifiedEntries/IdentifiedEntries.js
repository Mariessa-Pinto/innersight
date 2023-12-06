import globalStyles from '../../styles/global'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import StatsBox from '../../atom/StatsBox/StatsBox';
import themeContext from '../../theme/themeContext';
import fontContext from '../../theme/fontContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getJournalEntries } from '../../firebase/firebaseService';

const IdentifiedEntries = () => {
    const navigation = useNavigation();
    const [entries, setEntries] = useState([]);
    const [pressed, setPressed] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);

    const auth = getAuth()

    //Reverse Entries Order
    const reversedEntries = [...entries].reverse();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Format Timestamp
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const formattedMonth = month[date.getMonth()]
        const formattedDate = `${formattedMonth} ${date.getDate()}, ${date.getFullYear()}`;
        return formattedDate;
    };

    useEffect(() => {
        console.log("new log")
        const fetchJournalEntries = async () => {
            try {
                // Use the user's UID when fetching journal entries
                const username = auth.currentUser ? auth.currentUser.uid : null;
                if (username) {
                    const journalEntries = await getJournalEntries(username);
                    console.log('Journal Entries:', journalEntries);
                    setEntries(Object.values(journalEntries));
                } else {
                    console.error('User not authenticated.');
                }
            } catch (error) {
                console.error('Error fetching journal entries:', error);
            }
        };
        fetchJournalEntries();
    }, [auth.currentUser]);

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)
    //Font Size
    const fontTheme = useContext(fontContext)

    const handleViewEntry = (entry) => {
        setSelectedEntry(entry);
        navigation.navigate('JournalViewPage', { entry, title: entry.title });
    };

    return (
        <View style={styles.maincontent}>
            <View style={styles.title}>
                <Text style={[globalStyles.h3Text, { color: theme.color }]}>Identified Entries</Text>
            </View>
            <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>{entries.length} entires were identified where you felt negative.</Text>
            <View style={styles.cards}>
                {
                    entries && entries.map((i, index) => {
                        return (
                            <View key={index}>
                                {
                                    i.entryType === "negative" ?
                                        <TouchableOpacity
                                            style={styles.container}
                                            onPress={() => handleViewEntry(i)}
                                        >
                                            <View style={styles.textBox}>
                                                <Text style={[globalStyles.h3TextSemiBold, { color: '#525585' }]}>{i.title}</Text>
                                                <Text style={[globalStyles.h4TextSemiBold, { color: '#525585' }]}>{formatDate(i.timestamp)}</Text>
                                                <Text style={[globalStyles.captionText, { color: theme.color }]}> {i.content.length > 200 ? `${i.content.substring(0, 200)}...` : i.content}</Text>
                                            </View>
                                            <View>
                                                <Image source={require('../../atom/icons/rightArrow.png')} style={styles.rightArrow} />
                                            </View>
                                        </TouchableOpacity>
                                        :
                                        ""
                                }
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: 325
    },
    statsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    },
    container: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#F2F2FD',
        borderRadius: 15,
        borderColor: '#EDEAEA',
        borderWidth: 1,
        elevation: 3,
        gap: 25,
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 25,
        alignItems: 'center',
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        width: 250,
        gap: 5
    },
    rightArrow: {
        width: 30,
        height: 30
    }
});

export default IdentifiedEntries;