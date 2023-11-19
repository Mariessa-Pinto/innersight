import globalStyles from '../styles/global'
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import DateToggle from '../atom/WordToggle/DateToggle';
import 'react-native-gesture-handler';
import Header from '../molecules/Header/Header';
import IdentifiedEntries from '../molecules/IdentifiedEntries/IdentifiedEntries';
import StatRecommendations from '../molecules/StatRecommendations/StatRecommendations';
import DonutChart from '../molecules/DonutChart/DonutChart';


export default function Stats({ navigation, username }) {
    console.log("Username in Stats: ", username)
    const [darkMode, setDarkMode] = useState(false);
    const theme = useContext(themeContext);


    const [selectedValue, setSelectedValue] = useState('Week');

    useEffect(() => {
        setSelectedValue('Week');
    }, []);



    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header title="Your Week in Review" navigation={navigation} />
                    <View style={styles.maincontent}>
                        <DateToggle selectedValue={selectedValue} />
                        <DonutChart username={"anika"}/>
                        <IdentifiedEntries />
                        <StatRecommendations />
                    </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='stats' />
        </View>
    );
}

const styles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
    },
})