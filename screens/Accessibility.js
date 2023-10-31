import globalStyles from '../styles/global'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
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
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView >
                <View style={[globalStyles.contentContainer, styles.accessibilityContainer, { backgroundColor: theme.background }]}>
                    <Header title='Accessibility Settings' navigation={navigation} />
                    <Notifications title="Dark Mode"
                        valueChange2={(value) => {
                            setDarkMode(value);
                            EventRegister.emit('ChangeTheme', value)
                        }}
                        valueEnabled2={darkMode}
                        toggleType="toggle"
                    />
                    <Notifications title="Increase Contrast"
                        valueChange2={contrastToggleSwitch}
                        valueEnabled2={contrastIsEnabled}
                        toggleType="toggle"
                    />
                    <Notifications title="Auto Brightness"
                        valueChange2={brightnessToggleSwitch}
                        valueEnabled2={brightnessIsEnabled}
                        toggleType="toggle"
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Font Size')} style={styles.arrow}>
                        <Notifications title="Font Size"
                            toggleType="rightArrow"
                            navigate="FontSize"
                            onPress={() => navigation.navigate('FontSize')}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='profile' />
        </View>

    );
}

const styles = StyleSheet.create({
    languageContainer: {
        width: '100%',
        height: 47,
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        paddingHorizontal: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
accessibilityContainer:{
    
}

})

