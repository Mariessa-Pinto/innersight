import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";



const JournalCovers = () => {


    return(

        <View style={styles.container}>
            <View style={styles.img}>
         <Image source={require('../assets/Covers/BlueCover.png')} style={styles.image} />
          <Image source={require('../assets/Covers/GreenCover.png')} style={styles.image}/>
          <Image source={require('../assets/Covers/OrangeCover.png')} style={styles.image}/>
          </View>
         

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