import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';


const NormalInput = (props) => {
  const [text, onChangeText] = React.useState('');
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={props.placeholder}
        keyboardType="text"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    width: 281,
    margin: 12,
    borderWidth: 1,
    borderColor: '#88898C',
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FDFDFD",
    color: "#88898C"
  },
  container: {
    backgroundColor: '#00000000'
  }
});

export default NormalInput;