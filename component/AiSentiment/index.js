import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import RecommendationButton from '../../atom/RecommendationButtons/RecommendationButtons';



const AiSent = () => {
  const [text, onChangeText] = useState('');
  const [response, setResponse] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState([]);

  const apiKey = process.env.EXPO_PUBLIC_API_KEY

  const handleApiCall = () => {

    fetch('https://api.edenai.run/v2/text/sentiment_analysis', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        response_as_dict: true,
        attributes_as_list: true,
        show_original_response: true,
        providers: 'microsoft',
        text: text,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const generalSentiment = data.microsoft.general_sentiment;
      const sentiment = data.microsoft.general_sentiment;
      const segments = data.microsoft.segment;
      const rate = data.microsoft.general_sentiment_rate;
     // const numSegments = segments.length;
     // const emotions = {
      //  positive: 0,
     //   negative: 0,
     //   neutral: 0
      //};
     // segments.forEach((segment) => {
     //   emotions[segment.sentiment] += 1;
     // });
     // const totalEmotions = emotions.positive + emotions.negative + emotions.neutral;
     // const positivePercent = emotions.positive / totalEmotions;
     // const negativePercent = emotions.negative / totalEmotions;
     // const neutralPercent = emotions.neutral / totalEmotions;
      let responseText = '';
      if (sentiment === "Positive") {
        responseText = `It looks like you're feeling rather positive from this journal entry.`
      } else if (sentiment === "Negative") {
        responseText = `It looks like you're feeling rather negative from this journal entry.`
      } else {
        responseText = `It looks like you're feeling rather neutral from this journal entry.`
      }
      responseText += `I've highlighted all the different sections you indicated feeling ${sentiment  ? 'negative' : 'positive'}.\n`;
      responseText += `These emotions made up ${Math.round(rate * 100)}% of your overall entry today.\n`;
     // responseText += `You mentioned ${numSegments} different sections in your entry today.\n`;
      setResponse(responseText);
      setShowImage(true);

      const keywords = ['tired', 'low energy', 'unmotivated', 'lazy', 'angry', 'disappointed', 'sad'];
      const recommendations = [];
      keywords.forEach((keyword) => {
        if (text.toLowerCase().includes(keyword)) {
          if (keyword === 'tired') {
            recommendations.push('Sleeping Early');
          } else if (keyword === 'low energy') {
            recommendations.push('Sleeping Early', 'Exercise');
          }
        }
      });
      setShowRecommendations(recommendations);
      console.log(response);
    })
    .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView>
      <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Start typing..."
        placeholderTextColor="#292929"
        keyboardType="default"
      />
      <Button title="Analyze Sentiment" onPress={handleApiCall} />
      <View style={styles.resCon}>
        <View style={styles.pCon}>
      {showImage ? <Image  style={styles.panda} source={require('../../atom/Mascots/Panda.png')}/> : null }
      </View>
      {response ? <Text style={styles.respText}>{response}</Text> : null}
      </View>
      <View style={styles.recCon}>
      {showRecommendations.includes('Sleeping Early') ? (
        <RecommendationButton 
        image={require('../../atom/Mascots/otterSleep.png')}
        text="Sleeping Early"
        navigate="Sleeping"
        />
      ): null}
      {showRecommendations.includes('Exercise') ? (
        <RecommendationButton
        image={require('../../atom/Mascots/pandaExercise.png')}
        text="Exercise"
        navigate="Recommendations"
        />
      ) : null}
      {showRecommendations.includes('Practice Self-Care') ? (
              <RecommendationButton
                image={require('../../atom/Mascots/frogMeditate.png')}
                text="Practice Self-Care"
                navigate="SelfCare"
              />
            ) : null}
     
     </View>
      </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  input: {
    height: 150,
    width: 297,
    margin: 12,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FDFDFD',
    color: '#292929',
  },
  panda: {
    width: 130,
    height: 130
  },
  resCon: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10
  },
  respText: {
    width: 180,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#525585',
    borderRadius: 6,
    padding: 5,
  },
  pCon: {
    marginTop: 15
  },
  recCon: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    marginTop: 10
  }
});

export default AiSent;