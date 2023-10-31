import globalStyles from '../styles/global'

import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Button, ScrollView, TextInput, Image,
    TouchableOpacity
} from 'react-native';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';
import CrisisButton from '../atom/CrisisButtons/CrisisButton';
import fontContext from '../theme/fontContext';
import CrisisSupportBtns from '../molecules/CrisisSupportBtns/CrisisSupportBtns'

export default function CrisisSupport({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
        <ScrollView>
            <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
            <Header title='Crisis Support Resources' navigation={navigation} />
                <Text style={globalStyles.bodyCopy}>
                    Help is available for all to help foster mental wellness. If you or someone you know is in immediate danger, please dial 9-1-1.
                </Text> 
                <View style={styles.main}>
                    <CrisisButton title="Crisis & Information Lines"
                        style={styles.btn}
                        navigationTarget={() => navigation.navigate('CrisisInfoLines')} />
                    <CrisisButton title="Local Distress Centres"
                        style={styles.btn}
                        navigationTarget={() => navigation.navigate('LocalDistress')} />
                    <CrisisButton title="Organizations"
                        style={styles.btn}
                        navigationTarget={() => navigation.navigate('Organizations')} />
                    <CrisisButton title="Information & Publications"
                        style={styles.btn}
                        navigationTarget={() => navigation.navigate('InfoandPublications')} />
                </View>

            </View>
            </ScrollView>
                <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
   content: {
    marginTop: 40,
    gap: 40
   },


    main: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingTop: 20,
    }




});