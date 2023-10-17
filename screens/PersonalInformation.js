import globalStyles from '../styles/global'
import { Text, View, Button, Switch, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native';
import { useState, useContext } from 'react';
import themeContext from '../theme/themeContext';
import SmallBtn from '../atom/Buttons/SmallBtn';
import NavBar from '../molecules/NavBar';



export default function PersonalInformation(props) {
    const { onPress, title = 'Edit Photo' } = props;
    const { onPressTwo, titleTwo = 'Save Changes' } = props;
    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)


    return (
        <View style={[globalStyles.container, { backgroundColor: theme.backgroundColor, marginTop: 100 }]}>
            <ScrollView>
                <View style={styles.maincontent}>
                    <Text style={styles.header}>Personal Information</Text>
                    <View style={styles.profimage}>
                    </View>
                    <Pressable style={styles.button} onPress={onPress}>
                        <Text style={styles.label}>{title}</Text>
                    </Pressable>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        autoFocus={true}
                        autoCapitalize="words"
                        autoCorrect={true}
                        keyboardType="default"

                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        autoFocus={true}
                        autoCapitalize="words"
                        autoCorrect={true}
                        keyboardType="default"

                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        autoFocus={true}
                        autoCapitalize="words"
                        autoCorrect={true}
                        keyboardType="default"

                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        autoFocus={true}
                        autoCapitalize="words"
                        autoCorrect={true}
                        keyboardType="default"

                    />

                    <Pressable style={styles.button2} onPress={onPressTwo}>
                        <Text style={styles.label2}>{titleTwo}</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({

    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    profimage: {
        backgroundColor: '#d9d9d9',
        borderRadius: 50,
        height: 100,
        left: 0,
        top: 0,
        width: 100
    },
    header: {
        fontSize: 18,


    },
    button: {
        width: 114,
        height: 32,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#C5C7F7',
        padding: 5


    },
    button2: {
        width: 114,
        height: 32,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#6164C3',
        padding: 5,



    },
    label: {
        fontSize: 12,
        alignItems: 'center',

    },
    label2: {
        fontSize: 12,
        alignItems: 'center',
        color: 'white'

    },
    input: {
        height: 35,
        width: 328,
        borderColor: '#88898C'


    }



})


