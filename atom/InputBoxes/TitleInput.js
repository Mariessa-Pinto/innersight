import React from 'react';
import globalStyles from '../../styles/global'
import { SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';

const TitleInput = (props) => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <Text style={globalStyles.labelText}>{props.title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={props.value}
        placeholder={props.text}
        keyboardType="default"
        blurOnSubmit={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    width: 328,
    marginTop: 5,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#88898C',
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FDFDFD",
    color: "#000",
    fontWeight: 'normal',
    fontFamily: 'Lexend-Regular'
  },
  titleTxt: {
    color: '#292929',
    marginLeft: 15
  }
});

export default TitleInput;