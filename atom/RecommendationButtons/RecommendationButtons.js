import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../styles/global';


const RecommendationButton = (props) => {
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
        <View style={styles.img}>
          <Image
            source={props.image}
            style={styles.sleeping}
          />
        </View>
        <Text style={globalStyles.labelText}>{props.text}</Text>
        <Image />
      </View>
    </TouchableWithoutFeedback>

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
    backgroundColor: '#D5D7FF', 
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
    resizeMode: 'contain'
  },
  img: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
  }
});

export default RecommendationButton;
