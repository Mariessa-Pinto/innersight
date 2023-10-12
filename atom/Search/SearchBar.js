import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
    style={styles.bar}
      placeholder="Search by Title or Tag"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};


const styles = StyleSheet.create({
    bar: {
      height: 328,
      height: 40,
      display: 'flex',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
export default SearchBar;