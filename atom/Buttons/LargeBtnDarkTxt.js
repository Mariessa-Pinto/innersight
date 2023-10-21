import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LargeBtnDarkTxt = (props) => {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);

  const navigateTo = () => {
    navigation.navigate(props.navigate);
  };
  return (
    <TouchableWithoutFeedback
    onPressIn={() => setPressed(true)}
    onPressOut={() => setPressed(false)}
    onPress={navigateTo}
    >
      <View style={[styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 180,
    height: 40,
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
    fontSize: 14,
  },
});

export default LargeBtnDarkTxt;