import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import * as React from 'react';
import HomeIcon from '../../atom/icons/HomeIcon'
import StatsIcon from '../../atom/icons/StatsIcon';
import NavBarContainer from '../../atom/icons/NavBarContainer';
import ProfileIcon from '../../atom/icons/ProfileIcon';
import JournalIcon from '../../atom/icons/JournalIcon';
import plusButtonOverlay from '../Overlays/plusButtonOverlay';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { LinearGradient } from 'expo-linear-gradient';

import { useContext, useState } from 'react';
import themeContext from '../../theme/themeContext';

export default function NavBar({ navigation, variation }) {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    const OverlayContent = plusButtonOverlay

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
                </View >

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

});