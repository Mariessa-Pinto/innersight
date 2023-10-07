import React, { useState } from "react";
import { Text, View, Button, Switch } from 'react-native';
import { Slider } from '@react-native-assets/slider'

export default function FontSlider() {

    const [userFontSize, setUserFontSize] = useState(12);
    const [sliderTracker, setSliderTracker] = useState(0);

const handleChange = (e, newValue) => {
    switch (newValue) {
        case 0: {
            setUserFontSize(12);
            setSliderTracker(0);
            break;
        }
        case 1: {
            setUserFontSize(14);
            setSliderTracker(1);
            break;
        }
        case 2: {
            setUserFontSize(16);
            setSliderTracker(2);
            break;
        }
        case 3: {
            setUserFontSize(18);
            setSliderTracker(3);
            break;
        }
        case 4: {
            setUserFontSize(20);
            setSliderTracker(4);
            break;
        }
        default: {
            break;
        }
    }
};

    return (
        <View>
            <Text style={{ fontSize: userFontSize }}>Font Size Slider {userFontSize} {sliderTracker}</Text>
            <Slider
                onSlidingComplete={() => handleChange()}
                key={sliderTracker}
                step={1}
                minimumValue={0}
                maximumValue={4}
            />

        </View>
    );
}