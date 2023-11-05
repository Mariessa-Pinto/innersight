import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, Image, TextInput, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Tag from '../atom/Tag/Tag';
import ToolBar from '../molecules/ToolBarJournal/ToolBar';
import SmallInput from '../atom/InputBoxes/SmallInput';
import MediumBtnLightTxt from '../atom/Buttons/MediumBtnLightTxt';
import BigInput from '../atom/InputBoxes/BigInput';
import AiInsightsMol from '../molecules/AiInsights/AiInsightsMol';
import InsightButton from '../atom/Buttons/InsightButton';
import Header from '../molecules/Header/Header'
import AiSent from '../component/AiSentiment';




export default function WriteEntry({ navigation }) {
    const [showInputBoxes, setShowInputBoxes] = useState(false);
    const [showInsights, setShowInsights] = useState(false);
    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)
    const toggleInputBoxes = () => {
        setShowInputBoxes(!showInputBoxes)
    }
    const toggleInsights = () => {
        setShowInsights(!showInsights);
    };
    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView >
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header title="" settings={true} navigation={navigation} />
                    <View style={styles.maincontent}>
                        <Text style={styles.headers}>Positive Thoughts</Text>
                        <Text style={styles.date}>September 23, 2023</Text>
                        <View style={styles.prompt}>
                            <Text style={styles.label}>Today's Prompt</Text>
                            <Text style={styles.description}>What is one positive change you can make in your daily routine that would contribute to a more fulfilling and balance life? </Text>
                            <View style={styles.button}>
                                <Image source={require('../atom/icons/RefreshButton.png')} style={styles.refreshBtn} />
                            </View>
                        </View>
                   <AiSent />
                        <View style={styles.pass}>
                            <Text style={styles.textTag}>Tag Your Entry</Text>
                            <Image source={require('../atom/assets/settingicons/Arrow.png')} onPress={toggleInputBoxes} style={styles.arrow} onTouchEnd={toggleInputBoxes} />
                        </View>
                        {showInputBoxes ? (
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
                        ) : <></>}
                        <View style={styles.content2}>
                            <InsightButton
                                text="View Ai Insights"
                                toggle={toggleInsights}
                            />
                            {showInsights ? <AiInsightsMol /> : <></>}
                        </View>
                        <View style={styles.tool}>

                        </View>
                    </View>
                </View>
            </ScrollView>
            <ToolBar />
            <NavBar navigation={navigation} variation='journal' />
        </View>
    );
}
const styles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 10,
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 30,
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
        alignItems: 'center',
        paddingTop: 20,

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
    pass: {
        width: 285,
        height: 47,
        borderRadius: 10,
        backgroundColor: '#EAEAEA',
        display: 'flex',
        flexDirection: 'row',
        gap: 130,
        alignItems: 'center',
        marginLeft: 20
    },
    textTag: {
        marginLeft: 10
    },
    arrow: {
        width: 25,
        height: 25,
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
    },
})