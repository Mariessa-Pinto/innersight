import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const DateToggle = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedValueFromRoute = route.params?.selectedValue;

  const [selectedValue, setSelectedValue] = useState(selectedValueFromRoute || 'Week');


  const handleToggle = (value) => {
    setSelectedValue(value);
    navigateToStats(value);
  };


  const navigateToStats = (value) => {
    switch (value) {
      case 'Week':
        navigation.navigate('Stats', { selectedValue: 'Week' });
        break;
      case 'Month':
        navigation.navigate('MonthStats', { selectedValue: 'Month' });
        break;
      case 'Year':
        navigation.navigate('YearStats', { selectedValue: 'Year' });
        break;
      default:
        break;
    }
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.btn,
          selectedValue === 'Week' ? styles.selectedBtn : null,
        ]}
        onPress={() => handleToggle('Week')}
      >
        <Text style={selectedValue === 'Week' ? styles.selectedText : null}>Week</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          selectedValue === 'Month' ? styles.selectedBtn : null,
        ]}
        onPress={() => handleToggle('Month')}
      >
        <Text style={selectedValue === 'Month' ? styles.selectedText : null}>Month</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          selectedValue === 'Year' ? styles.selectedBtn : null,
        ]}
        onPress={() => handleToggle('Year')}
      >
        <Text style={selectedValue === 'Year' ? styles.selectedText : null}>Year</Text>
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