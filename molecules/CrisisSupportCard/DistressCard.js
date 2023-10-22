import { StyleSheet, Text, View } from 'react-native';
import CrisisCardBtn from '../../atom/CrisisCardButton/CrisisCardBtn';

const DistressCard = () => {
    return(
        <View style={styles.container}>
            <CrisisCardBtn 
            headerText="Crisis Intervention & Suicide Prevention Centre of bc"
            numText="(604) 872-3311"
            text="Located at 763 E Broadway, Vancouver, BC, Open 24 hours"
            />
            <CrisisCardBtn 
             headerText="Crisis Intervention & Suicide Prevention Centre of bc"
             numText="(604) 872-3311"
             text="Located at 763 E Broadway, Vancouver, BC, Open 24 hours"
            />
            <CrisisCardBtn 
             headerText="Crisis Intervention & Suicide Prevention Centre of bc"
             numText="(604) 872-3311"
             text="Located at 763 E Broadway, Vancouver, BC, Open 24 hours"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 7,
    }
});

export default DistressCard;