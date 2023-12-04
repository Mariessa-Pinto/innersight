import globalStyles from '../../styles/global';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import SmallInput from '../InputBoxes/SmallInput';
import Tag from '../Tag/Tag';
import SmallBtnLightTxt from '../../atom/Buttons/SmallBtnLightTxt'

export default function TagEntryBtn() {
    const [showInputBoxes, setShowInputBoxes] = useState(false);

    const toggleInputBoxes = () => {
        setShowInputBoxes(!showInputBoxes)
    };
    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.pass}
                    onPress={toggleInputBoxes}
                    onTouchEnd={toggleInputBoxes}>
                    <Text style={globalStyles.labelText}>Tag Your Entry</Text>
                    <Image source={require('../../atom/assets/settingicons/Arrow.png')} style={styles.arrow} />
                </TouchableOpacity>
            </View>
            {showInputBoxes ? (
                <View style={styles.inputBoxes}>
                    <View style={styles.tag}>
                        <SmallInput
                            placeholder="Add New Tag"
                        />
                        <SmallBtnLightTxt
                            text="Add New Tag" />
                    </View>
                    <View style={styles.tags}>
                        <Tag
                            text="Draws"
                        />
                        <Tag
                            text="Venting"
                        />
                        <Tag
                            text="Joy"
                        />
                        <Tag
                            text="Anger"
                        />
                        <Tag
                            text="Stress"
                        />
                        <Tag
                            text="Tired"
                        />
                    </View>
                </View>
            ) : <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    btnContainer: {
        width: '100%',
        height: 47,
        borderRadius: 10,
        backgroundColor: '#EAEAEA',
    },
    pass: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    arrow: {
        width: 25,
    },
    tag: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tags: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    input: {
        height: 200,
        width: 325,
        borderColor: 'black'
    },
    inputBoxes: {
        marginBottom: 20
    }
})