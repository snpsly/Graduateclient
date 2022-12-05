import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {View, Text, StyleSheet} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import {init, Geolocation} from 'react-native-amap-geolocation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {useEffect} from 'react';
import store from '../../../store/reduxstore';

const SwitchComponent = () => {
  const [longitude, setlongitude] = useState(0);
  const [latitude, setlatitude] = useState(0);
  const [address, setaddress] = useState('定位中....');
  const abc = async () => {
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ]);

    await init({
      android: '52585e3787a0b8f8e90e319f67ba0171',
    });

    Geolocation.getCurrentPosition(({coords}) => {
      if (coords.longitude !== 0) {
        setlongitude(coords.longitude), //经度
          setlatitude(coords.latitude);
      }
    });
  };
  abc();
  useEffect(() => {
    if (longitude !== 0 && latitude !== 0)
      axios(
        'https://restapi.amap.com/v3/geocode/regeo?key=009d81ba08999e73ae651f9b63c0423c&location=' +
          longitude +
          ',' +
          latitude,
      ).then(res => {
        store.dispatch({
          type: 'ADDhomeaddress',
          data: {
            longitude,
            latitude,
            address: res.data.regeocode.formatted_address,
          },
        });
        setaddress(res.data.regeocode.formatted_address);
      });
  }, [longitude, latitude]);

  return (
    <View style={styles.view}>
      <Ionicons
        name="md-location-sharp"
        style={styles.icon}
        size={20}
        color="white"
      />
      <Text style={styles.font} ellipsizeMode={'tail'} numberOfLines={1}>
        {address}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFCF07',
    padding: 10,
  },
  font: {
    fontSize: 20,
    color: 'white',
  },
});

export default SwitchComponent;
