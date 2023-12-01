import globalStyles from '../styles/global'
import { StyleSheet, View, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import { Image } from 'expo-image';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import DemoAnimation from '../atom/Demo/DemoAnimation';

export default function Demo({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <View style={styles.animation}>
                        <DemoAnimation />
                    </View>
                    <Image
                        source={require('../atom/Mascots/Panda.png')}
                        style={styles.mascot}
                    />
                    <View style={styles.button}>
                        <ExtraLargeBtnLightTxt
                            text="Sign Up"
                            navigate="SignUp"
                        />
                        <ExtraLargeBtnLightTxt
                            text="Continue as Guest"
                            navigate="Home"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mascot: {
        height: 128,
        width: 130,
        position: 'absolute',
        left: 10,
        bottom: 240
    },
    animation: {
        display: 'flex',
        alignItems: 'center',
        marginTop: -135
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        marginTop: -70
    }
})