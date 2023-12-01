import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import SignUpForm from '../molecules/SignUpForm/SignUpForm';
import { useNavigation } from '@react-navigation/native';
import UserRegistrationSignIn from '../firebase/UserRegistration';

export default function SignUp() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Navigation
    const navigation = useNavigation();

    const navigateTo = () => {
        navigation.navigate('Login');
    };

    const navigateHome = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
        <ScrollView>
            <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={[globalStyles.h1TextBold, { color: theme.color }]}>Sign Up</Text>
                    </View>
                    <UserRegistrationSignIn />
                    <Text style={[globalStyles.bodyCopy, { color: theme.color, paddingTop: 30 }]}>Already have an account?<Text style={[globalStyles.boldBody, { color: theme.color }]} onPress={navigateTo}> Sign in.</Text></Text>
                    <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>or</Text>
                    <Text style={[globalStyles.boldBody, { color: theme.color }]} onPress={navigateHome}>Continue as Guest</Text>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    signIn: {
        fontWeight: '700',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'left'
    },
    titleContainer: {
        display: "flex",
        alignItems: 'flex-start',
        width: 320,
        paddingTop: 70
    },
    account: {
        paddingTop: 40
    },
    guest: {
        fontWeight: '500'
    }
})