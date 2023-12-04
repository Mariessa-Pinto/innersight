import { StyleSheet, View } from 'react-native';
import TopGreyButton from '../../atom/Buttons/TopGreyButton';
import MiddleGreyButton from '../../atom/Buttons/MiddleGreyButtons';
import BottomGreyButton from '../../atom/Buttons/BottomGreyButtons';
import themeContext from '../../theme/themeContext';
import { useState, useContext } from 'react';

export default function ProfileGreyButtons({ section }) {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={styles.container}>
            {section === "settings" ?
                <View style={styles.box}>
                    <TopGreyButton
                        text="Personal Information"
                        image={theme.theme === "light" ?
                            require('../../atom/assets/settingicons/Home.png')
                            :
                            require('../../atom/assets/settingicons/darkMode/Home.png')}
                        arrow={true}
                        navigate="PersonalInformation"
                    />
                    <MiddleGreyButton
                        text="Accessibility Settings"
                        image={theme.theme === "light" ?
                            require('../../atom/assets/settingicons/Access.png')
                            :
                            require('../../atom/assets/settingicons/darkMode/Access.png')}
                        arrow={true}
                        navigate="Accessibility"
                    />
                    <MiddleGreyButton
                        text="Language"
                        image={theme.theme === "light" ?
                        require('../../atom/assets/settingicons/Language.png')
                        :
                        require('../../atom/assets/settingicons/darkMode/Language.png')}
                        arrow={true}
                        navigate="LanguageSettings"
                    />
                    <BottomGreyButton
                        text="Notifications"
                        image={theme.theme === "light" ?
                        require('../../atom/assets/settingicons/Notification.png')
                        :
                        require('../../atom/assets/settingicons/darkMode/Notification.png')}
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
                                    image={theme.theme === "light" ?
                                    require('../../atom/assets/settingicons/FAQ.png')
                                    :
                                    require('../../atom/assets/settingicons/darkMode/FAQ.png')}
                                    arrow={true}
                                    navigate="FaqPage"
                                />
                                <BottomGreyButton
                                    text="Crisis Support Resources"
                                    image={theme.theme === "light" ?
                                    require('../../atom/assets/settingicons/Crisis.png')
                                    :
                                    require('../../atom/assets/settingicons/darkMode/Crisis.png')}
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
                                                image={theme.theme === "light" ?
                                                require('../../atom/assets/settingicons/Privacy.png')
                                                :
                                                require('../../atom/assets/settingicons/darkMode/Privacy.png')}
                                                arrow={true}
                                                navigate="PrivacyPolicy"
                                            />
                                            <MiddleGreyButton
                                                text="Terms of Service"
                                                image={theme.theme === "light" ?
                                                require('../../atom/assets/settingicons/Terms.png')
                                                :
                                                require('../../atom/assets/settingicons/darkMode/Terms.png')}
                                                arrow={true}
                                                navigate="TermsPage"
                                            />
                                            <BottomGreyButton
                                                text="Artificial Intelligence Information"
                                                image={theme.theme === "light" ?
                                                require('../../atom/assets/settingicons/Ai.png')
                                                :
                                                require('../../atom/assets/settingicons/darkMode/Ai.png')}
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