import globalStyles from '../styles/global';
import { StyleSheet, View } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt';
import LottieView from 'lottie-react-native';


export default function Start() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    const animation = require('../atom/assets/Animations/landing_page_logo.json');

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
                <ExtraLargeBtnLightTxt
                    text="Get Started"
                    navigate="Demo"
                />
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
        marginBottom: 70
    }
})
