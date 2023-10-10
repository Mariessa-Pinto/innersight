import * as React from 'react';
import { Button } from 'react-native-paper';

const CrisisInfo = () => (
  <Button  mode="contained" 
  width={158} 
  height={150}
  buttonColor="#3B3E75"
  textColor='#ffffff'
  onPress={() => console.log('Pressed')}
 
  > Crisis & Information Lines
  </Button>
);

export default CrisisInfo;