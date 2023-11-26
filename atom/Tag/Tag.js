import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import globalStyles from '../../styles/global';


const Tag = (props) => {
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
        <Text style={[globalStyles.labelTextLight, buttonStates[font] && styles.buttonPressed]}>{props.text}</Text>
      </View>

    </TouchableWithoutFeedback>
  );

  return (
    <View>
      {renderButton('Tags', 'Tags')}

    </View>

  );
};


const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    backgroundColor: '#D5D7FF',
    paddingHorizontal: 15,
    paddingVertical: 7
  },
  buttonPressed: {
    backgroundColor: '#6164C3',
    color: '#FDFDFD'
  },
});

export default Tag;