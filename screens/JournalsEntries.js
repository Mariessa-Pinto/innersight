import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/NavBar';



export default function JournalsEntries({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
            <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
                <Text>Placeholder - Journal Entries</Text>
                <NavBar navigation={navigation} />
            </View>

    );
}

const styles = StyleSheet.create({
})