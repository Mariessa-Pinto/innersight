import globalStyles from '../styles/global';
import themeContext from '../theme/themeContext';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt';
import LottieView from 'lottie-react-native';

export default function Start() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Animation
    const animation = require('../atom/assets/Animations/landing_page_logo.json');

    //Navigation
    const navigation = useNavigation();

    const navigateTo = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <LottieView
                    source={animation}
                    autoPlay
                    loop={false}
                    style={styles.animationStyle}
                />
                <View style={styles.buttons}>
                    <ExtraLargeBtnLightTxt
                        text="Get Started"
                        navigate="Demo"
                    />
                    <ExtraLargeBtnLightTxt
                        text="Log In"
                        navigate="Login"
                    />
                    <TouchableOpacity onPress={navigateTo} style={styles.guestButton}>
                        <Text style={[globalStyles.bodyCopy, { color: theme.color, textAlign: 'center' }]}>or</Text>
                        <Text style={[globalStyles.bodyCopy, { color: theme.color, textAlign: 'center' }]}>Continue as Guest</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D5D7FF",
        display: 'flex',
        height: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 180
    },
    animationStyle: {
        marginBottom: 100
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        marginBottom: -100,
        alignItems: 'center'
    },
    guestButton: {
        marginTop: 10
    },
})
