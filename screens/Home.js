import globalStyles from '../styles/global'

import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/NavBar';

export default function Home({ navigation }) {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
                <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor }]}>
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
              <Button
                title="Go to Profile"
                onPress={() => navigation.push('Profile')}
            />
                 <Button
                title="Go to Recommendations"
                onPress={() => navigation.push('Recommendations')}
            />
                  <Button
                title="Go to Personal Information"
                onPress={() => navigation.push('Personal Information')}
            />



        </View>
    );
}

const styles = StyleSheet.create({
test:{
    height: '100%'
}
})

