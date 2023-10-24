import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Image } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';

export default function Sleeping({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <Header title='Sleeping Early' navigation={navigation} />
            <ScrollView style={globalStyles.contentContainer}>
                <View style={styles.maincontent}>
                    <Image
                        source={require('../atom/assets/Recmascots/sleeping.png')}
                        style={styles.picture}
                    />
                    <View style={styles.writing}>
                        <Text>Prioritizing early and sufficient sleep is a fundamental pillar of mental health. </Text>
                        <Text>Adequate sleep supports cognitive function, emotional resilience, and stress management, fostering a positive impact on mood and overall mental well-being. By establishing a consistent sleep routine, you empower your mind to recharge, consolidate memories, and effectively navigate the challenges of each day, contributing to a healthier and more resilient mental state. </Text>
                        <Text>Deep, quality sleep is essential for the brain's ability to process emotions and regulate stress hormones. In contrast, chronic sleep deprivation has been associated with increased irritability, heightened stress levels, and a greater susceptibility to anxiety and depression. Embracing the practice of sleeping early is not just a simple routine; it's a proactive investment in your mental and emotional well-being, providing a solid foundation for a more vibrant and resilient life.</Text>
                    </View>
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
    }

});