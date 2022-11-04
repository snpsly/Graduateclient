import {View, Text, Button, Image, StyleSheet} from 'react-native';
import React from 'react';
import {getDetailPicture} from '../../api/detail';
import Tabbar from './components/Tarbar';
import Starts from './components/Starts';
import ShopDatil from './components/Shopdatil';
import TestContext from '../../store/context/index';
const Detail = ({navigation, route}) => {
  const {shop_sn, shop_title, shop_stars, shop_product_url} = route.params;
  return (
    <TestContext.Provider value={navigation}>
      <View>
        <Tabbar navigation={navigation}></Tabbar>
        <Image
          style={styles.image}
          source={{
            uri: shop_product_url,
          }}
        />
        <View style={styles.titlemod}>
          <Text style={styles.titlefont}>{shop_title}</Text>

          <Starts shop_stars={shop_stars}></Starts>
          <Text style={styles.tip}>保洁清洗 周一至周日 06:00-22:00</Text>
          <ShopDatil shop={{shop_title, shop_sn}}></ShopDatil>
        </View>
      </View>
    </TestContext.Provider>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 250,
  },
  titlefont: {
    fontSize: 20,
    fontWeight: '700',
  },
  titlemod: {
    marginTop: 10,
    marginLeft: 10,
  },
  tip: {
    fontSize: 15,
  },
});

export default Detail;
