import globalStyles from "../../styles/global";
import { useState, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
import themeContext from '../../theme/themeContext';
import fontContext from '../../theme/fontContext';



const JournalCovers = () => {

  //Dark/Light Mode
  const [darkMode, setDarkMode] = useState(false)
  const theme = useContext(themeContext)

  //Font Size
  const fontTheme = useContext(fontContext)


  return (

    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.contentContainer}>
        <Image source={require('../assets/Covers/BlueCover.png')} style={styles.image} />
        <View style={styles.currentJournal}>
          <Text style={[globalStyles.h4TextLight, { color: theme.color }]}>Current</Text>
          <Image source={require('../assets/Covers/GreenCover.png')} style={styles.image} />
        </View>

        <Image source={require('../assets/Covers/OrangeCover.png')} style={styles.image} />
      </ScrollView>


    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 415,
    marginBottom: 20
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  currentJournal: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center'
  },
  image: {
    width: 145.85,
    height: 219,
    marginHorizontal: 20
  }

});

export default JournalCovers;