import React, { useState, useContext } from "react";
import globalStyles from "../../styles/global";
import { View, Text, StyleSheet } from "react-native";
import themeContext from "../../theme/themeContext";

const MoodDowners = () => {

  //Dark/Light Mode
  const [darkMode, setDarkMode] = useState(false)
  const theme = useContext(themeContext)

  return (
    <View style={[styles.box, { backgroundColor: theme.backgroundLavender }]}>
      <Text style={globalStyles.h4TextBold}>Mood Downers</Text>
      <View style={styles.textCon}>
        <Text style={globalStyles.listText}>Upcoming midterms</Text>
        <Text style={globalStyles.listText}>Argument with Bob</Text>
        <Text style={globalStyles.listText}>Delayed flight</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 150,
    flex: 1,
    borderRadius: 20,
    padding: 16,
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#292929'
  },
  textCon: {
    marginTop: 10
  },
  txt: {
    fontSize: 12,
    fontWeight: 'light',
    color: '#292929'

  }
});

export default MoodDowners;