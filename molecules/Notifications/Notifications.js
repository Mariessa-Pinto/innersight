import { StyleSheet, Text, View } from 'react-native';
import Toggle from '../../atom/ToggleSwitch/Toggle';


const Notifications = () => {

    return (
    <View style={styles.container}>
        <View style={styles.notification}>
            <Text>Journal Reminders</Text>
            <Toggle/>
        </View>
        <View style={styles.notification}>
            <Text>Reminder</Text>
            <Toggle/>
        </View>
        <View style={styles.notification}>
            <Text>Reminder</Text>
            <Toggle/>
        </View>
        <View style={styles.notification}>
            <Text>Reminder</Text>
            <Toggle/>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        marginBottom: 10,
        marginTop: 60
    },
    notification: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 355,
        height: 47,
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15
    }

});

export default Notifications;