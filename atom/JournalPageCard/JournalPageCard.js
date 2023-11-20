import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, Touchable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ExtraLargeBtnLightTxt from '../../atom/Buttons/ExtraLargeBtnLightTxt';
import globalStyles from '../../styles/global';
import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from "react-native-modal";

const JournalPageCard = (props, { value }) => {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate(props.navigate);
  };

  const [pressed, setPressed] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [overlayType, setOverlayType] = useState()


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
                  <Text style={[globalStyles.h2Text, styles.headerText]}>{props.headerText}</Text>
                  <TouchableWithoutFeedback
                    onPress={() => { setOverlayVisible(true); setOverlayType("settingsOverlay") }}>
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
              <Text style={[globalStyles.captionText, styles.text]}>{props.text}</Text>
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
          {overlayType === "settingsOverlay" ?
            <View style={styles.container}>
              <View style={styles.inside}>
                <View style={styles.line}></View>
                <ExtraLargeBtnLightTxt
                  text='Edit Journal Name'
                />
                <ExtraLargeBtnLightTxt
                  text='Customize Journal'
                  navigate='CustomizeJournal'
                />
                <TouchableWithoutFeedback
                  onPress={() => setOverlayType("deleteOverlay")}>
                  <View style={[styles.deleteButton, pressed && styles.deleteButtonPressed]}>
                    <Text style={[globalStyles.btnTextLrg, styles.deleteText]}>Delete Journal</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
            :
            <>
              {overlayType === "deleteOverlay" ?
                <View style={styles.container}>
                  <View style={styles.inside}>
                    <View style={styles.line} />
                    <Text style={globalStyles.h4TextLight}>Are you sure you want to delete this entry?</Text>
                    <View style={styles.confirmButtons}>
                      <TouchableWithoutFeedback
                        onPress={() => setOverlayType("confirmDeleteOverlay")}>
                        <View style={[styles.deleteConfirmButtonDark, pressed && styles.deleteButtonPressed]}>
                          <Text style={[globalStyles.btnTextMed, styles.deleteTextLight]}>Yes, delete it</Text>
                        </View>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback
                        onPress={() => setOverlayVisible(!isOverlayVisible)}>
                        <View style={[styles.deleteConfirmButtonLight, pressed && styles.deleteButtonPressed]}>
                          <Text style={[globalStyles.btnTextMed, styles.deleteText]}>Cancel</Text>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                </View>
                :
                <View style={styles.container}>
                  <View style={styles.inside}>
                    <View style={styles.line}></View>
                    <Text style={globalStyles.h4TextLight}>Your Journal has been deleted.</Text>
                    <TouchableWithoutFeedback
                      onPress={() => setOverlayVisible(!isOverlayVisible)}>
                      <View style={[styles.confirmButtonDark, pressed && styles.deleteButtonPressed]}>
                        <Text style={[globalStyles.btnTextLrg, styles.deleteTextLight]}>Go to Journal Overview</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </View>

              }
            </>

          }

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

  },
  text: {
    color: '#292929'

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
  },
  container: {
    width: 410,
    height: 'auto',
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#F2F2FD',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -200 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 30,
    position: 'absolute',
    bottom: -20,
    left: -20
  },
  inside: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    marginTop: 10
  },
  line: {
    width: 65,
    height: 3,
    backgroundColor: '#88898C',
    marginBottom: 10
  },
  deleteButton: {
    width: 228,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#C5C7F7',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  deleteButtonPressed: {
    backgroundColor: '#D5D7FF', // Change the color when pressed
  },
  deleteText: {
    color: '#3E3F42',
  },
  deleteTextLight: {
    color: '#FDFDFD',
  },
  confirmButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteConfirmButtonDark: {
    width: 130,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#6164C3',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  deleteConfirmButtonLight: {
    width: 130,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#C5C7F7',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  confirmButtonDark: {
    width: 228,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#6164C3',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },


});

export default JournalPageCard;