import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getclearorders, pushclearorders} from '../../../api/clear';
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
    getclearorders().then(res => {
      setOrdersdata(res.data);
    });
  }, [isFocused, add]);
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
            <View>
              <Text>地址：{item.user_address}</Text>
              <Button
                title="接单"
                onPress={() => {
                  pushclearorders({
                    id: item.id,
                    clean_id: id,
                    updateorder: 1,
                  }).then(res => {
                    setadd(add + 1);
                  });
                }}></Button>
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
