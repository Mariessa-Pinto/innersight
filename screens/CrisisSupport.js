import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import { ScrollView } from 'react-native-gesture-handler';
import NavBar from '../molecules/Navigation/NavBar';
import Header from '../molecules/Header/Header';
import CrisisButton from '../atom/CrisisButtons/CrisisButton';



export default function CrisisSupport({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
            <Header title='Crisis Support Resources' navigation={navigation} />
            <View style={[globalStyles.contentContainer, { alignItems: 'center' }]}>
                <Text style={globalStyles.bodyCopy}>
                    Help is available for all to help foster mental wellness. If you or someone you know is in immediate danger, please dial 9-1-1.
                </Text>
                <View style={styles.main}>
                    <CrisisButton title="Crisis & Information Lines"
                        style={styles.btn}
                        navigationTarget={() => navigation.navigate('CrisisInfoLines')} />
                    <CrisisButton title="Local Distress Centres"
                        style={styles.btn}
                        navigationTarget={() => navigation.navigate('Font Size')} />
                    <CrisisButton title="Organizations"
                        style={styles.btn}
                        navigationTarget={() => navigation.navigate('Font Size')} />
                    <CrisisButton title="Information & Publications"
                        style={styles.btn}
                        navigationTarget={() => navigation.navigate('Font Size')} />
                </View>

            </View>
            <View style={globalStyles.navContainer}>
                <NavBar navigation={navigation} />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({



    main: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingTop: 20,
    }




});