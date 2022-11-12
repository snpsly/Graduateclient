import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import store from '../../store/reduxstore';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Me = ({navigation}) => {
  const {id, name} = store.getState();
  return (
    <View>
      <View style={styles.active}>
        <Ionicons name="md-person-sharp" size={100} />
        <Text>{name}</Text>
      </View>
      <Button
        title="登出"
        onPress={() => {
          navigation.navigate('Login');
        }}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  active: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Me;
