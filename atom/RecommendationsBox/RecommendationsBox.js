import globalStyles from '../../styles/global'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeContext from '../../theme/themeContext';
import fontContext from '../../theme/fontContext';
import { useContext, useState } from 'react';
import { Image } from 'expo-image';

const RecommendationsBox = (props) => {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)
    const navigation = useNavigation();

    const navigateTo = () => {
        navigation.navigate(props.navigate);
    };


    return (
        <TouchableOpacity
            style={styles.container}
            onPress={navigateTo}
        >
            <View style={styles.textBox}>
                <Text style={[globalStyles.h4TextSemiBold, { color: '#525585' }]}>{props.title}</Text>
                <Text style={[globalStyles.captionText, { color: theme.color }]}>{props.text}</Text>
            </View>
            <View>
                <Image source={require('../icons/rightArrow.png')} style={styles.rightArrow} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 106,
        width: 328,
        backgroundColor: '#F2F2FD',
        borderRadius: 15,
        borderColor: '#EDEAEA',
        borderWidth: 1,
        borderColor: '#EDEAEA',
        elevation: 3,
        padding: 7,
        gap: 25,
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 25,
        alignItems: 'center'
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        width: 250,
        gap: 5
    },
    rightArrow: {
        width: 30,
        height: 30
    }
});

export default RecommendationsBox;