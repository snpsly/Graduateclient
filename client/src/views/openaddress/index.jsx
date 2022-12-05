import {View, Text, StatusBar, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {MapView, MapType, Marker} from 'react-native-amap3d';
import {AMapSdk} from 'react-native-amap3d';
import {Platform} from 'react-native';
import Tarbar from './components/Tarbar';
import store from '../../store/reduxstore';
import {BottomSheet, Button, ListItem} from '@rneui/themed';
import axios from 'axios';

const Openaddress = ({navigation}) => {
  const {Homelongitude, Homelatitude} = store.getState().addressReducer;
  const [clicklatitud, setclicklatitud] = useState(0);
  const [clicklongitude, setclicklongitude] = useState(0);
  const [address, setaddress] = useState(
    store.getState().addressReducer.address,
  );

  AMapSdk.init(
    Platform.select({
      android: '52585e3787a0b8f8e90e319f67ba0171',
      ios: '186d3464209b74effa4d8391f441f14d',
    }),
  );
  useEffect(() => {
    if (clicklatitud !== 0 && clicklongitude !== 0) {
      axios(
        'https://restapi.amap.com/v3/geocode/regeo?key=009d81ba08999e73ae651f9b63c0423c&location=' +
          clicklongitude +
          ',' +
          clicklatitud,
      ).then(res => {
        res.data.regeocode.formatted_address !== '' &&
          setaddress(res.data.regeocode.formatted_address);
      });
    }
  }, [clicklatitud, clicklongitude]);
  return (
    <View>
      <Tarbar navigation={navigation}></Tarbar>
      <MapView
        onPress={({nativeEvent}) => {
          setclicklongitude(nativeEvent.longitude);
          setclicklatitud(nativeEvent.latitude);
        }}
        style={{height: '90%', width: '100%'}}
        initialCameraPosition={{
          target: {
            latitude: Homelatitude,
            longitude: Homelongitude,
          },

          zoom: 8,
        }}>
        <Marker position={{latitude: Homelatitude, longitude: Homelongitude}} />
        {clicklatitud !== 0 && clicklongitude !== 0 ? (
          <Marker
            position={{latitude: clicklatitud, longitude: clicklongitude}}
            icon={require('../../public/images/icon.png')}
          />
        ) : (
          <></>
        )}
      </MapView>

      <View
        style={{
          width: '95%',
          position: 'absolute',
          height: 100,
          bottom: 80,
          backgroundColor: 'white',
          margin: 10,
          padding: 10,
          marginBottom: 0,
          borderRadius: 20,
        }}>
        {clicklatitud !== 0 && clicklongitude !== 0 ? (
          <Text style={styles.text1}>当前选中位置:</Text>
        ) : (
          <Text style={styles.text1}>当前位置:</Text>
        )}

        <Text style={styles.text2} ellipsizeMode={'tail'} numberOfLines={2}>
          {address}
        </Text>
        <Button
          onPress={() => {
            store.dispatch({type: 'clickmap', data: address});
            navigation.goBack();
          }}
          buttonStyle={{
            borderRadius: 5,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 10,
            marginTop: 10,
            backgroundColor: '#E36B1F',
          }}
          title="确定"
        />
      </View>
    </View>
  );
};

export default Openaddress;

const styles = StyleSheet.create({
  text: {
    margin: 10,
    marginBottom: 0,
    backgroundColor: 'white',
    height: 100,
    width: 800,
    position: 'absolute',
    bottom: 0,
    borderRadius: 30,
    padding: 10,
  },
  text1: {
    fontWeight: '300',
  },
  text2: {
    fontWeight: '800',
    fontSize: 20,
  },
});
