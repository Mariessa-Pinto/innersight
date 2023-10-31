import * as React from 'react';
import globalStyles from '../../styles/global';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';



export default function QuickStatsCard({
  metric, 
  label
}) {


  return (
    <View style={styles.statview}>
      <Text style={globalStyles.h2Text}>{metric}</Text>
      <Text style={globalStyles.labelText}>
        {label}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  statview: {
    backgroundColor: "#C5C7F7",
    borderRadius: 20,
    height: 110,
    width: 110,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 15,
    gap: 5
},


})