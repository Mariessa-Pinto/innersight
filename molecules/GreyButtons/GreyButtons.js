import { StyleSheet, View } from 'react-native';
import TopGreyButton from '../../atom/Buttons/TopGreyButton';
import MiddleGreyButton from '../../atom/Buttons/MiddleGreyButtons';
import BottomGreyButton from '../../atom/Buttons/BottomGreyButtons';
import crisisData from '../../data/CrisisData';
import { useState } from 'react';

const GreyButtons = ({ navigate }) => {
    const [data, setData] = useState(crisisData)

    return (
        <View style={styles.container}>
            {
                data && data.publications.map((i, index) => {
                    return (
                        <View style={styles.contentContainer}
                            key={index}>
                            {index == 0 && i.type === "publication" ?
                                <TopGreyButton
                                    text={i.organization}
                                    navigate="InfoandPublications"
                                    link={i.website}
                                />
                                :
                                <>
                                    {index > 0 && index <= 8 && i.type === "publication" ?
                                        <MiddleGreyButton
                                            text={i.organization}
                                            navigate="InfoandPublications"
                                            link={i.website}
                                        />
                                        :
                                        <>
                                            {index == 9 && i.type === "publication" ?
                                                <BottomGreyButton
                                                    text={i.organization}
                                                    navigate="InfoandPublications"
                                                    link={i.website}
                                                />
                                                :
                                                ""
                                            }
                                        </>
                                    }
                                </>
                            }
                        </View>
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    contentContainer: {
        width: '100%'
    }
});

export default GreyButtons;