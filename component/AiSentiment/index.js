import { View, Text, SafeAreaView, StyleSheet, TextInput, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/global';
import { useState, useEffect } from 'react'
import RecommendationButton from '../../atom/RecommendationButtons/RecommendationButtons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InsightButton from '../../atom/Buttons/InsightButton';
import TagEntryBtn from '../../atom/Buttons/TagEntryButton';
import { saveJournalEntry } from '../../firebase/firebaseService';
import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
import OpenAI from 'openai';
import { getAuth } from 'firebase/auth';
import { ActivityIndicator } from 'react-native-paper';
import { Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

const AiSent = ({ entryContent }) => {

  // const AiSent = ({ username, entryContent }) => {
  const [journalEntry, setJournalEntry] = useState('')
  const [text, onChangeText] = useState('I am really excited for my big presentation coming up! I love how hard my team has worked and am happy I got to do this project with them. I do feel very tired and cant wait to be done. I always feel a bit lazy at the end of the semester and anxious about finishing everything up. I have such low energy and feel a bit lonely by how busy I have been with school. I can’t wait to have time to socialize again.');
  const [response, setResponse] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState([]);
  const [paragraph, setParagraph] = useState('')
  const [keyWordsNeg, setKeyWordsNeg] = useState("")
  const [keyWordsPos, setKeyWordsPos] = useState("")
  const [statsKeyWords, setStatsKeyWords] = useState("")
  const [pressed, setPressed] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [overlayType, setOverlayType] = useState()
  const [entryTitle, setEntryTitle] = useState("End Of Semester");
  const [entryType, setEntryType] = useState("")

  const [loading, setLoading] = useState()
  const auth = getAuth()


  //Navigation
  const navigation = useNavigation();

  //Mascot Displayed
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

  //Set Title
  const handleTitleChange = (newTitle) => {
    setEntryTitle(newTitle);
  };

  const handleSave = async () => {
    const username = auth.currentUser ? auth.currentUser.uid : null;

    if (!username) {
      console.error('User not authenticated.');
      return;
    }

    try {
      await saveJournalEntry(username, { title: entryTitle, content: text, timestamp: Date.now(), entryType: entryType });
      setOverlayVisible(true);
      setOverlayType("saveOverlay");
      setEntryTitle("");
      setResponse("");
      setShowImage(false);
      setShowRecommendations([]);
      setParagraph("");
      setKeyWordsNeg("");
      setKeyWordsPos("");
      setStatsKeyWords("");
      setEntryType("")
    } catch (error) {
      console.error('Error saving journal entry:', error);
    }
  };

  // const handleSave = async () => {
  //  const instructions = "You are a sentiments analyzer. You will find sentiments in the content of a journal from the array of provided sentiments. You will return an array of sentiments found in the journal. You will also score each item in the array by accuracy. The format for the json in the array is sentname, accuracy.";
  //  const userMessage = entryContent +  "\n\nprovided sentiments: ['happy', 'excited', 'motivated', 'high energy', 'calm', 'relaxed', 'gratitude', 'joy', 'serenity', 'empowered', 'inspired', 'hopeful', 'love', 'bliss', 'harmony', 'courage', 'triumph', 'abundance', ' content', 'fulfilled', 'optimistic', 'healing', 'success', 'good', 'appreciation', 'growth', 'tired', 'low energy', 'unmotivated', 'lazy', 'angry', 'disappointed', 'sad', 'stressed', 'anguished', 'despair', 'frustrated', 'lonely', 'anxious', 'depressed', 'regret', 'resent', 'sorrow', 'grief', 'stress', 'confused', 'envious', 'bitter', 'rejected', 'guilty', 'irritated', 'melancholy', 'pessimistic' ]";

  //  const prompt = instructions + "n/n" + userMessage;

  //  try {
  //    const openaiResponse = await fetch('https://api.openai.com/v1/completions', {
  //      method: 'POST',
  //      headers: {
  //        'Content-Type': 'application/json',
  //        'Authorization': `Bearer ${process.env.EXPO_PUBLIC_OPEN_API_KEY}`
  //      },
  //      body: JSON.stringify({
  //        model: "text-davinci-003",
  //        prompt: prompt,
  //        max_tokens: 256,
  //        temperature: 1,
  //         top_p: 1,
  //         frequency_penalty: 0,
  //         presence_penalty: 0
  //      })
  //      });
  //      const openaiData = await openaiResponse.json();
  //      console.log('OpenAi Response:', openaiData);

  //      const sentis = [];
  //      const accuracyMap = new Map();

  //      openaiData.choices.forEach(choice => {
  //        const [senti, accuracy] = choice.text.split(', ');
  //        sentis.push(senti);
  //        accuracyMap.set(senti, accuracy);
  //      });
  //     saveJournalEntry(username, { title: entryTitle,  content: text, timestamp: Date.now(), sentis, accuracyMap });
  //       setOverlayVisible(true);
  //    setOverlayType("saveOverlay");
  //    }catch (error) {
  //     console.error('Error calling OpenAI API:', error);
  //    }
  //  }
  const apiKeyEden = process.env.EXPO_PUBLIC_API_KEY
  const openai = new OpenAI({ apiKey: process.env.EXPO_PUBLIC_OPEN_API_KEY })

  const handleApiCall = () => {
    setLoading(true)
    fetch('https://api.edenai.run/v2/text/sentiment_analysis', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Bearer ${apiKeyEden}`,
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
        responseText += ` I've highlighted all the different sections you indicated feeling ${sentiment ? 'negative' : 'positive'}.\n`;
        responseText += `These emotions made up ${Math.round(rate * 100)}% of your overall entry today.\n`;
        // responseText += `You mentioned ${numSegments} different sections in your entry today.\n`;
        setResponse(responseText);
        setShowImage(true);

        let paragraph = `Feeling ${sentiment.toLowerCase()}, you are grappling with: "${text}". `;
        paragraph += `This entry encapsulates a sense of ${sentiment === 'Positive' ? 'positive' : 'negative'} emotions. Here are some recommendations you may consider to alleviate these ${sentiment === 'Positive' ? 'positive' : 'negative'} emotions: `;
        setParagraph(paragraph);

        const keywordsPos = ['happy', 'excited', 'motivated', 'high energy', 'calm', 'relaxed', 'gratitude', 'joy', 'serenity', 'empowered', 'inspired', 'hopeful', 'love', 'bliss', 'harmony', 'courage', 'triumph', 'abundance', ' content', 'fulfilled', 'optimistic', 'healing', 'success', 'good', 'appreciation', 'growth'];
        const keywords = ['tired', 'low energy', 'unmotivated', 'lazy', 'angry', 'disappointed', 'sad', 'stressed', 'anguished', 'despair', 'frustrated', 'lonely', 'anxious', 'depressed', 'regret', 'resent', 'sorrow', 'grief', 'stress', 'confused', 'envious', 'bitter', 'rejected', 'guilty', 'irritated', 'melancholy', 'pessimistic'];
        const recommendations = [];

        keywords.forEach((keyword) => {
          if (text.toLowerCase().includes(keyword)) {
            if (keyword === 'tired' || keyword === 'low energy' || keyword === 'anxious') {
              recommendations.push('Sleeping Early');
            }
            if (keyword === 'low energy' || keyword === 'irritated' || keyword === 'confused' || keyword === 'stress' || keyword === 'stressed' || keyword === 'depressed' || keyword === 'lazy' || keyword === 'anxious') {
              recommendations.push('Exercise');
            }
            if (keyword === 'stressed' || keyword === 'pessimistic' || keyword === 'envious' || keyword === 'guilty' || keyword === 'stress' || keyword === 'angry' || keyword === 'grief' || keyword === 'sorrow' || keyword === 'anxious' || keyword === 'depressed' || keyword === 'sad' || keyword === 'anguised' || keyword === 'frustrated' || keyword === 'regret') {
              recommendations.push('Practice Self-Care')
            }
            if (keyword === 'unmotivated' || keyword === 'confused' || keyword === 'melancholy' || keyword === 'lonely' || keyword === 'anxious') {
              recommendations.push('Engage in Hobbies')
            }
            if (keyword === 'angry' || keyword === 'sorrow' || keyword === 'pessimistic' || keyword === 'bitter' || keyword === 'rejected' || keyword === 'grief' || keyword === 'dissapointed' || keyword === 'resent' || keyword === 'depressed' || keyword === 'sad' || keyword === 'anguised' || keyword === 'despair' || keyword === 'frustrated' || keyword === 'lonely' || keyword === 'regret') {
              recommendations.push('Talk it Out')
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
            setStatsKeyWords("negative target keywords" + stringKeyWords)
          }
        }
        )

        //Save positivetarget keywords
        keywordsPos.forEach((keyword) => {
          if (text.toLowerCase().includes(keyword)) {
            statsKeyWordsArray.push(keyword)
            let stringKeyWords = statsKeyWordsArray.toString()
            setStatsKeyWords(stringKeyWords)
            console.log("positive target keywords" + statsKeyWords)
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
          setEntryType("negative")
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
        setLoading(false)
      })
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.titleInput}
          onChangeText={handleTitleChange}
          placeholder="Enter Title..."
          placeholderTextColor="#292929"
          keyboardType="default"
          multiline={false}
          blurOnSubmit={true}
          value={entryTitle}
        />
        <TextInput
          style={styles.input}
          onChangeText={(newText) => onChangeText(newText)}
          placeholder="Start typing..."
          placeholderTextColor="#292929"
          keyboardType="default"
          multiline={true}
          blurOnSubmit={true}
          value="I am really excited for my big presentation coming up! I love how hard my team has worked and am happy I got to do this project with them. I do feel very tired and can’t wait to be done. I always feel a bit lazy at the end of the semester and anxious about finishing everything up. I have such low energy and feel a bit lonely by how busy I have been with school. I can’t wait to have time to socialize again."
        />
        <TagEntryBtn />
        <InsightButton
          text="View Ai Insights"
          onPress={handleApiCall}
        />
        {
          loading === true ?
            <ActivityIndicator animating={true} color="#7878C1" />
            :
            ""
        }

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
          {response ? <Text style={[styles.respText, globalStyles.bodyCopy]}>{response}</Text> : null}
        </View>
        {keyWordsPos ? <Text style={globalStyles.bodyCopy}>Positive phrases: {keyWordsPos}</Text> : null}
        {keyWordsNeg ? <Text style={globalStyles.bodyCopy}>Negative phrases: {keyWordsNeg}</Text> : null}
        {paragraph ? <Text style={globalStyles.bodyCopy}>{paragraph}</Text> : null}
        <ScrollView
          horizontal={true}
          style={{ paddingBottom: 15 }}
        >
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
            {showRecommendations.includes('Engage in Hobbies') ? (
              <RecommendationButton
                image={require('../../atom/Mascots/slothKnit.png')}
                text="Engage In Hobbies"
                navigate="Hobbies"
              />
            ) : null}
            {showRecommendations.includes('Talk it Out') ? (
              <RecommendationButton
                image={require('../../atom/Mascots/slothPhone.png')}
                text="Talk It Out"
                navigate="TalkItOut"
              />
            ) : null}
          </View>
        </ScrollView>
        <InsightButton
          text="Save Entry"
          onPress={handleSave}
        />
        <GestureRecognizer
          style={{ flex: 1 }}
          onSwipeDown={() => setOverlayVisible(false)}
        >
          <Modal
            isVisible={isOverlayVisible}
            onBackdropPress={() => setOverlayVisible(false)}
            onSwipeComplete={() => setOverlayVisible(false)}
            swipeDirection={['down']}
            propagateSwipe={true}
          >
            <View style={styles.overlayContainer}>
              {overlayType === "saveOverlay" && (
                <View style={styles.inside}>
                  <View style={styles.line}></View>
                  <Text style={globalStyles.h4TextLight}>Your entry has been saved.</Text>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setOverlayVisible(false);
                      navigation.navigate('JournalListPage');
                    }}>
                    <View style={[styles.confirmButtonDark, pressed && styles.deleteButtonPressed]}>
                      <Text style={[globalStyles.btnTextLrg, styles.deleteTextLight]}>View Entries</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              )}
            </View>
          </Modal>
        </GestureRecognizer>
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
    textAlignVertical: 'top',
    fontWeight: 'normal',
    fontFamily: 'Lexend-Regular',
  },
  titleInput: {
    height: 40,
    width: 297,
    margin: 12,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FDFDFD',
    color: '#292929',
    textAlignVertical: 'top',
    fontWeight: 'normal',
    fontFamily: 'Lexend-Regular'
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
  },
  overlayContainer: {
    width: windowWidth,
    height: 'auto',
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#F2F2FD',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 30,
    position: 'absolute',
    bottom: -20,
    left: -20
  },
  inside: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    marginTop: 10
  },
  line: {
    width: 65,
    height: 3,
    backgroundColor: '#88898C',
    marginBottom: 10
  },
  deleteButton: {
    width: 228,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#C5C7F7',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  deleteButtonPressed: {
    backgroundColor: '#D5D7FF', 
  },
  deleteText: {
    color: '#3E3F42',
  },
  deleteTextLight: {
    color: '#FDFDFD',
  },
  confirmButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteConfirmButtonDark: {
    width: 130,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#6164C3',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  deleteConfirmButtonLight: {
    width: 130,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#C5C7F7',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  confirmButtonDark: {
    width: 228,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#6164C3',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
});

export default AiSent;
