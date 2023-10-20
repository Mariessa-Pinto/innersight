import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import { Image } from 'expo-image';


const AiToolInput = () => {
  const [text, onChangeText] = React.useState('');
  

  return (
    <SafeAreaView>
        <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="It looks like you’re feeling rather negative from this journal entry. I’ve highlighted all the different sections you indicated feeling irritated, angry. These emotions emotions made up 20% of your overall   
            entry today. "
        placeholderTextColor={"#3E3F42"}
        
        keyboardType='text'
        multiline={true}
        textAlignVertical='top'
      />
      <Image
                source={require('../icons/bear.png')}
                style={styles.mascot}
            />
            </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 135,
    width: 324,
    margin: 12,
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#FDFDFD",
    color: "#292929",
    borderColor: '#525585',
    borderWidth: 1,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  mascot: {
    height: 128,
    width: 128,
    position: 'absolute',
    left: 0,
    marginTop: 70
},
});

export default AiToolInput;