import * as React from 'react';
import { Button } from 'react-native-paper';

const RecommendationButtons = () => (
  <Button  mode="contained" 
  width={328} 
  height={106}
  buttonColor="#3B3E75"
  textColor='#ffffff'
  onPress={() => console.log('Pressed')}
 
  > Recommendation Type
  </Button>
);

export default RecommendationButtons;
