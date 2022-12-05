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
import {getYMD, changeTimes, timestampToTime} from '../../api/date';
import store from '../../store/reduxstore/index';
import {pushorder} from '../../api/order';
import {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
const PlaceOrder = ({navigation, route}) => {
  const {
    shop_title,
    shop_num,
    shop_price,
    shop_sn,
    shopdatil_title,
    shop_date,
  } = route.params;
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [adress, setadress] = useState('');
  const [date, setDate] = useState(new Date());
  const isFocused = useIsFocused();
  const {id} = store.getState().userReducer;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    store.dispatch({type: 'clickmap', data: ''});
  }, []);
  useEffect(() => {
    setadress(store.getState().addressReducer.clickaddress);
  }, [isFocused]);
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
              console.log(date);
            }}>
            <Text>
              {getYMD(date)}
              <Ionicons name="ios-chevron-forward" color="#BBBBBB" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.shopname}>
          <Text>花费时间</Text>
          <Text>{shop_date}小时</Text>
        </View>
        <View style={styles.shopname}>
          <Text>结束时间</Text>
          <Text>
            {timestampToTime(changeTimes(getYMD(date)) + shop_date * 60 * 60)}
          </Text>
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
            onChangeText={text => {
              setphone(text);
            }}
            value={phone}></TextInput>
        </View>
        <View style={styles.shopname}>
          <Text>地址</Text>
          <TextInput
            onChangeText={text => setadress(text)}
            value={adress}></TextInput>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Openaddress');
            }}>
            <Ionicons name="md-location-sharp" color="#BBBBBB" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <Button
        title="提交"
        onPress={() => {
          pushorder({
            user_id: id,
            shop_title,
            shop_price,
            date: changeTimes(getYMD(date)),
            date_time: shop_date,
            date_pause: changeTimes(getYMD(date)) + shop_date * 60 * 60,
            user_address: adress,
            shop_num,
            user_phone: phone,
            user_name: name,
            clean_name: '',
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
