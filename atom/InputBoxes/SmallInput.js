import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import globalStyles from '../../styles/global';

const SmallInput = (props) => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={props.placeholder}
        keyboardType="default"
        blurOnSubmit={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    width: 170,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#88898C',
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FDFDFD",
    color: "#000",
    fontWeight: 'normal',
    fontFamily: 'Lexend-Regular'
  },
  container: {
    backgroundColor: '#00000000',
  }
});

export default SmallInput;