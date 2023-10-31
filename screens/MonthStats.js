import globalStyles from '../styles/global'
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import DateToggle from '../atom/WordToggle/DateToggle';
import 'react-native-gesture-handler';
import Header from '../molecules/Header/Header';
import IdentifiedEntries from '../molecules/IdentifiedEntries/IdentifiedEntries';
import StatRecommendations from '../molecules/StatRecommendations/StatRecommendations';


export default function MonthStats({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)
    const [selectedValue, setSelectedValue] = useState('Month');

    useEffect(() => {
        setSelectedValue('Month');
    }, []);

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
        <ScrollView>
            <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
            <Header title="Your Month in Review" />

                <View style={styles.maincontent}>
                    <DateToggle selectedValue={selectedValue} />
                    <Image
                        source={require('../atom/assets/graph.png')}
                        style={styles.graph}
                    />
                    <IdentifiedEntries />
                    <StatRecommendations />
                </View>
                </View>
            </ScrollView>
            <NavBar
                navigation={navigation} variation='stats'/>
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