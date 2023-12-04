import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import globalStyles from '../../styles/global'

const UpdatePhoto = (props) => {
    const [pressed, setPressed] = useState(false);

    return (
        <TouchableWithoutFeedback
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
        >
            <View style={[styles.button, pressed && styles.buttonPressed]}>
                <Text style={[globalStyles.btnTextSml, styles.text]}>{props.text}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 130,
        height: 38,
        borderRadius: 10,
        backgroundColor: '#6164C3',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
    },
    buttonPressed: {
        backgroundColor: '#43479A', 
    },
    text: {
        color: '#FDFDFD',
    },
});

export default UpdatePhoto;