import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Image } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/NavBar';

export default function Recommendations({navigation}) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
            <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
                <ScrollView>
                    <View style={styles.maincontent}>
                        <Text style={styles.header}>Recommendations</Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 18
    }

});