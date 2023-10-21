import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import FaqData from '../molecules/FaqData/FaqData';
import FaqAccordion from '../atom/AITool/FaqAccordian';



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
    <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
      <ScrollView>
        <View style={styles.maincontent}>
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
    maincontent: {
        alignItems: 'center',
        margin: 50
    }
})