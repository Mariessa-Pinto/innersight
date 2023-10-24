import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import Login from './Login';
import NavBar from '../molecules/Navigation/NavBar';
import { Image } from 'expo-image';
import Header from '../molecules/Header/Header';
export default function Profile({ navigation }) {
    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <Header title='' navigation={navigation} />
            <ScrollView style={globalStyles.contentContainer}>
                <View style={styles.maincontent}>
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
                        <View style={styles.statview}>
                            <Text style={styles.stat}>85</Text>
                            <Text style={styles.label}>
                                Entries Complete
                            </Text>
                        </View>
                        <View style={styles.statview}>
                            <Text style={styles.stat}>28 days</Text>
                            <Text style={styles.label}>
                                Longest Streak
                            </Text>
                        </View>
                        <View style={styles.statview}>
                            <Text style={styles.stat}>190,809</Text>
                            <Text style={styles.label}>
                                Words Written
                            </Text>
                        </View>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.settings}>
                            Settings
                        </Text>
                        <View style={styles.settingbar}>
                            <Image
                                source={require('../atom/assets/settingicons/Home.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.label2}>Personal Information</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('PersonalInformation')} style={styles.arrow}>
                                <Image
                                    source={require('../atom/assets/settingicons/Arrow.png')}
                                    style={styles.arrow}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingbar}>
                            <Image
                                source={require('../atom/assets/settingicons/Access.png')}
                                style={styles.icon2}
                            />
                            <Text style={styles.label2}>Accessibility Settings</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Accessibility')} style={styles.arrow}>
                                <Image source={require('../atom/assets/settingicons/Arrow.png')} style={styles.arrow} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingbar}>
                            <Image
                                source={require('../atom/assets/settingicons/Language.png')}
                                style={styles.icon2}
                            />
                            <Text style={styles.label2}>Language Settings</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('LanguageSettings')} style={styles.arrow}>
                                <Image source={require('../atom/assets/settingicons/Arrow.png')} style={styles.arrow} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingbar}>
                            <Image
                                source={require('../atom/assets/settingicons/Notification.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.label2}>Notification Settings</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('NotificationSettings')} style={styles.arrow}>
                                <Image source={require('../atom/assets/settingicons/Arrow.png')} style={styles.arrow} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.settings}>
                            Support
                        </Text>
                        <View style={styles.settingbar}>
                            <Image
                                source={require('../atom/assets/settingicons/FAQ.png')}
                                style={styles.icon2}
                            />
                            <Text style={styles.label2}>Frequently Asked Questions</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('FaqPage')} style={styles.arrow}>
                                <Image source={require('../atom/assets/settingicons/Arrow.png')} style={styles.arrow} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingbar}>
                            <Image
                                source={require('../atom/assets/settingicons/Crisis.png')}
                                style={styles.icon3}
                            />
                            <Text style={styles.label2}>Crisis Support Resources</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('CrisisSupport')} style={styles.arrow}>
                                <Image source={require('../atom/assets/settingicons/Arrow.png')} style={styles.arrow} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.settings}>
                            Legal
                        </Text>
                        <View style={styles.settingbar}>
                            <Image
                                source={require('../atom/assets/settingicons/Privacy.png')}
                                style={styles.icon2}
                            />
                            <Text style={styles.label2}>Privacy Policy</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')} style={styles.arrow}>
                                <Image source={require('../atom/assets/settingicons/Arrow.png')} style={styles.arrow} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingbar}>
                            <Image
                                source={require('../atom/assets/settingicons/Terms.png')}
                                style={styles.icon2}
                            />
                            <Text style={styles.label2}>Terms Of Service</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('TermsPage')} style={styles.arrow}>
                                <Image source={require('../atom/assets/settingicons/Arrow.png')} style={styles.arrow} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingbar}>
                            <Image
                                source={require('../atom/assets/settingicons/Ai.png')}
                                style={styles.icon2}
                            />
                            <Text style={styles.label2}>Artificial Intelligence Information</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('AiPage')} style={styles.arrow}>
                                <Image source={require('../atom/assets/settingicons/Arrow.png')} style={styles.arrow} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.content3}>
                        <Pressable style={styles.logout}>
                            <Text style={styles.buttonlabel}>Log Out</Text>
                        </Pressable>
                    </View>
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
        gap: 20,
        paddingTop: 20
    },
    statview: {
        backgroundColor: "#C5C7F7",
        borderRadius: 20,
        height: 100,
        width: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 12,
        paddingBottom: 12,
        gap: 5
    },
    label: {
        fontFamily: 'Lexend-Regular',
        fontSize: 13
    },
    stat: {
        fontFamily: 'Lexend-Regular',
        fontSize: 18,
        fontWeight: '600'
    },
    settings: {
        textAlign: 'left',
        fontSize: 18,
        paddingTop: 5
    },
    content2: {
        display: 'flex',
        gap: 1
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
    icon: {
        width: 10,
        height: 12.5
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