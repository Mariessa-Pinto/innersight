import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Tag from '../atom/Tag/Tag';
import ToolBar from '../molecules/ToolBarJournal/ToolBar';
import SmallInput from '../atom/InputBoxes/SmallInput';
import data from '../data/PromptData'
import Header from '../molecules/Header/Header'
import AiSent from '../component/AiSentiment';

export default function WriteEntry({ navigation }) {

    const [showInsights, setShowInsights] = useState(false);
    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Prompt Function
    const [newPrompt, setNewPrompt] = useState(data.prompt)
    const [promptLength, setPromptLength] = useState(newPrompt.length)
    const [promptNum, setPromptNum] = useState(0)
    const handleNewPrompt = () =>
        setPromptNum(Math.floor(Math.random() * (promptLength - 0)));

    const toggleInsights = () => {
        setShowInsights(!showInsights);
    }

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView >
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header title="" settings={true} navigation={navigation} overlayType="entry" />
                    <View style={styles.maincontent}>
                        <View>
                            <Text style={[styles.headerText, globalStyles.h1TextBold]}>Positive Thoughts</Text>
                            <Text style={globalStyles.h4TextLight}>September 23, 2023 at 9:30PM</Text>
                        </View>

                        <View style={styles.prompt}>
                            <Text style={globalStyles.labelText}>Today's Prompt</Text>
                            <Text style={globalStyles.captionText}>{newPrompt[promptNum]} </Text>
                            <View style={styles.button}>
                                <TouchableOpacity
                                    onPress={handleNewPrompt}>
                                    <Image source={require('../atom/icons/RefreshButton.png')} style={styles.refreshBtn} />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <AiSent />
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
        gap: 20,
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 30,
    },

    prompt: {
        height: 93,
        width: 328,
        backgroundColor: '#F2F2FD',
        borderRadius: 10,
        elevation: 4,
        padding: 5
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

    textTag: {
        marginLeft: 10
    },

})