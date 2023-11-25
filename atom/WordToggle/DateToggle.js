import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import globalStyles from '../../styles/global';

const DateToggle = ({navigation, type}) => {
  const route = useRoute();
  const selectedValueFromRoute = route.params?.selectedValue;

  const [selectedValue, setSelectedValue] = useState("Week");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.btn,
          type === 'Week' ? styles.selectedBtn : null,
        ]}
        onPress={() => {setSelectedValue("Week"); navigation.navigate('Stats')}}
      >
        <Text style={[type === 'Week' ? styles.selectedText : null, globalStyles.labelText]}>Week</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          type === 'Month' ? styles.selectedBtn : null,
        ]}
        onPress={() => {setSelectedValue("Month"); navigation.navigate('MonthStats')}}
      >
        <Text style={[type === 'Month' ? styles.selectedText : null, globalStyles.labelText]}>Month</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          type === 'Year' ? styles.selectedBtn : null,
        ]}
        onPress={() => {setSelectedValue("Year"); navigation.navigate('YearStats')}}
      >
        <Text style={[type === 'Year' ? styles.selectedText : null, globalStyles.labelText]}>Year</Text>
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

/**
 *  <TouchableOpacity
        style={[
          styles.btn,
          selectedValue === 'Week' ? styles.selectedBtn : null,
        ]}
        onPress={() => handleToggle('Week')}
      >
        <Text style={[selectedValue === 'Week' ? styles.selectedText : null, globalStyles.labelText]}>Week</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          selectedValue === 'Month' ? styles.selectedBtn : null,
        ]}
        onPress={() => handleToggle('Month')}
      >
        <Text style={[selectedValue === 'Month' ? styles.selectedText : null, globalStyles.labelText]}>Month</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btn,
          selectedValue === 'Year' ? styles.selectedBtn : null,
        ]}
        onPress={() => handleToggle('Year')}
      >
        <Text style={[selectedValue === 'Year' ? styles.selectedText : null, globalStyles.labelText]}>Year</Text>
      </TouchableOpacity>
 */