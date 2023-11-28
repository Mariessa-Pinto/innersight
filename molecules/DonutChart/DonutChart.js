import { useState, useEffect } from 'react';
import globalStyles from '../../styles/global';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { VictoryPie, VictoryLabel, VictoryTheme } from "victory-native";
import { dummy } from '../../data/DummyJournalData'
//import { useFonts, Lexend_400Regular } from 'expo-font';
import { useFonts, Lexend_400Regular } from '@expo-google-fonts/lexend';
import { getJournalEntries } from '../../firebase/firebaseService';

const DonutChart = ({ username }) => {
    console.log("Username in donutchart: ", username)
    const [data, setData] = useState()
    const [selectedSlice, setSelectedSlice] = useState(null);
    const colorScale = ["#96D1EA", "#F5E79D", "#9792C7", "#FFCD6C", "#FFA39F", "#91BD70"];


    //run get data on page load
    useEffect(() => {
        const fetchData = async () => {
            const username = 'anika'
            try {
                const journals = await getJournalEntries(username);
                console.log("Fetched journals: ", journals);
                processJournalData(journals);
            } catch (error) {
                console.error('Error fetching journal entries:', error);
            }
        };
        fetchData();
    }, [username]);

    const processJournalData = (journals) => {
        let keywordCounts = {};
        let totalKeywords = 0;

        Object.values(journals).forEach(entry => {
            if(Array.isArray(entry.keywords)) {
            entry.keywords.forEach(keyword => {
                keywordCounts[keyword] = (keywordCounts[keyword] || 0) + 1;
                totalKeywords++;
            });
        }

        entry.sentis?.forEach(senti => {
            keywordCounts[senti] = (keywordCounts[senti] || 0) + 1;
            totalKeywords++;
        })
        });
        const chartData = Object.entries(keywordCounts).map(([keyword, count]) => ({
            x: keyword,
            y: (count / totalKeywords * 100).toFixed(2)
        }));
        setData(chartData);
    }

    const handleSliceClick = (event, props) => {
        setSelectedSlice(selectedSlice === props.index ? null : props.index);
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
