import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {  useContext } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/NavBar';
import AiToolInput from '../atom/AITool/AiToolInput';
import RecommendationButton from '../atom/RecommendationButtons/RecommendationButtons';


import globalStyles from '../styles/global'

export default function About({navigation}) {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[globalStyles.text, { color: theme.color }]}>About Page</Text>
            <StatusBar style="auto" />
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
           
            <RecommendationButton />
            <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
})