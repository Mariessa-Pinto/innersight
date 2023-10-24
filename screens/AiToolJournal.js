import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, Image, TextInput } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Tag from '../atom/Tag/Tag';
import AiToolInput from '../atom/AITool/AiToolInput';
import MediumBtnLightTxt from '../atom/Buttons/MediumBtnLightTxt';




export default function AiToolJournal({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <View style={globalStyles.contentContainer}>

                <Text style={styles.headers}>Example title</Text>
                <Text style={styles.date}>September 23, 2023</Text>
                <View style={styles.prompt}>
                    <Text style={styles.label}>Today's Prompt</Text>
                    <Text style={styles.description}>What is one positive change you can make in your daily routine that would contribute to a more fulfilling and balance life?</Text>
                    <View style={styles.button}>
                        <Image source={require('../atom/icons/RefreshButton.png')} style={styles.refreshBtn} />
                    </View>
                </View>

                <View style={styles.textCon}>

                    <Text>Today I wasn't feeling very good. I was very tired and didn't get much sleep.
                        Because I was so tired a lot of things {' '} <Text style={{ backgroundColor: 'red', color: 'white' }}>irritated me and made me feel angry.</Text> I went to bed at a decent
                        time but I just kept {' '} <Text style={{ backgroundColor: 'red', color: 'white' }}>tossing and turning.</Text> Today I wasn't feeling very good. I was very tired and
                        didn't get much sleep. Because I was so tired a lot of things irriated me and made me feel angry.
                        I went to bed at a decent time but I just kept tossing and turning.
                    </Text>
                </View>
                <View style={styles.ai}>
                    <AiToolInput />
                </View>
                <View style={styles.content2}>
                    <MediumBtnLightTxt
                        text="View Ai Insights"
                    />
                </View>
            </View>
            <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
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
        borderRadius: 10,
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
    textCon: {
        marginTop: 50,
        position: 'relative'
    },
    ai: {
        position: 'absolute',
        marginTop: 350,
        marginLeft: 10
    },


})