import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image';

const RefreshBtn = () => {
  const [pressed, setPressed] = useState(false);
  const buttonImage = pressed
    ? require('../icons/RefreshButton.png')
    : require('../icons/RefreshPress.png');
  return (
    <TouchableWithoutFeedback
      onPress={() => console.log('Pressed')}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={[styles.button, pressed && styles.buttonPressed]}>
        <Image source={buttonImage} style={styles.img} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  buttonPressed: {
    backgroundColor: '#D5D7FF', // Change the color when pressed
  },
  text: {
    color: '#3E3F42',
    fontSize: 12,
  },
  img: {
    width: 30,
    height: 30
  }
});

export default RefreshBtn;