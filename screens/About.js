import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import {  useContext } from 'react';
import themeContext from '../theme/themeContext';

import styles from '../styles/global'

export default function About({navigation}) {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.text, { color: theme.color }]}>About Page</Text>
            <StatusBar style="auto" />
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
        </View>
    );
}