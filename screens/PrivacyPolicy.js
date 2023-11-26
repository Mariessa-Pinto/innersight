import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';
import PolicyData from '../data/PolicyData';



export default function PrivacyPolicy({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    const [data, setData] = useState(PolicyData.questions)


    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header title='Privacy Policy' navigation={navigation} />
                    {data && data.map((i, index) => (

                        i.page === "Privacy Policy" ? 
                        <View 
                        style={styles.questionContainer}
                        key={index}>
                            <Text style={globalStyles.btnTextLrg}>
                                {index + 1}. {i.header}
                            </Text>
                            {
                                i.content.personalInfo ?
                                    <>
                                        <Text style={globalStyles.bodyCopy}>
                                            <Text style={globalStyles.btnTextLrg}>{i.subtitle1}:</Text> {i.content.personalInfo}
                                        </Text>
                                        <Text style={globalStyles.bodyCopy}>
                                        <Text style={globalStyles.btnTextLrg}>{i.subtitle2}:</Text> {i.content.journalEntries}
                                        </Text>
                                    </>
                                    :
                                    <Text style={globalStyles.bodyCopy}>
                                        {i.content}
                                    </Text>
                            }
                        </View>
                        :
                        ""
))}
                </View>
            </ScrollView>
            <NavBar navigation={navigation} variation='profile' />
        </View>
    );
}

const styles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'flex-start',
        paddingRight: 20,
        paddingLeft: 20
    },
    top: {
        alignItems: 'center',
        marginTop: 6
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    list: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5
    },
    content2: {
        display: 'flex',
        marginTop: 10,
    },
    questionContainer:{
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 10
    }
})