import globalStyless from '../styles/global'
import { Text, View, Button, Switch, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';


export default function Stats({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
            <View style={style.maincontent}>
                <Text>Your Week In Review</Text>

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
   maincontent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
   }
})
