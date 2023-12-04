import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

const backBtn = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={styles.btnContainer}
    >
      <View style={[styles.button, pressed && styles.buttonPressed]}>
        <Image source={require('../icons/backbtn.png')} height={10} width={10} />
      </View>
    </TouchableOpacity>
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
    backgroundColor: '#D5D7FF',
  },
  text: {
    color: '#3E3F42',
    fontSize: 12,
  },
  btnContainer: {
    position: 'absolute',
    top: 0
  }
});

export default backBtn;