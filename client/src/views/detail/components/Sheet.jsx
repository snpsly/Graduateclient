import React, {useState, useImperativeHandle, useContext} from 'react';
import {BottomSheet, Button, ListItem} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, Card, Icon} from '@rneui/themed';
import {useEffect} from 'react';
import TestContext from '../../../store/context/index';
const BottomSheetComponent = props => {
  const [isVisible, setIsVisible] = useState(false);
  const [shop_datil, setshopdatil] = useState({});
  const ctx = useContext(TestContext);
  useImperativeHandle(props.open, () => {
    return {
      setIsVisible,
      setshopdatil,
    };
  });
  return (
    <View>
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <Card>
          <Card.Title>{shop_datil.shop_title}</Card.Title>

          <Card.Divider />
          <View>
            <Text style={{marginBottom: 10}}>
              服务名称 {shop_datil.shopdatil_title}
            </Text>
            <Text style={{marginBottom: 10}}>
              服务面积 {shop_datil.shop_num}
            </Text>
            <Text style={{marginBottom: 10}}>
              <Text style={{color: '#000000'}}>服务价格 </Text>

              {shop_datil.shop_price}
            </Text>
            <Text style={{marginBottom: 10}}>
              <Text style={{color: '#000000'}}>时间 </Text>
              {shop_datil.shop_date}小时
            </Text>
          </View>

          <Button
            onPress={() => {
              ctx.navigate('PlaceOrder', {...shop_datil}), setIsVisible(false);
            }}
            buttonStyle={{
              borderRadius: 5,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 10,
              backgroundColor: '#E36B1F',
            }}
            title="立即购买"
          />
          <Button
            onPress={() => setIsVisible(false)}
            buttonStyle={{
              borderRadius: 5,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: 'rgba(255, 193, 7, 1)',
            }}
            title="取消"
          />
        </Card>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default BottomSheetComponent;
