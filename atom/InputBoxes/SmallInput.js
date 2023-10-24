import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';


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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    width: 170,
    margin: 12,
    borderWidth: 1,
    borderColor: '#88898C',
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FDFDFD",
    color: "#000"
  },
  container: {
    backgroundColor: '#00000000'
  }
});

export default SmallInput;