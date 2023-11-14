import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';


const DemoAnimation = () => {
    const animations = [
        require('../assets/Animations/demo_page1.json'),
        require('../assets/Animations/demo_page2.json'),
        require('../assets/Animations/demo_page3.json'),
    ];

    return (
        <View style={styles.container}>
            <Swiper 
                dotStyle={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: '#DDDDDD',
                    marginTop: -180
                }}
                activeDotStyle={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: '#525585',
                    marginTop: -180
                }}
            >
                {animations.map((animation, index) => (
                    <View key={index} style={styles.slide}>
                        <LottieView
                            source={animation}
                            autoPlay
                            loop
                        />
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DemoAnimation;
