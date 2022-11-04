import {View, Text, StatusBar, Button} from 'react-native';
import React from 'react';

const Me = ({navigation}) => {
  return (
    <View>
      <Text>Me</Text>
      <Button
        title="登出"
        onPress={() => {
          navigation.navigate('Login');
        }}></Button>
    </View>
  );
};

export default Me;
