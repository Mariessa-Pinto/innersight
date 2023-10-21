import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';



export default function PrivacyPolicy({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor}]}>
        <ScrollView>
        <View style={styles.top}>
        <Text style={styles.header}>Privacy Policy</Text>
        </View>
            <View style={styles.maincontent}>
            
                <View>
                    <Text style={styles.list}>1. Information we collect:</Text>
                    <Text> We collect a minimal set of personal information, such as your name and email, during the registration process to create and secure your account.</Text>
                    <Text style={styles.list}>b. Journal Entries</Text>
                    <Text>  Our app encourages users to create journal entries. These entries are processed by our AI algorithms to provide personalized insights and recommendations. It's important to note that we prioritize anonymizing and securing this data to protect your privacy.</Text>
                </View>
                <View style={styles.content2}>
                <Text style={styles.list}>2. How we use Information</Text>
                <Text>The primary purpose of collecting journal entries is to leverage artificial intelligence for analysis. The AI identifies patterns and trends in your entries to offer personalized insights aimed at supporting your mental well-being.</Text>
                </View>
                <View style={styles.content2}>
                <Text style={styles.list}>3. Data Security</Text>
                <Text>While we implement reasonable measures to secure your personal information, it's essential to understand that no method of data transmission over the internet or storage is entirely secure. We strive to protect your data, but we cannot guarantee absolute security.</Text>
                </View>
                <View style={styles.content2}>
                <Text style={styles.list}>4. Sharing Your Information</Text>
                <Text>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share anonymized and aggregated data for research or statistical purposes.</Text>
                </View>
                <View style={styles.content2}>
                <Text style={styles.list}>5. User Control</Text>
                <Text>You maintain control over your personal information. Within the app, you can access, modify, or delete your data. If you choose to terminate your account, please contact us at info@innersight.com.</Text>
                </View>
                <View style={styles.content2}>
                <Text style={styles.list}>6. Changes to Privacy Policy</Text>
                <Text>We reserve the right to modify this Privacy Policy. If there are significant changes, we will notify you through the app or other appropriate means.</Text>
                </View>
                <View style={styles.content2}>
                <Text style={styles.list}>7. Childrens Privacy</Text>
                <Text>Our app is intended for users aged 18 and above. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.</Text>
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
        flexDirection: "column",
        alignItems: 'flex-start',
        padding: 20
    },
    top: {
        alignItems:'center',
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