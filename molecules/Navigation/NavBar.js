import globalStyles from '../../styles/global';
import { StyleSheet, View, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Text } from 'react-native';
import * as React from 'react';
import HomeIcon from '../../atom/icons/HomeIcon'
import StatsIcon from '../../atom/icons/StatsIcon';
import NavBarContainer from '../../atom/icons/NavBarContainer';
import ProfileIcon from '../../atom/icons/ProfileIcon';
import JournalIcon from '../../atom/icons/JournalIcon';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from "react-native-modal";
import { Dimensions } from 'react-native';

import { useContext, useState, useEffect } from 'react';
import themeContext from '../../theme/themeContext';

const { width: windowWidth } = Dimensions.get('window');

export default function NavBar({ navigation, variation }) {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    //Handle Keyboard Error
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', hideOverlay);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', hideOverlay);

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    //Dark/Light Mode
    const theme = useContext(themeContext)

    //Overlay
    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    const hideOverlay = () => {
        setOverlayVisible(false);
    };

    const [pressed, setPressed] = useState(false);

    return (
        <>
            <HideWithKeyboard>
                <View style={styles.container} >
                    <View style={styles.iconView}>
                        <View style={[styles.iconSubContainer, styles.container1]}>
                            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.push('Home')}>
                                {
                                    variation === "home" ? <HomeIcon style={styles.icon} icon='lightActive' /> : <HomeIcon style={styles.icon} icon='' />
                                }
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.push('Stats')}>
                                {
                                    variation === "stats" ? <StatsIcon style={styles.icon} icon='lightActive' /> : <StatsIcon style={styles.icon} icon='' />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.addButtonContainer}>
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={toggleOverlay}
                                onPressIn={() => setPressed(true)}
                                onPressOut={() => setPressed(false)}>
                                {
                                    pressed ?
                                        <Image source={require('../../atom/icons/addButtonOnPress.png')} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                                        :
                                        <Image source={require('../../atom/icons/addButton.png')} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.iconSubContainer, styles.container2]} >
                            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.push('JournalsEntries')}>
                                {
                                    variation === "journal" ? <JournalIcon style={styles.icon} icon='lightActive' /> : <JournalIcon style={styles.icon} icon='' />
                                }
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.push('Profile')}>
                                {
                                    variation === "profile" ? <ProfileIcon style={styles.icon} icon='lightActive' /> : <ProfileIcon style={styles.icon} icon='' />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <NavBarContainer style={styles.background} />
                </View >
                <GestureRecognizer
                    style={{ flex: 1 }}
                    onSwipeDown={() => setOverlayVisible(false)}
                >
                    <Modal
                        isVisible={isOverlayVisible}
                        onBackdropPress={() => setOverlayVisible(false)}
                        directionalOffsetThreshold={10}
                    >
                        <View style={styles.containerOverlay}>
                            <View style={styles.insideOverlay}>
                                <View style={styles.lineOverlay}></View>
                                <TouchableWithoutFeedback
                                    onPressIn={() => setPressed(true)}
                                    onPressOut={() => setPressed(false)}
                                    onPress={() => {navigation.push('WriteEntry'); setOverlayVisible(false)}}
                                >
                                    <View style={[styles.button, pressed && styles.buttonPressed]}>
                                        <Text style={[globalStyles.btnTextLrg, styles.text]}>New Journal Entry</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPressIn={() => setPressed(true)}
                                    onPressOut={() => setPressed(false)}
                                    onPress={() => {navigation.push('NewJournal'); setOverlayVisible(false)}}

                                >
                                    <View style={[styles.button, pressed && styles.buttonPressed]}>
                                        <Text style={[globalStyles.btnTextLrg, styles.text]}>New Journal</Text>
                                    </View>
                                </TouchableWithoutFeedback>

                            </View>
                        </View>
                    </Modal>
                </GestureRecognizer>
            </HideWithKeyboard>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 65,
        position: 'absolute',
        bottom: 0
    },
    iconButton: {
        height: '100%',
        width: 40,
        display: 'flex',
        justifyContent: 'center',
    },
    addButton: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    iconView: {
        height: '100%',
        width: '100%',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    iconSubContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '100%',
        width: '50%',
        alignItems: 'center',
    },
    container1: {
        paddingRight: 25
    },
    container2: {
        paddingLeft: 25
    },
    addButtonContainer: {
        width: '20%',
        height: 65,
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        left: '40.5%',
        bottom: '45%'
    },
    navView: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0
    },

    containerOverlay: {
        width: windowWidth,
        height: 'auto',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#F2F2FD',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 30,
        position: 'absolute',
        bottom: -20,
        left: -20,

    },
    insideOverlay: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
        marginTop: 10,
        paddingBottom: 25
    },
    lineOverlay: {
        width: 65,
        height: 3,
        backgroundColor: '#88898C',
        marginBottom: 10
    },
    button: {
        width: 228,
        height: 44,
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
});