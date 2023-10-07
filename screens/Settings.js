import styles from '../styles/global'
import { Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';

import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext';
import FontSlider from '../components/fontSlider';




export default function Settings() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
            <Text style={[styles.text, { color: theme.color }]}>Dark Mode</Text>
            <Switch
                value={darkMode}
                onValueChange={(value) => {
                    setDarkMode(value);
                    EventRegister.emit('ChangeTheme', value)
                }} />
            <Text style={[styles.text, { color: theme.color }]}>Font Size</Text>
            <View style={{padding: 0, marginTop: 50}}>
            <FontSlider />
            </View>
        </View>
    );
}

