import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

const DrawingLightBtnTB = (props) => {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);

  const navigateTo = () => {
    navigation.navigate(props.navigate);
  };

  const buttonImage = pressed
    ? require('../icons/DrawingLightOnPress.png')
    : require('../icons/DrawingLightBtn.png');

  return (
    <TouchableWithoutFeedback
      onPress={navigateTo}
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

export default DrawingLightBtnTB;