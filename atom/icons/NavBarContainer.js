
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
            <Svg width="100%" height="100%" viewBox="0 0 368 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M363.98 33.0011C363.98 18.6415 352.249 7 337.778 7H226.209C226.139 7 226.009 7.01 226.009 7.01C221.028 7.66952 216.938 11.2969 215.688 16.1633C212.077 30.2031 199.246 40.5756 183.975 40.5756V40.6156C168.714 40.5956 155.903 30.2331 152.292 16.2033C151.042 11.3369 146.952 7.71948 141.971 7.04997C141.971 7.04997 141.841 7.03998 141.771 7.03998H30.2022C15.731 7.03998 4 18.6815 4 33.0411V62H184.015V61.95H364V32.9911L363.98 33.0011Z" fill="#D5D7FF" />
            </Svg>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '12%',
        position: 'absolute',
        bottom: 0

    }
});