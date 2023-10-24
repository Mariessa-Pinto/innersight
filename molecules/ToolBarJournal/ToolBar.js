import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AiLightBtnTb from '../../atom/ToolBar/AiLightBtnTB';
import DrawingLightBtnTB from '../../atom/ToolBar/DrawingLightBtnTB';
import ExitLightBtnTB from '../../atom/ToolBar/ExitLightBtnTB';
import PhotoLightBtnTB from '../../atom/ToolBar/PhotoLightBtnTB';
import SpeechLightBtnTB from '../../atom/ToolBar/SpeechLightBtnTB';
import TypeLightBtnTB from '../../atom/ToolBar/TypeLightBtnTB';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'

const ToolBar = () => {
    const [showSettings, setShowSettings] = useState(false);

    const toggleSettings = () => {
        setShowSettings(!showSettings);
        console.log(showSettings)
    };

    const containerStyles = {
        height: showSettings ? 275 : 40,
    };

    return (
        <View style={[styles.container, containerStyles]}>
            <View style={styles.touchIcon}>
                {!showSettings && (
                    <TouchableOpacity onPress={toggleSettings}>
                        <SettingsLightBtnTB showSettings={showSettings}
                        />
                    </TouchableOpacity>
                )}
            </View>
            <View style={[styles.icons, showSettings && styles.expandedIcons]}>
                {showSettings && (
                    <>
                        <View style={styles.spacing}>
                            <AiLightBtnTb
                                navigate="AiToolJournal"
                            />
                        </View>
                        <DrawingLightBtnTB />
                        <PhotoLightBtnTB />
                        <TypeLightBtnTB />
                        <SpeechLightBtnTB />
                        <View style={styles.spacing}>
                            <TouchableOpacity
                            onPress={() => setShowSettings(true)}>
                                <ExitLightBtnTB />
                            </TouchableOpacity>

                        </View>
                    </>
                )}

            </View>
        </View>
    );
};

const SettingsLightBtnTB = ({ showSettings }) => {
    const buttonImage = showSettings
        ? require('../../atom/icons/SettingsLightOnPress.png')
        : require('../../atom/icons/SettingsLight.png');

    return (
        <Image source={buttonImage} style={styles.img} />
    );
};
const styles = StyleSheet.create({
    touchIcon: {
        position: 'absolute'
    },
    container: {
        position: 'absolute',
        right: -10,
        bottom: 0,
        width: 50,
        borderRadius: 30,
        backgroundColor: '#DDDDDD',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons: {
        height: 275,
        width: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    expandedIcons: {
        display: 'flex',
        // top: 0,
        right: -2,
    },
    img: {
        width: 40,
        height: 40
    },
    spacing: {
        marginTop: 10,
        marginBottom: 10
    }

});
export default ToolBar;