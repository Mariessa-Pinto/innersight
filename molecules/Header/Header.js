import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import globalStyles from '../../styles/global';
import { Image } from 'expo-image';
import { useState } from 'react';
import JournalToggle from '../../atom/WordToggle/JournalToggle';
import EntrySettings from '../Navigation/EntrySettings';


const Header = ({
    navigation,
    title,
    settings,
    overlayType }) => {
    const [pressed, setPressed] = useState(false);


    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
                style={styles.touchContainer}
                activeOpacity={1}
            >
                <View style={[styles.fullBack, pressed && styles.buttonPressed]}>
                    <Image
                        source={require('../../atom/icons/backButtonArrow.png')}
                        style={styles.backButton}
                    />
                </View>
            </TouchableOpacity>
            {
                title === "journalToggle" ?
                    <JournalToggle styles={styles.title} />
                    :
                    <Text style={[styles.title, globalStyles.h3Text]}>{title}</Text>
            }
            {
                settings ?
                    <EntrySettings overlayType2={overlayType} />
                    :
                    ""

            }
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
        width: '100%',
        paddingVertical: 20
    },
    backButton: {
        width: 7,
        height: 11,
    },
    touchContainer: {
        zIndex: 1,
        position: 'absolute',
        left: 0,
        top: 20
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
    fullBack: {
        width: 30,
        height: 30,
        backgroundColor: '#DDDDDD',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonPressed: {
        backgroundColor: '#D5D7FF', // Change the color when pressed
    },
    titleBox: {
        display: 'flex',
        alignItems: 'center',
    },
    align: { 
        marginRight: 20
    }
});

export default Header;