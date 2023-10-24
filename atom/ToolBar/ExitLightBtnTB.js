import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image';

const ExitLightBtnTB = () => {
  const [pressed, setPressed] = useState(false);


  const buttonImage = pressed
    ? require('../icons/ExitLightOnPress.png')
    : require('../icons/ExitLightBtn.png');
  return (
    <TouchableWithoutFeedback
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
    width: 40,
    height: 40,
    borderRadius: 50,

  },

  text: {
    color: '#3E3F42',
    fontSize: 12,
  },
  img: {
    width: 40,
    height: 40
  }
});
export default ExitLightBtnTB;