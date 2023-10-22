import { StyleSheet, Text, View } from 'react-native';
import CrisisCardBtn from '../../atom/CrisisCardButton/CrisisCardBtn';

const OrganizationCard = () => {
    return(
        <View style={styles.container}>
            <CrisisCardBtn 
            headerText="Canadian Mental Health Association of British Columbia"
            numText="(604) 688-3234"
            text="Located at 905 - 1130 West Pender St., Vancouver"
            />
            <CrisisCardBtn 
             headerText="Canadian Mental Health Association of British Columbia"
             numText="(604) 688-3234"
             text="Located at 905 - 1130 West Pender St., Vancouver"
            />
            <CrisisCardBtn 
             headerText="Canadian Mental Health Association of British Columbia"
             numText="(604) 688-3234"
             text="Located at 905 - 1130 West Pender St., Vancouver"
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
        marginTop: 40
    }
});

export default OrganizationCard;