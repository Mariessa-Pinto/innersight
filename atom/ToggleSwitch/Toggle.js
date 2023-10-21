import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
        <View style={[styles.switchContainer, isEnabled && styles.switchContainerActive]}>
      <Switch
        trackColor={{false: 'transparent', true: 'transparent'}}
        thumbColor={isEnabled ? '#FDFDFD' : '#FDFDFD'}
        onValueChange={toggleSwitch}
        value={isEnabled}
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