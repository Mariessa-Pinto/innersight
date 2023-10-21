import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const Header = (props) => {
    const [pressed, setPressed] = useState(false);

    const navigation = useNavigation();

    const navigateTo = () => {
        navigation.navigate(props.navigate);
    };

    return (
        <View style={styles.header}>
            <View style={styles.align}>
                <TouchableWithoutFeedback 

                    onPress={navigateTo}
                    onPressIn={() => setPressed(true)}
                    onPressOut={() => setPressed(false)}
                >
                    <View style={[styles.fullBack, pressed && styles.buttonPressed]}>
                        <Image
                            source={require('../../atom/icons/backButtonArrow.png')}
                            style={styles.backButton}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.titleBox}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        width: 600
    },
    backButton: {
        width: 7,
        height: 11
    },
    title: {
        fontFamily: 'Lexend-Regular',
        fontSize: 18,
        fontWeight: '600',
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