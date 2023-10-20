import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/NavBar';
import MultiText from '../atom/MultilineText/MultiText';
import MediumBtnLightTxt from '../atom/Buttons/MediumBtnLightTxt';




export default function WriteEntry({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
            <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
                <View style={styles.maincontent}>
                <Text style={styles.headers}>Example title</Text>
                <Text style={styles.date}>September 23, 2023</Text>

                <View style={styles.prompt}>
                    <Text style={styles.label}>Pick a prompt</Text>
                    <Text style={styles.description}>What is one positive change you can make in your daily routine that would contribute to a more fulfilling and balanced life?</Text>

                </View>
                <MultiText style={styles.button}/>
          </View>
          <View style={styles.content2}>
            <MediumBtnLightTxt/>

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
        padding: 3
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
        
      
    }
})