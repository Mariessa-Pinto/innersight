import globalStyles from '../styles/global'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Modal } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';
import SearchBar from '../atom/Search/SearchBar';
import JournalTags from '../molecules/JournalTags.js/JournalTags';
import tagSettingsOverlay from '../molecules/Overlays/tagSettingsOverlay';
import { Image } from 'expo-image';

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
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <View style={styles.container}>
                <Header title='Manage Tags' navigate='' />
                <TouchableWithoutFeedback
                    onPress={toggleOverlay}
                    onPressIn={() => setPressed(true)}
                    onPressOut={() => setPressed(false)}
                >
                    <View style={[styles.tagMenu, pressed && styles.buttonPressed]}>
                        <Image
                            source={require('../atom/icons/threeDots.png')}
                            style={styles.dotsButton}
                        />
                        <Modal
                            visible={isOverlayVisible}
                            animationType="slide"
                            transparent={true}
                            onRequestClose={toggleOverlay}
                        >
                            <OverlayContent />
                        </Modal>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.body}>
                    <SearchBar placeholder='Search for a Tag' />
                    <JournalTags />
                    <JournalTags />
                </View>
            </View>
            <NavBar navigation={navigation} />
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
        display: 'flex',
        alignItems: 'center',
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