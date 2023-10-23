import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, Image, TextInput } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Tag from '../atom/Tag/Tag';

import MediumBtnLightTxt from '../atom/Buttons/MediumBtnLightTxt';




export default function AiToolJournal({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <View style={styles.maincontent}>
                <Text style={styles.headers}>Example title</Text>
                <Text style={styles.date}>September 23, 2023</Text>
                <View style={styles.prompt}>
                    <Text style={styles.label}>Pick a prompt</Text>
                    <Text style={styles.description}>What is one positive change you can make in your daily routine that would contribute to a more fulfilling and balanced life?</Text>
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
            <View style={styles.content2}>
                <MediumBtnLightTxt
                    text="View Ai Insights"
                />
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


    }
})