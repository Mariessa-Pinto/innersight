import { StyleSheet, Image, TouchableWithoutFeedback, Text, View } from 'react-native';
import Modal from "react-native-modal";
import { useState } from 'react';
import ExtraLargeBtnLightTxt from '../../atom/Buttons/ExtraLargeBtnLightTxt';
import GestureRecognizer from 'react-native-swipe-gestures';
import TagSettingsOverlay from '../Overlays/tagSettingsOverlay';
import ExtraLargeBtnDarkTxt from '../../atom/Buttons/ExtraLargeBtnDarkTxt';
import SelectButtonOverlay from '../Overlays/selectButtonOverlay';
import { Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

export default function EntrySettings({
    overlayType2
}) {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const [overlayType, setOverlayType] = useState()

    const [pressed, setPressed] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => { setOverlayVisible(!isOverlayVisible); setOverlayType("") }}
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
                    {overlayType2 === "entry" && !overlayType ?
                        <View style={styles.container}>
                            <View style={styles.inside}>
                                <View style={styles.line} />
                                <ExtraLargeBtnLightTxt
                                    text='Customize Entry'
                                    navigate='CustomizeEntry'
                                />
                                <ExtraLargeBtnLightTxt
                                    text='Add Tags'
                                    navigate='TagManager'
                                />
                                <TouchableWithoutFeedback
                                    onPress={() => setOverlayType("deleteEntry")}
                                >
                                    <View style={[styles.button, pressed && styles.buttonPressed]}>
                                        <Text style={styles.text}>Delete Entry</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        :
                        <>
                            {overlayType2 === "entry" && overlayType === "deleteEntry" ?
                                <View style={styles.container}>
                                    <View style={styles.inside}>
                                        <View style={styles.line} />
                                        <Text>Are you sure you want to delete this entry?</Text>
                                        <View style={styles.confirmButtons}>
                                            <TouchableWithoutFeedback
                                                onPress={() => setOverlayType("confirmDeleteOverlay")}>
                                                <View style={[styles.deleteConfirmButtonDark, pressed && styles.deleteButtonPressed]}>
                                                    <Text style={styles.deleteTextLight}>Yes, delete it</Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                            <TouchableWithoutFeedback
                                                onPress={() => setOverlayVisible(!isOverlayVisible)}>
                                                <View style={[styles.deleteConfirmButtonLight, pressed && styles.deleteButtonPressed]}>
                                                    <Text style={styles.text}>Cancel</Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        </View>
                                    </View>
                                </View>
                                :
                                <>
                                    {
                                        overlayType2 === "entry" && overlayType === "confirmDeleteOverlay" ?
                                            <View style={styles.container}>
                                                <View style={styles.inside}>
                                                    <View style={styles.line}></View>
                                                    <Text>Your journal entry has been deleted.</Text>
                                                    <ExtraLargeBtnLightTxt
                                                        text='Go to Entry Overview'
                                                        navigate='Entries'
                                                    />
                                                </View>
                                            </View>
                                            :
                                            <>
                                                {overlayType2 === "entriesList" && !overlayType ?
                                                    <View style={styles.container}>
                                                        <View style={styles.inside}>
                                                            <View style={styles.line}></View>
                                                            <TouchableWithoutFeedback
                                                                onPress={() => setOverlayType("manageSelect")}
                                                            >
                                                                <View style={[styles.confirmButtonDark, pressed && styles.buttonPressed]}>
                                                                    <Text style={styles.deleteTextLight}>Select Multiple Entries</Text>
                                                                </View>
                                                            </TouchableWithoutFeedback>
                                                            <ExtraLargeBtnDarkTxt
                                                                text='Manage Tags'
                                                                navigate='TagManager'
                                                            />
                                                        </View>
                                                    </View>
                                                    :
                                                    <>
                                                        {
                                                            overlayType2 === "entriesList" && overlayType === "manageSelect" ?
                                                                <SelectButtonOverlay />
                                                                :
                                                                <>
                                                                    {overlayType2 === "tagsList" && !overlayType ?
                                                                        <TagSettingsOverlay />
                                                                        :
                                                                        <Text>Error!</Text>
                                                                    }
                                                                </>
                                                        }
                                                    </>
                                                }
                                            </>
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
    },
    container: {
        width: windowWidth,
        height: 'auto',
        paddingBottom: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#F2F2FD',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 30,
        position: 'absolute',
        bottom: -20,
        left: -20
    },
    inside: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
        marginTop: 10
    },
    line: {
        width: 65,
        height: 3,
        backgroundColor: '#88898C',
        marginBottom: 10
    },
    button: {
        width: 228,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#C5C7F7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
    },
    buttonPressed: {
        backgroundColor: '#D5D7FF',
    },
    text: {
        color: '#3E3F42',
        fontSize: 14,
    },
    deleteTextLight: {
        color: '#FDFDFD',
    },
    deleteConfirmButtonDark: {
        width: 130,
        height: 38,
        borderRadius: 10,
        backgroundColor: '#6164C3',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
    },
    deleteConfirmButtonLight: {
        width: 130,
        height: 38,
        borderRadius: 10,
        backgroundColor: '#C5C7F7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
    },
    confirmButtons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmButtonDark: {
        width: 228,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#6164C3',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7,
    },
})