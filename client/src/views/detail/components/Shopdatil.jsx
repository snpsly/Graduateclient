import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getDetailShop} from '../../../api/detail';
import {useEffect} from 'react';
import {useState} from 'react';
import Sheet from './Sheet';
const ShopDatil = props => {
  const [shopdata, setshopdata] = useState([]);
  let childref = React.createRef();
  useEffect(() => {
    getDetailShop(props.shop.shop_sn).then(res => {
      setshopdata(res.data);
    });
  }, []);
  return (
    <View>
      <View style={styles.top}>
        <View style={styles.left}>
          <Ionicons name="flame-sharp" color="#EC6B3A" size={20} />
          <Text>促销</Text>
        </View>
        <View style={styles.right}>
          <Ionicons
            name="md-checkmark-circle-outline"
            color="#EC6B3A"
            size={20}
          />
          <Text>在线预约</Text>
          <Ionicons
            name="md-checkmark-circle-outline"
            color="#EC6B3A"
            size={20}
          />
          <Text>准时服务</Text>
          <Ionicons
            name="md-checkmark-circle-outline"
            color="#EC6B3A"
            size={20}
          />
          <Text>立刻上门</Text>
        </View>
      </View>

      {shopdata.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              childref.current.setIsVisible(true);
              childref.current.setshopdatil({
                ...props.shop,
                shopdatil_title: item.shop_title,
                shop_num: item.shop_num,
                shop_price: item.shop_price,
              });
            }}>
            <View style={styles.datil}>
              <Image
                style={styles.image}
                source={{
                  uri: `http://10.0.2.2:3000/sn01/${props.shop.shop_sn}.jpg`,
                }}
              />
              <View style={styles.datilfont}>
                <Text style={styles.deailtitlefont}>{item.shop_title}</Text>
                <Text>{item.shop_num}</Text>
                <Text style={styles.fontcolor}>
                  <Ionicons name="md-logo-yen" color="#E36B1F" />
                  {item.shop_price}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
      <Sheet open={childref}></Sheet>
    </View>
  );
};

export default ShopDatil;

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
  },
  datil: {
    flexDirection: 'row',
  },
  datilfont: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  deailtitlefont: {
    fontWeight: '600',
    fontSize: 15,
  },
  fontcolor: {
    color: '#E36B1F',
  },
});
