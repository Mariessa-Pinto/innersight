import styles from '../styles/global'
import { Button, View, Text, Image } from 'react-native';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';


import { useContext } from 'react';
import themeContext from '../theme/themeContext';

export default function NavBar() {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <View style={styles.navBarContainer}>
            <Svg width="100%" height="100%" viewBox="0 0 360 40">
                <Path
                    d="M359.95,26.02c0-14.37-11.73-26.02-26.2-26.02h-111.56c-.07,0-.2,0-.2,0-4.98.66-9.07,4.29-10.32,9.16-3.61,14.05-16.44,24.43-31.71,24.43v.04c-15.26-.02-28.07-10.39-31.68-24.43-1.25-4.87-5.34-8.49-10.32-9.16,0,0-.13,0-.2,0H26.2C11.73.04,0,11.69,0,26.06v28.98h180v-.05h179.97v-28.98h-.02Z"
                    fill="purple"
                />
            </Svg>

        </View>
    );
};
