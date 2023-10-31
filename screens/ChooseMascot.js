import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import ChooseMascotMol from '../molecules/ChooseMascotMol/ChooseMascotMol';



export default function ChooseMascot({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    const [clicked, setClicked] = useState(false);

    //Add functionality to click and have the orange background appear around the users pick of mascot

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <View style={styles.title}>
                        <Text style={[globalStyles.h1TextBold, { color: theme.color }]}>Choose a friend to accompany your journey</Text>
                    </View>
                    <ChooseMascotMol />
                    <View style={styles.button}>
                        <ExtraLargeBtnLightTxt
                            text="Continue"
                            navigate="Home"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        paddingLeft: 25,
        paddingTop: 40,
        paddingRight: 25
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10
    }
})