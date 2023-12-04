import React from 'react';
import { View, TextInput } from 'react-native';

const MultiText = () => {
  const [value, onChangeText] = React.useState('Start Writing Here');
  
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#F2F2FD',
        borderBottomWidth: 1,
      }}>
      <TextInput
        editable
        multiline
        numberOfLines={5}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{ padding: 10 }}
        blurOnSubmit={true}
      />
    </View>
  );
};

export default MultiText;