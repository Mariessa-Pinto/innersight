import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import FaqData from "../../molecules/FaqData/FaqData";

const FaqAccordion = ({ question, answer, isActive, setIsActive, index }) => {
  return (
    <View style={`${styles.questions} ${isActive ? styles.faqActive : ""}`}>
      <TouchableOpacity 
        style={styles.questionBar}
        onPress={() => setIsActive(!isActive)}
      >
        <View style={styles.questionContent}>
          <Text style={styles.questionText}>{question}</Text>
          <View style={styles.arrow}>
            {isActive ? (
              <Image
                source={require('../assets/FAQUp.png')}
                height={30}
                width={30}
              />
            ) : (
              <Image
                source={require('../assets/FAQDown.png')}
                height={30}
                width={30}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
      {isActive && (
        <View style={styles.answerActive}>
          <Text>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
 
  questionBar: {
    position: 'relative',
    top: 0,
    padding: 1,
    display: 'flex',
    alignItems: 'center',
   
    
},
questionContent: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly', 
  alignItems: 'center',
  paddingHorizontal: 5,
  
},

questionText: {
  fontSize: 15,
  lineHeight: 60,

},
arrow: {


}






 
 

});

export default FaqAccordion;


