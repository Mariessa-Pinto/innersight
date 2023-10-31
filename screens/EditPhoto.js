import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, ScrollView, Switch, Modal, TouchableWithoutFeedback } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import Header from '../molecules/Header/Header';
import { Image } from 'expo-image';
import NavBar from '../molecules/Navigation/NavBar';
import profilePicOverlay from '../molecules/Overlays/profilePicOverlay';
import UpdatePhoto from '../atom/Buttons/UpdatePhotoButton';


export default function EditPhoto({ navigation }) {

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

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    const OverlayContent = profilePicOverlay;

    return (
        <View>
        <ScrollView>
            <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                <Header
                    title='Customize Profile Photo'
                    navigate='PersonalInformation'
                />
                <View style={styles.profimage}>
                    <Image
                        source={selectedProfileImage}
                        style={styles.otter}
                    />
                </View>
                <View style={styles.subHeadBox}>
                    <Text style={styles.subHeading}>Choose Your Photo</Text>
                </View>
                <ScrollView horizontal={true} contentContainerStyle={styles.profileOptions}>
                    {profilePictureOptions.map((option, index) => (
                        <View style={styles.colorCircle}
                            key={index}>
                            <View
                                style={styles.profileOption}
                            >
                                <Image
                                    source={option.source}
                                    style={[styles.optionImage, selectedOption === index ? styles.selectedOption : null]}
                                    onPress={() => onOptionPress(index)}
                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View onPress={toggleOverlay}>
                    <UpdatePhoto
                        text='Update Photo'
                    />
                </View>
            </View>
            <NavBar navigation={navigation} />
            <TouchableWithoutFeedback onPress={toggleOverlay}>
                <View style={{ flex: 1 }}>
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
            </ScrollView>
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
        paddingTop: 30,
        marginTop: 20,
        marginBottom: 10
    },
    otter: {
        width: 216,
        height: 189
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
    },
    selectedOption: {
        borderColor: '#555658'
    },
    colorCirlce: {
        width: 100,
        height: 100,
        backgroundColor: '#FFF2AC'
    },
    subHeading: {
        textAlign: 'left'
    },
    subHeadBox: {
        width: 350,
        display: 'flex',
        alignItems: 'flex-start'
    }
})