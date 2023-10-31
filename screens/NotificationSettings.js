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

    //ToggleSwitch
    const [isEnabled, setIsEnabled] = useState(false);
    const [journalIsEnabled, setJournalIsEnabled] = useState(false);
    const journalToggleSwitch = () => setJournalIsEnabled(previousState => !previousState);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <Header title='Notifications' navigation={navigation} />
            <View style={globalStyles.contentContainer}>
                <Notifications title="Journal Reminders"
                    valueChange2={journalToggleSwitch}
                    valueEnabled2={journalIsEnabled}
                />
                <Notifications title="Reminders"
                    valueChange2={toggleSwitch}
                    valueEnabled2={isEnabled}
                />
                <Notifications title="Reminders"
                    valueChange2={toggleSwitch}
                    valueEnabled2={isEnabled}
                />
                <Notifications title="Reminders"
                    valueChange2={toggleSwitch}
                    valueEnabled2={isEnabled}
                />
                <View style={styles.button}>
                    <MediumBtnLightTxt
                        text='Save Changes'
                        navigate=''
                    />
                </View>
            </View>
            <NavBar navigation={navigation} variation='profile'/>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 70
    },
    container: {
        display: 'flex',
        alignItems: 'center',
    }
})