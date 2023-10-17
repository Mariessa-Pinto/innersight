import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

const CrisisInfo = () => (

  <View>
  <Button  mode="contained" 
  width={158} 
  height={150}
  buttonColor="#525585"
  textColor='#ffffff'
  style={styles.button}
  onPress={() => console.log('Pressed')}
 
  > <Text style={styles.buttonText}>Crisis & information lines</Text>
  </Button>
  </View>
);

export default CrisisInfo;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  
  },
 
   
 
});