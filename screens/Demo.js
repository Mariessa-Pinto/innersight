import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import DemoAnimation from '../atom/Demo/DemoAnimation';
<<<<<<< HEAD
import ProgressDots from '../atom/ProgressDots/ProgressDots';
=======

>>>>>>> 39b20511c6a22a36c81d2b7d3f0e36e5aa6c626e


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
<<<<<<< HEAD
                        {/* Add currentIndex={currentIndex} totalDemos={3} to Progress Dots */}
                        <ProgressDots currentIndex={0} totalDemos={3} />
=======
>>>>>>> 39b20511c6a22a36c81d2b7d3f0e36e5aa6c626e
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
<<<<<<< HEAD
        bottom: 190
=======
        bottom: 200
>>>>>>> 39b20511c6a22a36c81d2b7d3f0e36e5aa6c626e
    },
    animation: {
        display: 'flex',
        alignItems: 'center',
<<<<<<< HEAD
        marginBottom: 40,
        paddingTop: 40
=======
        marginTop: -100
>>>>>>> 39b20511c6a22a36c81d2b7d3f0e36e5aa6c626e
    },
    button: {
        display: 'flex',
        alignItems: 'center',
<<<<<<< HEAD
        gap: 30
=======
        gap: 30,
        marginTop: -60
>>>>>>> 39b20511c6a22a36c81d2b7d3f0e36e5aa6c626e
    }
})