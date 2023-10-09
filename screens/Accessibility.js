import styles from '../styles/global'
import { Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import Slider from "@react-native-community/slider";

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
        <View style={[styles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
            <Text style={[styles.text, { color: theme.color, fontSize: fontTheme.fontSize }]}>Dark Mode</Text>
            <Switch
                value={darkMode}
                onValueChange={(value) => {
                    setDarkMode(value);
                    EventRegister.emit('ChangeTheme', value)
                }} />
        </View>
    );
}

