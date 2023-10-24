import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import globalStyles from '../../styles/global';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const Header = ({
    navigation,
    title }) => {
    const [pressed, setPressed] = useState(false);


    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
                style={styles.touchContainer}
                activeOpacity={1}
            >
                <View style={[styles.fullBack, pressed && styles.buttonPressed]}>
                    <Image
                        source={require('../../atom/icons/backButtonArrow.png')}
                        style={styles.backButton}
                    />
                </View>
            </TouchableOpacity>
            <Text style={[styles.title, globalStyles.h3Text]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingBottom: 40,
        paddingTop: 40,
        width: '100%',
    },
    backButton: {
        width: 7,
        height: 11,
        position: 'absolute',
    },
    touchContainer:{
        zIndex: 1,
        position: 'absolute',
        paddingHorizontal: 25,
        paddingVertical: 40,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        marginLeft: 25
    },
    fullBack: {
        width: 30,
        height: 30,
        backgroundColor: '#DDDDDD',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonPressed: {
        backgroundColor: '#D5D7FF', // Change the color when pressed
    },
    titleBox: {
        display: 'flex',
        alignItems: 'center',
    },
    align: {
        marginRight: 20
    }

});

export default Header;