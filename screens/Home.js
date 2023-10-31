import globalStyles from '../styles/global'

import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, ScrollView, TextInput, Image,
    TouchableOpacity
} from 'react-native';
import themeContext from '../theme/themeContext';
import fontContext from '../theme/fontContext';
import NavBar from '../molecules/Navigation/NavBar';
import MoodBoosters from '../atom/MoodQuickView/MoodBoosters.js'
import MoodDowners from '../atom/MoodQuickView/MoodDowners.js'
import RecommendationButtons from '../atom/RecommendationButtons/RecommendationButtons';
import RecommendationBtn from '../molecules/RecommendationBtns/RecommendationBtn';

export default function Home({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Text style={[globalStyles.h1TextBold, { color: theme.color, paddingTop: 20 }]}>Good morning, Amaya!</Text>
                    <View style={[styles.journalContainer, { backgroundColor: theme.backgroundPurple }]}>
                        <View style={styles.journalHeader}>
                            <Text style={[globalStyles.h4TextSemiBold, { color: theme.color }]}>How are you feeling today?</Text>
                            <Image source={require('../atom/icons/RefreshButton.png')} style={styles.refreshBtn} />
                        </View>
                        <View style={styles.journalWriting}>
                            <TextInput style={[styles.quickJournal, { backgroundColor: theme.background }]}
                                multiline
                                numberOfLines={6}
                            />
                        </View>
                        <TouchableOpacity style={styles.saveBtn} >
                            <Image source={require('../atom/Buttons/CheckMark.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.overviewContainer}>
                        <Text style={[globalStyles.h3Text, { color: theme.color }]}>Your Week So Far</Text>
                        <View style={styles.boosterContainers}>
                            <MoodBoosters />
                            <MoodDowners />
                        </View>
                    </View>
                    <View style={styles.tipsContainer}>
                        <Text style={[globalStyles.h3Text, { color: theme.color }]}>Recommended Tips</Text>
                        <View style={styles.recBtnContainer}>
                            <RecommendationBtn />
                        </View>
                    </View>
                </View>

            </ScrollView>
            <NavBar navigation={navigation} variation='home' />
        </View>
    );
}
         

const styles = StyleSheet.create({
    journalContainer: {
        height: 176,
        width: '100%',
        borderRadius: 15,
        padding: 16,
        marginBottom: 15
    },
    overviewContainer: {
        marginBottom: 15
    },
    tipsContainer: {
        marginBottom: 15
    },
    quickJournal: {
        borderRadius: 5
    },
    button: {
        height: 50,
        width: '100%'
    },
    refreshBtn: {
        objectFit: 'contain',
    },
    journalHeader: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boosterContainers: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
    },
    saveBtn: {
        position: 'absolute',
        bottom: 5,
        right: 10

    }

})

