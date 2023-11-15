import { useState, useEffect } from 'react';
import globalStyles from '../../styles/global';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { VictoryPie, VictoryLabel, VictoryTheme } from "victory-native";
import { dummy } from '../../data/DummyJournalData'
//import { useFonts, Lexend_400Regular } from 'expo-font';
import { useFonts, Lexend_400Regular } from '@expo-google-fonts/lexend';

const DonutChart = () => {

    //run get data on page load
    useEffect(() => {
        getData();
    }, []);

    const [data, setData] = useState()

    const getData = async () => {
        try {
            const sentimentsArray = dummy.journals.map(journal => journal.sentiments).flat();

            if (sentimentsArray.length > 0) {

                // Looks thru all journals and count occurrences of each sentiment
                const sentimentCounts = {};
                sentimentsArray.forEach(sentiment => {
                    sentimentCounts[sentiment] = (sentimentCounts[sentiment] || 0) + 1;
                });

                // sentiments + count into array/object for pie chart
                const newData = Object.entries(sentimentCounts).map(([sentiment, count]) => ({
                    y: ((count / (sentimentsArray.length)).toFixed(2) * 100),
                    x: sentiment,
                }));
                setData(newData)

                // Example: Log the sentiment counts
                console.log(newData);
            }
        } catch (e) {
            console.log("error!")
        }
    };

    const [selectedSlice, setSelectedSlice] = useState(null);
    const colorScale = ["#96D1EA", "#F5E79D", "#9792C7", "#FFCD6C", "#FFA39F", "#91BD70"];

    const handleSliceClick = (event, props) => {
        if (selectedSlice === props.index) {
            // Reset the selected slice if it's clicked again
            setSelectedSlice(null);
        } else {
            setSelectedSlice(props.index);
        }
    };

    //Label Font. This is connected to the app.json "font" object.
    const [fontsLoaded] = useFonts({
        Lexend_400Regular,
    });

    if (!fontsLoaded) {
        return (
            console.log("font error")
        );
    }

    return (
        <View style={[styles.container, globalStyles.labelText]}>
            <VictoryPie
                data={data}
                colorScale={colorScale}
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
                }}
                labelComponent={<VictoryLabel style={{ fontFamily: 'Lexend_400Regular' }} />}


            />
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
