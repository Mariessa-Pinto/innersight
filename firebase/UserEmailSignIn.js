import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useState } from "react";
import { View, TextInput, StyleSheet, Button} from "react-native";
import NormalInput from "../atom/InputBoxes/NormalInput";
import ExtraLargeBtnLightTxt from "../atom/Buttons/ExtraLargeBtnLightTxt";


export default function UserEmailSignIn() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
       
        } catch(error) {
            console.log(error);
        }
    }

    return(
                <View style={styles.container}>
                
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={loginEmail}
                        onChangeText={(text)=> {
                            setLoginEmail(text)
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={loginPassword}
                        onChangeText={setLoginPassword}
                    />
                <Button style={styles.btn} title="Login" onPress={login}>Login</Button>
                   
                    <Button style={styles.btn} title="Login" onPress={login}>Login</Button>
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
    }
});


