import { StyleSheet, View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import * as React from 'react';
import HomeIcon from '../../atom/icons/HomeIcon'
import StatsIcon from '../../atom/icons/StatsIcon';
import NavBarContainer from '../../atom/icons/NavBarContainer';
import ProfileIcon from '../../atom/icons/ProfileIcon';
import JournalIcon from '../../atom/icons/JournalIcon';
import plusButtonOverlay from '../Overlays/plusButtonOverlay';

import { useContext, useState } from 'react';
import themeContext from '../../theme/themeContext';

/*When importing the nav bar in other pages, it should be inserted as
* a component like "<NavBar navigation={navigation} />" which
* utilizes the navigation prop
*/

export default function NavBar({ navigation }) {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    const OverlayContent = plusButtonOverlay

    return (
        <View style={styles.container}>
            <View style={styles.iconView}>
                <View style={[styles.iconSubContainer, styles.container1]}>
                    <TouchableOpacity style={styles.iconButton} onPress={() => navigation.push('Home')}>
                        <HomeIcon style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} onPress={() => navigation.push('Stats')}>
                        <StatsIcon style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.addButtonContainer}>
                    <TouchableOpacity style={styles.addButton} onPress={toggleOverlay}>
                        <Image source={require('../../atom/icons/addButton.png')} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.iconSubContainer, styles.container2]} >
                    <TouchableOpacity style={styles.iconButton} onPress={() => navigation.push('JournalsEntries')}>
                        <JournalIcon style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton} onPress={() => navigation.push('Profile')}>
                        <ProfileIcon style={styles.icon} />
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
    );
};


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 65,
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