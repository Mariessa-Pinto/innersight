import { StyleSheet, View } from 'react-native';
import NormalInput from '../../atom/InputBoxes/NormalInput'

const ForgotPasswordForm = () => {
    return (
        <View style={styles.container}>
            <NormalInput placeholder='Email' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 328,
        height: 130,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
});

export default ForgotPasswordForm;