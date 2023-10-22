import { StyleSheet, Text, View } from 'react-native';
import ExtraLargeBtnLightTxt from '../../atom/Buttons/ExtraLargeBtnLightTxt';

const changesSavedOverlay = () => {

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.inside}>
                    <View style={styles.line}></View>
                    <Text>Your changes have been saved.</Text>
                    <ExtraLargeBtnLightTxt 
                        text='Go Back'
                        navigate=''
                    /> 
                </View>  
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        width: 410,
        height: 175,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#F2F2FD',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -200 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 30,
    },
    outerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    inside: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
        marginTop: 10
    },
    line: {
        width: 65,
        height: 3,
        backgroundColor: '#88898C',
        marginBottom: 10
    }

});

export default changesSavedOverlay;