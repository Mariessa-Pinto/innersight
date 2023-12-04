import { StyleSheet, View } from 'react-native';
import NormalInput from '../../atom/InputBoxes/NormalInput'

const SetPasswordForm = () => {

    return (
        <View style={styles.container}>
            <NormalInput placeholder='New Password' />
            <NormalInput placeholder='Comfirm New Password' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 328,
        height: 170,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginBottom: 10
    },
});

export default SetPasswordForm;