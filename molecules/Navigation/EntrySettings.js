import { StyleSheet, Image, TouchableWithoutFeedback, Text, } from 'react-native';
import Modal from "react-native-modal";
import { useState } from 'react';
import EntrySettingsOverlay from '../Overlays/entrySettingsOverlay';
import SettingsButtonOverlay from '../Overlays/settingsButtonOverlay';
import GestureRecognizer from 'react-native-swipe-gestures';
import TagSettingsOverlay from '../Overlays/tagSettingsOverlay';

export default function EntrySettings({
    overlayType2
}) {

    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const [pressed, setPressed] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => setOverlayVisible(!isOverlayVisible)}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
            >
                <Image
                    source={require('../../atom/icons/SettingsCircle.png')}
                    style={styles.settingsButton}
                />
            </TouchableWithoutFeedback>

            <GestureRecognizer
                style={{ flex: 1 }}
                onSwipeDown={() => setOverlayVisible(false)}
            >
                <Modal
                    isVisible={isOverlayVisible}
                    onBackdropPress={() => setOverlayVisible(false)}
                    directionalOffsetThreshold={20}
                >
                    {overlayType2 === "entry" ?
                        <EntrySettingsOverlay />
                        :
                        <>
                            {overlayType2 === "entriesList" ?
                                <SettingsButtonOverlay />
                                :
                                <>
                                    {overlayType2 === "tagsList" ?
                                        <TagSettingsOverlay/>
                                        :
                                        <Text>Error!</Text>
                                    }
                                </>
                            }
                        </>
                    }

                </Modal>
            </GestureRecognizer>



        </>
    )
}

const styles = StyleSheet.create({
    settingsButton: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 0,
        top: 20
    },
    test: {
        height: 500,
        width: '100%',
        backgroundColor: "pink"
    }
})