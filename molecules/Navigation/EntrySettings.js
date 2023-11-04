import { StyleSheet, View, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';
import entrySettingsOverlay from '../Overlays/entrySettingsOverlay';

export default function EntrySettings() {

    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    };

    const OverlayContent = entrySettingsOverlay

    const [pressed, setPressed] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback
                onPress={toggleOverlay}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}>
                <Image
                    source={require('../../atom/icons/SettingsCircle.png')}
                    style={styles.settingsButton}
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={toggleOverlay}>
                <View style={{ flex: 1 }}>
                    <Modal
                        visible={isOverlayVisible}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={toggleOverlay}
                    >
                        <OverlayContent />
                    </Modal>
                </View>
            </TouchableWithoutFeedback>
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
})