import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DateToggle = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('Week');

  const handleToggle = (value) => {
    setSelectedValue(value);
    navigateToStats(value);
  };

  const navigateToStats = (value) => {
    switch (value) {
      case 'Week':
        navigation.navigate('Stats'); // Navigate to WeekStats component
        break;
      case 'Month':
        navigation.navigate('MonthStats'); // Navigate to MonthStats component
        break;
      case 'Year':
        navigation.navigate('YearStats'); // Navigate to YearStats component
        break;
      default:
        break;
    }
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, selectedValue === 'Week' && styles.selectedBtn]}
        onPress={() => handleToggle('Week')}
       
      >
        <Text style={selectedValue === 'Week' && styles.selectedText}>Week</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, selectedValue === 'Month' && styles.selectedBtn]}
        onPress={() => handleToggle('Month')}
      >
        <Text style={selectedValue === 'Month' && styles.selectedText}>Month</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, selectedValue === 'Year' && styles.selectedBtn]}
        onPress={() => handleToggle('Year')}
      >
        <Text style={selectedValue === 'Year' && styles.selectedText}>Year</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EDEAEA',
    width: 328,
    height: 40,
    borderRadius: 25,
  },
  btn: {
    flex: 1,
    height: 40,
    width: 108,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    color: '#3E3F42'
  },
  selectedBtn: {
    backgroundColor: '#6164C3',
  },
  selectedText: {
    color: '#FDFDFD',
    fontSize: 13,

  },
});

export default DateToggle;