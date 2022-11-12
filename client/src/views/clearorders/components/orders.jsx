import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getmyclearorders, pushclearorders} from '../../../api/clear';
import store from '../../../store/reduxstore';
import {useIsFocused} from '@react-navigation/native';
import {Card} from '@rneui/themed';
import {Button} from '@rneui/base';

const Orders = () => {
  const isFocused = useIsFocused();
  const [ordersdata, setOrdersdata] = useState([]);
  const {id} = store.getState();
  const [add, setadd] = useState(0);
  useEffect(() => {
    getmyclearorders(id).then(res => {
      setOrdersdata(res.data);
      console.log(res.data);
    });
  }, [isFocused, add]);
  return (
    <FlatList
      data={ordersdata}
      renderItem={({item}) => {
        return (
          <Card>
            <Text>预约项目：{item.shop_title}</Text>
            <Text>面积：{item.shop_num}</Text>
            <Text>价格：{item.shop_price}</Text>
            <Text>预约时间：{item.date}</Text>
            <Text>姓名：{item.user_name}</Text>
            <Text>手机号：{item.user_phone}</Text>
            <View>
              <Text>地址：{item.user_address}</Text>
              {item.order_state === 1 ? (
                <Button
                  title="已接单，点击进行订单"
                  onPress={() => {
                    pushclearorders({
                      id: item.id,
                      clean_id: id,
                      updateorder: 2,
                    }).then(res => {
                      setadd(add + 1);
                    });
                  }}></Button>
              ) : item.order_state === 2 ? (
                <Button
                  title="订单进行中点击完成"
                  onPress={() => {
                    pushclearorders({
                      id: item.id,
                      clean_id: id,
                      updateorder: 3,
                    }).then(res => {
                      setadd(add + 1);
                    });
                  }}></Button>
              ) : (
                <Button title="订单已完成" onPress={() => {}}></Button>
              )}
            </View>
          </Card>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default Orders;

const styles = StyleSheet.create({});
