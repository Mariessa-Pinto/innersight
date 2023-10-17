import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

const SmallBtnDarkTxt = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => console.log('Pressed')}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={[styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.text}>Text</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 112.93,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#C5C7F7',
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
});

export default SmallBtnDarkTxt;