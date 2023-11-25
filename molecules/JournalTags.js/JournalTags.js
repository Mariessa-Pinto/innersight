import { StyleSheet, Text, View } from 'react-native';

const JournalTags = () => {

    return (
    <View style={styles.container}>
        <View style={styles.titleBox}>
            <Text style={styles.title}>Journal Title</Text>
        </View>
        <View style={styles.topRow}>
            <View style={styles.tagBoxBig}>
                <Text>Tag</Text>
            </View>
            <View style={styles.tagBoxSmall}>
                <Text>Tag</Text>
            </View>
            <View style={styles.tagBoxBig}>
                <Text>Tag</Text>
            </View>
        </View>
        <View style={styles.bottomRow}>
            <View style={styles.tagBoxBig}>
                <Text>Tag</Text>
            </View>
            <View style={styles.tagBoxBig}>
                <Text>Tag</Text>
            </View>
            <View style={styles.tagBoxSmall}>
                <Text>Tag</Text>
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 328,
        height: 136, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        gap: 10,
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    bottomRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    tagBoxBig: {
        width: 110,
        height: 30,
        backgroundColor: "#D5D7FF",
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tagBoxSmall: {
        width: 60,
        height: 30,
        backgroundColor: "#D5D7FF",
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Lexend-Regular',
        fontSize: 18,
        fontWeight: '600',
    },
    titleBox: {
        display: 'flex',
        alignItems: 'flex-start',
        width: 300
    }

});

export default JournalTags;