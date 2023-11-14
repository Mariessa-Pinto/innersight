import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import JournalCovers from '../atom/JournalCovers/JournalCovers';
import MediumBtnDarkText from '../atom/Buttons/MediumBtnDarkTxt';
import NormalInput from '../atom/InputBoxes/NormalInput';
import ExtraLargeBtnLightTxt from '../atom/Buttons/ExtraLargeBtnLightTxt'
import Header from '../molecules/Header/Header';
import Notifications from '../molecules/Notifications/Notifications';


export default function NewJournal({ navigation }) {
    const [showInputBoxes, setShowInputBoxes] = useState(false);

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Password Toggle Switch
    const [passIsEnabled, setPassIsEnabled] = useState(false);
    const passToggleSwitch = () => setPassIsEnabled(previousState => !previousState);


    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header title="Customize Journal" />
                    <View style={styles.header}>
                        <Text style={[globalStyles.h3Text, { color: theme.color }]}>Choose a Journal cover.</Text>
                    </View>
                    <View style={styles.comp}>
                        <JournalCovers />
                        <MediumBtnDarkText
                            text="Add New Cover"
                        />
                    </View>
                    <View style={styles.name}>
                        <Text style={[globalStyles.h3Text, { color: theme.color }]}>Name Your Journal</Text>
                    </View>
                    <View style={styles.content}>
                        <NormalInput />
                        <View style={styles.pass}>
                            <Notifications title="Password Protection"
                                valueChange2={passToggleSwitch}
                                valueEnabled2={passIsEnabled}
                                toggleType="toggle"
                            />
                        </View>
                        {passIsEnabled && (
                            <View style={styles.inputBoxes}>
                                <NormalInput
                                    placeholder="Input 4-Digit Password"
                                />
                                <NormalInput
                                    placeholder="Confirm Password"
                                />
                                <NormalInput
                                    placeholder="Password Hint Question"
                                />
                                <NormalInput
                                    placeholder="Password Hint Answer"
                                />
                            </View>
                        )}
                        <ExtraLargeBtnLightTxt
                            text="Create New Journal"
                        />
                    </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='journal' />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,

    },
    comp: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    name: {
        marginTop: 50
    },
    pass: {
        width: '100%',
        marginTop: 20
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginLeft: 10
    },
    inputBoxes: {
        width: '100%',
        marginBottom: 20
    }
})