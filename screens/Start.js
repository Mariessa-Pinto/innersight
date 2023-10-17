import globalStyles from '../styles/global'
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/NavBar';

import { ScrollView } from 'react-native';



export default function Start({ navigation }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <>
            <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
                    <StatusBar style="auto" />
                    <Button
                        title="Get Started"
                        onPress={() => navigation.push('Demo')}
                    />
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
            </View>
            <NavBar navigation={navigation}/>
            </>
    );
}

const styles = StyleSheet.create({

})


const startStyles = StyleSheet.create({
    container: {
        backgroundColor: "#D5D7FF",
        display: 'flex',
        height: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#6164C3",
    }
});
