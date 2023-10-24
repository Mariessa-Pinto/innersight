import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Image} from 'react-native';
import { useState, useContext, useE } from 'react';
import themeContext from '../theme/themeContext';
import NavBar from '../molecules/Navigation/NavBar';
import DateToggle from '../atom/WordToggle/DateToggle';
import 'react-native-gesture-handler';
import Header from '../molecules/Header/Header';




export default function Stats({ navigation }) {
    const [darkMode, setDarkMode] = useState(false);
    const theme = useContext(themeContext);


      

    return (
        <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
            <ScrollView>
            <View style={styles.maincontent}>
                <Header title="Your Week in Review"/>
                <DateToggle/>
                <Image 
                source={require('../atom/assets/graph.png')}
                style={styles.graph}
                />
                <View style={styles.title}>
                <Text style={styles.header}>Identified Entries</Text>
                </View>
           
                <Text style={styles.header2}>2 entires were Identified where you felt discouraged</Text>
                <View style={styles.container}>
                    <Text style={styles.subheaders}>October 12, 2023</Text>
                    <Text style={styles.textinputs}>Today, I felt like I wanted to explode because I had a marketing midterm and the content was very hard to understand....</Text>
                </View>
                <View style={styles.container}>
                <Text style={styles.subheaders}>October 3, 2023</Text>
                <Text style={styles.textinputs}>Today, I felt like I wanted to explode because I had a marketing midterm and the content was very hard to understand....</Text>
                </View>
                
             
                <View style={styles.content2}>
                    <Text style={styles.header}>Recommendations</Text>
                <View style={styles.container}>
                    <Text style={styles.subheaders}>Sleeping Early</Text>
                    <Text style={styles.textinputs}>Try shifting your bedtime one hour earlier to improve your sleep quality and overall health</Text>
                </View>
                <View style={styles.container}>
                <Text style={styles.subheaders}>Self Care</Text>
                    <Text style={styles.textinputs}>At least once a week, treat yourself  to recharge and maintain a healthy work-life balance</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.subheaders}>Talk it Out</Text>
                    <Text style={styles.textinputs}>Try making time to regularly talk to someone you trust, as it can provide valuable emotional support.</Text>
                </View>

                </View>
                

            </View>

         </ScrollView>
         <NavBar navigation={navigation}/>

        </View>
    );
}

const styles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
  

    },
    title: {
        display: 'flex',
        textAlign: 'left'
    },

    header: {
        fontSize: 18
    },
    container: {
        height: 106,
        width: 328,
        backgroundColor: '#F2F2FD',
        borderRadius: 15,
        borderColor: '#EDEAEA',
        borderWidth: 1,
        borderColor: '#EDEAEA',
        elevation: 3,
        padding: 7

    },
    content2: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        paddingTop: 20,
        justifyContent: 'space-between',
        padding: 7
        
    },
    header2: {

    },
    textinputs: {
        fontSize: 12
    },
    subheaders: {
        fontWeight:'bold',
        fontSize: 15,
        color: '#525585'
    }
  
  
  


})