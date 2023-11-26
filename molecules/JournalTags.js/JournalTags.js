import { StyleSheet, Text, View } from 'react-native';
import Tag from '../../atom/Tag/Tag'
import { useState, useContext } from 'react';
import themeContext from '../../theme/themeContext';
import globalStyles from '../../styles/global';


const JournalTags = ({ title, tags }) => {


    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={globalStyles.h3TextSemiBold}>{title}</Text>
            </View>
            <View style={styles.tags}>
                {tags && tags.map((i, index) => {
                    return (
                        <Tag
                        key={index}
                        text={i} />
                    )
                })
                }
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 20,
        gap: 10,
    },
    tags: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWarp: 'wrap'
    },
    titleBox: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%'
    }

});

export default JournalTags;