import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Tabbar from './components/Tarbar';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ListItem, Avatar, Input} from '@rneui/themed';
import Datecom from './components/datecom';
import {getYMD} from '../../api/date';
import store from '../../store/reduxstore/index';
import {pushorder} from '../../api/order';
const PlaceOrder = ({navigation, route}) => {
  console.log(route.params);

  const {shop_title, shop_num, shop_price, shop_sn, shopdatil_title} =
    route.params;
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [adress, setadress] = useState('');
  const [date, setDate] = useState(new Date());
  console.log(route.params);
  const {id} = store.getState();

  const [open, setOpen] = useState(false);
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
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
            }}>
            <Text>
              {getYMD(date)}
              <Ionicons name="ios-chevron-forward" color="#BBBBBB" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.shopname}>
          <Text>姓名</Text>
          <TextInput
            onChangeText={text => setname(text)}
            value={name}></TextInput>
        </View>
        <View style={styles.shopname}>
          <Text>手机号</Text>
          <TextInput
            onChangeText={text => setphone(text)}
            value={phone}></TextInput>
        </View>
        <View style={styles.shopname}>
          <Text>地址</Text>
          <TextInput
            onChangeText={text => setadress(text)}
            value={adress}></TextInput>
        </View>
      </View>
      <Button
        title="提交"
        onPress={() => {
          console.log(123111);
          pushorder({
            user_id: id,
            shop_title,
            shop_price,
            date: getYMD(date),

            user_address: adress,
            shop_num,
            user_phone: phone,
            user_name: name,
          }).then(navigation.navigate('IndexHome'));
        }}></Button>
      <DatePicker
        is24hourSource="locale"
        modal
        open={open}
        date={date}
        confirmText="确定"
        cancelText="取消"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
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
    alignItems: 'center',
  },

  input: {
    width: 30,
  },
});
