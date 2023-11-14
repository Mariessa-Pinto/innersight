import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import LoginForm from '../molecules/LoginForm/LoginForm';
import { useNavigation } from '@react-navigation/native';


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
                            <Text style={styles.title}>Log In</Text>
                            <Text>Please log in to your account to continue.</Text>
                        </View>
                        <LoginForm />
                        <ExtraLargeBtnLightTxt
                            text="Login"
                            navigate="Home"
                        />
                        <Text style={styles.password} onPress={navigateToFirebase}>FirebaseTest</Text>
                        <Text style={styles.password} onPress={navigateToForgot}>Forgot Your Password?</Text>
                        <Text style={styles.account}>Don't have an account?<Text style={styles.signIn} onPress={navigateTo}> Sign up.</Text></Text>
                        <Text>or</Text>
                        <Text style={styles.guest} onPress={navigateHome}>Continue as Guest</Text>
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