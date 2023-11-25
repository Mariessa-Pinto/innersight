import * as React from 'react';
import globalStyles from '../../styles/global';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../../theme/themeContext';



export default function QuickStatsCard({
  metric, 
  label
}) {

      //Dark/Light Mode
      const [darkMode, setDarkMode] = useState(false)
      const theme = useContext(themeContext)


  return (
    <View style={[styles.statview, {backgroundColor: theme.periwinkleLight}]}>
      <Text style={[globalStyles.h2Text, {color: theme.color}]}>{metric}</Text>
      <Text style={[globalStyles.labelText, {color: theme.color}]}>
        {label}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  statview: {
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