import globalStyles from '../styles/global'
import { StyleSheet, View } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import ExtraLargeBtnDarkTxt from '../atom/Buttons/ExtraLargeBtnDarkTxt';
import { Image } from 'expo-image';


export default function LandingPage() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Image 
                        source={require('../atom/Logo/LogoWordmarkHorizontal.png')}
                        style={styles.logo}
                    />
                </View>
                <ExtraLargeBtnLightTxt 
                    text="Log In" 
                    navigate="Login"
                />
                <ExtraLargeBtnDarkTxt 
                    text="Sign Up" 
                    navigate="SignUp"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 35,
        paddingBottom: 40
    },
    signIn: {
        fontWeight: '700',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'left'
    },
    titleContainer: {
        display: "flex",
        alignItems: 'flex-start',
        width: 280,
        paddingTop: 150,
        gap: 10,
    },
    logo: {
        height: 117,
        width: 280
    }
})