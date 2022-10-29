import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {View, Text, StyleSheet} from 'react-native';

const SwitchComponent = () => {
  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        style={styles.searchbar}
        placeholder="洗衣"
        onChangeText={updateSearch}
        value={search}
        containerStyle={{
          backgroundColor: '#FFCF07',
          margin: 0,

          borderWidth: 0, //no effect
          shadowColor: 'white', //no effect
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
        }}
        inputContainerStyle={{backgroundColor: 'white', margin: 0}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
});

export default SwitchComponent;
