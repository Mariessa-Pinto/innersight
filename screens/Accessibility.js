import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import Slider from "@react-native-community/slider";
import NavBar from '../molecules/NavBar';

import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext';
import fontContext from '../theme/fontContext';

export default function Accessibility() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
            <Text style={[globalStyles.text, { color: theme.color, fontSize: fontTheme.fontSize }]}>Dark Mode</Text>
            <Switch
                value={darkMode}
                onValueChange={(value) => {
                    setDarkMode(value);
                    EventRegister.emit('ChangeTheme', value)
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
})

