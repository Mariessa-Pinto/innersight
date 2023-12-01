import globalStyles from '../styles/global';
import themeContext from '../theme/themeContext';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useState, useContext } from "react";
import { StyleSheet, View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import NormalInput from "../atom/InputBoxes/NormalInput";
import { useNavigation } from '@react-navigation/native';

export default function UserRegistrationSignIn() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
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
        navigation.navigate("ChooseMascot");
    };

    return (
        <View style={styles.container}>
            <NormalInput placeholder='Name' />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={registerEmail}
                    onChangeText={(text) => {
                        setRegisterEmail(text)
                    }}
                    keyboardType="default"
                    blurOnSubmit={true}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={registerPassword}
                    onChangeText={(pass) => {
                        setRegisterPassword(pass)
                    }}
                    keyboardType="default"
                    blurOnSubmit={true}
                />
            </View>
            <NormalInput placeholder='Comfirm Password' />
            <TouchableOpacity
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
                onPress={() => {
                    navigateTo()
                    register()
                    setRegisterEmail("")
                    setRegisterPassword("")
                }}
                activeOpacity={1}
            >
                <View style={[styles.button, pressed && styles.buttonPressed]}>
                    <Text style={[globalStyles.btnTextLrg, styles.text]}>Sign Up</Text>
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
        paddingBottom: 40
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