import { StyleSheet, Dimensions } from 'react-native';

const { height: windowHeight } = Dimensions.get('window');

export default StyleSheet.create({
    h1TextBold:{
        fontFamily: 'Lexend-Bold',
        fontSize: 28,
        marginBottom: 15
    },
    h2Text: {
        fontFamily: 'Lexend-Regular',
        fontSize: 22,
    },
    h2TextBold:{
        fontFamily: 'Lexend-Bold',
        fontSize: 22,
    },
    h3Text: {
        fontFamily: 'Lexend-Regular',
        fontSize: 18,
    },
    h3TextSemiBold:{
        fontFamily: 'Lexend-SemiBold',
        fontSize: 18,
    },
    h4TextLight:{
        fontFamily: 'Lexend-Light',
        fontSize: 15,
    },
    h4TextBold:{
        fontFamily: 'Lexend-Bold',
        fontSize: 15,
    },
    h4TextSemiBold:{
        fontFamily: 'Lexend-SemiBold',
        fontSize: 15,
    },
    boldBody: {
        fontFamily: 'Lexend-SemiBold',
        fontSize: 14,
    },
    bodyCopy:{
        fontFamily: 'Lexend-Light',
        fontSize: 14,
    },
    labelText:{
        fontFamily: 'Lexend-Regular',
        fontSize: 13,
    },
    labelTextLight:{
        fontFamily: 'Lexend-Light',
        fontSize: 13,
    },
    captionText:{
        fontFamily: 'Lexend-Regular',
        fontSize: 12,
        fontWeight: '300'
        // lineHeight: '139.5%'
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
    outerContainer:{
        height: '100%',
    },
    contentContainer: {
        height: '100%',
        minHeight: windowHeight,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        marginTop: '15%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 3,
        paddingBottom: 100,
    },
    contentContainerNoScroll: {
        height: windowHeight,
        minHeight: 685,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        marginTop: '15%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 3,
        paddingBottom: 100,
    },
    slider: {
        width: 100,
        height: 50,
    }
});