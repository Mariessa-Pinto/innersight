import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { useState } from 'react';
import Slider from '@react-native-community/slider';
import styles from '../styles/global'


export default function Home({ navigation }) {

    //Dark/Light Mode
    const [colorScheme, setColorTheme] = useState("dark")
    const [userFontSize, setUserFontSize] = useState(1)
    const [sliderTracker, setSliderTracker] = useState(0)

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;


    return (
        <View style={[styles.container, themeContainerStyle]}>
            <Text style={[styles.text, themeTextStyle]}>Welcome!</Text>

            <StatusBar style="auto" />
            <Button
                title="Go to about page"
                onPress={() => navigation.push('About')}
            />
            <Button title="Dark/Light Mode" onPress={() => colorScheme == "light" ? setColorTheme("dark") : setColorTheme("light")} />
            <Text style={[styles.text, themeTextStyle]}>Change the font size (I don't work)</Text>
            <Slider style={styles.slider} minimumTrackTintColor='#ffffff' maximumTrackTintColor='#ADD8E6' lowerLimit={0} upperLimit={5}
                defaultValue={sliderTracker}
                key={sliderTracker} />
        </View>
    );
}

