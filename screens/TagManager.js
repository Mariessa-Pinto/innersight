import globalStyles from '../styles/global'
import { StyleSheet, View, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';
import SearchBar from '../atom/Search/SearchBar';
import JournalTags from '../molecules/JournalTags.js/JournalTags';
import tagSettingsOverlay from '../molecules/Overlays/tagSettingsOverlay';

export default function TagManager({ navigation }) {
    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    const [pressed, setPressed] = useState(false);

    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    const OverlayContent = tagSettingsOverlay

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header title='Manage Tags' navigation={navigation} settings={true} overlayType="tagsList" />
                    <View style={styles.container}>
                        <SearchBar placeholder='Search for a Tag' />
                        <JournalTags
                            title="Tracking my mood changes."
                            tags={["angry", "happy", "sad", "annoyed"]}
                        />
                        <JournalTags
                            title="Complaining about anything and everything."
                            tags={["work", "home", "random"]} />
                        <JournalTags
                            title="Notes and techniques from therapy."
                            tags={["strategies", "feedback", "insights"]} />
                    </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='journal' />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 70
    },
    container: {
        width: '100%',
        display: 'flex',
        gap: 27
    },
    body: {
        marginTop: 40,
        gap: 30
    },
    buttonPressed: {
        backgroundColor: '#D5D7FF', // Change the color when pressed
    },
    tagMenu: {
        width: 30,
        height: 30,
        backgroundColor: '#DDDDDD',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 3,
        position: 'absolute',
        top: 30,
        right: 40
    },
    dotsButton: {
        width: 13,
        height: 3,
    },
})