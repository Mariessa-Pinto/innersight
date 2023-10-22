import { StyleSheet, View, Text } from 'react-native';

const PurpleBackground = () => (
  <View style={styles.outerContainer}>
    <View style={styles.container}>
    </View>
  </View>
);

export default PurpleBackground;

const styles = StyleSheet.create({
  container: {
    width: 410,
    height: 175,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#F2F2FD',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -200 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 30,
  },
  outerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  }

});