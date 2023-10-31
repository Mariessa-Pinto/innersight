import globalStyles from '../../styles/global.js'
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';


import { useContext } from 'react';
import themeContext from '../../theme/themeContext';


export default function HomeIcon({ icon }) {


    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <>
            {
                icon === "lightActive" ?
                    <View style={styles.container}>
                        <Svg width="100%" height="100%" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M21.0463 9.21531C21.0446 8.63174 20.7751 8.08073 20.3138 7.71673L12.3256 1.42101C11.6201 0.864995 10.6214 0.859151 9.90911 1.40682L1.71313 7.70921C1.26362 8.05485 1 8.58666 1 9.15019V20.1679C1 21.2457 1.88466 22.1198 2.97548 22.1198H7.56354C8.09078 22.1198 8.51832 21.6974 8.51832 21.1764V14.3706C8.51832 13.7444 9.03205 13.2377 9.66492 13.2377H12.3468C12.9196 13.2377 13.3844 13.6969 13.3844 14.2629V21.1555C13.3844 21.6882 13.8212 22.1206 14.3611 22.1206H19.1241C20.2022 22.1206 21.0751 21.2557 21.0725 20.1904L21.0455 9.21447L21.0463 9.21531Z" fill="#6164C3" stroke="#6164C3" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>

                    </View>
                    :
                    <View style={styles.container}>
                        <Svg width="100%" height="100%" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M21.0463 9.21531C21.0446 8.63174 20.7751 8.08073 20.3138 7.71673L12.3256 1.42101C11.6201 0.864995 10.6214 0.859151 9.90911 1.40682L1.71313 7.70921C1.26362 8.05485 1 8.58666 1 9.15019V20.1679C1 21.2457 1.88466 22.1198 2.97548 22.1198H7.56354C8.09078 22.1198 8.51832 21.6974 8.51832 21.1764V14.3706C8.51832 13.7444 9.03205 13.2377 9.66492 13.2377H12.3468C12.9196 13.2377 13.3844 13.6969 13.3844 14.2629V21.1555C13.3844 21.6882 13.8212 22.1206 14.3611 22.1206H19.1241C20.2022 22.1206 21.0751 21.2557 21.0725 20.1904L21.0455 9.21447L21.0463 9.21531Z" fill="#B6BAC0" stroke="#B6BAC0" stroke-linecap="round" stroke-linejoin="round" />
                        </Svg>
                    </View>
            }
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        height: '45%',
        width: '100%',
        display: 'flex',

    }
});


