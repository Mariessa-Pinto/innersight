import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';



export default function TermsPage({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)
    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <Header title='Terms of Service' navigation={navigation} />
            <ScrollView style={globalStyles.contentContainer}>

                <View style={styles.maincontent}>
                    <Text style={styles.list}>1. Acceptance Of Terms</Text>
                    <Text> By using InnerSight, you agree to abide by these Terms of Service. If you do not agree with any part of these terms, please refrain from using the app.</Text>
                    <View style={styles.content2}>
                        <Text style={styles.list}>2. User Eligibility </Text>
                        <Text>You must be at least 14 years old to use InnerSight. By using the app, you confirm that you meet this eligibility criterion.</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.list}>3. Privacy and Data Security </Text>
                        <Text>We prioritize the privacy and security of your data. All journal entries and personal information are stored securely, and our AI algorithms analyze data anonymously. For detailed information, please refer to our Privacy Policy.</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.list}>4. Use of AI </Text>
                        <Text>InnerSight utilizes artificial intelligence to analyze journal entries. While the AI provides insights, it is not a substitute for professional advice. Always consult with a qualified mental health professional for personalized guidance.</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.list}>5. User Responsibilities </Text>
                        <Text>You are responsible for the content of your journal entries. Do not include sensitive personal information that you are uncomfortable sharing. InnerSight is not liable for any consequences arising from the content of your journal entries.</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.list}>6. Emergency Situations </Text>
                        <Text>In case of a mental health crisis or emergency, do not solely rely on the app. Contact emergency services or a mental health professional immediately. InnerSight is not a crisis intervention tool.</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.list}>7. User Conduct</Text>
                        <Text>Users must adhere to ethical standards when using InnerSight. Harassment, hate speech, or any form of inappropriate content will not be tolerated.</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.list}>8. Termination of Services </Text>
                        <Text>We reserve the right to terminate or suspend your account at our discretion if you violate these terms or engage in any behaviour that compromises the well-being of others or the app's integrity.</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.list}>9. Changes to Terms </Text>
                        <Text>We may update these terms periodically. By continuing to use InnerSight after such changes, you agree to the modified terms.</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.list}>10. Contact Information  </Text>
                        <Text>For questions or concerns regarding these terms, please contact InnerSight at info@innersight.com.</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text>By using InnerSight, you acknowledge that you have read, understood, and agree to these Terms of Service.</Text>
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
        flexDirection: "column",
        alignItems: 'flex-start',
        paddingRight: 20,
        paddingLeft: 20
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
        fontWeight: 'bold',
        marginTop: 5
    },
    content2: {
        display: 'flex',
        marginTop: 10,
    }
})