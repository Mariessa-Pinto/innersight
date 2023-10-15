import globalStyles from '../../styles/global.js'
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';


import { useContext } from 'react';
import themeContext from '../../theme/themeContext';


export default function JournalIcon() {

    //Dark/Light Mode
    const theme = useContext(themeContext)

    return (
        <View style={styles.container}>
            <Svg width="100%" height="100%" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M46.0458 0H7.07323C4.89367 0 3.11898 1.77273 3.11898 3.95425V9.31371H1.7688C0.792029 9.31371 0 10.1057 0 11.0825C0 12.0593 0.792029 12.8513 1.7688 12.8513H3.11898V16.8272H1.7688C0.792029 16.8272 0 17.6192 0 18.596C0 19.5727 0.792029 20.3648 1.7688 20.3648H3.11898V24.3406H1.7688C0.792029 24.3406 0 25.1327 0 26.1094C0 27.0862 0.792029 27.8782 1.7688 27.8782H3.11898V31.8541H1.7688C0.792029 31.8541 0 32.6461 0 33.6229C0 34.5997 0.792029 35.3917 1.7688 35.3917H3.11898V39.3676H1.7688C0.792029 39.3676 0 40.1596 0 41.1364C0 42.1131 0.792029 42.9052 1.7688 42.9052H3.11898V48.3098C3.11898 50.4894 4.89171 52.2641 7.07323 52.2641H46.0458C48.2253 52.2641 50 50.4913 50 48.3098V3.95818C50 1.77862 48.2273 0.0039315 46.0458 0.0039315V0ZM6.65854 48.3059V42.9012H8.15023C9.127 42.9012 9.91903 42.1092 9.91903 41.1324C9.91903 40.1557 9.127 39.3636 8.15023 39.3636H6.65854V35.3878H8.15023C9.127 35.3878 9.91903 34.5957 9.91903 33.619C9.91903 32.6422 9.127 31.8502 8.15023 31.8502H6.65854V27.8743H8.15023C9.127 27.8743 9.91903 27.0823 9.91903 26.1055C9.91903 25.1287 9.127 24.3367 8.15023 24.3367H6.65854V20.3608H8.15023C9.127 20.3608 9.91903 19.5688 9.91903 18.592C9.91903 17.6153 9.127 16.8232 8.15023 16.8232H6.65854V12.8474H8.15023C9.127 12.8474 9.91903 12.0553 9.91903 11.0786C9.91903 10.1018 9.127 9.30978 8.15023 9.30978H6.65854V3.95032C6.65854 3.72037 6.84525 3.53367 7.07519 3.53367H36.9364C37.1664 3.53367 37.3531 3.72037 37.3531 3.95032V48.302C37.3531 48.5319 37.1664 48.7186 36.9364 48.7186H7.07519C6.84525 48.7186 6.65854 48.5319 6.65854 48.302V48.3059ZM46.4624 48.3059C46.4624 48.5358 46.2757 48.7225 46.0458 48.7225H40.8671C40.8671 48.7225 40.8671 48.7186 40.8671 48.7166C40.8809 48.581 40.8887 48.4454 40.8887 48.3078V3.95621C40.8887 3.81864 40.8809 3.68107 40.8671 3.54742C40.8671 3.54546 40.8671 3.54349 40.8671 3.54153H46.0458C46.2757 3.54153 46.4624 3.72823 46.4624 3.95818V48.3098V48.3059Z" 
                fill="#525585" />
            </Svg>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '45%',
        width: '100%',
        display: 'flex',

    }
});

