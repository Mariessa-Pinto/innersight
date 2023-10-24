import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const JournalPageCard = (props) => {
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
            style={styles.coverImage}
          />
        </View>
        <View style={styles.txt}>
          <View style={styles.title}>
            <Text style={styles.headerText}>{props.headerText}</Text>
            <Image source={require('../icons/SettingsIcon.png')} style={styles.settings} />
          </View>
          <Image
            source={props.iconImage}
            style={styles.icon}
          />
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>


  );
};

const styles = StyleSheet.create({
  button: {
    width: 328,
    height: 158,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
    display: 'flex',
    flexDirection: 'row'
  },
  buttonPressed: {
    backgroundColor: '#D5D7FF', // Change the color when pressed
  },
  headerText: {
    color: '#525585',
    fontSize: 22,

  },
  text: {
    color: '#292929',
    fontSize: 12,
    fontWeight: 'light'
  },
  txt: {
    gap: 10,
    float: 'right',
    width: 160,
    marginRight: 20
  },
  coverImage: {
    width: 98,
    height: 127.7
  },
  img: {
    float: 'left',
    width: 120,
  },
  settings: {
    width: 14,
    height: 3.11
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

});

export default JournalPageCard;