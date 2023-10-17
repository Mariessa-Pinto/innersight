import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';



const ColorBtns = () => {
 const [buttonStates, setButtonStates] = useState({
   Pink: false,
   Green: false,
   Purple: false,
   Blue: false
 });


 const handleButtonPress = (font) => {
   setButtonStates((prevStates) => ({
      ...prevStates,
      [font]: !prevStates[font],
   }));
 }

 const renderButton = (font, label, color) => (
   <TouchableWithoutFeedback
   title={label}
   onPress={() => handleButtonPress(font)}
 >
   <View style={[buttonStates[font] && styles.buttonPressed]}>
   <View style={[
    styles.button, 
    { backgroundColor: color},
    ]}>
     
   </View>
   </View>

 </TouchableWithoutFeedback>
 );
 
 return (
   <View style={styles.container}>
   {renderButton('Pink', 'Pink', '#FBA2A2')}
   {renderButton('Green', 'Green', '#B9CD80')}
   {renderButton('Purple', 'Purple', '#A8ABED')}
   {renderButton('Blue', 'Blue', '#B7D1F9')}
 </View>

 );
};


const styles = StyleSheet.create({
 button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
 },
buttonPressed: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#88898C'
},
container: {
   display: 'flex',
   flexDirection: 'row',
   gap: 10
},
});

export default ColorBtns;