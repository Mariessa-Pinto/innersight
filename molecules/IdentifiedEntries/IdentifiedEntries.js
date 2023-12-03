import globalStyles from '../../styles/global'
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback } from 'react-native';
import StatsBox from '../../atom/StatsBox/StatsBox';
import themeContext from '../../theme/themeContext';
import fontContext from '../../theme/fontContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getNegEntries } from '../../firebase/firebaseService';

const IdentifiedEntries = () => {

    const navigation = useNavigation();
    const [entries, setEntries] = useState([]);
    const [pressed, setPressed] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);

    const auth = getAuth()

    //Reverse Entries Order
    const reversedEntries = [...entries].reverse();

    // Format Timestamp
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
    };

    // useEffect(() => {
    //     const fetchJournalEntries = async () => {
    //         try {
    //             // Use the user's UID when fetching journal entries
    //             const username = auth.currentUser ? auth.currentUser.uid : null;
    //             if (username) {
    //                 const journalEntries = await getNegEntries(username);
    //                 console.log('Journal Entries:', journalEntries);
    //                 setEntries(Object.values(journalEntries));
    //             } else {
    //                 console.error('User not authenticated.');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching journal entries:', error);
    //         }
    //     };
    //     fetchJournalEntries();
    // }, [auth.currentUser]);

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)
    //Font Size
    const fontTheme = useContext(fontContext)


    return (
        <View style={styles.maincontent}>
            <View style={styles.title}>
                <Text style={[globalStyles.h3Text, { color: theme.color }]}>Identified Entries</Text>
            </View>
            <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>2 entires were identified where you felt negative.</Text>

            {/* <FlatList
                            style={{ marginBottom: 240 }}
                            data={reversedEntries}
                            keyExtractor={(item) => item.timestamp.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.container}>
                                    <TouchableWithoutFeedback
                                        onPressIn={() => setPressed(true)}
                                        onPressOut={() => setPressed(false)}
                                        onPress={() => handleViewEntry(item)}
                                    >
                                        <View style={[styles.button, pressed && styles.buttonPressed]}>
                                            <View style={styles.txt}>
                                                <View style={styles.title}>
                                                    <View style={styles.heading}>
                                                        <Text style={[globalStyles.h3TextSemiBold, styles.cardHeader]}>{item.title || "Untitled"}</Text>
                                                      
                                                    </View>
                                                
                                                </View>
                                                <View style={styles.textCon}>
                                                    <Text style={globalStyles.captionText}>{formatDate(item.timestamp)}</Text>
                                                    <Text style={globalStyles.captionText}>{item.content.length > 100 ? `${item.content.substring(0, 100)}...` : item.content}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            )}
                        /> */}

            <StatsBox    
                date="October 12, 2023"  
                text="Today was so stressful, I forgot my wallet at home. By the time I got to the grocery store, I had already spent 30mins travel..." 
                navigate="WriteEntry"
            />
            <StatsBox 
                date="October 3, 2023" 
                text ="Full day of school today, I'm feeling super tired. Maybe I'm getting sick, but it was really hard to get up in the morning..."    
                navigate="WriteEntry"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
    },
    title: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: 325
    },
});

export default IdentifiedEntries;