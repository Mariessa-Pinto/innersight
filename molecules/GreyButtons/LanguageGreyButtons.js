import { StyleSheet, View } from 'react-native';
import TopGreyButton from '../../atom/Buttons/TopGreyButton';
import MiddleGreyButton from '../../atom/Buttons/MiddleGreyButtons';
import BottomGreyButton from '../../atom/Buttons/BottomGreyButtons';

export default function LanguageGreyButtons() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TopGreyButton
                    text="Chinese - Simplified"
                    navigate="LanguageSettings"
                />
                <MiddleGreyButton
                    text="Chinese - Traditional"
                    navigate="LanguageSettings"
                />
                <MiddleGreyButton
                    text="English (Canada)"
                    navigate="LanguageSettings"
                />
                <MiddleGreyButton
                    text="Tagalog"
                    navigate="LanguageSettings"
                />
                <MiddleGreyButton
                    text="French(Canada)"
                    navigate="LanguageSettings"
                />
                <MiddleGreyButton
                    text="German"
                    navigate="LanguageSettings"
                />
                <MiddleGreyButton
                    text="Hindi"
                    navigate="LanguageSettings"
                />
                <MiddleGreyButton
                    text="Italian"
                    navigate="LanguageSettings"
                />
                <MiddleGreyButton
                    text="Japanese"
                    navigate="LanguageSettings"
                />
                <MiddleGreyButton
                    text="Korean"
                    navigate="LanguageSettings"
                />
                <MiddleGreyButton
                    text="Portuguese"
                    navigate="LanguageSettings"
                />
                <MiddleGreyButton
                    text="Spanish"
                    navigate="LanguageSettings"
                />
                <BottomGreyButton
                    text="Vietnamese"
                    navigate="LanguageSettings"
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
        marginTop: 30,
    },
    box:{
        width: '100%'
    }
});