import { StyleSheet, Text, View } from 'react-native';
import Toggle from '../../atom/ToggleSwitch/Toggle';
import globalStyles from '../../styles/global';
import { useState, useContext } from 'react';
import themeContext from '../../theme/themeContext';
import fontContext from '../../theme/fontContext';

const Notifications = ({
    title,
    valueChange2,
    valueEnabled2
}) => {

        //Dark/Light Mode
        const theme = useContext(themeContext)
    
        //Font Size
        const fontTheme = useContext(fontContext)

    return (
    <View style={styles.container}>
        <View style={[styles.notification,{backgroundColor: theme.backgroundGreyLight}]}>
            <Text style={[globalStyles.text, { 
                color: theme.color, 
                fontSize: fontTheme.fontSize }]}>{title}</Text>
            <Toggle
            valueChange={valueChange2}
            valueEnabled={valueEnabled2}/>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        marginBottom: 10,
        marginTop: 60
    },
    notification: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 355,
        height: 47,
        borderRadius: 10,
        paddingHorizontal: 15,
    }

});

export default Notifications;