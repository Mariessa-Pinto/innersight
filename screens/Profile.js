import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import Login from './Login';
import NavBar from '../molecules/Navigation/NavBar';
import { Image } from 'expo-image';
import Header from '../molecules/Header/Header';
import QuickStatsCard from '../atom/QuickStats/QuickStatsCard';
import ProfileGreyButtons from '../molecules/GreyButtons/ProfileGreyButtons'

export default function Profile({ navigation }) {
    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header title='' navigation={navigation} />
                    <View style={styles.topcontent}>
                        <View style={styles.profimage}>
                            <Image
                                source={require('../atom/Mascots/Otter.png')}
                                style={styles.otter}
                            />
                        </View>
                        <Text style={styles.header}>Amaya Lee</Text>
                    </View>

                    <View style={styles.stats}>
                        <QuickStatsCard metric="85" label="Entries Completed" />
                        <QuickStatsCard metric="28 days" label="Longest Streak" />
                        <QuickStatsCard metric="190,809" label="Words Written" />
                    </View>
                    <View style={styles.content}>
                        <Text style={[styles.sectionHeading, globalStyles.h3Text]}>
                            Settings
                        </Text>
                        <ProfileGreyButtons section="settings"/>
                    </View>
                    <View style={styles.content}>
                        <Text style={[styles.sectionHeading, globalStyles.h3Text]}>
                            Support
                        </Text>
                        <ProfileGreyButtons section="support"/>
                        
                    </View>
                    <View style={styles.content}>
                        <Text style={[styles.sectionHeading, globalStyles.h3Text]}>
                            Legal
                        </Text>
                        <ProfileGreyButtons section="legal"/>
                    
                    </View>
                    <View style={styles.content3}>
                        <Pressable style={styles.logout}>
                            <Text style={styles.buttonlabel}>Log Out</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation="profile" />
        </View>
    );
}
const styles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 110,

    },
    profimage: {
        backgroundColor: '#FFF2AC',
        borderRadius: 50,
        height: 70,
        width: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,

        marginBottom: 10
    },
    otter: {
        width: 60,
        height: 52
    },
    topcontent: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        paddingLeft: 20
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    stats: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40
    },
    content: {
        marginBottom: 27,
    },
    settingbar: {
        width: 328,
        height: 37,
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        elevation: 1,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 15,
        alignItems: 'center'
    },
    logout: {
        width: 114,
        height: 32,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#6164C3'
    },
    buttonlabel: {
        color: 'white',
        fontSize: 12,
        alignItems: 'center',
        padding: 8
    },
    content3: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20
    },
    label2: {
        fontSize: 13,
    },

    icon2: {
        width: 13,
        height: 12.5
    },
    icon3: {
        width: 13,
        height: 10
    },
    arrow: {
        width: 18,
        height: 15,
        position: 'absolute',
        right: 2,
    }
});