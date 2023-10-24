import globalStyles from '../styles/global'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState, useContext } from 'react';
import NavBar from '../molecules/Navigation/NavBar';
import Notifications from '../molecules/Notifications/Notifications';

import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext';
import fontContext from '../theme/fontContext';
import Header from '../molecules/Header/Header';

export default function Accessibility({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)

    //DarkMode Toggle Switch
    const [darkIsEnabled, setDarkIsEnabled] = useState(false);
    const darkToggleSwitch = () => setDarkIsEnabled(previousState => !previousState);

    //Contrast Toggle Switch
    const [contrastIsEnabled, setContrastIsEnabled] = useState(false);
    const contrastToggleSwitch = () => setContrastIsEnabled(previousState => !previousState);

    //Brightness Toggle Switch
    const [brightnessIsEnabled, setBrightnessIsEnabled] = useState(false);
    const brightnessToggleSwitch = () => setBrightnessIsEnabled(previousState => !previousState);

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <Header title='Accessibility Settings' navigation={navigation} />
            <View style={[globalStyles.contentContainer, { alignItems: 'center' }]}>
                <View style={styles.settingsContainer}>
                    <Notifications title="Dark Mode"
                        valueChange2={(value) => {
                            setDarkMode(value);
                            EventRegister.emit('ChangeTheme', value)
                        }}
                        valueEnabled2={darkMode}
                    />
                    <Notifications title="Increase Contrast"
                        valueChange2={contrastToggleSwitch}
                        valueEnabled2={contrastIsEnabled}
                    />
                    <Notifications title="Auto Brightness"
                        valueChange2={brightnessToggleSwitch}
                        valueEnabled2={brightnessIsEnabled}
                    />
                    <View style={[styles.languageContainer, { backgroundColor: theme.backgroundGreyLight }]}>
                        <Text style={[globalStyles.text, {
                            color: theme.color,
                            fontSize: fontTheme.fontSize
                        }]}>Font Size</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Font Size')} style={styles.arrow}>
                            <Image source={require('../atom/assets/settingicons/Arrow.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    languageContainer: {
        width: 355,
        height: 47,
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        paddingHorizontal: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    label2: {
        fontSize: 13,
    },
    settingsContainer: {
        marginTop: 30
    }
})

