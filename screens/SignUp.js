import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import SignUpForm from '../molecules/SignUpForm/SignUpForm';
import { useNavigation } from '@react-navigation/native';



export default function SignUp() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    const navigation = useNavigation();

    const navigateTo = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
        <ScrollView>
            <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Sign Up</Text>
                    </View>
                    <SignUpForm />
                    <ExtraLargeBtnLightTxt
                        text="Sign Up"
                        navigate="ChooseMascot"
                    />
                    <Text style={styles.account}>Already have an account?<Text style={styles.signIn} onPress={navigateTo}> Sign in.</Text></Text>
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
        paddingTop: 70
    },
    account: {
        paddingTop: 50
    }
})