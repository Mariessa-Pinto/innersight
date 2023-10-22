import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const CrisisCardBtn = (props) => {
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
        <View style={styles.txt}>
        <Text style={styles.headerText}>{props.headerText}</Text>
        <Text style={styles.num}>{props.numText}</Text>
        <Text style={styles.text}>{props.text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  
 
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 125,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  buttonPressed: {
    backgroundColor: '#D5D7FF', // Change the color when pressed
  },
  headerText: {
    color: '#292929',
    fontSize: 15,
    fontWeight: 'semibold'
  },
  num: {
    color: '#292929',
    fontSize: 14,
    fontWeight: 'light'
  },
  text: {
    color: '#292929',
    fontSize: 12,
    fontWeight: 'light'
  },
  txt: {
    gap: 5,
    marginRight: 85,
    marginLeft: 7
  },

});

export default CrisisCardBtn;