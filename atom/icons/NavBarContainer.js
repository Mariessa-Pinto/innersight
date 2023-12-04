
import { StyleSheet, View, Image } from 'react-native';
import * as React from 'react';
import { useContext } from 'react';
import themeContext from '../../theme/themeContext';

export default function NavBarContainer() {
    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <View style={styles.container}>
            {theme.theme === "dark" ?
                <Image source={require('./navContainer-dark.png')} style={{ height: '100%', width: '100%' }} />
                :
                <Image source={require('./navContainer.png')} style={{ height: '100%', width: '100%' }} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
    }
});