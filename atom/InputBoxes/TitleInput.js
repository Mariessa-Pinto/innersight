import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';


const TitleInput = () => {
  const [text, onChangeText] = React.useState('');
  

  return (
    <SafeAreaView>
        <Text>Title</Text>
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
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#C5C7F7",
    color: "#525585"
  },
});

export default TitleInput;