import { StyleSheet, Text, View, Image } from 'react-native';
import JournalPageCard from '../../atom/JournalPageCard/JournalPageCard';

const JournalCards = () => {
    return(
        <View style={styles.container}>
            <JournalPageCard 
            image={require('../..//atom/assets/Covers/GreenCover.png')}
            headerText="My Mood"
            text="Tracking my mood changes."
            navigate="Entries"
            />
            <JournalPageCard 
            image={require('../../atom/assets/Covers/OrangeCover.png')}
            iconImage={require('../../atom/icons/Lock.png')}
            headerText="All My Vents"
            text="Complaining about anything and everything."
            navigate="JournalPassword"
            />
            <JournalPageCard 
            image={require('../..//atom/assets/Covers/OrangeCover.png')}
            iconImage={require('../../atom/icons/Lock.png')}
            headerText="Therapy"
            text="Notes and techniques from therapy."
            navigate="JournalPassword"
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
export default JournalCards;