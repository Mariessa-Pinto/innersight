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
        keyboardType="numeric"
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
    borderStyle: 'solid',
    borderColor: '#C5C7F7',
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F4F4F4",
    color: "#525585"
  },
});

export default BigInput;