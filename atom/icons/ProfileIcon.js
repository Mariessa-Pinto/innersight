import globalStyles from '../../styles/global.js'
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';


import { useContext } from 'react';
import themeContext from '../../theme/themeContext';


export default function ProfileIcon({icon}) {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <>
            {
                icon === "lightActive" ?
                    <View style={styles.container}>
                        <Svg width="100%" height="100%" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M9.82814 10.949C12.4913 10.949 14.6502 8.72186 14.6502 5.97451C14.6502 3.22717 12.4913 1 9.82814 1C7.165 1 5.0061 3.22717 5.0061 5.97451C5.0061 8.72186 7.165 10.949 9.82814 10.949Z" fill="#6164C3" stroke="#6164C3" stroke-width="0.197611" stroke-miterlimit="10" />
                            <Path d="M14.6097 12.3027C12.3499 12.3027 11.821 13.3228 9.63608 13.3228C7.85467 13.3228 7.49417 12.2314 5.38005 12.2314C2.88439 12.2314 0.313753 15.0528 1.16698 22.2917C1.23857 22.8999 2.26278 23.0025 2.93576 22.9999L10.2366 22.9721L16.8291 22.9703C17.4179 22.9703 18.3141 22.9008 18.3924 22.3699C19.4006 15.5542 17.38 12.3044 14.6089 12.3044L14.6097 12.3027Z" fill="#6164C3" stroke="#6164C3" stroke-width="0.197611" stroke-miterlimit="10" />
                        </Svg>
                    </View>
                    : <View style={styles.container}>
                        <Svg width="100%" height="100%" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M9.82814 10.949C12.4913 10.949 14.6502 8.72186 14.6502 5.97451C14.6502 3.22717 12.4913 1 9.82814 1C7.165 1 5.0061 3.22717 5.0061 5.97451C5.0061 8.72186 7.165 10.949 9.82814 10.949Z" fill="#B6BAC0" stroke="#B6BAC0" stroke-width="0.197611" stroke-miterlimit="10" />
                            <Path d="M14.6097 12.3027C12.3499 12.3027 11.821 13.3228 9.63608 13.3228C7.85467 13.3228 7.49417 12.2314 5.38005 12.2314C2.88439 12.2314 0.313753 15.0528 1.16698 22.2917C1.23857 22.8999 2.26278 23.0025 2.93576 22.9999L10.2366 22.9721L16.8291 22.9703C17.4179 22.9703 18.3141 22.9008 18.3924 22.3699C19.4006 15.5542 17.38 12.3044 14.6089 12.3044L14.6097 12.3027Z" fill="#B6BAC0" stroke="#B6BAC0" stroke-width="0.197611" stroke-miterlimit="10" />
                        </Svg>
                    </View>

            }</>

    );
};

const styles = StyleSheet.create({
    container: {
        height: '45%',
        width: '100%',
        display: 'flex',

    }
});


