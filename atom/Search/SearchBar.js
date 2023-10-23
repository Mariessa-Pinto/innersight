import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native'
import { useState } from 'react';
import searchIcon from '../icons/searchIcon';

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
      icon={searchIcon}
    />
  );
};


const styles = StyleSheet.create({
    bar: {
      width: '100%',
      height: 40,
      display: 'flex',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: '#FDFDFD',
      borderWidth: 1,
      borderColor: '#88898C',
    },
    input: {
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize: 13,
        height: '100%',
        paddingBottom: 18
    }
  });
export default SearchBar;