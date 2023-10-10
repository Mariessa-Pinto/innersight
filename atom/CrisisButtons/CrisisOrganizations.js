import * as React from 'react';
import { Button } from 'react-native-paper';

const CrisisOrganizations = () => (
  <Button  mode="contained" 
  width={328} 
  height={106}
  buttonColor="#3B3E75"
  textColor='#ffffff'
  onPress={() => console.log('Pressed')}
 
  > Organizations
  </Button>
);

export default CrisisOrganizations;