import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import JournalSettingsOverlay from '../../molecules/Overlays/journalSettingsOverlay';
import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from "react-native-modal";

const JournalPageCard = (props, { value }) => {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate(props.navigate);
  };

  const [pressed, setPressed] = useState(false);

  const [isOverlayVisible, setOverlayVisible] = useState(false);


  return (
    <>

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
            <View style={styles.textContainer}>
              <View>
                <View style={styles.titleContainer}>
                  <Text style={styles.headerText}>{props.headerText}</Text>
                  <TouchableWithoutFeedback
                    onPress={() => setOverlayVisible(true)}>
                    <View style={styles.touchBox}>
                      <Image source={require('../icons/SettingsIcon.png')} style={styles.settings} />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
                <Image
                  source={props.iconImage}
                  style={styles.icon}
                />
              </View>

              <Text style={styles.text}>{props.text}</Text>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>
      <GestureRecognizer
        style={{ flex: 1 }}
        onSwipeDown={() => setOverlayVisible(false)}

      >
        <Modal
          isVisible={isOverlayVisible}
          onBackdropPress={() => setOverlayVisible(false)}
          directionalOffsetThreshold={21}
        >
          <JournalSettingsOverlay />


        </Modal>
      </GestureRecognizer>

    </>


  );
};

const styles = StyleSheet.create({
  touchBox: {
    height: 30,
    width: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '100%',
    height: 158,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 7,
    display: 'flex',
    flexDirection: 'row',
    padding: 20
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
    fontWeight: 'light',

  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    width: '100%',
    height: '100%',
    paddingVertical: 10,


  },
  coverImage: {
    height: '110%',
    objectFit: 'contain'
  },
  txt: {
    width: '60%'
  },
  img: {
    width: '40%',
  },
  settings: {
    width: 14,
    height: 3.11
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  }

});

export default JournalPageCard;