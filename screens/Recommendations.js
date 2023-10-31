import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Image } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';

export default function Recommendations({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <View style={styles.maincontent}>
                        <Header title='Exercise' navigation={navigation} />
                        <Image
                            source={require('../atom/assets/Recmascots/exercise.png')}
                            style={styles.picture}
                        />
                        <View style={styles.writing}>
                            <Text>Engaging in regular exercise many benefits for both physical and mental wellbeing. </Text>
                            <Text>Physically, it enhances cardiovascular health, strengthens muscles and bones, and aids in weight management. Beyond the physical advantages, exercise is a potent mood booster, releasing endorphins that alleviate stress and anxiety while promoting a sense of overall happiness. Additionally, consistent physical activity has been associated with improved cognitive function, better sleep quality, and a reduced risk of chronic conditions. </Text>
                            <Text>Don't know where to start? Take a stroll in the park with your headphones on, immersing yourself in the soothing blend of nature's serenity and your favourite tunes.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='profile' />
        </View>
    );
}

const styles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    header: {
        fontSize: 18
    },
    writing: {
        gap: 20
    }

});