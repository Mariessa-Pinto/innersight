import globalStyles from '../../styles/global'

import { StyleSheet, Text, View } from 'react-native';
import StatsBox from '../../atom/StatsBox/StatsBox';
import themeContext from '../../theme/themeContext';
import fontContext from '../../theme/fontContext';
import { useContext, useState } from 'react';

const IdentifiedEntries = () => {

        //Dark/Light Mode
        const [darkMode, setDarkMode] = useState(false)
        const theme = useContext(themeContext)
        //Font Size
        const fontTheme = useContext(fontContext)

    return (
        <View style={styles.maincontent}>
            <View style={styles.title}>
                <Text style={[globalStyles.h3Text, { color: theme.color }]}>Identified Entries</Text>
            </View>
            <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>2 entires were identified where you felt content</Text>
            <StatsBox   
                date="October 12, 2023"  
                text="Today, I felt like I wanted to explode because I had a marketing midterm and the content was very hard to understand...." 
                navigate="WriteEntry"
            />
            <StatsBox 
                date="October 3, 2023" 
                text ="Today, I felt like I wanted to explode because I had a marketing midterm and the content was very hard to understand...."    
                navigate="WriteEntry"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    maincontent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
    },
    title: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: 325
    },
});

export default IdentifiedEntries;