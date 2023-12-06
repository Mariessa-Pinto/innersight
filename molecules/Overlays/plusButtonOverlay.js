import { StyleSheet, View } from 'react-native';
import ExtraLargeBtnLightTxt from '../../atom/Buttons/ExtraLargeBtnLightTxt';
import { Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

const plusButtonOverlay = () => {

    
    return (
        <View style={styles.container}>
            <View style={styles.inside}>
                <View style={styles.line}></View>
                <ExtraLargeBtnLightTxt
                    text='New Journal Entry'
                    navigate='WriteEntry'
                />
                <ExtraLargeBtnLightTxt
                    text='New Journal'
                    navigate='NewJournal'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: 'auto',
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
        position: 'absolute',
        bottom: -20,
        left: -20,

    },
    inside: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
        marginTop: 10,
        paddingBottom: 25
    },
    line: {
        width: 65,
        height: 3,
        backgroundColor: '#88898C',
        marginBottom: 10
    }
});

export default plusButtonOverlay;