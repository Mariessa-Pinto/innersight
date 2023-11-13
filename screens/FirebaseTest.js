import { auth } from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function FirebaseTest() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);

        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <View>
                <Text>Sign Up</Text>
                <View>
                    <Text>Email</Text>
                    <TextInput
                        placeholder="Email..."
                        value={registerEmail}
                        onChange={(event) => {
                            setRegisterEmail(event.target.value)
                        }} />
                    <Text>Password</Text>
                    <TextInput
                        placeholder="Password..."
                        value={registerPassword}
                        onChange={(event) => {
                            setRegisterPassword(event.target.value)
                        }} />
                </View>

                <TouchableOpacity onPress={() => {
                    register()

                }}>
                    <Text>Sign In</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}