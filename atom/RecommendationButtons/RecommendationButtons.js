import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native';


const RecommendationButton = (props) => {
  const navigation = useNavigation();
  const [pressedSleeping, setPressedSleeping] = useState(false);
  const [pressedSelfCare, setPressedSelfCare] = useState(false);
  const [pressedExercise, setPressedExercise] = useState(false);

  const navigateTo = () => {
    navigation.navigate(props.navigate);
  };
  return (

    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn={() => setPressedSleeping(true)}
        onPressOut={() => setPressedSleeping(false)}
        onPress={navigateTo}
      >
        <View style={[styles.button, pressedSleeping && styles.buttonPressed]}>
          <View style={styles.img}>
            <Image
              source={require('../Mascots/otterSleep.png')}
              style={styles.sleeping}
            />
          </View>
          <Text style={styles.text}>Sleeping{'\n'} Early</Text>
          <Image />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPressIn={() => setPressedSelfCare(true)}
        onPressOut={() => setPressedSelfCare(false)}
        onPress={navigateTo}
      >
        <View style={[styles.button, pressedSelfCare && styles.buttonPressed]}>
          <View style={styles.img}>
            <Image
              source={require('../Mascots/frogMeditate.png')}
              style={styles.self}
            />
          </View>
          <View style={styles.txt}>
            <Text style={styles.text}>Practice Self Care</Text>
          </View>
          <Image />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPressIn={() => setPressedExercise(true)}
        onPressOut={() => setPressedExercise(false)}
        onPress={navigateTo}
      >
        <View style={[styles.button, pressedExercise && styles.buttonPressed]}>
          <View style={styles.img}>
            <Image
              source={require('../Mascots/pandaExercise.png')}
              style={styles.exercise}
            />
          </View>
          <Text style={styles.text}>Exercise</Text>
          <Image />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    marginTop: 10
  },
  button: {
    width: 100,
    height: 154,
    borderRadius: 10,
    backgroundColor: '#F2F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
    borderColor: '#C5C7F7',
    borderWidth: 1
  },
  buttonPressed: {
    backgroundColor: '#D5D7FF', // Change the color when pressed
  },
  text: {
    color: '#3E3F42',
    fontSize: 13,
  },
  txt: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  sleeping: {
    height: 83,
    width: 90,
  },
  self: {
    height: 70,
    width: 90,
  },
  exercise: {
    height: 100,
    width: 78,
  },
  img: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10
  }
});

export default RecommendationButton;
