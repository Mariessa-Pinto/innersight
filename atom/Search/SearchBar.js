import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native'

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
    style={styles.bar}
      placeholder={props.placeholder}
      placeholderTextColor={'#3E3F42'}
      onChangeText={onChangeSearch}
      value={searchQuery}
      inputStyle={styles.input}
    />
  );
};


const styles = StyleSheet.create({
    bar: {
      height: 328,
      height: 40,
      display: 'flex',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FDFDFD',
      borderWidth: 1,
      borderColor: '#88898C'
    },
    input: {
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize: 13,
        paddingLeft: 5,
        height: '100%'
    }
  });
export default SearchBar;