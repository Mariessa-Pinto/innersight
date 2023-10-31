import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
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
                    <View style={globalStyles.contentContainer}>
                        <StatusBar style="auto" />
                        <View style={styles.container}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>Email Sent</Text>
                                <Text>Please check your email for a link to reset your password.</Text>
                            </View>
                            <ExtraLargeBtnLightTxt
                                text="Return to Log In"
                                navigate="Login"
                            />
                        </View>
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
        width: 280,
        paddingTop: 200,
        gap: 10,
        paddingBottom: 40
    },
})