import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tabbar from './components/Tarbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ListItem, Avatar} from '@rneui/themed';
const PlaceOrder = ({navigation, route}) => {
  console.log(route.params);
  const {shop_title, shop_num, shop_price, shop_sn, shopdatil_title} =
    route.params;
  let currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  console.log(currentDate);
  return (
    <View>
      <Tabbar navigation={navigation}></Tabbar>
      <View>
        <View style={styles.shopname}>
          <Text>{shop_title}</Text>
          <Text>
            <Ionicons name="md-logo-yen" color="#BBBBBB" />
            {shop_price}
          </Text>
        </View>
        <View style={styles.shopname}>
          <Text>预约时间</Text>
          <Text>
            <Ionicons name="md-logo-yen" color="#BBBBBB" />
            {shop_price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PlaceOrder;

const styles = StyleSheet.create({
  shopname: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderBottomColor: '#BBBBBB',
    borderBottomWidth: 0.5,
  },
});
