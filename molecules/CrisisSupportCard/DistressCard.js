import { StyleSheet, View } from 'react-native';
import CrisisCardBtn from '../../atom/CrisisCardButton/CrisisCardBtn'
import crisisData from '../../data/CrisisData';
import { useState } from 'react';

const DistressCard = () => {
    const [data, setData] = useState(crisisData)

    return (
        <View style={styles.container}>
            {data && data.resources.map((i, index) => {
                return (
                    <>
                        {i.type === "distress" ?
                            <View
                                key={index}
                                style={styles.cardContainer}>
                                <CrisisCardBtn
                                    headerText={i.organization}
                                    numText={i.phone}
                                    text={i.location}
                                    link={i.location}
                                />
                            </View>
                            :
                            ""
                        }
                    </>
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 7,
        marginTop: 40
    },
    test: {
        backgroundColor: 'pink',
        height: 'auto'
    }
});

export default DistressCard;