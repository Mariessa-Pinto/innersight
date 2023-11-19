import globalStyles from '../../styles/global'

import themeContext from '../../theme/themeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const ChooseMascotMol = () => {

    //Dark/Light Mode
    const [darkMode, setDarkMode] = useState(false)
    const theme = useContext(themeContext)

    //Select Mascot
    const [selectedMascot, setSelectedMascot] = useState(null);

    const handleMascotSelect = async (mascotName) => {
        setSelectedMascot(mascotName);
        try {
            await AsyncStorage.setItem('selectedMascot', mascotName);
        } catch (error) {
            console.error('Error saving mascot to AsyncStorage:', error);
        }
    };

    const mascotData = {
        Panda: {
            image: require('../../atom/Mascots/Panda.png'),
            width: 113,
            height: 108,
            backgroundWidth: "140%",
            backgroundHeight: "80%",
        },
        Sloth: {
            image: require('../../atom/Mascots/Sloth.png'),
            width: 110,
            height: 101,
            backgroundWidth: '140%',
            backgroundHeight: '77%',
        },
        Otter: {
            image: require('../../atom/Mascots/Otter.png'),
            width: 110,
            height: 99,
            backgroundWidth: '140%',
            backgroundHeight: '83%',
        },
        Frog: {
            image: require('../../atom/Mascots/Frog.png'),
            width: 107, 
            height: 88,
            backgroundWidth: '140%',
            backgroundHeight: '81%',
        },
    };

    const backgroundImg = require('../../atom/Mascots/mascotBackground.png')

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                {renderMascotBox('Panda')}
                {renderMascotBox('Sloth')}
            </View>
            <View style={styles.bottomContainer}>
                {renderMascotBox('Otter')}
                {renderMascotBox('Frog')}
            </View>
        </View>
    );

    function renderMascotBox(mascotName) {
        const isSelected = selectedMascot === mascotName;
        const mascot = mascotData[mascotName];

        return (
            <TouchableOpacity
                style={[styles.touchBox, isSelected && styles.selectedMascot]}
                onPress={() => handleMascotSelect(mascotName)}
            >
                {isSelected && (
                    <Image
                        source={backgroundImg}
                        style={{
                            width: mascot.backgroundWidth,
                            height: mascot.backgroundHeight,
                            ...styles.backgroundImage,
                        }}
                    />
                )}
                <Image
                    source={mascot.image}
                    style={{
                        width: mascot.width,
                        height: mascot.height,
                    }}
                />
                <Text style={[globalStyles.bodyCopy, { color: theme.color }]}>{mascotName}</Text>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        marginBottom: 10,
        marginTop: 10,
        padding: 16,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: -20,
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 400,
        alignItems: 'flex-end',
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 400,
        alignItems: 'flex-end',
    },
    touchBox: {
        display: 'flex',
        alignItems: 'center',
        gap: 15,
        position: 'relative',
    },
});

export default ChooseMascotMol;
