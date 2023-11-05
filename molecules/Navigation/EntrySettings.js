import { StyleSheet, Image, TouchableWithoutFeedback, Text, } from 'react-native';
import Modal from "react-native-modal";
import { useState } from 'react';
import entrySettingsOverlay from '../Overlays/entrySettingsOverlay';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function EntrySettings() {

    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const OverlayContent = entrySettingsOverlay

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
                    directionalOffsetThreshold={21}
                >
                    <OverlayContent />

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