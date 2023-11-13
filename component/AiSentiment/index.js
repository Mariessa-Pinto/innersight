import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import RecommendationButton from '../../atom/RecommendationButtons/RecommendationButtons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InsightButton from '../../atom/Buttons/InsightButton';
import TagEntryBtn from '../../atom/Buttons/TagEntryButton';


const AiSent = () => {
  const [text, onChangeText] = useState('');
  const [response, setResponse] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState([]);
  const [paragraph, setParagraph] = useState('')
  const [keyWordsNeg, setKeyWordsNeg] = useState("")
  const [keyWordsPos, setKeyWordsPos] = useState("")
  const [statsKeyWords, setStatsKeyWords] = useState("")

  const [selectedMascot, setSelectedMascot] = useState("Panda");

  const mascotData = {
    Panda: {
      image: require('../../atom/Mascots/Panda.png'),
      width: 113,
      height: 108,
      backgroundWidth: "140%",
      backgroundHeight: "80%",
    },
    Sloth: {
      image: require('../../atom/Mascots/Sloth.png'),
      width: 110,
      height: 101,
      backgroundWidth: '140%',
      backgroundHeight: '77%',
    },
    Otter: {
      image: require('../../atom/Mascots/Otter.png'),
      width: 110,
      height: 99,
      backgroundWidth: '140%',
      backgroundHeight: '83%',
    },
    Frog: {
      image: require('../../atom/Mascots/Frog.png'),
      width: 107,
      height: 88,
      backgroundWidth: '140%',
      backgroundHeight: '81%',
    },
  };

  useEffect(() => {
    const getSelectedMascot = async () => {
      try {
        const mascot = await AsyncStorage.getItem('selectedMascot');
        if (mascot !== null) {
          setSelectedMascot(mascot);
        } else {
          setSelectedMascot("Panda");
        }
      } catch (error) {
        console.error('Error getting mascot from AsyncStorage:', error);
      }
    };

    getSelectedMascot();
  }, []);


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
        const sentimentArray = data.microsoft.sentiment;
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
        responseText += `I've highlighted all the different sections you indicated feeling ${sentiment ? 'negative' : 'positive'}.\n`;
        responseText += `These emotions made up ${Math.round(rate * 100)}% of your overall entry today.\n`;
        // responseText += `You mentioned ${numSegments} different sections in your entry today.\n`;
        setResponse(responseText);
        setShowImage(true);

        let paragraph = `Feeling ${sentiment.toLowerCase()}, you are grappling with: "${text}. `;
        paragraph += `This entry encapsulates a sense of ${sentiment === 'Positive' ? 'positive' : 'negative'} emotions. Here are some recommendations you may consider to alleviate these ${sentiment === 'Positive' ? 'positive' : 'negative'} emotions: `;
        setParagraph(paragraph);

        const keywordsPos = ['happy', 'excited', 'motivated, high energy', 'calm', 'relaxed'];
        const keywords = ['tired', 'low energy', 'unmotivated', 'lazy', 'angry', 'disappointed', 'sad', 'stressed'];
        const recommendations = [];

        keywords.forEach((keyword) => {
          if (text.toLowerCase().includes(keyword)) {
            if (keyword === 'tired') {
              recommendations.push('Sleeping Early');
            } else if (keyword === 'low energy') {
              recommendations.push('Sleeping Early', 'Exercise');
            } else if (keyword === 'stressed') {
              recommendations.push('Practice Self-Care', 'Exercise')
            }
          }
        });
        setShowRecommendations(recommendations);

        //Save negative target keywords 
        const statsKeyWordsArray = []
        keywords.forEach((keyword) => {
          if (text.toLowerCase().includes(keyword)) {
            statsKeyWordsArray.push(keyword)
            let stringKeyWords = statsKeyWordsArray.toString()
            setStatsKeyWords(stringKeyWords)
          }
        }
        )

        //Save positivetarget keywords
        keywordsPos.forEach((keyword) => {
          if (text.toLowerCase().includes(keyword)) {
            statsKeyWordsArray.push(keyword)
            let stringKeyWords = statsKeyWordsArray.toString()
            setStatsKeyWords(stringKeyWords)
            console.log(statsKeyWords)

          }
        }
        )

        AsyncStorage.setItem('statsKeywords', statsKeyWords);
        console.log("statsKeywords Stored")

        console.log(response);
        //find the position of negative sentiment phrases
        const phraseToFindNeg = "Negative";
        const phraseToFindPos = "Positive";
        const positionsNeg = [];
        const positionsPos = [];
        let currentPositionNeg = sentimentArray.indexOf(phraseToFindNeg);
        let currentPositionPos = sentimentArray.indexOf(phraseToFindPos);

        while (currentPositionNeg !== -1) {
          positionsNeg.push(currentPositionNeg);
          currentPositionNeg = sentimentArray.indexOf(phraseToFindNeg, currentPositionNeg + 1);
        }

        if (positionsNeg.length > 0) {
          console.log(`The phrase "${phraseToFindNeg}" is found at positions ${positionsNeg.join(', ')}.`);
        } else {
          console.log(`The phrase "${phraseToFindNeg}" is not found in the string.`);
        }

        while (currentPositionPos !== -1) {
          positionsPos.push(currentPositionPos);
          currentPositionPos = sentimentArray.indexOf(phraseToFindPos, currentPositionPos + 1);
        }

        if (positionsPos.length > 0) {
          console.log(`The phrase "${phraseToFindPos}" is found at positions ${positionsPos.join(', ')}.`);
        } else {
          console.log(`The phrase "${phraseToFindPos}" is not found in the string.`);
        }

        //Find the words at these positions
        const highlightedNegWords = positionsNeg.map((position) => segments[position]);
        setKeyWordsNeg(highlightedNegWords.join(', '));
        AsyncStorage.setItem('keyWordsNeg', keyWordsNeg)
        console.log("Negative Keywords stored")

        const highlightedPosWords = positionsPos.map((position) => segments[position]);
        setKeyWordsPos(highlightedPosWords.join(', '));
        AsyncStorage.setItem('keyWordsPos', keyWordsPos)
        console.log("Positive Keywords stored")

      })
      .catch((error) => console.error(error));
  };



  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Start typing..."
          placeholderTextColor="#292929"
          keyboardType="default"
        />
        <TagEntryBtn />
        <InsightButton
          text="View Ai Insights"
          onPress={handleApiCall}
        />
        <View style={styles.resCon}>
          <View style={styles.pCon}>
            {showImage ? <Image
              style={{
                width: mascotData[selectedMascot].width,
                height: mascotData[selectedMascot].height,
              }}
              source={mascotData[selectedMascot].image}
            /> : null}
          </View>
          {response ? <Text style={styles.respText}>{response}</Text> : null}
        </View>
        {keyWordsPos ? <Text>Positive phrases: {keyWordsPos}</Text> : null}
        {keyWordsNeg ? <Text>Negative phrases: {keyWordsNeg}</Text> : null}
        {paragraph ? <Text style={styles.para}>{paragraph}</Text> : null}
        <View style={styles.recCon}>
          {showRecommendations.includes('Sleeping Early') ? (
            <RecommendationButton
              image={require('../../atom/Mascots/otterSleep.png')}
              text="Sleeping Early"
              navigate="Sleeping"
            />
          ) : null}
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
    display: 'flex',
    justifyContent: 'center'
  },
  recCon: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 10
  }
});

export default AiSent;