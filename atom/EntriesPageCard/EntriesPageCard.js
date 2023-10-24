import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const EntriesPageCard = (props) => {
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
          <View style={styles.title}>
            <View style={styles.heading}>
              <Text style={styles.headerText}>{props.headerText}</Text>
              <Image
                source={props.iconImage}
                style={styles.icon}
              />
            </View>

            <View style={styles.set}>
              <Image source={require('../icons/SettingsIcon.png')} style={styles.settings} />
            </View>
          </View>
          <View style={styles.textCon}>
            <Text style={styles.text}>{props.date}</Text>
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  button: {
    width: 328,
    height: 115,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
    borderColor: '#F6F6F6',
    borderWidth: 1
  },
  buttonPressed: {
    backgroundColor: '#EAEAEA', // Change the color when pressed
    borderColor: '#EAEAEA'
  },
  headerText: {
    color: '#525585',
    fontSize: 18,
    fontWeight: 'medium'

  },
  text: {
    color: '#292929',
    fontSize: 12,
    fontWeight: 'light'
  },
  txt: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2
  },
  textCon: {
    gap: 20
  },
  settings: {
    width: 14,
    height: 3.11,
  },
  set: {
    marginLeft: 90
  },
  heading:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
    
  }

});

export default EntriesPageCard;