import { StyleSheet, View } from 'react-native';
import TopGreyButton from '../../atom/Buttons/TopGreyButton';
import MiddleGreyButton from '../../atom/Buttons/MiddleGreyButtons';
import BottomGreyButton from '../../atom/Buttons/BottomGreyButtons';

export default function ProfileGreyButtons({ navigation, section }) {
    return (
        <View style={styles.container}>

            {section === "settings" ?
                <View style={styles.box}>
                    <TopGreyButton
                        text="Personal Information"
                        image={require('../../atom/assets/settingicons/Home.png')}
                        arrow={true}
                        navigate="PersonalInformation"
                    />
                    <MiddleGreyButton
                        text="Accessibility Settings"
                        image={require('../../atom/assets/settingicons/Access.png')}
                        arrow={true}
                        navigate="Accessibility Settings"
                    />
                    <MiddleGreyButton
                        text="Language"
                        image={require('../../atom/assets/settingicons/Language.png')}
                        arrow={true}
                        navigate="LanguageSettings"
                    />
                    <BottomGreyButton
                        text="Notifications"
                        image={require('../../atom/assets/settingicons/Notification.png')}
                        arrow={true}
                        navigate="NotificationSettings"
                    />
                </View>
                :
                <>
                    {
                        section === "support" ?
                            <View style={styles.box}>
                                <TopGreyButton
                                    text="Frequently Asked Questions"
                                    image={require('../../atom/assets/settingicons/FAQ.png')}
                                    arrow={true}
                                    navigate="FaqPage"
                                />

                                <BottomGreyButton
                                    text="Crisis Support Resources"
                                    image={require('../../atom/assets/settingicons/Crisis.png')}
                                    arrow={true}
                                    navigate="CrisisSupport"
                                />
                            </View>
                            :
                            <>
                            {
                                section === "legal" ?
                                <View style={styles.box}>
                                    <TopGreyButton
                                        text="Privacy Policy"
                                        image={require('../../atom/assets/settingicons/Privacy.png')}
                                        arrow={true}
                                        navigate="PrivacyPolicy"
                                    />
                                    <MiddleGreyButton
                                        text="Terms of Service"
                                        image={require('../../atom/assets/settingicons/Terms.png')}
                                        arrow={true}
                                        navigate="TermsPage"
                                    />
                                    <BottomGreyButton
                                        text="Artificial Intelligence Information"
                                        image={require('../../atom/assets/settingicons/Ai.png')}
                                        arrow={true}
                                        navigate="AiPage"
                                    />
                                </View>
                                :
                                <Text>Error!</Text>
                    }
                    </>
            }
                </>

            }


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    box: {
        width: '100%'
        
    }
});