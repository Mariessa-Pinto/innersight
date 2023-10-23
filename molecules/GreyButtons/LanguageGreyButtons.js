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
                />
                <MiddleGreyButton
                    text="Chinese - Traditional"
                />
                <MiddleGreyButton
                    text="English (Canada)"
                />
                <MiddleGreyButton
                    text="Tagalog"
                />
                <MiddleGreyButton
                    text="French(Canada)"
                />
                <MiddleGreyButton
                    text="German"
                />
                <MiddleGreyButton
                    text="Hindi"
                />
                <MiddleGreyButton
                    text="Italian"
                />
                <MiddleGreyButton
                    text="Japanese"
                />
                <MiddleGreyButton
                    text="Korean"
                />
                <MiddleGreyButton
                    text="Portuguese"
                />
                <MiddleGreyButton
                    text="Spanish"
                />
                <BottomGreyButton
                    text="Vietnamese"
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