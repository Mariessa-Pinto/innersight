import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import test from '../../atom/assets/settingicons/Home.png'

const TopGreyButton = (props) => {
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
        <View style={styles.leftContent}>
          {
            props.image ?
              <Image
                source={props.image}
                style={styles.icon}
              />
              :
              ''
          }
          <Text style={styles.labelTextLight}>{props.text}</Text>
        </View>
        <View style={styles.rightContent}>
          {
            props.arrow ?
              <Image
                source={require('../../atom/assets/settingicons/Arrow.png')}
                style={styles.arrow}
              />
              :
              ""
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

/**
 *           
 */

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    elevation: 7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
leftContent:{
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: 15,
  alignItems: 'center',
  gap: 10
},
rightContent:{
  display: 'flex',
  flexDirection: 'row',
  paddingRight: 15,
  alignItems: 'center',

},
  buttonPressed: {
    backgroundColor: '#D5D7FF', // Change the color when pressed
  },
  icon: {
    height: 16,
    width: 16,
    objectFit: 'contain'
  },
  arrow: {
    height: 18,

  }
});

export default TopGreyButton;