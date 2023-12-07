import { StyleSheet, View, TextInput } from 'react-native';
import NormalInput from '../../atom/InputBoxes/NormalInput'
import { useState } from 'react'

const LoginForm = () => {
    const [text, onChangeText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value="amaya@gmail.com"
                    placeholder={props.placeholder}
                    keyboardType="default"
                    blurOnSubmit={true}
                />
            </View>
            
            <NormalInput
                placeholder='Password'
                value='123456' // Pass the value prop
                onChangeText={handleInputChange} // Pass the onChangeText prop
            />
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