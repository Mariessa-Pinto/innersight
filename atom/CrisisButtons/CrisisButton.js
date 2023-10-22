import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image'
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';


export default function CrisisButton({
  navigation,
  navigationTarget,
  title
}) {

  const [pressedCrisis, setPressedCrisis] = useState(false)

  return (

    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={() => setPressedCrisis(true)}
        onPressOut={() => setPressedCrisis(false)}
        onPress={navigationTarget}
      >
        <View style={[styles.button, pressedCrisis && styles.buttonPressed]}>
          <Text style={[globalStyles.h3Text, styles.titleText]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    width: 158,
    height: 150,
    borderRadius: 20,
    backgroundColor: '#6164C3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  buttonPressed: {
    backgroundColor: '#43479A', // Change the color when pressed
  },

  titleText: {
    color: '#FFF'
  }
});
