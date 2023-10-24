import { StyleSheet, Text, View, Image } from 'react-native';

const AiInsights = () => {
    return (
        <View style={styles.container}>
            <Text>
                Feeling stressed, you are grappling with the looming pressure of upcoming midterms, hindering both your sleep and overall well-being. Despite the pleasant weather, an underlying frustration persits, reflecting the intense emotional toll of the approaching exams. This entry ecnapsulates a sense of fatigue and anxiety as you are navigating the challenges of a demanding acadmeic season.
            </Text>
            <Text>
                Here are some recommendations you may consider to alleviate these negative emotions:
            </Text>
            <RecommendationBtn />
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
export default AiInsights;