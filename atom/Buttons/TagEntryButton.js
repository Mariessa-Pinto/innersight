import globalStyles from '../../styles/global';
import { StyleSheet, Text, View, Button, Switch, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';

export default function TagEntryBtn() {

    const [showInputBoxes, setShowInputBoxes] = useState(false);
    
    const toggleInputBoxes = () => {
        setShowInputBoxes(!showInputBoxes)
    }
    const toggleInsights = () => {
        setShowInsights(!showInsights);
    };
    return (
        <>
            <View style={styles.pass}>
                <Text style={styles.textTag}>Tag Your Entry</Text>
                <Image source={require('../../atom/assets/settingicons/Arrow.png')} onPress={toggleInputBoxes} style={styles.arrow} onTouchEnd={toggleInputBoxes} />
            </View>
            {showInputBoxes ? (
                <View style={styles.inputBoxes}>
                    <View style={styles.tag}>
                        <SmallInput
                            placeholder="Add New Tag"
                        />
                        <Tag
                            text="Draws"
                        />
                    </View>
                    <View style={styles.tags}>
                        <Tag
                            text="Venting"
                        />
                        <Tag
                            text="Anger"
                        />
                        <Tag
                            text="Tired"
                        />
                    </View>
                </View>
            ) : <></>}</>

    )

}


const styles = StyleSheet.create({

    pass: {
        width: '100%',
        height: 47,
        borderRadius: 10,
        backgroundColor: '#EAEAEA',
        display: 'flex',
        flexDirection: 'row',
        gap: 130,
        alignItems: 'center',

    },
})