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
          <View style={styles.questionChevron}>
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
  questions: {
 
  },
  faqActive: {
   
  },
  questionBar: {
   
  },
  questionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
  
  },
  questionChevron: {
   
  },
  answerActive: {
   
  },
});

export default FaqAccordion;


