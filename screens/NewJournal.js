import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import JournalCovers from '../atom/JournalCovers/JournalCovers';
import MediumBtnDarkText from '../atom/Buttons/MediumBtnDarkTxt';
import NormalInput from '../atom/InputBoxes/NormalInput';
import Toggle from '../atom/ToggleSwitch/Toggle';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import Header from '../molecules/Header/Header';


export default function NewJournal({ navigation }) {
    const [showInputBoxes, setShowInputBoxes] = useState(false);

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    const toggleInputBoxes = () => {
        setShowInputBoxes(!showInputBoxes);
    };

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor}]}>
            <ScrollView style={globalStyles.contentContainer}>
           <Header
           text="Create New Journal"
           />
           
           <View style={styles.header}>
           <Text style={[globalStyles.h3Text, { color: theme.color }]}>Choose a Journal cover.</Text>
           </View>
           <View style={styles.comp}>
            <Text style={[globalStyles.h4TextLight, { color: theme.color }]}>Current</Text>
           <JournalCovers />
           <MediumBtnDarkText 
           text="Add New Cover"
           />
            </View>
            <View style={styles.name}>
            <Text style={[globalStyles.h3Text, { color: theme.color }]}>Name Your Journal</Text>
            </View>
            <View style={styles.content}>
            <NormalInput />
            <View style={styles.pass}>
                <Text style={styles.text}>Password Protection</Text>
                <Toggle onToggle={toggleInputBoxes}/>
            </View>
            {showInputBoxes && (
                <View style={styles.inputBoxes}>
                    <NormalInput 
                    placeholder="Input 4-Digit Password"
                    />
                    <NormalInput 
                    placeholder="Confirm Password"
                    />
                    <NormalInput 
                    placeholder="Password Hint Question"
                    />
                    <NormalInput 
                    placeholder="Password Hint Answer"
                    />
                    </View>
            )}
            <ExtraLargeBtnLightTxt 
            text="Create New Journal"
            />
            </View>
            </ScrollView>
            <View style={globalStyles.navContainer}>
            <NavBar navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        marginLeft: 10
    },
    comp: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    name: {
        marginLeft: 10,
        marginTop: 50
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    pass: {
        width: 285,
        height: 47,
        borderRadius: 10,
        backgroundColor: '#EAEAEA',
        display: 'flex',
        flexDirection: 'row',
        gap: 80,
        alignItems: 'center'
    },
    text: {
        marginLeft: 10
    },
    inputBoxes: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})