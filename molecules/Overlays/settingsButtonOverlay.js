import { StyleSheet, View } from 'react-native';
import ExtraLargeBtnLightTxt from '../../atom/Buttons/ExtraLargeBtnLightTxt';
import ExtraLargeBtnDarkTxt from '../../atom/Buttons/ExtraLargeBtnDarkTxt';
import { Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

const SettingsButtonOverlay = () => {

    return (
        <View style={styles.container}>
            <View style={styles.inside}>
                <View style={styles.line}></View>
                <ExtraLargeBtnLightTxt
                    text='Select Multiple Entries'
                    navigate=''
                />
                <ExtraLargeBtnDarkTxt
                    text='Manage Tags'
                    navigate='TagManager'
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

export default SettingsButtonOverlay;