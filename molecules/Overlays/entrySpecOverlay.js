import globalStyles from '../../styles/global'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ExtraLargeBtnLightTxt from '../../atom/Buttons/ExtraLargeBtnLightTxt';
import { useState } from 'react';

const EntrySpecOverlay = ({ onDeleteEntry, selectedEntry }) => {
    const [pressed, setPressed] = useState(false);

    const handleDeleteEntry = () => {
        onDeleteEntry(selectedEntry);
    };

    return (

        <View style={styles.container}>
            <View style={styles.inside}>
                <View style={styles.line}></View>
                <ExtraLargeBtnLightTxt
                    text='View AI Insights'
                    navigate=''
                />
                <ExtraLargeBtnLightTxt
                    text='Customize Entry'
                    navigate='CustomizeEntry'
                />
                <TouchableOpacity
                    onPressIn={() => setPressed(true)}
                    onPressOut={() => setPressed(false)}
                    onPress={handleDeleteEntry}
                    activeOpacity={1} 
                >
                    <View style={[styles.button, pressed && styles.buttonPressed]}>
                        <Text style={[globalStyles.btnTextLrg, styles.text]}>Delete Entry</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 410,
        height: 250,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#F2F2FD',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -200 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 30,
        position: 'absolute',
        bottom: -20,
        left: -20
    },
    inside: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
        marginTop: 10
    },
    line: {
        width: 65,
        height: 3,
        backgroundColor: '#88898C',
        marginBottom: 10
    },
    button: {
        width: 228,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#C5C7F7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
    },
    buttonPressed: {
        backgroundColor: '#D5D7FF', // Change the color when pressed
    },
    text: {
        color: '#3E3F42',
    },
});

export default EntrySpecOverlay;