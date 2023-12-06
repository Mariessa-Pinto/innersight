import globalStyles from '../styles/global'
import { StyleSheet, View, ScrollView } from 'react-native';
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
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainerNoScroll, { backgroundColor: theme.background }]}>
                    <Header title='Notifications' navigation={navigation} />
                    <Notifications title="Journal Reminders"
                        valueChange2={journalToggleSwitch}
                        valueEnabled2={journalIsEnabled}
                        toggleType="toggle"
                    />
                    <Notifications title="Entry Reminders"
                        valueChange2={toggleSwitch}
                        valueEnabled2={isEnabled}
                        toggleType="toggle"
                    />
                    <Notifications title="Recommendation Reminders"
                        valueChange2={toggleSwitch}
                        valueEnabled2={isEnabled}
                        toggleType="toggle"
                    />
                    <Notifications title="Daily Reminders"
                        valueChange2={toggleSwitch}
                        valueEnabled2={isEnabled}
                        toggleType="toggle"
                    />
                    <View style={styles.button}>
                        <MediumBtnLightTxt
                            text='Save Changes'
                        />
                    </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='profile' />
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