import { useState } from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const Toggle = ({
  valueChange,
  valueEnabled, 
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
  setIsEnabled((previousState) => {
    const newState = !previousState;
    onToggle(newState);
    return newState;
  });
  };

  

  return (
    <View style={styles.container}>
        <View style={[styles.switchContainer, valueEnabled && styles.switchContainerActive]}>
      <Switch
        trackColor={{false: 'transparent', true: 'transparent'}}
        thumbColor={valueEnabled ? '#FDFDFD' : '#FDFDFD'}
        onValueChange={valueChange}
        value={valueEnabled}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContainer: {
    backgroundColor: '#88898C',
    width: 50,
    height: 26,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchContainerActive: {
    backgroundColor: '#46C344'
  }
});

export default Toggle;
