import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getorders, closeorder} from '../../../api/order';
import store from '../../../store/reduxstore';
import {useIsFocused} from '@react-navigation/native';
import {Card} from '@rneui/themed';
import {timestampToTime} from '../../../api/date';
import {Button} from '@rneui/base';
const Orders = () => {
  const isFocused = useIsFocused();
  const [ordersdata, setOrdersdata] = useState([]);
  useEffect(() => {
    getorders(store.getState().userReducer.id).then(res => {
      setOrdersdata(res.data);
    });
  }, [isFocused]);
  return (
    <FlatList
      data={ordersdata}
      renderItem={({item}) => {
        return (
          <Card key={item.id}>
            <View style={styles.but}>
              <Text>预约项目：{item.shop_title}</Text>
              {item.order_state !== 999 &&
              item.order_state !== 2 &&
              item.order_state !== 3 ? (
                <Button
                  title="取消订单"
                  onPress={() => {
                    closeorder(item.id);
                  }}></Button>
              ) : (
                <></>
              )}
            </View>

            <Text>面积：{item.shop_num}</Text>
            <Text>价格：{item.shop_price}</Text>
            <Text>预约时间：{timestampToTime(item.date)}</Text>
            <Text>花费时间：{item.date_time}</Text>
            <Text>预计结束时间：{timestampToTime(item.date_pause)}</Text>
            <Text>姓名：{item.user_name}</Text>
            <Text>手机号：{item.user_phone}</Text>
            <Text>地址：{item.user_address}</Text>
            <Text>保洁员：{item.clean_name}</Text>
            {item.order_state === 0 ? (
              <Text>订单状态：未分配订单</Text>
            ) : item.order_state === 1 ? (
              <Text>订单状态：已分配订单，等待上门</Text>
            ) : item.order_state === 2 ? (
              <Text>订单状态：进行中</Text>
            ) : item.order_state === 999 ? (
              <Text>订单状态：已取消</Text>
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

const styles = StyleSheet.create({
  but: {
    flexDirection: 'row',
  },
});
