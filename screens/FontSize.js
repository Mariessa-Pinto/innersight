import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import Slider from "@react-native-community/slider";
import BackBtn from '../atom/BackButton/BackBtn'
import NavBar from '../molecules/Navigation/NavBar'

import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext';
import fontContext from '../theme/fontContext';

export default function FontSize({navigation}) {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    //Font Size
    const [fontSize, setFontSize] = useState(0)
    const fontTheme = useContext(fontContext)

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={globalStyles.contentContainer}>
                <BackBtn />
                <Text style={[globalStyles.h3Text, styles.header]}>Font Size</Text>
                <View style={styles.fontContainer}>
                    <Text style={[styles.textExample, globalStyles.bodyCopy, { fontSize: fontTheme.fontSize}]}>
                        This is an example of how large your font size will be.
                    </Text>
                </View>

                <Slider
                    style={[styles.slider,{backgroundColor: theme.backgroundGrey}]}
                    minimumValue={0}
                    maximumValue={4}
                    step={1}
                    value={fontSize}
                    onValueChange={(value) => {
                        setFontSize(value);
                        EventRegister.emit('ChangeTheme', value)
                    }}
                />

            </View>
            <NavBar navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center'
    },
    fontContainer:{
        height: '45%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60
    },
    slider:{
        width: '100%',
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    textExample:{
        textAlign: 'center'
    }
})

