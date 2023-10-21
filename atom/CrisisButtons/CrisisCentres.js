import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native';


const CrisisCentres = (props) => {
  const navigation = useNavigation();
  const [pressedCrisis, setPressedCrisis] = useState(false);
  const [pressedDistress, setPressedDistress] = useState(false);
  const [pressedOrg, setPressedOrg] = useState(false);
  const [pressedInfo, setPressedInfo] = useState(false);

  const navigateTo = () => {
    navigation.navigate(props.navigate);
  };
  return (

    <View style={styles.container}>
        <View style={styles.box}>
    <TouchableWithoutFeedback
      onPressIn={() => setPressedCrisis(true)}
      onPressOut={() => setPressedCrisis(false)}
      onPress={navigateTo}
    >
      <View style={[styles.button, pressedCrisis && styles.buttonPressed]}>
        <View style={styles.txt}>
        <Text style={styles.text}>Crisis & Information Lines</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
     <TouchableWithoutFeedback
      onPressIn={() => setPressedDistress(true)}
      onPressOut={() => setPressedDistress(false)}
      onPress={navigateTo}
   >
     <View style={[styles.button, pressedDistress && styles.buttonPressed]}>
           <View style={styles.txt}>
       <Text style={styles.text}>Local Distress Centres</Text>
       </View>
     </View>
   </TouchableWithoutFeedback>
   </View>
   <View style={styles.box}>
    <TouchableWithoutFeedback
    onPressIn={() => setPressedOrg(true)}
    onPressOut={() => setPressedOrg(false)}
    onPress={navigateTo}
  >
    <View style={[styles.button, pressedOrg && styles.buttonPressed]}>
    <View style={styles.txt}>
      <Text style={styles.text}>Organizations</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
  <TouchableWithoutFeedback
    onPressIn={() => setPressedInfo(true)}
    onPressOut={() => setPressedInfo(false)}
    onPress={navigateTo}
  >
    <View style={[styles.button, pressedInfo && styles.buttonPressed]}>
    <View style={styles.txt}>
      <Text style={styles.text}>Information & Publications</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
  </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      justifyContent: 'center',
      marginTop: 10
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  button: {
    width: 158,
    height: 150,
    borderRadius: 20,
    backgroundColor: '#6164C3',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  buttonPressed: {
    backgroundColor: '#43479A', // Change the color when pressed
  },
  text: {
    color: '#FDFDFD',
    fontSize: 18,
  },
  txt: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: 140
  },

});

export default CrisisCentres;
