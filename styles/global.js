import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    container: {
        width: '100%',
        height: '95%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#FDFDFD',
        elevation: 3,
        position: 'absolute',
        bottom: 0
    },
    
    h1TextBold:{
        fontFamily: 'Lexend-Regular',
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 15
    },

    h2Text: {
        fontFamily: 'Lexend-Regular',
        fontSize: 22,
    },

    h2TextBold:{
        fontFamily: 'Lexend-Regular',
        fontSize: 22,
        fontWeight: '700'
    },
    h3Text: {
        fontFamily: 'Lexend-Regular',
        fontSize: 18,
        marginBottom: 10,
        marginTop: 20
    },

    h3TextSemiBold:{
        fontFamily: 'Lexend-Regular',
        fontSize: 18,
        fontWeight: '600'
    },
    h4TextLight:{
        fontFamily: 'Lexend-Regular',
        fontSize: 15,
        fontWeight: '300'
    },
    h4TextBold:{
        fontFamily: 'Lexend-Regular',
        fontSize: 15,
        fontWeight: '700'
    },
    h4TextSemiBold:{
        fontFamily: 'Lexend-Regular',
        fontSize: 15,
        fontWeight: '600'
    },
    bodyCopy:{
        fontFamily: 'Lexend-Regular',
    },
    labelText:{
        fontFamily: 'Lexend-Regular',
        fontSize: 13,
    },
    labelTextLight:{
        fontFamily: 'Lexend-Regular',
        fontSize: 13,
        fontWeight: '300'
    },
    captionText:{
        fontFamily: 'Lexend-Regular',
        fontSize: 12,
        lineHeight: '139.5%'
    },
    btnTextSml:{
        fontFamily: 'Lexend-Regular',
        fontSize: 12,
    },
    btnTextMed:{
        fontFamily: 'Lexend-Regular',
        fontSize: 13,
    },
    btnTextLrg:{
        fontFamily: 'Lexend-Regular',
        fontSize: 14,
    },
    listText:{
        fontFamily: 'Lexend-Regular',
        fontSize: 12,
        lineHeight: 25
    },
    contentContainer: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 30,
        flex: 1
    },
    navContainer: {
        height: '18%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    slider: {
        width: 100,
        height: 50,
    }
});