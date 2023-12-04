import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const JournalToggle = ({ navigation, type }) => {
  const [selectedValue, setSelectedValue] = useState("Journals");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, type === 'Entries' && styles.selectedBtn]}
        onPress={() => { setSelectedValue("Entries"); navigation.navigate('JournalListPage') }}
      >
        <Text style={type === 'Entries' && styles.selectedText}>Entries</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn, type === 'Journals' && styles.selectedBtn]}
        onPress={() => { setSelectedValue("Journals"); navigation.navigate('JournalsEntries') }}
      >
        <Text style={type === 'Journals' && styles.selectedText}>Journals</Text>
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