import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';


const BigInput = () => {
  const [text, onChangeText] = React.useState('');
  

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Start typing..."
        placeholderTextColor={"#292929"}
        keyboardType='text'
      />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 115,
    width: 297,
    margin: 12,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#FDFDFD",
    color: "#292929"
  },
});

export default BigInput;