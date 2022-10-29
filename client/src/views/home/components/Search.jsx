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
        placeholder="洗衣"
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginLeft: 40,
  },
});

export default SwitchComponent;
