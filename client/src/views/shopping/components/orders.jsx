import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getorders} from '../../../api/order';
import store from '../../../store/reduxstore';
import {useIsFocused} from '@react-navigation/native';
import {Card} from '@rneui/themed';
const Orders = () => {
  const isFocused = useIsFocused();
  const [ordersdata, setOrdersdata] = useState([]);
  useEffect(() => {
    getorders(store.getState().id).then(res => {
      setOrdersdata(res.data);
    });
  }, [isFocused]);
  return (
    <FlatList
      data={ordersdata}
      renderItem={({item}) => {
        return (
          <Card key={item.id}>
            <Text>预约项目：{item.shop_title}</Text>
            <Text>面积：{item.shop_num}</Text>
            <Text>价格：{item.shop_price}</Text>
            <Text>预约时间：{item.date}</Text>
            <Text>姓名：{item.user_name}</Text>
            <Text>手机号：{item.user_phone}</Text>
            <Text>地址：{item.user_address}</Text>
            {item.order_state === 0 ? (
              <Text>订单状态：未有保洁接单</Text>
            ) : item.order_state === 1 ? (
              <Text>订单状态：保洁已接单，等待上门</Text>
            ) : item.order_state === 2 ? (
              <Text>订单状态：进行中</Text>
            ) : (
              <Text>订单状态：已完成</Text>
            )}
          </Card>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default Orders;

const styles = StyleSheet.create({});
