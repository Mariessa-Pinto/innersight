import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import Header from '../molecules/Header/Header';
import { Image } from 'expo-image';
import NavBar from '../molecules/Navigation/NavBar';
import ProfilePicOverlay from '../molecules/Overlays/profilePicOverlay';
import Modal from "react-native-modal";
import GestureRecognizer from 'react-native-swipe-gestures';

export default function EditPhoto({ navigation }) {

    const [pressed, setPressed] = useState(false);

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    const profilePictureOptions = [
        { source: require('../atom/Mascots/Panda.png') },
        { source: require('../atom/Mascots/Otter.png') },
        { source: require('../atom/Mascots/Sloth.png') },
        { source: require('../atom/Mascots/Frog.png') },
    ];

    const [selectedOption, setSelectedOption] = useState(1);
    const [selectedProfileImage, setSelectedProfileImage] = useState(profilePictureOptions[selectedOption].source);

    const onOptionPress = (index) => {
        setSelectedOption(index);
        setSelectedProfileImage(profilePictureOptions[index].source);
    };

    //Overlay
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainerNoScroll, { backgroundColor: theme.background }]}>
                    <Header
                        title='Customize Profile Photo'
                        navigation={navigation}
                    />
                    <View style={styles.container}>

                        <View style={styles.profimage}>
                            <Image
                                source={selectedProfileImage}
                                style={styles.otter}
                            />
                        </View>
                        <View style={styles.subHeadBox}>
                            <Text style={[styles.subHeading, globalStyles.labelText]}>Choose Your Photo</Text>
                        </View>
                        <ScrollView horizontal={true} contentContainerStyle={styles.profileOptions}>
                            {profilePictureOptions.map((option, index) => (
                                <TouchableWithoutFeedback
                                    key={index}
                                    onPress={() => onOptionPress(index)}>
                                    <View style={styles.colorCircle}>
                                        <View style={styles.profileOption}>
                                            <Image
                                                source={option.source}
                                                style={[styles.optionImage, selectedOption === index ? styles.selectedOption : null]}
                                            />
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}
                        </ScrollView>
                        <TouchableWithoutFeedback
                            onPress={() => setOverlayVisible(!isOverlayVisible)}>
                            <View style={[styles.button, pressed && styles.buttonPressed]}>
                                <Text style={[styles.text, globalStyles.btnTextMed]}>Update Photo</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View>
                    <GestureRecognizer
                        style={{ flex: 1 }}
                        onSwipeDown={() => setOverlayVisible(false)}
                    >
                        <Modal
                            isVisible={isOverlayVisible}
                            onBackdropPress={() => setOverlayVisible(false)}
                            directionalOffsetThreshold={20}
                        >
                            <ProfilePicOverlay />
                        </Modal>
                    </GestureRecognizer>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    profimage: {
        backgroundColor: '#FFF2AC',
        borderRadius: 200,
        height: 250,
        width: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    otter: {
        width: 200,
        height: 189,
        resizeMode: 'contain'
    },
    profileOptions: {
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 5
    },
    profileOption: {
        margin: 10,
    },
    optionImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'transparent',
        resizeMode: 'contain'
    },
    selectedOption: {
        borderColor: '#555658'
    },
    colorCircle: {
        width: 120,
        height: 120,
        backgroundColor: '#FFF2AC',
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 20
    },
    subHeading: {
        textAlign: 'left'
    },
    subHeadBox: {
        width: 350,
        display: 'flex',
        alignItems: 'flex-start'
    },
    button: {
        width: 130,
        height: 38,
        borderRadius: 10,
        backgroundColor: '#6164C3',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
    },
    buttonPressed: {
        backgroundColor: '#43479A',
    },
    text: {
        color: '#FDFDFD',
    },
})