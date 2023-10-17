import * as React from 'react';
import { ToggleButton } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'

const JournalToggle = () => {
  const [value, setValue] = React.useState('left');

  return (
    <ToggleButton.Row style={styles.container} onValueChange={value => setValue(value)} value={value}>
      <ToggleButton style={styles.left} type="left" value="left"> Left </ToggleButton>
      <ToggleButton style={styles.right} icon="format-align-right" value="right" />
    </ToggleButton.Row>
  );
};

const styles = StyleSheet.create({
  left: {
    width: 100,
    height: 40,
    borderStyle: 'none',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'relative',
    zIndex: 2,
    color: 'black'
  },
  right: {
      width: 100,
    height: 40,
    borderStyle: 'none',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    zIndex: 2
  },
  container: {
    backgroundColor: 'grey',
    width: 300,
    height: 60,
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    gap: 30,
    zIndex: 0
  }
  
})

export default JournalToggle;