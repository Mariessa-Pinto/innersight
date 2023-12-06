import globalStyles from '../styles/global'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';
import RecData from '../data/RecData';
import fontContext from '../theme/fontContext';
import LottieView from 'lottie-react-native';

export default function Recommendations({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)
    //Font Size
    const fontTheme = useContext(fontContext)

    const [data, setData] = useState('');

    //Animation
    const animation = require('../atom/assets/Animations/panda-workout.json');

    useEffect(() => {
        setData(RecData.exercise)
    }, [])

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainerNoScroll, { backgroundColor: theme.background }]}>
                    {
                        data && data.map((item, index) => {
                            return (
                                <View key={index} style={styles.maincontent}>
                                    <Header title={item.type} navigation={navigation} />
                                    <View style={styles.animationContainer}>
                                        <LottieView
                                            source={animation}
                                            autoPlay
                                            loop
                                            style={{ width: '110%', height: 400, marginBottom: -150, marginTop: -50 }}
                                        />
                                    </View>
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
    writing: {
        paddingTop: 10,
        paddingHorizontal: 20,
        gap: 15
    },
});