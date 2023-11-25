import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView, TextInput } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import FaqData from '../data/FaqData';
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
    <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
      <ScrollView>
        <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
          <Header title='FAQs' navigation={navigation} />

          <View style={styles.top}>
            <SearchBar placeholder='Search FAQs' />
          </View>

          <View style={styles.accCategories}>
            <View>
              <Text style={globalStyles.h4TextSemiBold}>Getting Started</Text>
              {data.map((info, index) => (
                info.category === "Getting Started" ?
                <View style={[styles.noBorder, info.border && styles.border]} 
                key={index}>
                    <FaqAccordion
                      question={info.question}
                      answer={info.answer}
                      isActive={activeIndex === index}
                      setIsActive={() => handleAccordionClick(index)}
                      index={index}
                    />
                  </View>
                  :
                  ""
              ))}
            </View>
            <View>
              <Text style={globalStyles.h4TextSemiBold}>Artificial Intelligence</Text>
              {data.map((info, index) => (
                info.category === "AI" ?
                  <View style={[styles.noBorder, info.border && styles.border]} 
                  key={index}>
                    <FaqAccordion
                      question={info.question}
                      answer={info.answer}
                      isActive={activeIndex === index}
                      setIsActive={() => handleAccordionClick(index)}
                      index={index}
                    />

                  </View>

                  :
                  ""
              ))}
            </View>
            <View>
              <Text style={globalStyles.h4TextSemiBold}>Other</Text>
              {data.map((info, index) => (
                info.category === "Other" ?
                <View style={[styles.noBorder, info.border && styles.border]} 
                key={index}>
                    <FaqAccordion
                      question={info.question}
                      answer={info.answer}
                      isActive={activeIndex === index}
                      setIsActive={() => handleAccordionClick(index)}
                      index={index}
                    />
                  </View>
                  :
                  ""
              ))}
            </View>


          </View>

        </View>
      </ScrollView>
      <NavBar navigation={navigation} variation='profile' />
    </View>
  );
}

const styles = StyleSheet.create({


  header: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  top: {
    marginBottom: 35
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
  border:{
    borderBottomWidth: 1
  },
  noBorder: {
    borderBottomWidth: 0
  },
  accCategories: {
    display: 'flex',
    flexDirection: 'column',
    gap: 35
  }

})