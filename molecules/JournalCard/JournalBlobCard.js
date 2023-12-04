import { StyleSheet, View, Image } from 'react-native';
import LottieView from 'lottie-react-native';

export default function JournalBlobCard({
    imgSource,
}) {

    //Animation
    const animation = require('../../atom/assets/Animations/blob_animation.json');

    return (
        <View style={styles.container}>
            <LottieView
                source={animation}
                autoPlay
                loop
                style={styles.animationStyle}
            />
            <Image style={styles.journalImg}
                source={imgSource} />
        </View>
    )
}

const styles = StyleSheet.create({
    journalImg: {
        width: 148,
        height: 194,
        objectFit: 'contain',
    },
    animationStyle: {
        position: 'absolute',
        width: 300,
        top: -30
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15
    }
});