import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableWithoutFeedback, Image } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import SearchBar from '../atom/Search/SearchBar';
import Tag from '../atom/Tag/Tag';
import Header from '../molecules/Header/Header'
import { getJournalEntries, getListOfStories } from '../firebase/firebaseService';
import { deleteJournalEntries } from '../firebase/firebaseService';
import { useNavigation } from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from "react-native-modal";
import EntrySpecOverlay from '../molecules/Overlays/entrySpecOverlay'

import { remove, ref } from 'firebase/database';
import { database } from '../firebase/firebaseConfig'



export default function JournalListPage() {
    const navigation = useNavigation();
    const [entries, setEntries] = useState([]);
    const [pressed, setPressed] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [target, setTarget] = useState()

    const [isOverlayVisible, setOverlayVisible] = useState(false);


    useEffect(() => {
        const fetchJournalEntries = async () => {
            try {
                const journalEntries = await getJournalEntries("anika");
                console.log('Journal Entries:', journalEntries);
                setEntries(Object.values(journalEntries));
            } catch (error) {
                console.error('Error fetching journal entries:', error);
            }
        };
        fetchJournalEntries();
    }, []);

    const handleViewEntry = (entry) => {
        setSelectedEntry(entry);
        navigation.navigate('JournalViewPage', { entry });
    };

       //Delete Entry
    //    const handleDeleteEntry = (entryToDelete) => {
    //     const updatedEntries = entries.filter((entry) => entry !== entryToDelete);
    //     setEntries(updatedEntries);
    //     setOverlayVisible(false); 
    //     console.log(`${updatedEntries}`)
    // };

    //Patricia's attempt at delete entry
    const handleDeleteEntry = (selectedEntry) => {
        const result = entries.filter(({content}) => !content.includes(selectedEntry.content))
        setEntries(result)
        console.log("Entry removed")
        setOverlayVisible(false); 
    }

    const handleTarget = (selectedEntry) => {
//getListOfStories("anika")

//        deleteJournalEntries("anika", "key")

        setSelectedEntry(selectedEntry)
        console.log(entries)
        console.log(selectedEntry)
    }

    //Reverse Entries Order
    const reversedEntries = [...entries].reverse();

    // Format Timestamp
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return formattedDate;
    };

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

 


    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <View>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background, marginBottom: -30 }]}>
                    <Header title="journalToggle" settings={true} type="Entries" navigation={navigation} overlayType="entriesList" />
                    <View style={styles.header}>
                        <Text style={[globalStyles.h1TextBold, { color: theme.color }]}>My Entries</Text>
                    </View>
                    <SearchBar placeholder="Search by Title or Tags" />
                    <View style={styles.tags}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={styles.tagsScroll}
                        >
                            <Tag
                                text="Friends"
                            />
                            <Tag
                                text="Work"
                            />
                            <Tag
                                text="School"
                            />
                            <Tag
                                text="Gratitude"
                            />
                            <Tag
                                text="Venting"
                            />
                            <Tag
                                text="Therapy"
                            />
                        </ScrollView>
                    </View>
                    <View>
                        <FlatList
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
                                                        <Text style={[globalStyles.h3TextSemiBold, styles.cardHeader]}>{item.content.length > 23 ? `${item.content.substring(0, 23)}...` : item.content}</Text>
                                                        <Image
                                                            source={require('../atom/icons/Lock.png')}
                                                            style={styles.icon}
                                                        />
                                                    </View>
                                                    <TouchableWithoutFeedback
                                                        onPress={() => {setOverlayVisible(!isOverlayVisible); handleTarget(item)}}>
                                                        <View
                                                            style={styles.tapBox}>
                                                            <Image source={require('../atom/icons/SettingsIcon.png')} style={styles.settings} />
                                                        </View>
                                                    </TouchableWithoutFeedback>
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
                        />
                    </View>
                    <GestureRecognizer
                        style={{ flex: 1 }}
                        onSwipeDown={() => setOverlayVisible(false)}
                    >
                        <Modal
                            isVisible={isOverlayVisible}
                            onBackdropPress={() => setOverlayVisible(false)}
                            directionalOffsetThreshold={20}
                        >
                            <EntrySpecOverlay 
                                onDeleteEntry={() => handleDeleteEntry(selectedEntry)} 
                                selectedEntry={selectedEntry}
                            />
                        </Modal>
                    </GestureRecognizer>
                </View>
                <NavBar navigation={navigation} variation='journal' />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    tags: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 7
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    cardHeader: {
        width: '85%',
    },
    button: {
        width: '98%',
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        borderColor: '#F6F6F6',
        borderWidth: 1,
    },
    tapBox: {
        height: 30,
        width: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPressed: {
        backgroundColor: '#EAEAEA', // Change the color when pressed
        borderColor: '#EAEAEA'
    },
    text: {
        color: '#292929',
        fontSize: 12,
        fontWeight: 'light'
    },
    txt: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 20
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2
    },
    textCon: {
        gap: 20
    },
    settings: {
        width: 14,
        height: 3.11,
    },
    heading: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    tagsScroll: {
        marginBottom: 15,
        marginTop: 10
    }
})