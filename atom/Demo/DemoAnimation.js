<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Image } from 'expo-image';


const DemoAnimation = () => {
    // const animation = require('../assets/Animations/demoOne.json');
    //Send current index to demo through props

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const handleIndexChanged = (index) => {
    //     setCurrentIndex(index);
    // };
    
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Animations/first_page_screenshot.png')}
                width={328}
                height={356}
            />
            {/* <LottieView
                source={animation}
                autoPlay
                loop
            /> */}
            {/* <Swiper
            loop={false}
            onIndexChanged={handleIndexChanged}
        >
        {/* Your demo content for each screen */}
            {/* <View>
            <Text>Demo 1</Text>
        </View>
        <View>
            <Text>Demo 2</Text>
        </View>
        <View>
            <Text>Demo 3</Text>
        </View>
        </Swiper> */}
=======
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';


const DemoAnimation = () => {
    const animations = [
        require('../assets/Animations/first_page.json'),
        require('../assets/Animations/second_page.json'),
        require('../assets/Animations/last_page.json'),
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
>>>>>>> 39b20511c6a22a36c81d2b7d3f0e36e5aa6c626e
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
<<<<<<< HEAD
        width: 328,
        height: 356,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        width: 100,
        textAlign: 'center'
    }
});

export default DemoAnimation;
=======
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
>>>>>>> 39b20511c6a22a36c81d2b7d3f0e36e5aa6c626e
