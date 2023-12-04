import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

const AiToolInput = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../icons/bear.png')}
        style={styles.mascot}
      />
      <Text style={styles.input}>{props.response ? props.response : ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  input: {
    width: '55%',
    margin: 12,
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#FDFDFD",
    color: "#292929",
    borderColor: '#525585',
    borderWidth: 1,
    elevation: 5,
  },
  mascot: {
    width: '40%',
    height: 150,
  },
});

export default AiToolInput;