import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import Login from './Login';
import NavBar from '../molecules/Navigation/NavBar';

export default function Profile({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={globalStyles.container}>
            <ScrollView style={{ height: 400 }}>
                <View style={styles.maincontent}>
                    <View style={styles.topcontent}>

                        <View style={styles.profimage}>
                        </View>
                        <Text style={styles.header}>John Smith</Text>
                    </View>
                    <View style={styles.stats}>
                        <View style={styles.statview}>
                            <Text style={styles.label}>
                                Entries Complete
                            </Text>

                        </View>
                        <View style={styles.statview}>
                            <Text style={styles.label}>
                                Longest Streak
                            </Text>

                        </View>
                        <View style={styles.statview}>
                            <Text style={styles.label}>
                                Words Written
                            </Text>

                        </View>
                    </View>

                    <View style={styles.content2}>
                        <Text style={styles.settings}>
                            settings
                        </Text>
                        <View style={styles.settingbar}></View>
                        <View style={styles.settingbar}></View>
                        <View style={styles.settingbar}></View>
                        <View style={styles.settingbar}></View>
                    </View>

                    <View style={styles.content2}>
                        <Text style={styles.settings}>
                            Support
                        </Text>
                        <View style={styles.settingbar}></View>
                        <View style={styles.settingbar}></View>
                        <View style={styles.settingbar}></View>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.settings}>
                            Legal
                        </Text>
                        <View style={styles.settingbar}></View>
                        <View style={styles.settingbar}></View>
                        <View style={styles.settingbar}></View>
                    </View>

                    <View style={styles.content3}>

                        <Pressable style={styles.logout}>
                            <Text style={styles.buttonlabel}>Log Out</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            <NavBar navigation={navigation}/>

        </View>

    );
}

const styles = StyleSheet.create({

    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'

    },

    profimage: {
        backgroundColor: '#d9d9d9',
        borderRadius: 50,
        height: 100,
        left: 0,
        top: 0,
        width: 100
    },

    topcontent: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
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
        width: 100

    },
    label: {
        padding: 15,
        fontSize: 13
    },
    settings: {
        textAlign: 'left',
        fontSize: 18,
        paddingTop: 5

    },
    content2: {
        display: 'flex',
        gap: 20

    },

    settingbar: {
        width: 328,
        height: 37,
        backgroundColor: '#525585',
        borderRadius: 10

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
    }



});