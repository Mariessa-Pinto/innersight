import globalStyles from '../styles/global';
import themeContext from '../theme/themeContext';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useState, useContext } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function UserEmailSignIn() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);

        } catch (error) {
            console.log(error);
        }
    }

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Navigation
    const navigation = useNavigation();

    const [pressed, setPressed] = useState(false);

    const navigateTo = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={loginEmail}
                    onChangeText={(text) => {
                        setLoginEmail(text)
                    }}
                    keyboardType="default"
                    blurOnSubmit={true}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={loginPassword}
                    onChangeText={setLoginPassword}
                    keyboardType="default"
                    blurOnSubmit={true}
                />
            </View>
            <TouchableOpacity
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
                onPress={() => {
                    navigateTo()
                    login()
                }}
                activeOpacity={1}
            >
                <View style={[styles.button, pressed && styles.buttonPressed]}>
                    <Text style={[globalStyles.btnTextLrg, styles.text]}>Log In</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 328,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    input: {
        height: 35,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: '#88898C',
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#FDFDFD",
        color: "#000",
        fontWeight: 'normal',
        fontFamily: 'Lexend-Regular'
    },
    inputContainer: {
        backgroundColor: '#00000000',
        width: '100%'
    },
    button: {
        width: 228,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#6164C3',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
        marginTop: 15,
    },
    buttonPressed: {
        backgroundColor: '#43479A',
    },
    text: {
        color: '#FDFDFD',
    },
});


