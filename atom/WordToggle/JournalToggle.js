import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const JournalToggle = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    if (route.name === 'JournalsEntries') {
      setSelectedValue('Journals')
    } else {
      setSelectedValue('Entries')
    }
  }, [route.name])

  const handleToggle = (value) => {
    setSelectedValue(value);
    if (value === 'Entries') {
      navigation.navigate('JournalListPage');
    } else {
      navigation.navigate('JournalsEntries')
    }
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, selectedValue === 'Entries' && styles.selectedBtn]}
        onPress={() =>
          handleToggle('Entries')}
      >
        <Text style={selectedValue === 'Entries' && styles.selectedText}>Entries</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, selectedValue === 'Journals' && styles.selectedBtn]}
        onPress={() =>
          handleToggle('Journals')}
      >
        <Text style={selectedValue === 'Journals' && styles.selectedText}>Journals</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EDEAEA',
    width: 220,
    height: 40,
    borderRadius: 20,
  },
  btn: {
    flex: 1,
    height: 40,
    width: 110,
    borderRadius: 20,
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

export default JournalToggle;