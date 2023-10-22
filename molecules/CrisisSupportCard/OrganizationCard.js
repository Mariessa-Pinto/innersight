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
             headerText="Kelty Mental Health Resource Centre"
             numText="(604) 875-2084"
             text="A resource for children, youth and families related to mental health and substance use issues located at the BC Children’s Hospital site."
            />
            <CrisisCardBtn 
             headerText="HealthLinkBC"
             numText="8-1-1"
             text="HealthLink BC helps you learn about health topics, check your symptoms and find the health services and resources that you need for healthy living."
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

export default OrganizationCard;