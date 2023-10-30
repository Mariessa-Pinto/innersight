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

export default function Stats({ navigation }) {
    const [darkMode, setDarkMode] = useState(false);
    const theme = useContext(themeContext);

    const [selectedValue, setSelectedValue] = useState('Week'); 

    useEffect(() => {
        setSelectedValue('Week'); 
    }, []);

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <Header title="Your Week in Review" />
            <ScrollView style={globalStyles.contentContainer}>
                <View style={styles.maincontent}>
                    <DateToggle selectedValue={selectedValue}/>
                    <Image
                        source={require('../atom/assets/graph.png')}
                        style={styles.graph}
                    />
                    <IdentifiedEntries />
                    <StatRecommendations />
                </View>
            </ScrollView>
            <NavBar navigation={navigation} />
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