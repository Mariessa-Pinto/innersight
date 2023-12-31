import { StyleSheet, View } from 'react-native';
import CrisisBtn from '../../atom/CrisisButtons/CrisisBtn';

const CrisisSupportBtns = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <CrisisBtn
                    text="Crisis & Information Lines"
                    navigate="CrisisandInformation"
                />
                <CrisisBtn
                    text="Local Distress Centres"
                    navigate="LocalDistress"
                />
            </View>
            <View style={styles.box}>
                <CrisisBtn
                    text="Organizations"
                    navigate="Organizations"
                />
                <CrisisBtn
                    text="Information & Publications"
                    navigate="InfoandPublications"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'center',
        marginTop: 10
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
    },
});

export default CrisisSupportBtns;