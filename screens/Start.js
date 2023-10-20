import globalStyles from '../styles/global'
import { StyleSheet, View } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';
import { Image } from 'expo-image';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt';


export default function Start() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <>
            <View>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <Image
                        source={require('../atom/icons/logo.png')}
                        style={styles.logo}
                    />
                    <Image
                        source={require('../atom/icons/logo_text.png')}
                        style={styles.wordmark}
                    />
                    <ExtraLargeBtnLightTxt 
                        text="Get Started" 
                        navigate="Demo"
                    />
                </View>
            </View>
            </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D5D7FF",
        display: 'flex',
        height: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#6164C3",
    },
    logo: {
        height: 150,
        width: 150,
        marginBottom: 20
    },
    wordmark: {
        width: 300,
        height: 60,
        marginBottom: 42
    }
})
