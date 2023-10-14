import styles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Image} from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';





export default function Recommendations() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
            <ScrollView>
          <View style={RecommendationStyles.maincontent}>
            <Text style={RecommendationStyles.header}>Recommendations</Text>

          </View>

            </ScrollView>
        </View>
   
    );
}


const RecommendationStyles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 18
    }

});