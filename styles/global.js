import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightContainer: {
        backgroundColor: '#fff',
    },
    darkContainer: {
        backgroundColor: '#000',
    },
    lightThemeText: {
        color: '#000',
    },
    darkThemeText: {
        color: '#fff',
    },
    slider: {
        width: 100,
        height: 50,
    }
});