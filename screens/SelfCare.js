import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Image } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';

export default function SelfCare({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <ScrollView style={globalStyles.contentContainer}>
                <View style={styles.maincontent}>
                    <Header title='Self-Care' navigation={navigation} />
                    <Image
                        source={require('../atom/assets/Recmascots/self.png')}
                        style={styles.picture}
                    />
                    <View style={styles.writing}>
                        <Text>Elevate your well-being with deliberate acts of self-care. Begin by creating small moments in your day—sip herbal tea, bask in sunlight, or relish a quiet pause.  </Text>
                        <Text>Unplug from screens periodically, indulge in a favourite hobby, and prioritize quality sleep. Nourish your body with wholesome foods, and exercise when you can. Cultivate mindfulness, embrace solitude, and surround yourself with positive influences. Remember, self-care isn't a luxury but a vital investment in your overall happiness and resilience. </Text>
                        <Text>Take it one step at a time. You can do it! </Text>
                    </View>
                </View>

                <View>

                </View>
            </ScrollView>
            <NavBar navigation={navigation} />
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
    },
    picture: {
        width: 328,
        height: 131
    }

});