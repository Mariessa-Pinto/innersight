import globalStyles from '../styles/global'
import { StyleSheet, Text, View, ScrollView, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import ColorBtns from '../atom/ColorButtons/ColorBtns';
import TypeButton from '../atom/TypeFace/TypeButton';
import MediumBtnLightTxt from '../atom/Buttons/MediumBtnLightTxt';
import Header from '../molecules/Header/Header';

export default function CustomizeEntry({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
            <ScrollView>
                <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
                    <Header
                        title="Customize Your Entry"
                        navigation={navigation}
                    />
                    <View style={styles.header}>
                        <Text style={[globalStyles.h3Text, { color: theme.color }]}>Text Highlight Colour</Text>
                    </View>
                    <View style={styles.content}>
                        <ColorBtns />
                        <View>
                            <View style={styles.header}>
                                <Text style={[globalStyles.h3Text, { color: theme.color }]}>TypeFace</Text>
                            </View>
                            <TypeButton />
                        </View>
                        <View>
                            <MediumBtnLightTxt
                                text="Save Changes"
                            />
                        </View>
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
        marginLeft: 10
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})