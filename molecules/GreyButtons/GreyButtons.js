import { StyleSheet, Text, View } from 'react-native';
import TopGreyButton from '../../atom/Buttons/TopGreyButton';
import MiddleGreyButton from '../../atom/Buttons/MiddleGreyButtons';
import BottomGreyButton from '../../atom/Buttons/BottomGreyButtons';

const GreyButtons = () => {
    return(
        <View style={styles.container}>
           <View style={styles.box}>
            <TopGreyButton 
            text="Publication"
            />
            <MiddleGreyButton 
            text="Publication"
            />
            <MiddleGreyButton 
            text="Publication"
            />
            <MiddleGreyButton 
            text="Publication"
            />
            <MiddleGreyButton 
            text="Publication"
            />
            <MiddleGreyButton 
            text="Publication"
            />
            <MiddleGreyButton 
            text="Publication"
            />
            <MiddleGreyButton 
            text="Publication"
            />
            <BottomGreyButton
            text="Publication"
            />

           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
});

export default GreyButtons;