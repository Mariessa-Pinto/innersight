import * as React from 'react';
import globalStyles from '../../styles/global';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';



export default function QuickStatsCard({
  metric, 
  label
}) {


  return (
    <View style={styles.statview}>
      <Text style={globalStyles.h3Text}>{metric}</Text>
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
    height: 100,
    width: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 15,
    paddingBottom: 15,
    gap: 5
},


})