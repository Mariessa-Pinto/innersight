import styles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import CrisisCentres from '../atom/CrisisButtons/CrisisCentres';
import CrisisInfo from '../atom/CrisisButtons/CrisisInfo';
import CrisisOrganizations from '../atom/CrisisButtons/CrisisOrganizations';
import CrisisPublications from '../atom/CrisisButtons/CrisisPublications';
import { ScrollView } from 'react-native-gesture-handler';



export default function CrisisSupport() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <>
        <View style={PageStyles.title}>
        <Text style={PageStyles.header}>Crisis Support Resources</Text>
        <Text style={PageStyles.info}>Help is available for all to help foster mental wellness. If you or someone you know is in immediate danger, please dial 9-1-1</Text>
        </View>
        <View style={[styles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>

   

       <View style={PageStyles.main}>
       <CrisisCentres/>
       <CrisisInfo/>
       </View>

       <View style={PageStyles.main}>
       <CrisisOrganizations/>
       <CrisisPublications/>
       </View>
    
       
        </View>

        </>
       
    );
}

const PageStyles = StyleSheet.create({

    title: {
        
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
   
        
        

    },

    info: {
        fontSize: 14,
        color: '#525585',
    },

    main: {
        display: 'flex',
        flexDirection: 'row',
        padding: 3,
        gap: 6
        
    },
    header: {
    fontSize: 18,
    color: '#525585',
    paddingBottom: 10

    }



});