import globalStyles from "../../styles/global";
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
          <Text style={globalStyles.labelTextLight}>{question}</Text>
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
          <Text style={globalStyles.bodyCopy}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  questionContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 13,
    paddingVertical: 12,
    width: '100%',
  },
  answerActive:{
    paddingLeft: 13,
    paddingTop: 12,
    paddingBottom: 20
  }

});

export default FaqAccordion;


