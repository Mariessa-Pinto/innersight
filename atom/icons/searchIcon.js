import { View } from 'react-native';
import { Image } from 'expo-image';

const searchIcon = () => {
    return (
        <View>
            <Image source={require('./searchIcon.png')} width={12}
                height={12} />
        </View>
    );
};

export default searchIcon;