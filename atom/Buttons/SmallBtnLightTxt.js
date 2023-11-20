import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../styles/global';

const SmallBtnLightTxt = (props) => {
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
        <Text style={[styles.text, globalStyles.btnTextSml]}>{props.text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 112.93,
    height: 32,
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
  },
});

export default SmallBtnLightTxt;