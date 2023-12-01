import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";


export default function UserLogout() {
    const route = useRoute();
    const username = route.params?.username;


    const logoutUser = async () => {
        await signOut(auth);
        console.log("User logged out");
        navigation.navigate('Home'); 
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.img}>
                <TouchableOpacity onPress={logoutUser}>
                </TouchableOpacity>
                </View>
                {username && <Text style={styles.user}>Welcome {username}</Text>}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
   user: {
    color: '#fff'
   },
   container: {
    alignItems: 'center', 
    justifyContent: 'center'
   },
   img: {
    marginTop: 20
   }
  });