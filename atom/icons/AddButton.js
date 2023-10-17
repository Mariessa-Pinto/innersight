import globalStyles from '../../styles/global.js'
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';


import { useContext } from 'react';
import themeContext from '../../theme/themeContext';


export default function AddButton() {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <View style={styles.container}>
            <Svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 56 56" style="enable-background:new 0 0 56 56;" fill="none">
                <Circle class="st0" cx="28" cy="28" r="28" fill='#6164C3' />
                <Path class="st1" d="M39.2,28H16.8" fill='none' stroke='#fdfdfd' strokeWidth='3.5' strokeLinecap='round'/>
                <Path class="st1" d="M28,16.8v22.4" fill='none' stroke='#fdfdfd' strokeWidth='3.5' strokeLinecap='round' />
            </Svg>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

        marginBottom: '75%'

    }
});


