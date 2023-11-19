import globalStyles from '../styles/global'

import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import ChooseMascotMol from '../molecules/ChooseMascotMol/ChooseMascotMol';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';




export default function ChooseMascot() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Navigation
    const navigation = useNavigation();

    //Mascot Select
    const [selectedMascot, setSelectedMascot] = useState(null);

    const pandaMascot = require('../atom/Mascots/Panda.png');

    const handleContinue = () => {
        if (selectedMascot) {
            navigation.navigate('AiSent', { selectedMascot });
        } else {
            navigation.navigate('AiSent', { pandaMascot })
        }
    };

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
                            onPress={handleContinue}
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