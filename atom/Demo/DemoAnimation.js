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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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