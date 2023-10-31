import { StyleSheet, Text, View, Image } from 'react-native';
import EntriesPageCard from '../../atom/EntriesPageCard/EntriesPageCard';

const EntriesCards = () => {
    return(
        <View style={styles.container}>
            <EntriesPageCard 
            headerText="Trip to Seattle"
            iconImage={require('../../atom/icons/Lock.png')}
            date="09/14/2023"
            excerpt="This is a journal that I am writing."
            navigate="WriteEntry"
            />
            <EntriesPageCard 
            headerText="School Day"
            iconImage={require('../../atom/icons/Lock.png')}
            date="09/14/2023"
            excerpt="This is a journal that I am writing again."
            navigate="WriteEntry"
            />
            <EntriesPageCard 
            headerText="Presentation Day"
            iconImage={require('../../atom/icons/Lock.png')}
            date="09/14/2023"
            excerpt="This is a journal that I am writing again again."
            navigate="WriteEntry"
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
});
export default EntriesCards;