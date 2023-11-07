import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
<<<<<<< HEAD
import ProgressDots from "../ProgressDots/ProgressDots";
=======

>>>>>>> 39b20511c6a22a36c81d2b7d3f0e36e5aa6c626e


const JournalCovers = () => {


    return(

        <View style={styles.container}>
            <View style={styles.img}>
         <Image source={require('../assets/Covers/BlueCover.png')} style={styles.image} />
          <Image source={require('../assets/Covers/GreenCover.png')} style={styles.image}/>
          <Image source={require('../assets/Covers/OrangeCover.png')} style={styles.image}/>
          </View>
<<<<<<< HEAD
            <ProgressDots currentIndex={0} totalDemos={3}/>
=======
         
>>>>>>> 39b20511c6a22a36c81d2b7d3f0e36e5aa6c626e

        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40
  },
  image: {
    width: 145.85,
    height: 219
  }
  
  });

export default JournalCovers;