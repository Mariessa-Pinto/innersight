
import globalStyles from '../../styles/global'
import { StyleSheet, Text, View } from 'react-native';
import RecommendationsBox from '../../atom/RecommendationsBox/RecommendationsBox';
import themeContext from '../../theme/themeContext';
import fontContext from '../../theme/fontContext';
import { useContext, useState } from 'react';

const StatRecommendations = () => {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)
    //Font Size
    const fontTheme = useContext(fontContext)

    return (
        <View style={styles.content2}>
            <Text style={[globalStyles.h3Text, { color: theme.color }]}>Recommendations</Text>
            <RecommendationsBox
                title="Sleeping Early"
                text="Try shifting your bedtime one hour earlier to improve your sleep quality and overall health"
                navigate="Sleeping"
            />
            <RecommendationsBox
                title="Self Care"
                text="At least once a week, treat yourself  to recharge and maintain a healthy work-life balance"
                navigate="SelfCare"
            />
            <RecommendationsBox
                title="Talk it Out"
                text="Try making time to regularly talk to someone you trust, as it can provide valuable emotional support."
                navigate="SelfCare"
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
        textAlign: 'left'
    },
    header: {
        fontSize: 18
    },
    container: {
        height: 106,
        width: 328,
        backgroundColor: '#F2F2FD',
        borderRadius: 15,
        borderColor: '#EDEAEA',
        borderWidth: 1,
        borderColor: '#EDEAEA',
        elevation: 3,
        padding: 7
    },
    content2: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        paddingTop: 20,
        justifyContent: 'space-between',
        padding: 7
    },
    header2: {
    },
    textinputs: {
        fontSize: 12
    },
    subheaders: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#525585'
    },
});

export default StatRecommendations;