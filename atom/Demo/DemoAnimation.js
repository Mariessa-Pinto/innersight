import { StyleSheet, Text, View } from 'react-native';

const DemoAnimation = () => {
    //Send current index to demo through props

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const handleIndexChanged = (index) => {
    //     setCurrentIndex(index);
    // };

    return (
    <View style={styles.container}>
        <Text style={styles.text}>demo animation placeholder</Text>
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
        backgroundColor: '#EAEAEA',
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