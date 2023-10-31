import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';
import JournalBlobCard from '../molecules/JournalCard/JournalBlobCard';
import MediumBtnLightTxt from '../atom/Buttons/MediumBtnLightTxt';

export default function JournalPassword({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
<View style={[globalStyles.outerContainer, { backgroundColor: theme.background }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header title='' navigation={navigation} />
                    <JournalBlobCard
                        imgSource={require('../atom/assets/Covers/OrangeCover.png')} />
                    <View style={styles.textContainer}>
                        <Text style={globalStyles.h1TextBold}>All My Vents</Text>
                        <View style={styles.passwordContainer}>
                            <Text style={globalStyles.labelText}>Enter Your Password</Text>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.password}
                                placeholder='Password'
                                textAlignVertical=''
                                value="" />
                        </View>

                        <MediumBtnLightTxt
                            text="Unlock Journal"
                            navigate='Entries' />
                    </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='journal' />
        </View>

    );
}

const styles = StyleSheet.create({
    password: {
        width: 281,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        borderWidth: 1,
        display: 'flex',
        marginTop: 5
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25
    }


})