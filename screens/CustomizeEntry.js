import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import ColorBtns from '../atom/ColorButtons/ColorBtns';
import TypeButton from '../atom/TypeFace/TypeButton';
import MediumBtnLightTxt from '../atom/Buttons/MediumBtnLightTxt';
import Header from '../molecules/Header/Header';
import Modal from "react-native-modal";
import GestureRecognizer from 'react-native-swipe-gestures';

export default function CustomizeEntry({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    const [pressed, setPressed] = useState(false);

    const [isOverlayVisible, setOverlayVisible] = useState(false);

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header
                        title="Customize Your Entry"
                        navigation={navigation}
                    />
                    <View style={styles.header}>
                        <Text style={[globalStyles.h3Text, { color: theme.color }]}>Text Highlight Colour</Text>
                    </View>
                    <View style={styles.content}>
                        <ColorBtns />
                        <View>
                            <View style={styles.header}>
                                <Text style={[globalStyles.h3Text, { color: theme.color }]}>TypeFace</Text>
                            </View>
                            <TypeButton />
                        </View>
                        <TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                onPressIn={() => setPressed(true)}
                                onPressOut={() => setPressed(false)}
                                onPress={() => setOverlayVisible(true)}
                            >
                                <View style={[styles.button, pressed && styles.buttonPressed]}>
                                    <Text style={styles.text}>Save Changes</Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </TouchableWithoutFeedback>
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
                            <View style={styles.container}>
                                <View style={styles.inside}>
                                    <View style={styles.line}></View>
                                    <Text>Your changes have been saved.</Text>
                                    <TouchableWithoutFeedback

                                        onPress={() => setOverlayVisible(!isOverlayVisible)}
                                    >
                                        <View style={[styles.backButton, pressed && styles.backButtonPressed]}>
                                            <Text style={styles.backText}>Go Back</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>

                        </Modal>
                    </GestureRecognizer>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='journal' />
        </View>

    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        marginLeft: 10
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
        backgroundColor: '#43479A', // Change the color when pressed
    },
    text: {
        color: '#FDFDFD',
        fontSize: 13,
    },
    container: {
        width: 410,
        height: 'auto',
        paddingBottom: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#F2F2FD',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -200 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 30,
        position: 'absolute',
        bottom: -20,
        left: -20
    },
    inside: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
        marginTop: 10
    },
    line: {
        width: 65,
        height: 3,
        backgroundColor: '#88898C',
        marginBottom: 10
    },
    backButton: {
        width: 228,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#6164C3',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
    },
    backButtonPressed: {
        backgroundColor: '#43479A', // Change the color when pressed
    },
    backText: {
        color: '#FDFDFD',
        fontSize: 14,
    },
})