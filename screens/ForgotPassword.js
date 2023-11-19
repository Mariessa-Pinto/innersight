import globalStyles from '../styles/global'

import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import ForgotPasswordForm from '../molecules/ForgotPasswordForm/ForgotPasswordForm';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useContext } from 'react';

export default function ForgotPassword() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <View style={styles.container}>
                        <View style={styles.titleContainer}>
                            <Text style={[globalStyles.h1TextBold, { color: theme.color }]}>Forgot Pasword?</Text>
                            <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>Please provide the email associated with your account below. An email with a password reset link will be sent shortly.</Text>
                        </View>
                        <ForgotPasswordForm />
                        <ExtraLargeBtnLightTxt
                            text="Send Password Reset Email"
                            navigate="ResetPassword"
                        />
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
    titleContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 330,
        paddingTop: 120,
    },
})