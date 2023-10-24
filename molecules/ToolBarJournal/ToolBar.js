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
    };

    const containerStyles = {
        height: showSettings ? 275 : 40,
       
    };

    return(
      
        <View style={[styles.container, containerStyles]}>
            <TouchableOpacity onPress={toggleSettings}>
           <SettingsLightBtnTB showSettings={showSettings}
           />
           </TouchableOpacity>
            <View style={[styles.icons, showSettings && styles.expandedIcons]}>
             {showSettings && (
            <>
              <AiLightBtnTb 
              navigate="AiToolJournal"
              />
              <DrawingLightBtnTB />
              <PhotoLightBtnTB/>
              <TypeLightBtnTB/>
              <SpeechLightBtnTB/>
              <ExitLightBtnTB />
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
    container: {
        width: 40,
        borderRadius: 30,
        backgroundColor: '#DDDDDD',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons: {
        position: 'absolute',
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
        top: -125
    },
    img: {
        width: 40,
        height: 40
    }
    
});
export default ToolBar;