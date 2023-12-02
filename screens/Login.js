import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import { useNavigation } from '@react-navigation/native';
import UserEmailSignIn from '../firebase/UserEmailSignIn';


export default function Login() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Navigation
    const navigation = useNavigation();

    const navigateTo = () => {
        navigation.navigate('SignUp');
    };

    const navigateToForgot = () => {
        navigation.navigate('ForgotPassword');
    };
    const navigateToFirebase = () => {
        navigation.navigate('FirebaseTest');
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
                            <Text style={[globalStyles.h1TextBold, { color: theme.color }]}>Log In</Text>
                            <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>Please log in to your account to continue.</Text>
                        </View>
                        <UserEmailSignIn />
                        <Text style={[globalStyles.boldBody, { color: theme.color, marginTop: 40, marginBottom: 30 }]} onPress={navigateToForgot}>Forgot Your Password?</Text>
                        <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>Don't have an account?<Text style={[globalStyles.boldBody, { color: theme.color }]} onPress={navigateTo}> Sign up.</Text></Text>
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
        paddingTop: 100,
        gap: 10
    },
    account: {
        paddingTop: 20
    },
    password: {
        paddingTop: 50,
        fontWeight: '500'
    },
    guest: {
        fontWeight: '500'
    }
})