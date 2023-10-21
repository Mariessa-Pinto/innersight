import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Notifications from '../molecules/Notifications/Notifications';
import Header from '../molecules/Header/Header';
import MediumBtnLightTxt from '../atom/Buttons/MediumBtnLightTxt';


export default function NotificationSettings({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor}]}>
            <Header title='Notifications' navigate='Profile'/>
            <Notifications/>
            <View style={styles.button}>
                <MediumBtnLightTxt 
                    text='Save Changes'
                    navigate=''
                />
            </View>
            <NavBar navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 70
    }
})