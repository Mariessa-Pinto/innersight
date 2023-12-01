import { StyleSheet, View } from 'react-native';
import NormalInput from '../../atom/InputBoxes/NormalInput'

const SignUpForm = () => {

    return (
    <View style={styles.container}>
        <NormalInput placeholder='Name'/>
        <NormalInput placeholder='Email'/>
        <NormalInput placeholder='Password'/>
        <NormalInput placeholder='Comfirm Password'/>
    </View>
    );
};

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

});

export default SignUpForm;