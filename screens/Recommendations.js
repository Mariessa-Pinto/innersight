import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Image } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';
import RecData from '../data/RecData';
import fontContext from '../theme/fontContext';

export default function Recommendations({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)
    //Font Size
    const fontTheme = useContext(fontContext)

    const [data, setData] = useState('');

    useEffect(() => {
        setData(RecData.exercise)
    }, [])


    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    {
                        data && data.map((item, index) => {
                            return (
                                <View key={index} style={styles.maincontent}>
                                    <Header title={item.type} navigation={navigation} />
                                    <Image
                                        source={item.source}
                                        style={styles.picture}
                                    />
                                    <View style={styles.writing}>
                                        <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>{item.description}</Text>
                                        <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>{item.desc2}</Text>
                                        <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>{item.desc3}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 18
    },
    writing: {
        gap: 15,
        paddingTop: 15
    },
    picture: {
        height: '28%',
        width: '80%',
        marginTop: -10
    }
});