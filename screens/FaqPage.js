import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView, TextInput } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import FaqData from '../molecules/FaqData/FaqData';
import FaqAccordion from '../atom/FaqAccordian/FaqAccordian';
import Header from '../molecules/Header/Header';
import SearchBar from '../atom/Search/SearchBar';



export default function FaqPage({ navigation }) {

  //Dark/Light Mode
  const [darkMode, setDarkMode] = useState(false)
  const theme = useContext(themeContext)

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  }

  const [data, setData] = useState(FaqData.questions);

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Header title='FAQs' navigation={navigation} />
      <ScrollView style={globalStyles.contentContainer}>
        <View style={styles.top}>
          <SearchBar placeholder='Search FAQs' />
        </View>
        <View style={styles.maincontent}>
          <Text style={styles.label}>Getting Started</Text>
          {data.map((info, index) => (
            <View style={styles.questions} key={index}>
              <FaqAccordion
                question={info.question}
                answer={info.answer}
                isActive={activeIndex === index}
                setIsActive={() => handleAccordionClick(index)}
                index={index}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({

  top: {
    alignItems: 'center',
    padding: 10
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold'
  },


  maincontent: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: 20
  },
  input: {
    height: 40,
    width: 328,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#88898C',
    padding: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold'
  },


})