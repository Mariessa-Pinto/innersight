
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useContext } from 'react';
import themeContext from '../../theme/themeContext';


export default function NavBarContainer() {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <View style={styles.container}>
            <Image source={require('./navContainer.png')} style={{ height: '100%', width: '100%' }} />
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