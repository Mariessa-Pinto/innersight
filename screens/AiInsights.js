import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, Image, TextInput } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Tag from '../atom/Tag/Tag';
import ToolBar from '../molecules/ToolBarJournal/ToolBar';
import SmallInput from '../atom/InputBoxes/SmallInput';
import MediumBtnLightTxt from '../atom/Buttons/MediumBtnLightTxt';
import RecommendationBtn from '../molecules/RecommendationBtns/RecommendationBtn';




export default function AiInsights({ navigation }) {
    const [showInputBoxes, setShowInputBoxes] = useState(false);
    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    const toggleInputBoxes = () => {
        setShowInputBoxes(!showInputBoxes)
    }

    return (
            <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
                <View style={styles.maincontent}>
                <Text style={styles.headers}>Example title</Text>
                <Text style={styles.date}>September 23, 2023</Text>

                <View style={styles.prompt}>
                    <Text style={styles.label}>Today's Prompt</Text>
                    <Text style={styles.description}>What is one positive change you can make in your daily routine that would contribute to a more fulfilling and balance life? </Text>
                    <View style={styles.button}>
                    <Image source={require('../atom/icons/RefreshButton.png')} style={styles.refreshBtn} />
                    </View>
                </View>
                
                <TextInput 
                  style={styles.input}
                  placeholder="Start your entry here"
                  autoFocus={true}
                  autoCapitalize="words"
                  autoCorrect={true}
                  keyboardType="default"
                />
         
          </View>
          <View style={styles.pass}>
                <Text style={styles.textTag}>Tag Your Entry</Text>
                <Image source={require('../atom/assets/settingicons/Arrow.png')} onPress={toggleInputBoxes} style={styles.arrow} onTouchEnd={toggleInputBoxes}/>
            </View>
            {showInputBoxes && (
                <View style={styles.inputBoxes}>
                    <View style={styles.tag}>
                    <SmallInput 
                    placeholder="Add New Tag"
                    />
                   <Tag 
                   text="Draws"
                   />
                   
                   </View>
                   <View style={styles.tags}>
                   <Tag 
                   text="Venting"
                   />
                   <Tag 
                   text="Anger"
                   />
                    <Tag 
                   text="Tired"
                   />
                   
                   </View>
                    </View>
            )}
          <View style={styles.content2}>
            <MediumBtnLightTxt
              text="View Ai Insights"
              navigate="AiInsights"
              />

          </View>
          <Text>
            Feeling stressed, you are grappling with the looming pressure of upcoming midterms, hindering both your sleep and overall well-being. Despite the pleasant weather, an underlying frustration persits, reflecting the intense emotional toll of the approaching exams. This entry ecnapsulates a sense of fatigue and anxiety as you are navigating the challenges of a demanding acadmeic season.
          </Text>
          <Text>
            Here are some recommendations you may consider to alleviate these negative emotions:
          </Text>
          <RecommendationBtn />
          <View style={styles.tool}>
                <ToolBar />
                </View>
                
                <NavBar navigation={navigation} />

            
            </View>

    );
}

const styles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 10,
        padding: 30
    },
    headers: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#88898C'
    },
    prompt: {
        height: 93,
        width: 328,
        backgroundColor: '#F2F2FD',
        borderRadius: 10,
        elevation: 4,
        padding: 5
    },
    label: {
    fontSize: 13
    },
    description: {
        fontSize: 12
    },
    content2: {
     alignItems: 'center'
        
      
    },
    button: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    input: {
        height: 200,
        width: 325,
        borderColor: 'black'
    },
    tool: {
        display: 'flex',
        marginLeft: 320,
        marginTop: 10,
        marginBottom: 50
    },
    pass: {
        width: 285,
        height: 47,
        borderRadius: 10,
        backgroundColor: '#EAEAEA',
        display: 'flex',
        flexDirection: 'row',
        gap: 130,
        alignItems: 'center',
        marginLeft: 60
    },
    textTag: {
        marginLeft: 10
    },
    arrow: {
        width: 25,
        height: 25,
        transform: 'rotate(90deg)'
    },
    tag: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tags: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})