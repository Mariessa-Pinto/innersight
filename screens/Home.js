import styles from '../styles/global'

import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import themeContext from '../theme/themeContext';


export default function Home({ navigation }) {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.text, { color: theme.color }]}>Welcome to the Home Page</Text>

            <StatusBar style="auto" />
            <Button
                title="Go to about page"
                onPress={() => navigation.push('About')}
            />
            <Button
                title="Go to accessibility page"
                onPress={() => navigation.push('Accessibility')}
            />
            <Button
                title="Go to the font size page"
                onPress={() => navigation.push('Font Size')}
            />

             <Button
                title="Go to the Crisis Support Page"
                onPress={() => navigation.push('Crisis Support')}
            />
          

         

        
        </View>
    );
}

