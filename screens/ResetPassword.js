import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import SetPasswordForm from '../molecules/SetPasswordForm/SetPasswordForm';

export default function ResetPassword() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <View style={styles.container}>
                        <View style={styles.titleContainer}>
                            <Text style={[globalStyles.h1TextBold, { color: theme.color }]}>Set Your Password</Text>
                            <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>Please input your new password below.</Text>
                        </View>
                        <SetPasswordForm />
                        <ExtraLargeBtnLightTxt
                            text="Reset Password"
                            navigate="EmailSent"
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
        alignItems: 'flex-start',
        width: 320,
        paddingTop: 120,
    },
})