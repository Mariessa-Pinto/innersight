import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import Slider from "@react-native-community/slider";
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';

import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext';
import fontContext from '../theme/fontContext';


export default function FontSize({ navigation }) {

    //Dark/Light Mode
    const theme = useContext(themeContext);

    //Font Size
    const [fontSize, setFontSize] = useState(0);
    const fontTheme = useContext(fontContext);

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <Header title='Font Size' navigation={navigation} />
            <View style={globalStyles.contentContainer}>
                <View style={styles.fontContainer}>
                    <Text style={[styles.textExample, globalStyles.bodyCopy, { fontSize: fontTheme.fontSize }]}>
                        This is an example of how large your font size will be.
                    </Text>
                </View>
                <View style={[styles.sliderContainer, { backgroundColor: theme.backgroundGrey }]}>
                    <Slider
                        style={[styles.slider]}
                        minimumValue={0}
                        maximumValue={4}
                        step={1}
                        value={fontSize}
                        onValueChange={(value) => {
                            setFontSize(value);
                            EventRegister.emit('ChangeTheme', value)
                        }}
                        thumbTintColor={theme.sliderTrackColor}
                        minimumTrackTintColor={theme.sliderTrackColor}
                        maximumTrackTintColor={theme.sliderTrackColorMax}
                    />
                    <View style={styles.anchorText}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>A</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>A</Text>
                    </View>
                </View>
            </View>
            <NavBar navigation={navigation} variation='profile'/>
        </View>
    );
}

const styles = StyleSheet.create({

    fontContainer: {
        height: '45%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60
    },
    sliderContainer: {
        paddingTop: 30,
        paddingBottom: 15,
        paddingHorizontal: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        borderRadius: 5
    },
    slider: {
        width: '100%',

    },
    textExample: {
        textAlign: 'center'
    },
    anchorText: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

