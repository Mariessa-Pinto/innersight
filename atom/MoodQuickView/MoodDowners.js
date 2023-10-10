import * as React from 'react';
import React from "react";
import { View, Text, StyleSheet } from "react-native";



export default function MoodDowners() {


    return(

        <View style={styles.box}>
          <Text style={styles.header}>Mood Downers</Text>
       
     
         


        </View>
    );
};

const styles = StyleSheet.create({
    box: {
      height: 150,
      width: 158,
      margin: 12,
      borderRadius: 20,
      padding: 10,
      backgroundColor: "#C5C7F7",
      color: "#525585"
    },
    header: {
        fontSize: 15,
        fontWeight: 'bold'
    }
  });