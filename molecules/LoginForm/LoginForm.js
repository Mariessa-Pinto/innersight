import { StyleSheet, Text, View } from 'react-native';
import NormalInput from '../../atom/InputBoxes/NormalInput'

const LoginForm = () => {

    return (
    <View style={styles.container}>
        <NormalInput placeholder='Email'/>
        <NormalInput placeholder='Password'/>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 328,
        height: 150, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginBottom: 10
    },

});

export default LoginForm;