import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AiLightBtnTb from '../../atom/ToolBar/AiLightBtnTB';
import DrawingLightBtnTB from '../../atom/ToolBar/DrawingLightBtnTB';
import PhotoLightBtnTB from '../../atom/ToolBar/PhotoLightBtnTB';
import SpeechLightBtnTB from '../../atom/ToolBar/SpeechLightBtnTB';
import TypeLightBtnTB from '../../atom/ToolBar/TypeLightBtnTB';
import { useState } from 'react'

const ToolBar = () => {



    const [showSettings, setShowSettings] = useState(false);

    const containerStyles = {
        height: showSettings ? 275 : 35,
        width: showSettings ? 50 : 35,
        right: showSettings? -4 : 0,
        bottom: showSettings? -7 : 0
    };

    const SettingsLightBtnTB = ({ showSettings }) => {
        const settingsButtonImage = showSettings
            ? require('../../atom/icons/SettingsLightOnPress.png')
            : require('../../atom/icons/SettingsLight.png');

        return (
            <Image source={settingsButtonImage} style={styles.img} />
        );
    };

    const ExitLightBtnTB = ({ showSettings }) => {
        const exitButtonImage = showSettings
            ? require('../../atom/icons/ExitLightOnPress.png')
            : require('../../atom/icons/ExitLightBtn.png');

        return (
            <Image source={exitButtonImage} style={styles.img} />
        );
    };

    return (
        <View style={[styles.container, containerStyles]}>
            <View style={styles.touchIcon}>
                {showSettings === true ?
                    <View style={[styles.icons, showSettings && styles.expandedIcons]}>
                        <View style={styles.spacing}>
                            <AiLightBtnTb
                                navigate="AiToolJournal"
                            />
                        </View>
                        <DrawingLightBtnTB />
                        <PhotoLightBtnTB />
                        <TypeLightBtnTB />
                        <SpeechLightBtnTB />
                        <TouchableOpacity
                            onPress={() => setShowSettings(false)}
                            style={styles.spacing}>
                            <ExitLightBtnTB />
                        </TouchableOpacity>

                    </View>

                    :
                    <TouchableOpacity onPress={() => setShowSettings(true)}>
                        <SettingsLightBtnTB
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    touchIcon: {
        position: 'absolute'
    },
    container: {
        position: 'absolute',
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