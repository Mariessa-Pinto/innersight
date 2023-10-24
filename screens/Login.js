import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import LoginForm from '../molecules/LoginForm/LoginForm';
import { useNavigation } from '@react-navigation/native';


export default function Login() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    const navigation = useNavigation();

    const navigateTo = () => {
        navigation.navigate('SignUp');
    };

    const navigateToForgot = () => {
        navigation.navigate('ForgotPassword');
    };

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <View style={globalStyles.contentContainer}>
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
                    <Text style={styles.password} onPress={navigateToForgot}>Forgot Your Password?</Text>
                    <Text style={styles.account}>Don't have an account?<Text style={styles.signIn} onPress={navigateTo}> Sign up.</Text></Text>
                </View>
            </View>
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
        width: 280,
        paddingTop: 150,
        gap: 10
    },
    account: {
        paddingTop: 20
    },
    password: {
        paddingTop: 50
    }
})