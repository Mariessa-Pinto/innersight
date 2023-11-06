import globalStyles from '../styles/global'
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import SmallBtnDarkTxt from '../atom/Buttons/SmallBtnDarkTxt';
import NavBar from '../molecules/Navigation/NavBar';
import PersonalForm from '../molecules/PersonalForm/PersonalForm';
import MediumBtnLightTxt from '../atom/Buttons/MediumBtnLightTxt';
import Header from '../molecules/Header/Header';
import { Image } from 'expo-image';



export default function PersonalInformation({ navigation }) {


    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header 
                        title='Amaya Lee' 
                        navigation={navigation} 
                    />
                    <View style={styles.maincontent}>
                        <View style={styles.headerBar}>

                        </View>
                        <View style={styles.profimage}>
                            <Image
                                source={require('../atom/Mascots/Otter.png')}
                                style={styles.otter}
                            />
                        </View>
                        <SmallBtnDarkTxt
                            text="Edit Photo"
                            navigate="EditPhoto"
                        />
                        <PersonalForm />
                        <MediumBtnLightTxt
                            text="Save Changes"
                            navigate=""
                        />
                    </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='profile' />
        </View>

    );
}

const styles = StyleSheet.create({

    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    profimage: {
        backgroundColor: '#FFF2AC',
        borderRadius: 50,
        height: 100,
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,

        marginBottom: 10
    },
    otter: {
        width: 86,
        height: 75
    }
})


