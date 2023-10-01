import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import styles from '../styles/global'

export default function About({navigation}) {
    return (
        <View style={styles.container}>
            <Text>About Page</Text>
            <StatusBar style="auto" />
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
        </View>
    );
}