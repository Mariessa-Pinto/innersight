import globalStyles from "../../styles/global";
import { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import themeContext from '../../theme/themeContext';
import fontContext from '../../theme/fontContext';
import Swiper from 'react-native-swiper';

const JournalCovers = () => {

  //Dark/Light Mode
  const [darkMode, setDarkMode] = useState(false)
  const theme = useContext(themeContext)

  //Font Size
  const fontTheme = useContext(fontContext)

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.h4TextLight, { color: theme.color }]}>Current</Text>
      <Swiper
        dotStyle={{
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: '#DDDDDD',
          marginTop: -850
        }}
        activeDotStyle={{
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: '#525585',
          marginTop: -850
        }}
        showsPagination loop={true}
      >
        <View style={styles.slide}>
          <Image source={require('../assets/Covers/BlueCover.png')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <View style={styles.currentJournal}>
            <Image source={require('../assets/Covers/GreenCover.png')} style={styles.image} />
          </View>
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/Covers/OrangeCover.png')} style={styles.image} />
        </View>
      </Swiper>
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
    marginBottom: -420
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
    marginHorizontal: 20,
    borderRadius: 10
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -470,
  },
  wrapper: {
  }
});

export default JournalCovers;