import globalStyles from '../styles/global'

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'

export default function EmailSent() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <View style={styles.container}>
                        <View style={styles.titleContainer}>
                            <Text style={[globalStyles.h1TextBold, { color: theme.color }]}>Email Sent</Text>
                            <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>Please check your email for a link to reset your password.</Text>
                        </View>
                        <ExtraLargeBtnLightTxt
                            text="Return to Log In"
                            navigate="Login"
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
        paddingTop: 200,
        gap: 10,
        paddingBottom: 40
    },
})