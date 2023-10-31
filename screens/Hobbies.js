import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Image } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';

export default function Hobbies({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View>
        <ScrollView>
            <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                <View style={styles.maincontent}>
                    <Header title='Engage in Hobbies' navigation={navigation} />
                    <Image
                        source={require('../atom/assets/Recmascots/hobbies.png')}
                        style={styles.picture}
                    />
                    <View style={styles.writing}>
                        <Text>Engaging in hobbies offers many benefits for your overall well-being!</Text>
                        <Text>It provides a constructive escape from daily stressors, allowing you to immerse yourself in activities that bring joy and fulfillment. Hobbies can be a powerful source of relaxation, helping to reduce anxiety and improve mental health. They also foster creativity, build a sense of accomplishment, and contribute to a balanced lifestyle. Whether it's a solo pursuit or a shared interest with others, hobbies enrich your life, offering a valuable respite from the demands of everyday routine. </Text>
                        <Text>If you find yourself without a hobby, consider it an invitation to explore uncharted passions. Hobbies not only provide a delightful escape but also cultivate a sense of purpose, adding depth and richness to the tapestry of daily life.</Text>
                    </View>
                </View>
                <View>
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