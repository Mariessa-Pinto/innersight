import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ExtraLargeBtnLightTxt from '../../atom/Buttons/ExtraLargeBtnLightTxt';


const MediumBtnLightTxt = (props) => {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);

  const navigateTo = () => {
    navigation.navigate(props.navigate);
  };



  return (
    <>
      <TouchableWithoutFeedback
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        onPress={navigateTo}
      >
        <View style={[styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
      
    </>
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
  container: {
    width: 410,
    height: 'auto',
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#F2F2FD',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -200 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 30,
    position: 'absolute',
    bottom: -20,
    left: -20
  },
  inside: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    marginTop: 10
  },
  line: {
    width: 65,
    height: 3,
    backgroundColor: '#88898C',
    marginBottom: 10
  },
  backButton: {
    width: 228,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#6164C3',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  backButtonPressed: {
    backgroundColor: '#43479A', // Change the color when pressed
  },
  backText: {
    color: '#FDFDFD',
    fontSize: 14,
  },
});

export default MediumBtnLightTxt;