import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Search from './components/Search';
import Classification from './components/Classification';
const Home = () => {
  return (
    <View>
      <Search></Search>
      <Classification></Classification>
    </View>
  );
};

export default Home;
