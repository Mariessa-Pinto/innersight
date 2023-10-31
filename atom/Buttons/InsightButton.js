import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const InsightButton = (props) => {
    const [pressed, setPressed] = useState(false);

    return (
        <TouchableWithoutFeedback
            onPress={props.toggle}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
        >
            <View style={[styles.button, pressed && styles.buttonPressed]}>
                <Text style={styles.text}>{props.text}</Text>
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
        backgroundColor: '#43479A', // Change the color when pressed
    },
    text: {
        color: '#FDFDFD',
        fontSize: 13,
    },
});

export default InsightButton;