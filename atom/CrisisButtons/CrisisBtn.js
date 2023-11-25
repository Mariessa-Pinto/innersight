import React, { useState } from 'react';
import globalStyles from '../../styles/global'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CrisisBtn = (props) => {
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
            <View>
            <Text style={[styles.text, globalStyles.h3Text]}>{props.text}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
         
      );
    };
    
    const styles = StyleSheet.create({
      container: {
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          justifyContent: 'center',
          marginTop: 10
      },
      box: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
      },
      button: {
        width: 158,
        height: 150,
        borderRadius: 20,
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
      txt: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        width: 140
      },
    
    });
    
    export default CrisisBtn;