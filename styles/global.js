import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    slider: {
        width: 100,
        height: 50,
    },
    navBarContainer: {
        width: "100%",
        height: "15%",
        backgroundColor: 'pink',
        position: 'absolute',
        bottom: 0,
    }
});