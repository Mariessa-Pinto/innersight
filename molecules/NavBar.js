
import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';
import HomeIcon from '../atom/icons/HomeIcon'
import StatsIcon from '../atom/icons/StatsIcon';
import NavBarContainer from '../atom/icons/NavBarContainer';
import ProfileIcon from '../atom/icons/ProfileIcon';
import AddButton from '../atom/icons/AddButton';
import JournalIcon from '../atom/icons/JournalIcon';
import globalStyles from '../styles/global'

import { useContext } from 'react';
import themeContext from '../theme/themeContext';



export default function NavBar({ navigation }) {

    //Dark/Light Mode
    const theme = useContext(themeContext)

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
                    <TouchableOpacity style={styles.addButton} onPress={() => navigation.push('NewJournal')}>
                        <Image source={require('../atom/icons/addButton.png')} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
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
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 55,
    },
    iconButton: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    addButton: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0

    },
    iconView: {
        height: '100%',
        width: '100%',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
marginHorizontal: 50,

    },
    iconSubContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '100%',
        width: '50%',
        alignItems: 'center',
    },

    addButtonContainer: {
        width: '20%',
        display: 'flex',
        alignItems: 'center',
    },
    navView: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0
    },

});