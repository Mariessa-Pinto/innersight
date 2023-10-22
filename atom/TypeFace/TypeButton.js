import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';


const TypeButton = () => {
   const [selectedFont, setSelectedFont] = useState('Roboto');
   const [buttonStates, setButtonStates] = useState({
      Inter: false,
      OpenSans: false,
      Roboto: false
   });

   const changeFont = (font) => {
      setSelectedFont(font);
   };


   //async function loadFonts() {
     // await Font.loadAsync({
      //   'Roboto': require('./roboto.ttf'),
       //  'OpenSans': require('././opensans.ttf'),
        // 'Inter': require('././inter.ttf')

     // });
    //  setSelectedFont('Roboto')
   //}

   //useEffect(() => {
     // loadFonts();
  // }, []);

   const handleButtonPress = (font) => {
      setButtonStates((prevStates) => ({
         ...prevStates,
         [font]: !prevStates[font],
      }));
      setSelectedFont(font);
   }

   const renderButton = (font, label) => (
      <TouchableWithoutFeedback
         title={label}
         onPress={() => handleButtonPress(font)}
      >
         <View style={[buttonStates[font] && styles.buttonPressed]}>
            <View style={styles.button}>
               <Text style={styles.letter}>aA</Text>
               <Text style={styles.fontName}>{label}</Text>
            </View>
         </View>
      </TouchableWithoutFeedback>
   );

   return (
      <View style={styles.container}>
         {renderButton('Inter', 'Inter')}
         {renderButton('OpenSans', 'Open Sans')}
         {renderButton('Roboto', 'Roboto')}

      </View>

   );
};


const styles = StyleSheet.create({
   button: {
      width: 94,
      height: 94,
      borderRadius: 15,
      backgroundColor: '#6164C3',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 4,
   },
   seleted: {
      borderColor: 'red',
      borderWidth: 2
   },
   inter: {
      color: '#FDFDFD',
      fontSize: 14,
      fontWeight: 'medium',
      fontFamily: 'Inter'
   },
   open: {
      color: '#FDFDFD',
      fontSize: 14,
      fontWeight: 'medium',
      fontFamily: 'Open-Sans'
   },
   roboto: {
      color: '#FDFDFD',
      fontSize: 14,
      fontWeight: 'medium',
      fontFamily: 'Roboto'
   },
   letter: {
      color: '#FDFDFD',
      fontSize: 40,
      fontWeight: 'bold',
   },
   fontName: {
      color: '#FDFDFD',
      fontSize: 14,
      fontWeight: 'medium',
   },
   interLetter: {
      color: '#FDFDFD',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Inter'
   },
   openLetter: {
      color: '#FDFDFD',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Open-Sans'
   },
   robotoLetter: {
      color: '#FDFDFD',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Roboto'
   },
   buttonPressed: {
      borderRadius: 17,
      borderWidth: 2,
      borderColor: '#88898C'
   },
   container: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10
   },
   hello: {}
});

export default TypeButton;