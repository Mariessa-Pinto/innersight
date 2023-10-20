import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import SetPasswordForm from '../molecules/SetPasswordForm/SetPasswordForm';


export default function ResetPassword() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)
 
    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={[globalStyles.h1TextBold]}>Set Your Password</Text>
                    <Text>Please input your new password below.</Text>
                </View>
                <SetPasswordForm/>
                <ExtraLargeBtnLightTxt 
                    text="Reset Password" 
                    navigate="EmailSent"
                />
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
    },
})