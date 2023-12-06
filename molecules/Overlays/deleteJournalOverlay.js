import { StyleSheet, Text, View } from 'react-native';
import MediumBtnLightTxt from '../../atom/Buttons/MediumBtnLightTxt';
import MediumBtnDarkTxt from '../../atom/Buttons/MediumBtnDarkTxt';
import { Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

const DeleteJournalOverlay = () => {

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.inside}>
                    <View style={styles.line}></View>
                    <Text style={globalStyles.h4TextLight}>Are you sure you want to delete this journal?</Text>
                    <View style={styles.buttons}>
                        <MediumBtnLightTxt
                            text='Yes, Delete It'
                            navigate=''
                        />
                        <MediumBtnDarkTxt
                            text='Cancel'
                            navigate=''
                        />
                    </View>
                </View>
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
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default DeleteJournalOverlay;