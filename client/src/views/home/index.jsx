import {View, Text, StatusBar, Button} from 'react-native';
import React from 'react';
import Search from './components/Search';
import Classification from './components/Classification';
import store from '../../store/reduxstore';

const Home = ({route, navigation}) => {
  return (
    <View>
      <Search></Search>
      <Classification navigation={navigation}></Classification>
    </View>
  );
};

export default Home;
