import { StyleSheet, Text, View, Image } from 'react-native';

export default function JournalBlobCard({
    imgSource,
    journalTitle
}) {
    return (
        <View style={styles.container}>
            <Image style={styles.blobImg}
                source={require('../../atom/assets/journalBlob.png')} />
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
    blobImg: {
        position: 'absolute'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15
    }
});