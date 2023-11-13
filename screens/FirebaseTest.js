import { auth } from '../firebase/firebaseConfig'
import { getAuth,signInAnonymously } from "firebase/auth";
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function FirebaseTest({navigation}) {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [userType, setUserType] = useState()


    const guestLogin = async () => {
        try {
            const user = await signInAnonymously(auth);
            console.log(user);
            setUserType('guest')
            console.log(userType)
            navigation.push('Home')
            

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
                    guestLogin()
                }}>
                    <Text>Sign In as Guest</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}