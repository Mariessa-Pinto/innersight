import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import Slider from "@react-native-community/slider";

import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext';
import fontContext from '../theme/fontContext';

export default function Settings() {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    //Font Size
    const [fontSize, setFontSize] = useState(16)
    const fontTheme = useContext(fontContext)

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
            <View style={{ padding: 0, marginTop: 50 }}>
                <Text style={[styles.text, { fontSize: fontTheme.fontSize }]}>Font Size</Text>
                <Slider
                    style={{ width: 300 }}
                    minimumValue={0}
                    maximumValue={4}
                    step={1}
                    value={fontSize}
                    onValueChange={(value) => {
                        setFontSize(value);
                        EventRegister.emit('ChangeTheme', value)
                    }}
                />
                <Text>Test Font Size: {16 * `1.${fontSize}`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
})
