import { useState, useEffect } from 'react';
import globalStyles from '../../styles/global';
import { StyleSheet, View } from 'react-native';
import { VictoryPie, VictoryLabel } from "victory-native";
import { useFonts, Lexend_400Regular } from '@expo-google-fonts/lexend';
import { getJournalEntries } from '../../firebase/firebaseService';
import { statsEmotions } from '../../data/StatsEmotionData';
import { getAuth } from 'firebase/auth';

import { ActivityIndicator } from 'react-native-paper';

const DonutChart = () => {

    const positiveColor = "#FFE5A4"
    const negativeColor = "#8CACDB"

    const [data, setData] = useState([])
    const [entries, setEntries] = useState([]);
    const [selectedSlice, setSelectedSlice] = useState(null);

    const newCategories = [];
    const countCategories = {};

    const newColors = [];
    // const colorIndex = [];
    const [finalColors, setFinalColors] = useState([])
    const [emotionData, setEmotionData] = useState(statsEmotions.emotions)

    const [loading, setLoading] = useState(true)
    const auth = getAuth()

    //run get data on page load 
    useEffect(() => {
        console.log("new log")
        const fetchJournalEntries = async () => {
            try {
                // Use the user's UID when fetching journal entries
                const username = auth.currentUser ? auth.currentUser.uid : null;
                if (username) {
                    const journalEntries = await getJournalEntries(username);
                    console.log('Journal Entries:', journalEntries);
                    setEntries(Object.values(journalEntries));
                    processJournalData(Object.values(journalEntries));
                    setLoading(false)
                    console.log(`${loading}`)
                } else {
                    console.error('User not authenticated.');
                }
            } catch (error) {
                console.error('Error fetching journal entries:', error);
                setLoading(false)
                console.log(`${loading}`)
            }
        };
        fetchJournalEntries();
    }, [auth.currentUser]);

    const processJournalData = (journalEntries) => {
        console.log("step 1")
        console.log(journalEntries)
        Object.values(journalEntries).forEach(entry => {
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
        console.log(newCategories)
        console.log(newColors)
        console.log("step 2")
        newCategories.forEach((x) => {
            countCategories[x] = (countCategories[x] || 0) + 1;
        });

        const indices = newCategories.map(emotion => newCategories.indexOf(emotion));
        const output = new Set(indices);
        const colorIndex = [...output];

        colorIndex.forEach((num) => {
            finalColors.unshift(newColors[num])
        })
        finalColors.reverse()
        console.log("step 3")

        // console.log("final colors" + finalColors) 
        console.log("step 4")
        const totalCategories = newCategories.length

        const chartData = Object.entries(countCategories).map(([keyword, count]) => ({
            x: keyword,
            y: Number(((count / totalCategories)).toFixed(2)),
        }));
        setData(chartData);
        console.log("complete")
    };

    const handleSliceClick = (event, props) => {
        setSelectedSlice(selectedSlice === props.index ? null : props.index);
    };

    //Label Font. This is connected to the app.json "font" object.
    const [fontsLoaded] = useFonts({
        Lexend_400Regular,
    });

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
