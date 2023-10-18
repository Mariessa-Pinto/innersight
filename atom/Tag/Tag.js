import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';



const Tag = () => {
 const [buttonStates, setButtonStates] = useState({
   Tags: false
 });


 const handleButtonPress = (font) => {
   setButtonStates((prevStates) => ({
      ...prevStates,
      [font]: !prevStates[font],
   }));
 }

 const renderButton = (font, label) => (
   <TouchableWithoutFeedback
   title={label}
   onPress={() => handleButtonPress(font)}
 >
   
   <View style={[styles.button, buttonStates[font] && styles.buttonPressed]}>
     <Text style={[styles.letter, buttonStates[font] && styles.buttonPressed]}>Tag</Text>
   </View>

 </TouchableWithoutFeedback>
 );
 
 return (
   <View style={styles.container}>
   {renderButton('Tags', 'Tags')}
   
 </View>

 );
};


const styles = StyleSheet.create({
 button: {
    width: 82,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#D5D7FF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
 },
letter: {
   color: '#3E3F42',
   fontSize: 13,
   fontWeight: 'light',
},
buttonPressed: {
   backgroundColor: '#6164C3',
   color: '#FDFDFD'
},
container: {
   display: 'flex',
   flexDirection: 'row',
   gap: 10
},
});

export default Tag;