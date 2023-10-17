import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';


const TitleInput = () => {
  const [text, onChangeText] = React.useState('');
  

  return (
    <SafeAreaView>
        <Text style={styles.titleTxt}>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Text"
        keyboardType="numeric"
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
  titleTxt: {
    color: '#292929',
    fontSize: 13,
    marginLeft: 15
  }
});

export default TitleInput;