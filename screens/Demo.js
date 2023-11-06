import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import DemoAnimation from '../atom/Demo/DemoAnimation';
import ProgressDots from '../atom/ProgressDots/ProgressDots';


export default function Demo({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    // Grab currentIndex from demo with props
    // const [currentIndex, setCurrentIndex] = useState(0);

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
                            text="Create an Account"
                            navigate="SignUp"
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
        bottom: 200
    },
    animation: {
        display: 'flex',
        alignItems: 'center',
        marginTop: -100
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        gap: 30,
        marginTop: -60
    }
})