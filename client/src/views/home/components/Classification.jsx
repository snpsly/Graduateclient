import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text, Card, Button, Icon} from '@rneui/themed';
import {getCommodity} from '../../../api/home';
import {useEffect} from 'react';
import {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useIsFocused} from '@react-navigation/native';

const Cards = props => {
  const isFocused = useIsFocused();
  const [base64Image, setBase64Image] = useState();
  const [CommodityData, setCommodityData] = useState([]);
  useEffect(() => {
    getCommodity().then(function (response) {
      // setBase64Image(response.data.product_url);
      setCommodityData(response.data);
    });
  }, [isFocused]);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {CommodityData.map(item => {
            return (
              <TouchableOpacity
                key={item.shop_sn}
                onPress={() => {
                  props.navigation.navigate('Detail', {
                    shop_sn: item.shop_sn,
                    shop_title: item.shop_title,
                    shop_stars: item.shop_stars,
                    shop_product_url: item.product_url,
                  });
                }}>
                <Card>
                  <View style={styles.tabstyle}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: item.product_url,
                      }}
                    />
                    <View style={styles.rightcon}>
                      <Text style={styles.tabfontstyle}>{item.shop_title}</Text>
                      <View style={styles.starstyle}>
                        {(function () {
                          if (item.shop_stars !== 0) {
                            const items = [];
                            for (let i = 0; i < item.shop_stars; i++) {
                              items.push(
                                <Ionicons
                                  name="flame-sharp"
                                  color="#EC6B3A"
                                  key={i}
                                />,
                              );
                            }
                            return items;
                          }
                        })()}
                        {(function () {
                          if (5 - item.shop_stars !== 0) {
                            const items = [];
                            for (let i = 0; i < 5 - item.shop_stars; i++) {
                              items.push(
                                <Ionicons
                                  name="flame-sharp"
                                  color="#E5E5E5"
                                  key={i + 5}
                                />,
                              );
                            }
                            return items;
                          }
                        })()}
                      </View>
                      <Text>
                        <Ionicons name="happy-outline" color="#F9C886" />
                        {item.shop_evaluate}
                      </Text>
                      {/* <Text>
                        <Ionicons name="md-thumbs-up" color="#F9C886" />
                        {item.shop_descript}
                      </Text>
                      <Text>
                        <Ionicons name="md-logo-yen" color="#E36B1F" />
                        {item.shop_price}
                      </Text>
                      <Text>
                        <Ionicons name="md-thumbs-up" color="#F9C886" />
                        {item.shop_descript1}
                      </Text>
                      <Text>
                        <Ionicons name="md-logo-yen" color="#E36B1F" />
                        {item.shop_price1}
                      </Text> */}
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.bottom}></View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    marginBottom: 6,
  },
  image: {
    width: 51,
    height: 51,
    resizeMode: 'contain',
  },
  rightcon: {
    marginLeft: 10,
  },
  tabstyle: {
    flexDirection: 'row',
  },
  tabfontstyle: {
    fontWeight: '900',
    fontSize: 16,
  },
  starstyle: {
    flexDirection: 'row',
  },
  bottom: {
    height: 80,
  },
});

export default Cards;
