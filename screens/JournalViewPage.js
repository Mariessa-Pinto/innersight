import globalStyles from '../styles/global';
import { StyleSheet, View, Text } from 'react-native';
import { useContext } from 'react';
import themeContext from '../theme/themeContext';

export default function JournalViewPage({ route }) {
  const theme = useContext(themeContext);
  const { entry } = route.params;

  return (
    <View style={[globalStyles.outerContainer, { backgroundColor: theme.backgroundGreyLight }]}>
      <View style={[globalStyles.contentContainer, { backgroundColor: theme.background }]}>
        <Text>{entry.content}</Text>
        {/* Add other components to display additional entry details if needed */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Your styles here
});