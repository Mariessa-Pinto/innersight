import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';


const ChooseMascotMol = () => {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.touchBox}>
                    <Image
                        source={require('../../atom/Mascots/Panda.png')}
                        style={styles.panda}
                    />
                    <Text>Panda</Text>
                </View>
                <View style={styles.touchBox}>
                    <Image
                        source={require('../../atom/Mascots/Sloth.png')}
                        style={styles.sloth}
                    />
                    <Text>Sloth</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.touchBox}>
                    <Image
                        source={require('../../atom/Mascots/Otter.png')}
                        style={styles.otter}
                    />
                    <Text>Otter</Text>
                </View>
                <View style={styles.touchBox}>
                    <Image
                        source={require('../../atom/Mascots/Frog.png')}
                        style={styles.frog}
                    />
                    <Text>Frog</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        marginBottom: 10,
        marginTop: 10,
        padding: 16
    },
    panda: {
        height: 128,
        width: 130,
    },
    sloth: {
        height: 128,
        width: 136,
    },
    otter:{    
        height: 128,
        width: 148,
    },
    frog: {
        height: 128,
        width: 154,
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 400
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 400
    },
    touchBox: {
        display: 'flex',
        alignItems: 'center',
        gap: 15
    }
});

export default ChooseMascotMol;