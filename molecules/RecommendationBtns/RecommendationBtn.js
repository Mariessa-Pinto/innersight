import { StyleSheet, Text, View, Image } from 'react-native';
import RecommendationButton from '../../atom/RecommendationButtons/RecommendationButtons';

const RecommendationBtn = () => {
    return (
        <View style={styles.container}>
            <RecommendationButton
                image={require('../..//atom/Mascots/otterSleep.png')}
                text="Sleeping Early"
            />
            <RecommendationButton
                image={require('../..//atom/Mascots/frogMeditate.png')}
                text="Practice Self-Care"
            />
            <RecommendationButton
                image={require('../..//atom/Mascots/pandaExercise.png')}
                text="Exercise"
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        marginTop: 10
    },
});
export default RecommendationBtn;