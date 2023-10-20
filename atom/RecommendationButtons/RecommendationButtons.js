import * as React from 'react';
import globalStyles from '../../styles/global';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from "../../theme/themeContext";


export default function RecommendationButtons() {
  //Dark/Light Mode
  const [darkMode, setDarkMode] = useState(false)
  const theme = useContext(themeContext)

  return (
    <TouchableOpacity
      onPress={() => console.log('Pressed')}
      style={[styles.btnContainer, 
        { backgroundColor: theme.backgroundLavender,
          borderColor: theme.borderColor,
          borderWidth: 1, }]}
    >
      <View>
        <Text style={[globalStyles.labelText, styles.labelText, 
          { color: theme.color}]}>
          Sleeping Early
        </Text>
      </View>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  btnContainer: {
    height: 154,
    flex: 1,
    borderRadius: 10,
    padding: 10,
    elevation: 3,

  },
  labelText:{
    textAlign: 'center'
  }

});
