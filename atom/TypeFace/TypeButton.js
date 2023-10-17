import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';


const TypeButton = () => {
 const [selectedFont, setSelectedFont] = useState('Roboto');
 const [pressed, setPressed] = useState(false);

 const changeFont = (font) => {
   setSelectedFont(font);
 };


 async function loadFonts() {
    await Font.loadAsync({
       'Roboto': require('./roboto.ttf'),
       'OpenSans': require('./opensans.ttf'),
       'Inter': require('./inter.ttf')

    });
    setSelectedFont('Roboto')
 }

 useEffect(() => {
    loadFonts();
 }, []);
 
 return (
   <View style={styles.container}>
      <TouchableWithoutFeedback
      title="Inter" 
      onPress={() => changeFont('Inter')}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
     <View style={[pressed && styles.buttonPressed]}>
      <View style={styles.button}>
        <Text style={styles.interLetter}>aA</Text>
        <Text style={styles.inter}>Inter</Text>
      </View>
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
      title="OpenSans" 
      onPress={() => changeFont('OpenSans')}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={[pressed && styles.buttonPressed]}>
      <View style={styles.button}>
        <Text style={styles.openLetter}>aA</Text>
        <Text style={styles.open}>Open Sans</Text>
      </View>
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
      title="Roboto" 
      onPress={() => changeFont('Roboto')}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={[pressed && styles.buttonPressed]}>
      <View style={styles.button}>
        <Text style={styles.robotoLetter}>aA</Text>
        <Text style={styles.roboto}>Roboto</Text>
      </View>
      </View>
    </TouchableWithoutFeedback>
   <Text style={{ fontFamily: selectedFont }}>Hello, World</Text>
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
    margin: 10
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
   borderWidth: 4,
   borderColor: '#88898C',
}
});

export default TypeButton;