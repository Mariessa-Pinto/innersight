import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const InsightButton = (props) => {
    const [pressed, setPressed] = useState(false);

    const handlePress = () => {
        console.log('Button pressed!');
        setPressed(!pressed);
        props.onPress(); // Check if this line triggers your handleApiCall function
    };


    return (
        <TouchableOpacity
            onPress={handlePress}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            activeOpacity={1}
        >
            <View style={[styles.button, pressed && styles.buttonPressed]}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
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