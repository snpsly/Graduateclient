import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tabbar from './components/Tarbar';
const PlaceOrder = () => {
  return (
    <View>
      <Tabbar navigation={navigation}></Tabbar>
      <Text>PlaceOrder</Text>
    </View>
  );
};

export default PlaceOrder;

const styles = StyleSheet.create({});
