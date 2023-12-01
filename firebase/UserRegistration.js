import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import NormalInput from "../atom/InputBoxes/NormalInput";
import ExtraLargeBtnLightTxt from "../atom/Buttons/ExtraLargeBtnLightTxt";


export default function UserRegistrationSignIn() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        }catch(error) {
                console.log(error);
        }
    }

    return (
    
            <View style={styles.container}>
             
             <NormalInput placeholder='Name'/>
               
                    <TextInput 
                        placeholder="Email"
                        value={registerEmail}
                        onChangeText={(text)=> {
                            setRegisterEmail(text)
                        }}
                    />
                  
                    <TextInput 
                        placeholder="Password"
                        value={registerPassword}
                        onChangeText={(pass)=> {
                            setRegisterPassword(pass)
                        }}
                    />
                    <NormalInput placeholder='Comfirm Password'/>
                    <ExtraLargeBtnLightTxt
                        text="Sign Up"
                        navigate="ChooseMascot"
                    />
                <Button
                style={styles.btn}
                    title="Sign Up"
                    onPress={() => {
                        register()
                        setRegisterEmail("")
                        setRegisterPassword("")
                        
                }}> Sign Up </Button>
                 
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