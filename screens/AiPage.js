import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';



export default function AiPage({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <Header title='AI Information' navigation={navigation} />

            <ScrollView style={globalStyles.contentContainer}>
                <View style={styles.maincontent}>
                    <Text>We leverage intelligence (AI) technology to enhance your mental health journey. Our AI algorithms analyze journal entries, extracting valuable insights to provide personalized and constructive feedback. This process is designed to assist you in understanding patterns, managing stress, and fostering emotional well-being.</Text>
                    <Text>The AI in InnerSight continually learns and evolves based on user interactions, allowing for increasingly refined and tailored suggestions over time. It respects the sensitivity of the information shared, prioritizing user privacy through stringent anonymization measures.
                        This intelligent feature is not a replacement for professional mental health guidance. Instead, it acts as a supportive tool, offering supplemental insights and encouragement to empower you on your path to well-being. By incorporating AI into the app, we aim to make your experience more dynamic, personalized, and effective in promoting a positive mental health journey.
                        We are committed to transparency in our use of AI and encourage user feedback to enhance both the technology and the overall user experience. </Text>
                    <Text>Our dedication to innovation is grounded in the belief that, together with AI, we can create a more empathetic and responsive space for mental health support within InnerSight.</Text>
                </View>
            </ScrollView>

            <NavBar navigation={navigation} variation='profile'/>
        </View>
    );
}

const styles = StyleSheet.create({

    maincontent: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'flex-start',
        padding: 20,
        gap: 10
    },
    top: {
        alignItems: 'center',
        marginTop: 6
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    list: {
        fontSize: 14,
        fontWeight: 'bold'

    },
    content2: {
        display: 'flex',
        marginTop: 20,
    }
})