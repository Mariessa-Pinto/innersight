import { StyleSheet, Text, View, Image } from 'react-native';
import EntriesPageCard from '../../atom/EntriesPageCard/EntriesPageCard';

const EntriesCards = () => {
    return(
        <View style={styles.container}>
            <EntriesPageCard 
            headerText="Journal Entry Title"
            iconImage={require('../../atom/icons/Lock.png')}
            date="09/14/2023"
            text="Friends"
            />
            <EntriesPageCard 
            headerText="Journal Entry Title"
            iconImage={require('../../atom/icons/Lock.png')}
            date="09/14/2023"
            text="Tag"
            />
            <EntriesPageCard 
            headerText="Journal Entry Title"
            iconImage={require('../../atom/icons/Lock.png')}
            date="09/14/2023"
            text="School"
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
});
export default EntriesCards;