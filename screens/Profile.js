import styles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import Login from './Login';



export default function Profile() {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
    <ScrollView>
        <View style={[styles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
         <View style={ProfileStyles.maincontent}>
        
    <View style={ProfileStyles.topcontent}>

       <View style={ProfileStyles.profimage}>
        </View>
        <Text style={ProfileStyles.header}>John Smith</Text>
    </View>
    <View style={ProfileStyles.stats}>
        <View style={ProfileStyles.statview}>
            <Text style={ProfileStyles.label}>
                Entries Complete
            </Text>

        </View>
        <View style={ProfileStyles.statview}>
        <Text style={ProfileStyles.label}>
                Longest Streak
            </Text>

       </View>
       <View style={ProfileStyles.statview}>
       <Text style={ProfileStyles.label}>
               Words Written
            </Text>

      </View>
      </View>
    
      <View style={ProfileStyles.content2}>
      <Text style={ProfileStyles.settings}>
       settings
      </Text>
      <View style={ProfileStyles.settingbar}></View>
      <View style={ProfileStyles.settingbar}></View>
      <View style={ProfileStyles.settingbar}></View>
      <View style={ProfileStyles.settingbar}></View>
      </View>
  
    <View style={ProfileStyles.content2}>
    <Text style={ProfileStyles.settings}>
       Support
      </Text>
      <View style={ProfileStyles.settingbar}></View>
      <View style={ProfileStyles.settingbar}></View>
      <View style={ProfileStyles.settingbar}></View>
    </View>
    <View style={ProfileStyles.content2}>
    <Text style={ProfileStyles.settings}>
       Legal
      </Text>
      <View style={ProfileStyles.settingbar}></View>
      <View style={ProfileStyles.settingbar}></View>
      <View style={ProfileStyles.settingbar}></View>
    </View>
     
     <View style={ProfileStyles.content3}>

    <Pressable style={ProfileStyles.logout}>
        <Text style={ProfileStyles.buttonlabel}>Log Out</Text>
    </Pressable>
    </View>
          

    
       
    </View>
       
          

        </View>
        </ScrollView>
    );
}

const ProfileStyles = StyleSheet.create({


    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'


    },

    profimage: {
        backgroundColor: '#d9d9d9',
        borderRadius: 50,
        height: 100,
        left: 0,
        top: 0,
        width: 100
    },

    topcontent:{
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    stats: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        paddingTop: 20
    },
    statview: {
        backgroundColor: "#C5C7F7",
        borderRadius: 20,
        height: 100,
        width: 100

    },
    label: {
         padding: 15,
         fontSize: 13
          },
     settings: {
          textAlign: 'left',
          fontSize: 18,
          paddingTop: 5

          },
          content2: {
            display: 'flex',
            gap: 20

          },
          
    settingbar: {
            width: 328,
            height: 37,
            backgroundColor: '#525585',
            borderRadius: 10

          },
    logout: {
        width: 114,
        height: 32,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#6164C3'
    },
    buttonlabel: {
        color: 'white',
        fontSize: 12,
        alignItems: 'center',
        padding: 8
    },
    content3: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20
    }

    

});