import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

const SpeechLightBtnTB = (props) => {
    const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);

  const navigateTo = () => {
    navigation.navigate(props.navigate);
  };

  const buttonImage = pressed
  ? require('../icons/SpeechLightOnPress.png')
  : require('../icons/SpeechLightBtn.png');
  return (
    <TouchableWithoutFeedback
      onPress={navigateTo}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={[styles.button, pressed && styles.buttonPressed]}>
       <Image source={buttonImage} style={styles.img}/>
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
  buttonPressed: {
    backgroundColor: '#D5D7FF', // Change the color when pressed
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
export default SpeechLightBtnTB;