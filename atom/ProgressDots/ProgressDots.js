import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const ProgressDots = ({ currentIndex, totalDemos }) => {

    return (
        <View style={styles.container}>
            {Array.from({ length: totalDemos }, (_, index) => (
                <Svg key={index} width="12" height="12">
                    <Circle
                        cx="6"
                        cy="6"
                        r="6"
                        fill={currentIndex === index ? '#525585' : '#DDDDDD'}
                    />
                </Svg>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        gap: 10,
    },
});

export default ProgressDots;