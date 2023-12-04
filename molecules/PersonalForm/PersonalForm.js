import { StyleSheet, View } from 'react-native';
import TitleInput from '../../atom/InputBoxes/TitleInput';

const PersonalForm = () => {

    return (
        <View style={styles.container}>
            <TitleInput
                title='First Name'
                value='John'
                placeholder='First Name'
            />
            <TitleInput
                title='Last Name'
                value='Smith'
                placeholder='Last Name'
            />
            <TitleInput
                title='Email'
                value='johnsmith@johnemail.com'
                placeholder='Email'
            />
            <TitleInput
                title='Password'
                value='********'
                placeholder='Password'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 280,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
});

export default PersonalForm;