import { StyleSheet, Text, View, Image } from 'react-native';
import Toggle from '../../atom/ToggleSwitch/Toggle';
import globalStyles from '../../styles/global';
import { useState, useContext } from 'react';
import themeContext from '../../theme/themeContext';
import fontContext from '../../theme/fontContext';
import { useNavigation } from '@react-navigation/native';

const Notifications = ({
    title,
    valueChange2,
    valueEnabled2,
    toggleType
}) => {

    const navigation = useNavigation();
    const [pressed, setPressed] = useState(false);

    const navigateTo = () => {
        navigation.navigate(props.navigate);
    }

    //Dark/Light Mode
    const theme = useContext(themeContext)

    //Font Size
    const fontTheme = useContext(fontContext)

    return (
        <View style={styles.container}>
            <View style={[styles.notification, { backgroundColor: theme.backgroundGreyLight }]}>
                <Text style={[globalStyles.labelTextLight, {
                    color: theme.color,
                    fontSize: fontTheme.fontSize
                }]}>{title}</Text>
                {toggleType === "toggle" ?
                    <>
                        <Toggle
                            valueChange={valueChange2}
                            valueEnabled={valueEnabled2} />
                    </>
                    :
                    <>
                        {toggleType === "rightArrow" ?
                            <>
                                <Image source={require('../../atom/assets/settingicons/Arrow.png')} />
                            </>
                            :
                            <>
                                {toggleType === "downArrow" ?
                                    <>
                                        <Toggle
                                            valueChange={valueChange2}
                                            valueEnabled={valueEnabled2} />
                                    </>
                                    :
                                    <Text>Error!</Text>
                                }
                            </>
                        }
                    </>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        marginBottom: 23,

    },
    notification: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 47,
        borderRadius: 10,
        paddingHorizontal: 15,
    }
});

export default Notifications;