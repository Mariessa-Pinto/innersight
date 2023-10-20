import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image'


const RecommendationButton = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => console.log('Pressed')}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={[styles.button, pressed && styles.buttonPressed]}>
        <Text>Text</Text>
       <Image />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 154,
    borderRadius: 10,
    backgroundColor: '#F2F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
    borderColor: '#C5C7F7',
    borderWidth: 1
  },
  buttonPressed: {
    backgroundColor: '#D5D7FF', // Change the color when pressed
  },
  text: {
    color: '#3E3F42',
    fontSize: 13,
  },
});

export default RecommendationButton;
