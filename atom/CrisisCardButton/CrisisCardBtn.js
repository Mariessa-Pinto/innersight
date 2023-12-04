import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../styles/global'
import { A } from '@expo/html-elements';

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
    //onPress={navigateTo}
    >
      <View style={[styles.button, pressed && styles.buttonPressed]}>
        <A href={props.link}>
          <View style={styles.txt}>
            <Text style={[globalStyles.h4TextSemiBold, styles.header]}>{props.headerText}</Text>
            <Text style={globalStyles.bodyCopy}>{props.numText}</Text>
            <Text style={globalStyles.captionText}>{props.text}</Text>
          </View>
        </A>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    padding: 10,
    elevation: 7,
    textAlign: 'center'
  },
  buttonPressed: {
    backgroundColor: '#D5D7FF',
  },
  txt: {
    gap: 5,
    width: 365,
  },
  header: {
    width: '100%'
  }
});

export default CrisisCardBtn;