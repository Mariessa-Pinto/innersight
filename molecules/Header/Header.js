import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {

    const navigation = useNavigation();

    const navigateTo = () => {
        navigation.navigate(props.navigate);
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={navigateTo}>
            <Image
                source={require('../../atom/icons/backButton.png')}
                style={styles.backButton}
            />
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 25,
        paddingTop: 30,
        paddingBottom: 50,
        width: 600
    },
    backButton: {
        width: 30,
        height: 30
    },
    title: {
        paddingLeft: 95,
        fontFamily: 'Lexend-Regular',
        fontSize: 18,
        fontWeight: '600'
    }

});

export default Header;