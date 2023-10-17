import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';


const NormalInput = () => {
  const [text, onChangeText] = React.useState('');
  

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Text"
        keyboardType="text"
      />
    
    </SafeAreaView>
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
});

export default NormalInput;