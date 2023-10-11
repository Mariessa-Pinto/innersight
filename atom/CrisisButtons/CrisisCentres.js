import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

const CrisisCentres = () => (
  <View>
    <Button
      mode="contained"
      style={styles.button}
      contentStyle={styles.buttonContent}
      onPress={() => console.log('Pressed')}
    >
      <Text style={styles.buttonText}>Local Distress Centres</Text>
    </Button>
  </View>
);

export default CrisisCentres;

const styles = StyleSheet.create({
  button: {
    width: 158, 
    height: 150, 
    justifyContent: 'center',
    backgroundColor: '#525585',
  },
  buttonContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

