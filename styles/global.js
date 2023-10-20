import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#FDFDFD',
        elevation: 3,
        position: 'absolute',
        flex:1,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 30,
        paddingBottom: 100
    },
    slider: {
        width: 100,
        height: 50,
    }
});