import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { VictoryPie, VictoryLabel } from "victory-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DonutChart = () => {


    const [keyWords, setKeyWords] = useState([])
    const [data, setData] = useState([]);

    //get keywords from entry and set it in useState in chart format
    const getData = async () => { 
        try {
            const value = await AsyncStorage.getItem('statsKeywords');
            if (value !== null) {
                const keyWordArray = value.split(",")
                setKeyWords(keyWordArray)

                const newData = keyWords.map(keyword => ({ y: 25, x: keyword }));

                setData(newData);
                console.log(data) 

            } 
        } catch (e) {
            console.log("error!")
        }
    };

    //run get data on page load
    useEffect(() => {

        getData();
    }, []); 

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

    // Position Absolute it all lol

    // const CustomLabel = ({ datum, index }) => {
    //     const label = datum.label;

    //     return (
    //         <View 
    //         style={{ position: 'absolute', left: 100 }}>
    //             <Image source={label} style={{ width: 20, height: 20 }} />
    //         </View>
    //     );
    // };


    //One Test

    //  const CustomLabel = ({ datum, index }) => {
    //     // Array of icons
    //     const icons = [
    //         require('../../atom/icons/contentEmoji.png'),
    //         require('../../atom/icons/happyEmoji.png'),
    //         require('../../atom/icons/sadEmoji.png'),
    //         require('../../atom/icons/superHappyEmoji.png'),
    //         require('../../atom/icons/angryEmoji.png'),
    //         require('../../atom/icons/jealousEmoji.png'),
    //         // Add more icons as needed
    //     ];

    //     const icon = icons[index % icons.length];

    //     // Calculate label position
    //     const midAngle = (datum.startAngle + datum.endAngle) / 2;
    //     const iconX = Math.cos(midAngle) * 500; // Adjust the radius for icon
    //     const iconY = Math.sin(midAngle) * 290;  // Adjust the radius for icon
    //     const labelX = Math.cos(midAngle) * 70; // Adjust the radius for label
    //     const labelY = Math.sin(midAngle) * 1000;  // Adjust the radius for label

    //     return (
    //         <View style={{ position: 'absolute', left: iconX, top: iconY, flexDirection: 'row', alignItems: 'center' }}>
    //             <Image source={icon} style={{ width: 20, height: 20 }} />
    //             <Text style={{ color: 'white', fontSize: 15, marginLeft: 5, position: 'absolute', left: labelX, top: labelY }}>
    //                 {datum.x}
    //             </Text>
    //         </View>
    //     );
    // };

    return (
        <View style={styles.container}>
            <VictoryPie
                data={data}
                colorScale={colorScale}
                padAngle={1}
                innerRadius={40}
                radius={({ index }) => index === selectedSlice ? 170 : 150}
                width={350}
                height={369}
                labelComponent={<VictoryLabel />} //Use CustomLabel here to try and get the icons in
                labelRadius={({ innerRadius }) => innerRadius + 65}
                events={[{
                    target: "data",
                    eventHandlers: {
                        onPressIn: handleSliceClick,
                    },
                }]}
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
