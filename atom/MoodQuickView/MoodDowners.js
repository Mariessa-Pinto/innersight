import React from "react";
import { View, Text, StyleSheet } from "react-native";



const MoodDowners = () => {


    return(

        <View style={styles.box}>
          <Text style={styles.header}>Mood Downers</Text>
          <View style={styles.textCon}>
            <Text style={styles.txt}>Text</Text>
            <Text style={styles.txt}>Text</Text>
            <Text style={styles.txt}>Text</Text>
          </View>


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
      padding: 20
    },
    header: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#292929'
    },
    textCon: {
        marginTop: 15
    },
    txt: {
        fontSize: 12,
        fontWeight: 'light',
        color: '#292929'

    }
  });
  export default MoodDowners;