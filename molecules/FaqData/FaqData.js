import { StyleSheet, Text, View } from 'react-native';

const FaqData = {
  questions: [
    {
      question: "How do I edit my information?",
      answer: "Go to Profile and then profile information"
    },
    {
      question: "How do I create a new journal?",
      answer: "Locate our add new journal page and choose your cover."
    },
    {
      question: "How do I create a new journal entry?",
      answer: "You can locate your journals and add a new entry there or press the plus button on our navigation bar at any time."
    },
    {
      question: "What can I include in my entries?",
      answer: "Anything you want or feel like you need to. Our app strongly encourages having no limitations"
    },
    {
      question: "How does the AI analyzer tool work?",
      answer: "The analyzer uses a sentiment AI tool that is used to identify feelings, mood, and behaviors"
    },
    {
      question: "How accurate are the AI insights? ",
      answer: "Our AI insights are curated using artificial intelligence sentiment analysis. This API can identify emotions and behaviors through identifying the tone and message in words, making our analysis very accurate"
    },
    {
      question: "Where can I access crisis resources?",
      answer: "On our crisis resource page, enter your location, and available resources both near you and online are available 24/7"
    },
    {
      question: "How can I provide feedback for the app?",
      answer: "Please email us at team@innersight.ca"
    },
  ]
};

const styles = StyleSheet.create({
  
});

export default FaqData;
