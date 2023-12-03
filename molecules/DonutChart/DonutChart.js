import { useState, useEffect } from 'react';
import globalStyles from '../../styles/global';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { VictoryPie, VictoryLabel, VictoryTheme } from "victory-native";
import { dummy } from '../../data/DummyJournalData'
//import { useFonts, Lexend_400Regular } from 'expo-font';
import { useFonts, Lexend_400Regular } from '@expo-google-fonts/lexend';
import { getJournalEntries } from '../../firebase/firebaseService';
import { statsEmotions } from '../../data/StatsEmotionData';

import { ActivityIndicator, Colors } from 'react-native-paper';

const DonutChart = ({ uid }) => {

    const positiveColor = "#FFE5A4"
    const negativeColor = "#8CACDB"

    console.log("Username in donutchart: ", uid)
    const [data, setData] = useState()
    const [selectedSlice, setSelectedSlice] = useState(null);

    const newCategories = [];
    const countCategories = {};

    const newColors = [];
    const colorIndex = [];
    const [finalColors, setFinalColors] = useState([])
    const [emotionData, setEmotionData] = useState(statsEmotions.emotions)

     const [loading, setLoading] = useState()

    //run get data on page load
    useEffect(() => {
        const fetchData = async () => {
            try {
                const journals = await getJournalEntries(uid);
                console.log("Fetched journals: ", journals);
                processJournalData(journals);
            } catch (error) {
                console.error('Error fetching journal entries:', error);
            }
        };
        fetchData();
    }, [uid]);

    //loading indicator
     useEffect(() => {
        {
            finalColors.length > 0 ?
                setLoading(false)
                :
                setLoading(true)
        }
        console.log("loading" + loading)

     })



    const processJournalData = (journals) => {

        Object.values(journals).forEach(entry => {
            if (Array.isArray(entry.keywords)) {
                entry.keywords.forEach(keyword => {
                    {
                        emotionData && emotionData.map((e, index) => {
                            if (e.emotion === keyword && e.type === "negative") {
                                newCategories.unshift(e.category)
                                newColors.unshift(negativeColor)
                            } else if (e.emotion === keyword && e.type === "positive") {
                                newCategories.push(e.category)
                                newColors.push(positiveColor)
                            }
                        })
                    }
                });
            }
        })

        for (const num of newCategories) {
            countCategories[num] = countCategories[num] ?
                countCategories[num] + 1 &&
                colorIndex.push(newCategories.indexOf(num))
                :
                1;
        }

        colorIndex.shift() //adjusts for the bug that ads an extra 0 at the beginning of the index array

        console.log("color index" + colorIndex)

        colorIndex.forEach(index => {
            finalColors.push(newColors[index])
            // console.log(finalColors)
        });

        const totalCategories = newCategories.length

        const chartData = Object.entries(countCategories).map(([keyword, count]) => ({
            x: keyword,
            y: Number(((count / totalCategories)).toFixed(2)),
        }));
        setData(chartData);

        console.log(data)
    };

    //Sample VictoryPie data for testing
    // const chartData = [
    //     { x: "Cats", y: 35 },
    //     { x: "Dogs", y: 40 },
    //     { x: "Birds", y: 55 }
    // ]

    const handleSliceClick = (event, props) => {
        setSelectedSlice(selectedSlice === props.index ? null : props.index);

    };


    //Label Font. This is connected to the app.json "font" object.
    const [fontsLoaded] = useFonts({
        Lexend_400Regular,
    });

    // if (!fontsLoaded) {
    //     return (
    //         console.log("font error")
    //     );
    // }

    return (
        <View style={[styles.container, globalStyles.labelText]}>
            {
                 loading === true ?
                    <ActivityIndicator animating={true} color="#7878C1" />
                    :
                    <VictoryPie
                        data={data}
                        colorScale={finalColors}
                        padAngle={1}
                        innerRadius={40}
                        radius={({ index }) => index === selectedSlice ? 170 : 150}
                        width={350}
                        height={369}
                        labelRadius={({ innerRadius }) => innerRadius + 65}
                        events={[{
                            target: "data",
                            eventHandlers: {
                                onPressIn: handleSliceClick,
                            },

                        }]}
                        style={{
                            labels: {
                                fontFamily: 'Lexend_400Regular',
                            },
                            // data: { fill: (data) => data.datum.color } 
                        }}
                        labelComponent={<VictoryLabel style={{
                            fontFamily: 'Lexend_400Regular',
                            fontSize: 18,
                            fontWeight: 500
                        }} />}

                    />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 328,
        height: 356,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
});

export default DonutChart;
