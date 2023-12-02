import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeContext from '../../theme/themeContext';
import globalStyles from '../../styles/global';
import { A } from '@expo/html-elements';

const MiddleGreyButton = (props) => {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);

  const navigateTo = () => {
    navigation.navigate(props.navigate);
  };

  //Dark/Light Mode
  const [darkMode, setDarkMode] = useState(false)
  const theme = useContext(themeContext)
  return (
    <TouchableWithoutFeedback
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={navigateTo}
    >
      <A href={props.link}>
        <View style={[styles.button, pressed && styles.buttonPressed, { backgroundColor: theme.backgroundGreyLight }]}>
          <View style={styles.contentJustify}>
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
              <Text style={[globalStyles.labelTextLight, { color: theme.color }]}>{props.text}</Text>
            </View>
            <View style={styles.rightContent}>
              {
                theme.theme === "light" && props.arrow ?
                  <Image
                    source={require('../../atom/assets/settingicons/Arrow.png')}
                    style={styles.arrow}
                  />
                  :
                  <>
                    {
                      theme.theme === "dark" && props.arrow ?
                        <Image
                          source={require('../../atom/assets/settingicons/darkMode/Arrow.png')}
                          style={styles.arrow}
                        />
                        :
                        ""
                    }
                  </>
              }
            </View>
          </View>
        </View>
      </A>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    elevation: 7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#D5D7FF', // Change the color when pressed
  },

  leftContent: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 15,
    alignItems: 'center',
    gap: 10
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 15,
    alignItems: 'center',

  },
  icon: {
    height: 16,
    width: 16,
    objectFit: 'contain'
  },
  arrow: {
    height: 18,

  },
  contentJustify: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 372,
  }
});

export default MiddleGreyButton;