import { StyleSheet, Text, View } from 'react-native';
import globalStyles from '../../styles/global';
import ExtraLargeBtnLightTxt from '../../atom/Buttons/ExtraLargeBtnLightTxt';
import { Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

const ChangesSavedOverlay = () => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.inside}>
                    <View style={styles.line}></View>
                    <Text style={globalStyles.h4TextLight}>Your changes have been saved.</Text>
                    <ExtraLargeBtnLightTxt
                        text='Go Back'
                        navigate={() => navigation.goBack()}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: 'auto',
        paddingBottom: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#F2F2FD',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 30,
    },
    outerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: -20,
        left: -20
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

export default ChangesSavedOverlay;