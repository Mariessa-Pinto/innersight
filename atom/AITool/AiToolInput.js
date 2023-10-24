import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Image } from 'react-native';



const AiToolInput = () => {
  const [text, onChangeText] = React.useState('');


  return (
    <View style={styles.container}>
      <Image
        source={require('../icons/bear.png')}
        style={styles.mascot}
      />
      <Text style={styles.input}>It looks like you're feeling rather negative from this journal entry. I've highlighted all the different sections you indicated feeling irritated, angry. These emotions emotions made up 20% of your overall
        entry today.</Text>
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
    objectFit:'contain',
  },
});

export default AiToolInput;