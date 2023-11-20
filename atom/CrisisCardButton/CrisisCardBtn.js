import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../styles/global'



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
        <Text style={globalStyles.h4TextSemiBold}>{props.headerText}</Text>
        <Text style={globalStyles.bodyCopy}>{props.numText}</Text>
        <Text style={globalStyles.captionText}>{props.text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  
 
  );
};

const styles = StyleSheet.create({
  button: {
    width: '99%',
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
  txt: {
    gap: 5,
    marginRight: 85,
    marginLeft: 7
  },
  

});

export default CrisisCardBtn;